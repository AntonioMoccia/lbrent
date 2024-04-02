import React from "react";
import { FaCircleArrowUp } from "react-icons/fa6";
import { GiCheckedShield } from "react-icons/gi";
import { FaCheckCircle } from "react-icons/fa";

interface UploadFileProps {
  inputProps: any;
  value: File[];
  error?: string;
  htmlFor: string;
}

function UploadFile(props: UploadFileProps) {
  const { inputProps, value, error, htmlFor } = props;

  const GetIcon = (value: File[]) => {
    return (
      <>
        {value?.length > 0 ? (
          <FaCheckCircle size={50} className="text-black" />
        ) : (
          // eslint-disable-next-line react/jsx-no-undef
          <FaCircleArrowUp size={50} className="text-black" />
        )}
      </>
    );
  };

  return (
    <>
      <div className=" cursor-pointer max-h-60 max-w-60 border-2 rounded-2xl  border-black min-h-60">
        <label htmlFor={htmlFor} className=" h-full cursor-pointer">
          <div className="flex flex-col justify-around items-center h-full  ">
            <div className=" min-h-[70%] w-full flex flex-col justify-center items-center">
              {GetIcon(value)}
              <p className=" py-2 px-5 text-xs max-w-full bg-red-100">{value && value.length>0 ? value[0].name : null}</p>
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
        id={htmlFor}
        type={"file"}
        className=" hidden "
      />
    </>
  );
}

export default UploadFile;
