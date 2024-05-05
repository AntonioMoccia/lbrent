import React from "react";

interface TextFieldProps {
  type: "text" | "email" | "password" | "number";
  inputProps: any;
  value: string;
  error?: string;
  placeholder: string;
}

function TextField(props: TextFieldProps) {
  const { type, inputProps, value, error } = props;

  return (
    <div className=" w-full">
      <div className="relative w-full flex flex-col justify-start px-2 items-center">
        <input
          {...inputProps}
          type={type}
          className="pl-5 py-2 pr-4 w-full border-2 rounded-xl border-black placeholder-black"
          placeholder={props.placeholder}
        />
        {error && (
          <p className=" py-1 text-left text-xs flex items-start justify-start w-full ">
            <span className=" text-red-600 bg-blu text-left text-xs w-full">
              {`* ${error}`}
            </span>
          </p>
        )}
      </div>
    </div>
  );
}

export default TextField;
