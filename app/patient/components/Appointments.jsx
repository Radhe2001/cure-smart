import React from 'react';

function Appointments() {
	return (
		<div className="w-full ">
			<div className="flex py-2">
				<div className="flex place-items-center mr-auto">
					<img
						src="/images/Arrow.png "
						alt=""
						className="rotate-180 h-8 w-8"
					/>
				</div>
				<h3 className="text-white font-semibold tracking-wider text-3xl font-serif ">
					Today&apos;s Appointment
				</h3>
				<div className="flex place-items-center ml-auto">
					<img src="/images/Arrow.png " alt="" className="h-8 w-8" />
				</div>
			</div>
			<div className="bg-[#91398B] h-[12vw] px-8 py-6 rounded-3xl">
				<div className="flex place-content-center place-items-center gap-10 mb-6">
					<div
						className="bg-slate-700 h-20 w-20 bg-cover  rounded-full"
						style={{
							backgroundImage: 'url(/images/Doctor_logo.png)',
						}}
					></div>
					<div className="">
						<center>
							<h3 className="text-white font-semibold tracking-wider text-3xl font-serif mb-2">
								Dr. XYZ
							</h3>
						</center>
						<center>
							<h4 className="text-[#F9AAD0] text-2xl font-light">
								H.O.D. Surgery
							</h4>
						</center>
					</div>
				</div>
				<center>
					<h3 className="text-[#F9AAD0] text-2xl font-semibold tracking-wider font-serif mb-1">
						Scheduled Appointment
					</h3>
				</center>
				<div className="flex place-content-center border-t-4 border-t-[#F9AAD0] pt-1">
					<div className="grid grid-cols-2 w-full">
						<h3 className="text-[#F9AAD0] flex place-content-center mb-1 text-xl font-serif  tracking-wider">
							Date
						</h3>
						<h3 className="text-[#F9AAD0] flex place-content-center mb-1 text-xl font-serif tracking-wider">
							Time
						</h3>
						<h3 className="text-white flex place-content-center text-2xl font-semibold">
							15-04-24
						</h3>
						<h3 className="text-white flex place-content-center text-2xl font-semibold">
							10:30 AM
						</h3>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Appointments;
