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

import { AppointmentForm } from "./forms/AppointmentForm";

import "react-datepicker/dist/react-datepicker.css";
import PatientDetailsForm from "./forms/PatientDetailsForm";

import { Patient } from "@/types/appwrite.types";

export const PatientModal = ({ patient }: { patient: any }) => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost" className={`capitalize text-green-500`}>View More</Button>
      </DialogTrigger>
      <DialogContent className="shad-dialog sm:max-w-md lg:max-w-[35rem] max-h-[30rem] overflow-y-scroll">
        <DialogHeader className="mb-1 space-y-3">
          <DialogTitle className="capitalize text-2xl">Patient Details</DialogTitle>
          {/* <DialogDescription>
            patient details below
          </DialogDescription> */}
        </DialogHeader>

        <PatientDetailsForm
            patient={patient}
        />
      </DialogContent>
    </Dialog>
  );
};
