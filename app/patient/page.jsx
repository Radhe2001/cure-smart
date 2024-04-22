'use client';
import { useState } from 'react';
import PatientDetails from './components/PatientDetails';
import Appointments from './components/Appointments';
import PastTreatments from './components/PastTreatments';
import Requests from './components/Requests';
import Status from './components/Status';
export default function Home() {
	return (
		<main className="bg-[#F9AAD0] h-[84vh] ">
			<center className="mb-6">
				<h2 className="text-4xl font-bold text-white tracking-widest">
					Dashboard
				</h2>
			</center>
			<section className="flex gap-[2.5vw] place-content-center place-items-center pb-10">
				<div className="">
					<div className="flex gap-[2.5vw] mb-6">
						<div className="w-[25vw] ">
							<PatientDetails />
						</div>
						<div className="w-[25vw] ">
							<Appointments />
						</div>
					</div>
					<div className="w-[52vw] ">
						<PastTreatments />
					</div>
				</div>
				<div className="">
					<div className="w-[24vw] mb-[1vw]">
						<Requests />
					</div>
					<div className="w-[24vw] ">
						<Status />
					</div>
				</div>
			</section>
		</main>
	);
}
