"use client"
import React from 'react'
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Control } from "react-hook-form";
import { FormFieldType } from './forms/PatientForm';
import { FormSchema } from './forms/PatientForm'; // Import the shared type
import { FieldValues } from 'react-hook-form';
import { ControllerRenderProps } from "react-hook-form";
import { CgProfile } from "react-icons/cg"; // Import the CgProfile icon


// Assuming you have a FormSchema type defined in your PatientForm file
interface CustomProps {
  control: Control<FormSchema>;
  fieldType: FormFieldType;
  name: keyof FormSchema;
  label?: string;
  placeholder?: string;
  icon?: JSX.Element;
  iconSrc?: string; //Optional
  iconAlt?: string; //Optional
  disabled?: boolean;
  dateFormat?: string;
  showTimeSelect?: boolean;
  children?: React.ReactNode;
  renderSkeleton?: (field: FieldValues) => React.ReactNode;
}

const RenderField = ({
  field,
  props,
}: {
  field: ControllerRenderProps<FormSchema, keyof FormSchema>;
  props: CustomProps;
  }) => {
  
  const { fieldType, icon, iconAlt, placeholder } = props;
  
  switch (fieldType) {
    case FormFieldType.INPUT:
      return (
        <FormControl>
          <div className="relative w-full">
            <Input
              placeholder={placeholder}
              {...field}
              value={field.value ?? ""} // Ensure the value is always defined
              className="w-full bg-dark-400 text-white border border-dark-500 rounded-md pl-10 focus:ring-0 focus:outline-none"
            />
            {/* Icon */}
            {icon && (
              <div
                className="absolute left-2 top-1/2 transform -translate-y-1/2"
                aria-label={iconAlt || "icon"} // Accessibility label
              >
                {icon}
              </div>
            )}
          </div>
        </FormControl>
      );
    default:
      return null;
  }
};

const CustomFormField = (props: CustomProps) => {

  const { control, fieldType, name, label } = props;
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="flex-1">
          {fieldType !== FormFieldType.CHECKBOX && label && (
            <FormLabel>{label}</FormLabel>
          )}

          <RenderField
            field={field}
            props={props}
          />
          <FormMessage className="shad-error" />
        </FormItem>
      )}
    />
  );
}

export default CustomFormField;