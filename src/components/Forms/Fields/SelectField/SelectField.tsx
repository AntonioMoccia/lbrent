import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface OptionValues{
    value:string,
    label:string
}

interface SelectFieldProps {
  inputProps: any;
  value: string;
  error?: string;
  placeholder: string;
  optionValues:OptionValues[]
}

function SelectField(props: SelectFieldProps) {
  const { inputProps, value, error, placeholder,optionValues } = props;
  return (
    <div className="px-2">
      <Select defaultValue={value} {...inputProps}>
        <SelectTrigger className=" w-full border-2 rounded-xl border-black placeholder-black">
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
            {
                optionValues.map(({value,label},index)=>(
                    <SelectItem key={index} value={value}>{label}</SelectItem>                    
                ))
            }
        </SelectContent>
      </Select>
      {error && (
        <p className=" py-1 text-left text-xs flex items-start justify-start w-full ">
          <span className=" text-red-600 bg-blu text-left text-xs w-full">
            {`* ${error}`}
          </span>
        </p>
      )}
    </div>
  );
}

export default SelectField;
