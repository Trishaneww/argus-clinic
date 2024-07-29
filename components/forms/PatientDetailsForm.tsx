import { getPatient } from '@/lib/actions/patient.actions'
import React from 'react'
import { formatDateTime } from "@/lib/utils";
import Image from 'next/image';
import CustomFormField, { FormFieldType } from '../CustomFormField';
import { type } from 'os';
import RegisterForm from './RegisterForm';
import { Input } from '../ui/input';

const PatientDetailsForm = ({ patient } : { patient: any}) => {
    console.log(patient)
  return (
    <div>
        <p>{patient.name}</p>
        <p>{patient.email}</p>
        <p>{patient.gender}</p>
        <p>{patient.address}</p>
        <p>{patient.emergencyContactName}</p>
        <p><p>{patient.emergencyContactNumber}</p></p>
        <p>{formatDateTime(patient.birthDate).dateOnly}</p>
        <Image
            src={''}
            width={100}
            height={100}
            alt="indentifcation form"
        />

        <div className="flex flex-col gap-6 xl:flex-row">
          <div className="flex rounded-md border border-slate-200 bg-slate-50">
            <Input
              placeholder={patient.email}
              className="shad-input border-0"
            />
          </div>
          <div className="flex rounded-md border border-slate-200 bg-slate-50">
            <Input
              placeholder={patient.email}
              className="shad-input border-0"
            />
          </div>
        </div>
    </div>
  )
}

export default PatientDetailsForm