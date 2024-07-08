import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useEffect } from "react";
import { FieldValues, UseFormReturn, useWatch } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

interface OptionItem {
  label: string;
  value: string;
}

interface OptionFieldProps {
  form: UseFormReturn<FieldValues, any, undefined>;
  name: string;
  defaultValue: string;
  label: string;
  classes?: string;
  options: OptionItem[];
}

function OptionField(props: OptionFieldProps) {
  const { form, name, options, defaultValue, label, classes } = props;
  const watcher = useWatch({ control: form.control });

  return (
    <div className="p-2 px-4">
      <Form {...form}>
        <FormField
          control={form.control}
          name={name}
          render={({ field }) => (
            <FormItem className="space-y-3">
              <FormLabel>
                <h4 className=" font-normal">{label}</h4>
              </FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value || defaultValue}
                  className={`flex flex-row space-y-1 flex-wrap ${classes}`}
                >
                  {options.map(({ label, value }, index) => (
                    <FormItem
                      key={index}
                      className="flex items-center space-x-3 space-y-0"
                    >
                      <FormControl>
                        <RadioGroupItem value={value} />
                      </FormControl>
                      <FormLabel className="font-normal">{label}</FormLabel>
                    </FormItem>
                  ))}
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {form.formState.errors[name]?.message && (
          <p className=" py-1 text-left text-xs flex items-start justify-start w-full ">
            <span className=" text-red-600 bg-blu text-left text-xs w-full">
              {`* ${form.formState.errors[name]?.message}`}
            </span>
          </p>
        )}
      </Form>
    </div>
  );
}

export default OptionField;
