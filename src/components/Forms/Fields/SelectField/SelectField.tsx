import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  Form,
} from "@/components/ui/form";
import { FieldValues, UseFormReturn, useWatch } from "react-hook-form";

interface OptionValues {
  value: string;
  label: string;
}

interface SelectFieldProps {
  form: UseFormReturn<FieldValues, any, undefined>;
  form_description?: string;
  placeholder: string;
  optionValues: OptionValues[];
  name: string;
}

function SelectField(props: SelectFieldProps) {
  const { form_description, placeholder, optionValues, form, name } = props;

  return (
    <div className="px-2">
      <Form {...form}>
        <FormField
          control={form.control}
          name={name}
          rules={{
            required:"Campo obbligatorio"
/*             validate: (val, fields) => {
              if(!fields[name]){
                return "Campo obbligatorio";
              }else{
                true
              }
            },
 */          }}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder={placeholder} />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {optionValues.map(({ value, label }, index) => (
                    <SelectItem key={index} value={value}>
                      {label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormDescription>
                {form_description && form_description}
              </FormDescription>
              {form.formState.errors[name]?.message && (
                <p className=" py-1 text-left text-xs flex items-start justify-start w-full ">
                  <span className=" text-red-600 bg-blu text-left text-xs w-full">
                    {`* ${form.formState.errors[name]?.message}`}
                  </span>
                </p>
              )}
            </FormItem>
          )}
        />
      </Form>
    </div>
  );
}

export default SelectField;
