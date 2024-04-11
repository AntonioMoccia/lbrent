import { FieldValues, UseFormTrigger,  } from "react-hook-form";

export const onChangeFileUpload = (e: any, trigger : UseFormTrigger<any>, formValues : FieldValues) => {
    const targetName = e.currentTarget.name;
    const triggers = Object.keys(formValues).filter(
      (key) =>
        formValues[key] instanceof FileList &&
        key !== targetName &&
        formValues[key].length > 0
    );
    trigger([...triggers]);
  };