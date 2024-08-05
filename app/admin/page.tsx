import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from 'react'
import { StatCard } from "@/components/StatCard";
import { columns } from "@/components/table/columns";
import { patientColumns } from "@/components/table/patientColumns";
import { DataTable } from "@/components/table/DataTable";
import { getRecentAppointmentList } from "@/lib/actions/appointment.actions";
import { getPatientList } from "@/lib/actions/patient.actions";
import { PatientTable } from "@/components/table/PatientTable";

const AdminPage = async () => {
  const appointments = await getRecentAppointmentList();
  const patients = await getPatientList()



  return (
    <div className="mx-auto flex max-w-7xl flex-col space-y-14">
      <header className="admin-header">
        <Link href="/login" className="cursor-pointer">
          <Image
            src="/assets/icons/logo-full.svg"
            height={32}
            width={162}
            alt="logo"
            className="h-8 w-fit"
          />
        </Link>
        <p className="text-16-semibold text-slate-600">Admin Dashboard</p>
      </header>

      <main className="admin-main">
        <section className="w-full space-y-4">
          <h1 className="header">Welcome</h1>
          <p className="text-slate-600">
            Start the day with managing new appointments
          </p>
        </section>

        <section className="admin-stat">
          <StatCard
            type="appointments"
            count={appointments.scheduledCount}
            label="Scheduled appointments"
            icon={"/assets/icons/appointments.svg"}
          />
          <StatCard
            type="pending"
            count={appointments.pendingCount}
            label="Pending appointments"
            icon={"/assets/icons/pending.svg"}
          />
          <StatCard
            type="cancelled"
            count={appointments.cancelledCount}
            label="Cancelled appointments"
            icon={"/assets/icons/cancelled.svg"}
          />
        </section>

        <DataTable columns={columns} data={appointments.documents} />
        <PatientTable columns={patientColumns} data={patients} />

        {/* {patients.map((patient:any) => (
          <p key={patient.name}>{patient.name}</p>
        ))} */}
      </main>
    </div>
  );
};

export default AdminPage;
