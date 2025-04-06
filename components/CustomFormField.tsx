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
import { Icon } from "@iconify/react";


// Assuming you have a FormSchema type defined in your PatientForm file
interface CustomProps {
  control: Control<FormSchema>,
  fieldType: FormFieldType;
  name: keyof FormSchema,
  label?: string,
  placeholder?: string,
  iconSrc?: string, //Optional
  iconAlt?: string, //Optional
  disabled?: boolean,
  dateFormat?: string,
  showTimeSelect?: boolean,
  children?: React.ReactNode,
  renderSkeleton?: (field: FieldValues) => React.ReactNode
}

const RenderField = ({
  field,
  props,
}: {
  field: ControllerRenderProps<FormSchema, keyof FormSchema>;
  props: CustomProps;
  }) => {
  
  const { fieldType, iconSrc, iconAlt, placeholder } = props;
  
  switch (fieldType) {
    case FormFieldType.INPUT:
      return (
        <div className="flex items-center rounded-md border border-yellow-500 bg-dark-900">
          {iconSrc && (
            <Icon
              icon={iconSrc}
              aria-label={iconAlt || "icon"}
              className="ml-2 h-6 w-6"
            />
          )}
          <FormControl className="w-full">
            <Input
              placeholder={placeholder}
              {...field}
              className="w-full bg-dark-900 text-white border-0 focus:ring-0 focus:outline-none"
            />
          </FormControl>
        </div>
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