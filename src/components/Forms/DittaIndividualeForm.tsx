"use client";
import React, { useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import { TextField, UploadFile } from "./Fields";
import axios from "axios";
import { useToast } from "../toast/use-toast";

import { FaCheckCircle } from "react-icons/fa";
import { LuLoader2 } from "react-icons/lu";

function DittaIndividualeForm() {
  const [loading, setLoading] = useState(false);

  const ACCEPTED_FILE_TYPE = ["application/pdf"];
  const { toast } = useToast();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    trigger,
    control,
    getValues,
  } = useForm({
    mode: "onChange",
  });

  const watcher = useWatch({ control });
  const MAX_FILE_SIZE_MB = 5; // Imposta la dimensione massima del file consentita in MB

  const UploadValidator = (targetValue: FileList, fields: any) => {
    const fileSizeInMB = targetValue[0].size / (1024 * 1024);

    if (ACCEPTED_FILE_TYPE.includes(targetValue[0].type)) {
      const files = Object.values(fields).filter(
        (key: any) =>
          key instanceof FileList && key[0]?.name == targetValue[0]?.name
      );
      if (files.length > 1) {
        return "Hai caricato due volte lo stesso file";
      } else {
        if (fileSizeInMB > MAX_FILE_SIZE_MB) {
          return "Caricare un file max 5MB";
        } else {
          return true;
        }
      }
    } else {
      return "Caricare un file pdf";
    }
  };
  const onChangeFileUpload = (e: any) => {
    const formValues = getValues();
    const targetName = e.currentTarget.name;
    const triggers = Object.keys(formValues).filter(
      (key) =>
        formValues[key] instanceof FileList &&
        key !== targetName &&
        formValues[key].length > 0
    );
    trigger([...triggers]);
  };
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
    axios.post("/lungo-termine/api/ditta_individuale", formData).then((res) => {
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
        <form encType="multipart/form-data" onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-2 h-auto w-full">
            <UploadFile
              testo="Documento di identità"
              error={errors.documento_identita?.message as string}
              value={watcher["documento_identita"]}
              inputProps={register("documento_identita", {
                required: "Campo obbligatorio",
                validate: UploadValidator,
                onChange: onChangeFileUpload,
              })}
              htmlFor="documento_identita"
            />
            <UploadFile
              testo="Tesserino codice fiscale"
              error={errors.tesserino_codice_fiscale?.message as string}
              value={watcher["tesserino_codice_fiscale"]}
              inputProps={register("tesserino_codice_fiscale", {
                required: "Campo obbligatorio",
                validate: UploadValidator,
                onChange: onChangeFileUpload,
              })}
              htmlFor="tesserino_codice_fiscale"
            />
            <UploadFile
              testo="Visura camerale (ultimi 6 mesi)"
              error={errors.visura_camerale?.message as string}
              value={watcher["visura_camerale"]}
              inputProps={register("visura_camerale", {
                required: "Campo obbligatorio",
                validate: UploadValidator,
                onChange: onChangeFileUpload,
              })}
              htmlFor="visura_camerale"
            />
            <UploadFile
              testo="Ultimo modello unico depositato"
              error={errors.ultimo_modello_unico?.message as string}
              value={watcher["ultimo_modello_unico"]}
              inputProps={register("ultimo_modello_unico", {
                required: "Campo obbligatorio",
                validate: UploadValidator,
                onChange: onChangeFileUpload,
              })}
              htmlFor="ultimo_modello_unico"
            />
            <UploadFile
              testo="Quadro IQ"
              error={errors.quadro_iq?.message as string}
              value={watcher["quadro_iq"]}
              inputProps={register("quadro_iq", {
                required: "Campo obbligatorio",
                validate: UploadValidator,
                onChange: onChangeFileUpload,
              })}
              htmlFor="quadro_iq"
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
              placeholder="Iban"
              error={errors.iban?.message as string}
              value={watcher["iban"]}
              inputProps={register("iban")}
            />
          </div>
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

export default DittaIndividualeForm;
