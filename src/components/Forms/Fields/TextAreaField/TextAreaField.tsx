import { Textarea } from "@/components/ui/textarea"
 

interface TextAreaFieldProps{
  inputProps: any;
  value: string;
  error?: string;
  placeholder: string;
}

const TextAreaField=(props:TextAreaFieldProps)=> {
  const {
    inputProps,
    value,error,placeholder
  } = props

  return (
    <div className="px-2">
      <Textarea  className="border-2 rounded-xl border-black placeholder-black" value={value} {...inputProps} placeholder={placeholder} />
      {error && (
        <p className=" py-1 text-left text-xs flex items-start justify-start w-full ">
          <span className=" text-red-600 bg-blu text-left text-xs w-full">
            {`* ${error}`}
          </span>
        </p>
      )}
      </div>
    
  )
}


export default TextAreaField