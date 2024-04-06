"use client";
import React, { useEffect } from "react";
import { useForm, useFieldArray, useWatch } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { TextField, UploadFile } from "./Fields";

function PensionatoForm() {
  const ACCEPTED_FILE_TYPE = ["application/pdf"];

  const zod: z.ZodObject<any> = z.object({
    identity_front: z.any().refine((file) => {
      return ACCEPTED_FILE_TYPE.includes(file[0].type);
    }, "il file deve essere pdf"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
    control,
  } = useForm({
    resolver: zodResolver(zod),
  });

  const watcher = useWatch({ control });

  useEffect(() => {
    console.log(watcher);
  }, [watcher]);



  const onSubmit = (e: any) => {
    console.log(e);
  };

  return (
    <div className=" w-full flex justify-center items-center">
      <div className=" max-w-screen-md">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-2 h-auto w-full">
            <UploadFile
              testo="Documento di identità"
              error={errors.documento_identita?.message as string}
              value={watcher['documento_identita']}
              inputProps={register("documento_identita")}
              htmlFor="documento_identita"
            />
            <UploadFile
              testo="Tesserino codice fiscale"
              error={errors.tesserino_codice_fiscale?.message as string}
              value={watcher['tesserino_codice_fiscale']}
              inputProps={register("tesserino_codice_fiscale")}
              htmlFor="tesserino_codice_fiscale"
            />
            <UploadFile
              testo="Cedolino pensione / Mod.730 / CUD"
              error={errors.cedolino_pensione_730_cud?.message as string}
              value={watcher['cedolino_pensione_730_cud']}
              inputProps={register("cedolino_pensione_730_cud")}
              htmlFor="cedolino_pensione_730_cud"
            />
          </div>

          <h1 className="w-full px-5 font-bold mt-5">Compila il form</h1>

          <div className=" w-full grid grid-cols-1 md:grid-cols-2 gap-4 mt-5">
            <TextField
              type="text"
              placeholder="Nome"
              error={errors.nome?.message as string}
              value={watcher['nome']}
              inputProps={register("nome")}
            />
              <TextField
              type="text"
              placeholder="Cognome"
              error={errors.cognome?.message as string}
              value={watcher['cognome']}
              inputProps={register("cognome")}
            />

            <TextField
              type="text"
              placeholder="Iban"
              error={errors.iban?.message as string}
              value={watcher['iban']}
              inputProps={register("iban")}
            />

          </div>
          <div className=" mt-10 w-full flex justify-center items-center">
            <input
              type="submit"
              className=" bg-black px-20 py-3 rounded-xl text-white"
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default PensionatoForm;
