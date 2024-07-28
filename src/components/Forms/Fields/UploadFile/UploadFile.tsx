import React from "react";
import { FaCircleArrowUp } from "react-icons/fa6";
import { FaCheckCircle } from "react-icons/fa";

interface UploadFileProps {
  inputProps: any;
  value: File[];
  error?: string;
  htmlFor: string;
  testo: string;
}

function UploadFile(props: UploadFileProps) {
  const { inputProps, value, error, htmlFor } = props;

  const GetIcon = (value: File[]) => {
    return (
      <>
        {value?.length > 0 ? (
          <FaCheckCircle size={50} className="text-green-500" />
        ) : (
          // eslint-disable-next-line react/jsx-no-undef
          <FaCircleArrowUp size={50} className="text-black" />
        )}
      </>
    );
  };

  return (
    <>
      <div className=" cursor-pointer max-h-60 lg:w-60 max-w-60 border-2 rounded-2xl  border-black min-h-60">
        <label htmlFor={htmlFor} className=" h-full cursor-pointer">
          <div className="flex flex-col justify-around items-center h-full  ">
            <div className=" min-h-[10rem] w-full flex flex-col justify-center items-center">
              {GetIcon(value)}
              {value && value.length > 0 ? (
                <p className=" py-2 px-5 text-xs max-w-full truncate">
                  {value[0].name}
                </p>
              ) : null}
              <p className=" py-2 px-2 text-xs max-w-full">
                <span className=" text-red-600 text-xs w-full">
                  {error && `* ${error}`}
                </span>
              </p>
            </div>

            <div className=" border-t-2 h-[5rem] w-full border-black  rounded-2xl ">
              <h1 className=" text-[0.7rem] h-full w-full flex items-center justify-start font-bold leading-4 px-2">
                {props.testo}
              </h1>
            </div>
          </div>
        </label>
        {/*  <span className=" text-red-600 text-sm">{error && `* ${error}`}</span> */}
      </div>
      <input
        {...inputProps}
        accept="application/pdf"
        id={htmlFor}
        type={"file"}
        className=" hidden "
      />
    </>
  );
}

export default UploadFile;
