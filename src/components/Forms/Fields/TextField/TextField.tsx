import React from "react";

interface TextFieldProps {
  type: "text" | "email" | "password";
  inputProps: any;
  value: string;
  error?: string;
}

function TextField(props: TextFieldProps) {
  const { type, inputProps, value, error } = props;

  return (
    <div className=" w-full">
      <div className="relative w-full flex justify-center">
        <input
          {...inputProps}
          type={type}
          className="pl-5 py-1 pr-4 w-[90%] border-[0.2rem] rounded-xl border-black placeholder-black"
          placeholder="Default Label"
        />
        <span>{error}</span>
      </div>
    </div>
  );
}

export default TextField;
