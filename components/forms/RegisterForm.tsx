"use client"
 
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"
import CustomFormField from "../CustomFormField"
import SubmitButton from "../ui/SubmitButton"
import { useState } from "react"
import { UserFormValidation } from "@/lib/validation"
import { useRouter } from "next/navigation"
import { createUser } from "@/lib/actions/patient.actions"
import { FormFieldType } from "./PatientForm"

 
const RegisterForm = ({ user }: {user: User}) => {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false);
  const form = useForm<z.infer<typeof UserFormValidation>>({
    resolver: zodResolver(UserFormValidation),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
    },
  })
 
  const onSubmit = async (values: z.infer<typeof UserFormValidation>) => {
    setIsLoading(true);

    try {
      const user = {
        name: values.name,
        email: values.email,
        phone: values.phone,
      };

      console.log(user)

      const newUser = await createUser(user);
      console.log(newUser)

      if (newUser) {
        router.push(`/patients/${newUser.$id}/register`);
      }
    } catch (error) {
      console.log(error);
    }

    setIsLoading(false);
  };

  return (
    <Form {...form}>
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-12 flex-1">
      <section className="space-y-4">
        <h1 className="header">Welcome</h1>
        <p className="text-dark-700">Let us know more about yourself</p>
      </section>

      <section className="space-y-6">
        <div className="mb-9 space-y-1">
            <h2 className="sub-header">Personal Information</h2>
        </div>
      </section>

      {/* ensurs no type errors */}
      <CustomFormField 
        fieldType={FormFieldType.INPUT}
        control={form.control}
        name="name"
        placeholder="John Doe"
        iconSrc="/assets/icons/user.svg"
        iconAlt="user"
      />

      <div className="flex flex-col gap-6 xl:flex-row">
        <CustomFormField 
            fieldType={FormFieldType.INPUT}
            control={form.control}
            name="email"
            label="email"
            placeholder="Johndoe@gmail.com"
            iconSrc="/assets/icons/email.svg"
            iconAlt="email"
        />

        <CustomFormField 
            fieldType={FormFieldType.PHONE_INPUT}
            control={form.control}
            name="phone"
            label="phone"
            placeholder="(905)-672-2328"
        />
      </div>
      



      <SubmitButton isLoading={isLoading}>Get Started</SubmitButton>
    </form>
    </Form>
  )
}

export default RegisterForm