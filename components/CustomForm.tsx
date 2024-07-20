
import React from "react";
import { FormField, FormLabel, FormControl, FormMessage } from "./ui/form";
import { Input } from "@/components/ui/input";
import { Control, FieldPath } from "react-hook-form";
import { z } from "zod";
import { authFormSchema } from "@/lib/utils";

const formSchema = authFormSchema('sign-up')

declare interface customFormProps{
    control: Control<z.infer<typeof formSchema>>,
    name:FieldPath<z.infer<typeof formSchema>>,
    placeholder:string,
    label:string,
}
const CustomForm = ({control, name, placeholder, label}:customFormProps) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <div className="form-item">
          <FormLabel className="form-label">{label}</FormLabel>
          <div className="flex w-full flex-col">
            <FormControl>
              <Input
                className="input-class"
                placeholder={placeholder}
                type={name === 'password' ? 'password' : 'text'}
                {...field}
              />
            </FormControl>
            <FormMessage className="form-message mt-3" />
          </div>
        </div>
      )}
    />
  );
};

export default CustomForm;
