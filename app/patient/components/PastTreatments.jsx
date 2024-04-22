import React from 'react';

function PastTreatments() {
	let arr = [
		{
			date: "18 Aug '23",
			treatment: 'Orthopedic',
			doctor: 'Dr. XYZ',
		},
		{
			date: "2 Mar '24",
			treatment: 'ENT',
			doctor: 'Dr. ABC',
		},
		{
			date: "6 Nov '23",
			treatment: 'Dental',
			doctor: 'Dr. CDE',
		},
		{
			date: "6 Nov '23",
			treatment: 'Dental',
			doctor: 'Dr. CDE',
		},
		{
			date: "6 Nov '23",
			treatment: 'Dental',
			doctor: 'Dr. CDE',
		},
		{
			date: "6 Nov '23",
			treatment: 'Dental',
			doctor: 'Dr. CDE',
		},
		{
			date: "6 Nov '23",
			treatment: 'Dental',
			doctor: 'Dr. CDE',
		},
		{
			date: "6 Nov '23",
			treatment: 'Dental',
			doctor: 'Dr. CDE',
		},
		{
			date: "6 Nov '23",
			treatment: 'Dental',
			doctor: 'Dr. CDE',
		},
		{
			date: "6 Nov '23",
			treatment: 'Dental',
			doctor: 'Dr. CDE',
		},
		{
			date: "6 Nov '23",
			treatment: 'Dental',
			doctor: 'Dr. CDE',
		},
		{
			date: "6 Nov '23",
			treatment: 'Dental',
			doctor: 'Dr. CDE',
		},
	];
	return (
		<div className="w-full">
			<center>
				<h3 className="text-white font-semibold tracking-wider text-3xl font-serif py-4">
					Past Treatments
				</h3>
			</center>
			<div className="px-4 py-8 rounded-3xl bg-[#91398B]">
				<div className=" px-6 h-[30vh] bg-[#91398B] overflow-x-hidden overflow-y-scroll">
					{arr.map((item, index) => {
						return (
							<div
								className="py-2 px-4 mb-4 bg-white grid grid-cols-4 place-content-center place-items-center rounded-md"
								key={index}
							>
								<h3 className="text-[#91398B] font-semibold text-xl">
									{item.date}
								</h3>
								<div className="grid">
									<center>
										<h5 className="text-[#F9AAD0]">
											Treatment
										</h5>
									</center>
									<center>
										<h3 className="text-[#91398B] text-xl font-semibold">
											{item.treatment}
										</h3>
									</center>
								</div>
								<div className="grid">
									<center>
										<h5 className="text-[#F9AAD0]">
											Doctor
										</h5>
									</center>
									<center>
										<h3 className="text-[#91398B] text-xl font-semibold">
											{item.doctor}
										</h3>
									</center>
								</div>
								<div className="flex place-items-center gap-4 ">
									<img
										className="h-8 w-8"
										src="/images/Note.png"
										alt=""
									/>
									<h4 className="text-[#F9AAD0] text-xl">
										Note
									</h4>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}

export default PastTreatments;
