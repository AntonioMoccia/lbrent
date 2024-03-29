"use client";
import React, { useEffect } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { BiUpload } from "react-icons/bi";
import { GiCheckedShield } from "react-icons/gi";
import { FaCircleArrowUp } from "react-icons/fa6";

function Form() {
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
  } = useForm({
    resolver: zodResolver(zod),
  });
  const file = watch("identity_front");
  const name = watch("name");
  const cognome = watch("cognome");
  const onSubmit = (e: any) => {
    console.log(e);
  };

  useEffect(() => {
    console.log(errors);
  }, [errors]);
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className=" grid gap-2 grid-cols-2 px-5 py-5">
          <UploadFileField
            error={errors.identity_front?.message as string}
            value={file}
            inputProps={register("identity_front")}
          />
          <UploadFileField
            error={errors.identity_front?.message as string}
            value={file}
            inputProps={register("identity_front")}
          />
          <UploadFileField
            error={errors.identity_front?.message as string}
            value={file}
            inputProps={register("identity_front")}
          />
          <UploadFileField
            error={errors.identity_front?.message as string}
            value={file}
            inputProps={register("identity_front")}
          />
        </div>
        <h1 className="w-full px-5 font-bold">Compila il form</h1>
        <div className=" w-full justify-center items-center mt-5 flex-col gap-2 flex">
          <InputField
            error={errors.name?.message as string}
            value={name}
            inputProps={register("name")}
          />
          <InputField
            error={errors.cognome?.message as string}
            value={cognome}
            inputProps={register("cognome")}
          />
        </div>
        <div
          className=" mt-10 w-full flex justify-center items-center"
        >
          <input
            type="submit"
            className=" bg-black px-20 py-3 rounded-lg text-white"
          />
        </div>
        {/*   <button
          type="reset"
          onClick={() => {
            reset();
          }}
        >
          Reset
        </button> */}
      </form>
    </div>
  );
}

const UploadFileField = ({
  inputProps,
  value,
  error,
}: {
  inputProps: any;
  value: string;
  error?: string;
}) => {
  const GetIcon = (value: string | undefined) => {
    return (
      <>
        {value ? (
          <GiCheckedShield size={50} className="text-black" />
        ) : (
          <FaCircleArrowUp size={50} className="text-black" />
        )}
      </>
    );
  };

  return (
    <>
      <div className=" cursor-pointer max-h-60 max-w-60 border-2 rounded-2xl  border-black min-h-60">
        <label htmlFor="upload-button" className=" h-full cursor-pointer">
          <div className="flex flex-col justify-around items-center h-full  ">
            <div className=" min-h-[70%] w-full flex justify-center items-center">
              {GetIcon(value)}
            </div>

            <div className=" border-t-2  w-full border-black  rounded-2xl ">
              <h1 className=" text-[0.7rem] w-full font-bold px-2 py-5 ">
                Carica qui il tuo documento di identità
              </h1>
            </div>
          </div>
        </label>
        <span>{error}</span>
      </div>
      <input
        {...inputProps}
        id="upload-button"
        type={"file"}
        className=" hidden "
      />
    </>
  );
};
const InputField = ({
  inputProps,
  value,
  error,
}: {
  inputProps: any;
  value: string;
  error?: string;
}) => {
  return (
    <div className="relative w-full flex justify-center">
      <input
        {...inputProps}
        type="text"
        className="pl-5 py-4 pr-4 w-[90%] placeholder-gray-500  border-2 rounded-xl border-black placeholder-black"
        placeholder="Default Label"
      />
      <span>{error}</span>

      {/*   <div
        className="absolute inset-y-0 left-0 pl-3  
              flex items-center  
              pointer-events-none"
      >
       <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M15.1528 13.6591C17.7388 10.3378 17.5053 5.53277 14.4521 2.47959C11.146 -0.826529 5.7857 -0.826528 2.47959 2.47959C-0.826529 5.7857 -0.826529 11.146 2.47959 14.4521C5.53277 17.5053 10.3378 17.7388 13.6591 15.1528C13.6734 15.169 13.6883 15.1849 13.7038 15.2004L18.1935 19.6901C18.6068 20.1033 19.2768 20.1033 19.6901 19.6901C20.1033 19.2768 20.1033 18.6068 19.6901 18.1935L15.2004 13.7038C15.1849 13.6883 15.169 13.6734 15.1528 13.6591ZM12.9555 3.97615C15.4351 6.45573 15.4351 10.4759 12.9555 12.9555C10.4759 15.4351 6.45573 15.4351 3.97615 12.9555C1.49656 10.4759 1.49656 6.45573 3.97615 3.97615C6.45573 1.49656 10.4759 1.49656 12.9555 3.97615Z"
            fill="black"
          />
        </svg>
      </div> */}
    </div>
  );
};

export default Form;
