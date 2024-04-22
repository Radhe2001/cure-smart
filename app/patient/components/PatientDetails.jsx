import React from 'react';

function PatientDetails() {
	return (
		<div className="w-full">
			<center>
				<h3 className="text-white font-semibold tracking-wider text-3xl font-serif py-2">
					Patient Details
				</h3>
			</center>
			<div className=" bg-[#91398B] h-[12vw] place-content-center place-items-center flex rounded-3xl ">
				<div className="w-full px-8 py-6 grid grid-cols-2">
					<div className="">
						<center>
							<h4 className="text-[#F9AAD0] mb-2 text-xl">Age</h4>
						</center>
						<center>
							<h3 className="text-white text-2xl mb-5">36</h3>
						</center>
					</div>
					<div className="">
						<center>
							<h4 className="text-[#F9AAD0] mb-2 text-xl">
								Weight
							</h4>
						</center>
						<center>
							<h3 className="text-white text-2xl mb-5">80 KG</h3>
						</center>
					</div>
					<div className="">
						<center>
							<h4 className="text-[#F9AAD0] mb-2 text-xl">
								Height
							</h4>
						</center>
						<center>
							<h3 className="text-white text-2xl mb-2">182 cm</h3>
						</center>
					</div>
					<div className="">
						<center>
							<h4 className="text-[#F9AAD0] mb-2 text-xl">
								Blood
							</h4>
						</center>
						<center>
							<h3 className="text-white text-2xl mb-2">
								O<sup className="">+</sup>
							</h3>
						</center>
					</div>
				</div>
			</div>
		</div>
	);
}

export default PatientDetails;
