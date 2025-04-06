"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import CustomFormField from "../CustomFormField";

export enum FormFieldType {
  INPUT = 'input',
  TEXTAREA = 'textarea',
  phone = 'phone',
  PHONE_INPUT = 'phone-input',
  CHECKBOX = 'checkbox',
  SELECT = 'select',
  SKELETON = 'skeleton',
  DATE_PICKER = 'date-picker',
}

export const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
});

export type FormSchema = z.infer<typeof formSchema>; // Export the inferred type

export default function PatientForm () {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 flex-1">
        <section className="mb-12 space-y-4">
          <h1 className="text-3xl font-bold">Welcome👋</h1>
          <p className="text-dark-700">
            Please schedule your appointment in the form below
          </p>
        </section>
        <CustomFormField
          fieldType={FormFieldType.INPUT}
          control={form.control}
          name="name"
          label="Full name"
          placeholder="Ryan Garcia"
          iconSrc="mdi:account"
          iconAlt="user"
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
