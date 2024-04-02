import React, { useEffect } from "react";
import { useForm, useFieldArray, useWatch } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { TextField, UploadFile } from "./Fields";

function DittaIndividualeForm() {
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

  const file1 = watch("identity_front1");
  const file2 = watch("identity_front2");
  const file3 = watch("identity_front3");
  const file4 = watch("identity_front4");
  const name = watch("name");
  const cognome = watch("cognome");

  const onSubmit = (e: any) => {
    console.log(e);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className=" grid gap-2 grid-cols-2 px-5 py-5">
          <UploadFile
            error={errors.identity_front1?.message as string}
            value={file1}
            inputProps={register("identity_front1")}
            htmlFor="identity_front1"
          />
          <UploadFile
            error={errors.identity_front2?.message as string}
            value={file2}
            inputProps={register("identity_front2")}
            htmlFor="identity_front2"
          />
          <UploadFile
            error={errors.identity_front3?.message as string}
            value={file3}
            inputProps={register("identity_front3")}
            htmlFor="identity_front3"
          />
          <UploadFile
            error={errors.identity_front4?.message as string}
            value={file4}
            inputProps={register("identity_front4")}
            htmlFor="identity_front4"
          />
        </div>
        <h1 className="w-full px-5 font-bold">Compila il form</h1>
        <div className=" w-full justify-center items-center mt-5 flex-col gap-2 flex">
          <TextField
            type="text"
            error={errors.name?.message as string}
            value={name}
            inputProps={register("name")}
          />
          <TextField
            type="text"
            error={errors.cognome?.message as string}
            value={cognome}
            inputProps={register("cognome")}
          />
        </div>
        <div className=" mt-10 w-full flex justify-center items-center">
          <input
            type="submit"
            className=" bg-black px-20 py-3 rounded-lg text-white"
          />
        </div>
      </form>
    </div>
  );
}

export default DittaIndividualeForm;
