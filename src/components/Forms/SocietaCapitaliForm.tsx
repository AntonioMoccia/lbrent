"use client";
import React, { useState } from "react";
import { useForm, useWatch } from "react-hook-form";

import { TextField, UploadFile } from "./Fields";
import { onChangeFileUpload } from "@/lib/onChageFileUpload";
import { UploadValidator } from "@/lib/uploadValidator";
import { useToast } from "../toast/use-toast";
import axios from "axios";
import { FaCheckCircle } from "react-icons/fa";
import { LuLoader2 } from "react-icons/lu";
import DettaglioNoleggio from "./DettaglioNoleggio";

function SocietaCapitaliForm() {
  const [loading, setLoading] = useState(false);

  const { toast } = useToast();
  const form = useForm({
    mode: "onChange",
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    trigger,
    control,
    getValues,
  } = form

  const watcher = useWatch({ control });

  const onSubmit = (e: any) => {
    const formData = new FormData();

    Object.keys(e).forEach((item: any) => {
      if (e[item] instanceof FileList) {
        formData.append(item, e[item][0]);
      } else {
        formData.append(item, e[item]);
      }
    });
    setLoading(true);

    axios.post("/lungo-termine/api/societa_capitali", formData).then((res) => {
      if (res.status == 200) {
        toast({
          description: (
            <div className=" flex items-center gap-2">
              <FaCheckCircle className=" text-green-500" size={30} /> Richiesta
              inoltrata, verrai ricontattato al più presto!
            </div>
          ),
        });
        setLoading(false);
        reset();
      } else {
        alert("error");
      }
    });
  };

  return (
    <div className=" w-full flex justify-center items-center">
      <div className=" max-w-screen-md">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-2 h-auto w-full">
            <UploadFile
              testo="Documento di identità firmatario"
              error={errors.documento_identita_firmatario?.message as string}
              value={watcher["documento_identita_firmatario"]}
              inputProps={register("documento_identita_firmatario", {
                required: "Campo obbligatorio",
                validate: UploadValidator,
                onChange: (e) => onChangeFileUpload(e, trigger, getValues()),
              })}
              htmlFor="documento_identita_firmatario"
            />
            <UploadFile
              testo="Tesserino codice fiscale firmatario"
              error={
                errors.tesserino_codice_fiscale_firmatario?.message as string
              }
              value={watcher["tesserino_codice_fiscale_firmatario"]}
              inputProps={register("tesserino_codice_fiscale_firmatario", {
                required: "Campo obbligatorio",
                validate: UploadValidator,
                onChange: (e) => onChangeFileUpload(e, trigger, getValues()),
              })}
              htmlFor="tesserino_codice_fiscale_firmatario"
            />
            <UploadFile
              testo="Visura camerale (ultimi 6 mesi)"
              error={errors.visura_camerale?.message as string}
              value={watcher["visura_camerale"]}
              inputProps={register("visura_camerale", {
                required: "Campo obbligatorio",
                validate: UploadValidator,
                onChange: (e) => onChangeFileUpload(e, trigger, getValues()),
              })}
              htmlFor="visura_camerale"
            />
            <UploadFile
              testo="Ultimo bilacio depositato + nota integrativa + ricevuta di presentazione"
              error={errors.ultimo_modello_unico?.message as string}
              value={watcher["ultimo_modello_unico"]}
              inputProps={register("ultimo_modello_unico", {
                required: "Campo obbligatorio",
                validate: UploadValidator,
                onChange: (e) => onChangeFileUpload(e, trigger, getValues()),
              })}
              htmlFor="ultimo_modello_unico"
            />
          </div>

          <h1 className="w-full px-5 font-bold mt-5">Compila il form</h1>

          <div className=" w-full grid grid-cols-1 md:grid-cols-2 gap-4 mt-5">
            <TextField
              type="text"
              placeholder="Nome"
              error={errors.nome?.message as string}
              value={watcher["nome"]}
              inputProps={register("nome")}
            />
            <TextField
              type="text"
              placeholder="Cognome"
              error={errors.cognome?.message as string}
              value={watcher["cognome"]}
              inputProps={register("cognome")}
            />
            <TextField
              type="text"
              placeholder="Email"
              error={errors.email?.message as string}
              value={watcher["email"]}
              inputProps={register("email", {
                required: "Campo obbligatorio",
                pattern: {
                  value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  message: "Inserire una mail valida",
                },
              })}
            />
            <TextField
              type="number"
              placeholder="Telefono"
              error={errors.phonenumber?.message as string}
              value={watcher["phonenumber"]}
              inputProps={register("phonenumber", {
                required: "Campo obbligatorio",
              })}
            />
            <TextField
              type="text"
              placeholder="Iban"
              error={errors.iban?.message as string}
              value={watcher["iban"]}
              inputProps={register("iban")}
            />
          </div>
          <DettaglioNoleggio form={form} />
          <label
            htmlFor="submitButton"
            className="  mt-10 w-full flex justify-center items-center"
          >
            <div className="bg-black px-20 py-3 rounded-xl flex items-center gap-3 text-white cursor-pointer">
              {loading && (
                <span className=" text-lg animate-spin duration-[100s]">
                  <LuLoader2 />
                </span>
              )}
              Invia
            </div>
          </label>
          <input
            id="submitButton"
            disabled={false}
            type="submit"
            className=" hidden"
          />
        </form>
      </div>
    </div>
  );
}

export default SocietaCapitaliForm;
