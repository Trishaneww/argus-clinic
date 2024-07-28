"use client";

import { ColumnDef } from "@tanstack/react-table";
import Image from "next/image";

import { Doctors } from "@/constants";
import { formatDateTime } from "@/lib/utils";
import { Appointment, Patient } from "@/types/appwrite.types";

import { AppointmentModal } from "../AppointmentModal";
import { StatusBadge } from "../StatusBadge";
import { PatientModal } from "../PatientModal";

export const patientColumns: ColumnDef<Patient>[] = [
  {
    header: "#",
    cell: ({ row }) => {
      return <p className="text-14-medium ">{row.index + 1}</p>;
    },
  },
  {
    accessorKey: "Name",
    header: "Patient",
    cell: ({ row }) => {
      const patient = row.original;
      return <p className="text-14-medium ">{patient.name}</p>;
    },
  },
  {
    accessorKey: "email",
    header: "Email",
    cell: ({ row }) => {
      const patient = row.original;
      return (
        <p className="min-w-[115px]">{patient.email}</p>
      );
    },
  },
  {
    accessorKey: "gender",
    header: "Gender",
    cell: ({ row }) => {
      const appointment = row.original;
      return (
        <p className="text-14-regular min-w-[100px]">{appointment.gender}</p>
      );
    },
  },
  {
    accessorKey: "address",
    header: "Address",
    cell: ({ row }) => {
      const appointment = row.original;
      return (
        <p className="text-14-regular min-w-[100px]">{appointment.address}</p>
      );
    },
  },
//   {
//     accessorKey: "primaryPhysician",
//     header: "Doctor",
//     cell: ({ row }) => {
//       const appointment = row.original;

//       const doctor = Doctors.find(
//         (doctor) => doctor.name === appointment.primaryPhysician
//       );

//       return (
//         <div className="flex items-center gap-3">
//           <Image
//             src={doctor?.image!}
//             alt="doctor"
//             width={100}
//             height={100}
//             className="size-8"
//           />
//           <p className="whitespace-nowrap">Dr. {doctor?.name}</p>
//         </div>
//       );
//     },
//   },
  {
    id: "actions",
    header: () => <div className="pl-4">Actions</div>,
    cell: ({ row }) => {
      const patient = row.original;

      return (
        <div className="flex gap-1">
          <PatientModal
            name={patient.name}
            // patientId={appointment.patient.$id}
            // userId={appointment.userId}
            // appointment={appointment}
            // type="schedule"
            // title="Schedule Appointment"
            // description="Please confirm the following details to schedule."
          />
        </div>
      );
    },
  },
];
