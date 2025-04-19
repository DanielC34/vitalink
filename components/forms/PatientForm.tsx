"use client";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form } from "@/components/ui/form";
import { MdEmail } from "react-icons/md"; // Import the email icon
import CustomFormField from "../CustomFormField";
import { CgProfile } from "react-icons/cg"; // Import the CgProfile icon
import { MdOutlinePhone } from "react-icons/md";
import SubmitButton from "../SubmitButton";
import { UserFormValidation } from "@/lib/validatio";
import { useRouter } from "next/navigation";

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


export type FormSchema = z.infer<typeof UserFormValidation>; // Export the inferred type

export default function PatientForm() {
  
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  // 1. Define your form.
  const form = useForm<z.infer<typeof UserFormValidation>>({
    resolver: zodResolver(UserFormValidation),
    defaultValues: {
      name: "",
      email: "",
      phone: ""
      // Add more fields as needed
    },
  });

  // 2. Define a submit handler.
  async function onSubmit({name, email, phone}: z.infer<typeof UserFormValidation>) {
    setIsLoading(true);

    try {
      // const userData = { name, email, phone };

      // const user = await createUser(userData);

      // if (user)
      //   router.push(`/patients/${user.$id}/register`);
     } catch (error) {
      console.log(error)
    }
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
          iconAlt="user"
          icon={<CgProfile className="h-6 w-6 text-gray-500" />}
        />
        <CustomFormField
          fieldType={FormFieldType.INPUT}
          control={form.control}
          name="email"
          label="Email"
          placeholder="ryangarcia@example.com"
          icon={<MdEmail className="h-6 w-6 text-gray-500" />} // Pass the email icon here
          iconAlt="email"
        />
        <CustomFormField
          fieldType={FormFieldType.PHONE_INPUT}
          control={form.control}
          name="phone"
          label="Phone Number"
          placeholder="(e.g. +260 094 552194)"
          icon={<MdOutlinePhone className="h-6 w-6 text-gray-500" />} // Pass the phone icon here
          iconAlt="phone"
        />
        <SubmitButton isLoading={isLoading}>Get Started!</SubmitButton>
      </form>
    </Form>
  );
}
