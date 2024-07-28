"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Appointment } from "@/types/appwrite.types";

import { AppointmentForm } from "./forms/AppointmentForm";

import "react-datepicker/dist/react-datepicker.css";
import PatientDetailsForm from "./forms/PatientDetailsForm";

export const PatientModal = ({
  name, patientId
}: {
    name: string;
    patientId: string;
}) => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost" className={`capitalize text-green-500`}>View More</Button>
      </DialogTrigger>
      <DialogContent className="shad-dialog sm:max-w-md">
        <DialogHeader className="mb-4 space-y-3">
          <DialogTitle className="capitalize">{name}</DialogTitle>
          <DialogDescription>
            patient details below
          </DialogDescription>
        </DialogHeader>

        {/* <AppointmentForm
          userId={userId}
          patientId={patientId}
          type={type}
          appointment={appointment}
          setOpen={setOpen}
        /> */}

        <PatientDetailsForm
            patientId={patientId} 
        />
      </DialogContent>
    </Dialog>
  );
};
