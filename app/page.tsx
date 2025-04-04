"use client";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ModeToggle";
import { Icon } from "@iconify/react";
import Link from "next/link";
import Image from "next/image";
import CoverImage from "@/public/assets/images/cover-img2.jpg"
import PatientForm from "@/components/forms/PatientForm";

export default function Home() {
  return (
    <div className="flex h-screen max-h-screen">
      <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-[496px] ml-23">
          <div className="flex items-center space-x-2 mb-12">
            <Icon icon="ep:first-aid-kit" className="h-10 w-10" />
            <h2 className="text-xl font-bold">VitaLink</h2>
          </div>
          <PatientForm />
          <div className="text-14-regular mt-20 flex">
            <p className="justify-items-end text-gray-600 xl: text-left">© 2025 VitaLink</p>
            <Link href="/?admin=true" className="text-green-500 ml-auto">
              Admin
            </Link>
          </div>
        </div>
      </section>

      <Image
        src={CoverImage}
        height={900}
        width={900}
        alt="cover image"
        className="side-img max-w-[50%]"
      />
    </div>
  );
}
