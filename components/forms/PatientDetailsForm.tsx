import { getPatient } from '@/lib/actions/patient.actions'
import React from 'react'
import { formatDateTime } from "@/lib/utils";
import Image from 'next/image';

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

    </div>
  )
}

export default PatientDetailsForm