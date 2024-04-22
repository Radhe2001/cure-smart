'use client';
import React, { useState } from 'react';
import BasicDetails from './components/BasicDetails';
import MedicalDetails from './components/MedicalDetails';
function Profile() {
	const [active, setActive] = useState(1);
	return (
		<main className="bg-[#F9AAD0] h-[84vh]">
			<center className="mb-6">
				<h2 className="text-4xl font-bold text-white tracking-wider">
					My Profile
				</h2>
			</center>
			<section className="flex place-content-center">
				<div className=" w-[80vw] pb-10">
					<div className="flex gap-1">
						<div
							className={`${
								active === 1 ? 'bg-[#502779]' : 'bg-[#26024b]'
							} cursor-pointer text-white text-2xl font-semibold px-10 py-3 rounded-t-2xl`}
							onClick={() => setActive(1)}
						>
							Basic Details
						</div>
						<div
							className={`${
								active === 2 ? 'bg-[#502779]' : 'bg-[#26024b]'
							} cursor-pointer text-white text-2xl font-semibold px-10 py-3 rounded-t-2xl`}
							onClick={() => setActive(2)}
						>
							Medical Details
						</div>
					</div>
					<div className="w-full bg-[#502779] rounded-tr-3xl rounded-b-3xl px-[2vw] py-[1vw]">
						{active === 1 ? <BasicDetails /> : <MedicalDetails />}
					</div>
				</div>
			</section>
		</main>
	);
}

export default Profile;
