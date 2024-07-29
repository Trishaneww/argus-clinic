import { getPatient } from '@/lib/actions/patient.actions'
import React from 'react'
import { formatDateTime } from "@/lib/utils";
import Image from 'next/image';
import CustomFormField, { FormFieldType } from '../CustomFormField';
import { type } from 'os';
import RegisterForm from './RegisterForm';
import { Input } from '../ui/input';
import PhoneInput from "react-phone-number-input";
import { Textarea } from '../ui/textarea';

const PatientDetailsForm = ({ patient } : { patient: any}) => {
    console.log(patient)
  return (
    <div>

        <section className="space-y-6">
          <div className="mb-1 space-y-1">
            <h2 className="text-md">Personal Information</h2>
          </div>

          <div className="flex flex-col gap-6 xl:flex-row mb-6 flex-wrap">
            <div>
              <label className="text-slate-400 text-sm">Name</label>
              <div className="flex rounded-md border border-slate-200 bg-slate-50 mt-2  w-[220px]">
                <Input
                  placeholder={patient.name}
                  className="shad-input border-0"
                  disabled
                />
              </div>
            </div>

            <div>
              <label className="text-slate-400 text-sm">Address</label>
              <div className="flex rounded-md border border-slate-200 bg-slate-50 mt-2  w-[220px]">
                <Input
                  placeholder={patient.address}
                  className="shad-input border-0"
                  disabled
                />
              </div>
            </div>

            <div>
              <label className="text-slate-400 text-sm">Email Address</label>
              <div className="flex rounded-md border border-slate-200 bg-slate-50 mt-2  w-[220px]">
                <Input
                  placeholder={patient.email}
                  className="shad-input border-0"
                  disabled
                />
              </div>
            </div>

            <div>
              <label className="text-slate-400 text-sm">Phone Number</label>
              <div className="flex rounded-md border border-slate-200 bg-slate-50 mt-2  w-[220px]">
                <Input
                  placeholder={patient.phone}
                  className="shad-input border-0"
                  disabled
                />
              </div>
            </div>

            <div>
              <label className="text-slate-400 text-sm">Birthdate</label>
              <div className="flex rounded-md border border-slate-200 bg-slate-50 mt-2 w-[220px]">
                <Input
                  placeholder={formatDateTime(patient.birthDate).dateOnly}
                  className="shad-input border-0"
                  disabled
                />
              </div>
            </div>

            <div>
              <label className="text-slate-400 text-sm">Gender</label>
              <div className="flex rounded-md border border-slate-200 bg-slate-50 mt-2  w-[220px]">
                <Input
                  placeholder={patient.gender}
                  className="shad-input border-0"
                  disabled
                />
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-6 mt-10">
          <div className="mb-1 space-y-1">
            <h2 className="text-md">Emergency Contact</h2>
          </div>

          <div className="flex flex-col gap-6 xl:flex-row mb-6 flex-wrap">
            <div>
              <label className="text-slate-400 text-sm">Emergency Contact</label>
              <div className="flex rounded-md border border-slate-200 bg-slate-50 mt-2  w-[220px]">
                <Input
                  placeholder={patient.emergencyContactName}
                  className="shad-input border-0"
                  disabled
                />
              </div>
            </div>

            <div>
              <label className="text-slate-400 text-sm">Emergency Number</label>
              <div className="flex rounded-md border border-slate-200 bg-slate-50 mt-2  w-[220px]">
                <Input
                  placeholder={patient.emergencyContactNumber}
                  className="shad-input border-0"
                  disabled
                />
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-6 mt-10">
          <div className="mb-1 space-y-1">
            <h2 className="text-md">Medical Information</h2>
          </div>

          <div className="flex flex-col gap-6 xl:flex-row mb-6 flex-wrap">
            <div>
              <label className="text-slate-400 text-sm">Current Medication</label>
              <div className="flex rounded-md border border-slate-200 bg-slate-50 mt-2  w-[220px]">
                <Textarea
                  placeholder={patient.currentMedication}
                  className="shad-textArea"
                  disabled
                />
              </div>
            </div>

            <div>
              <label className="text-slate-400 text-sm">Emergency Number</label>
              <div className="flex rounded-md border border-slate-200 bg-slate-50 mt-2  w-[220px]">
                <Input
                  placeholder={patient.emergencyContactNumber}
                  className="shad-input border-0"
                  disabled
                />
              </div>
            </div>
          </div>
        </section>
    </div>
  )
}

export default PatientDetailsForm