'use client';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function PatientDetails() {
	const [patientData, setPatientData] = useState([]);
	useEffect(() => {
		let token = localStorage.getItem('token');
		const authorization = {
			headers: {
				Authorization: token,
			},
		};
		axios
			.get('http://localhost:5000/user/patientDetail', authorization)
			.then((data) => {
				setPatientData(data.data.data);
			})
			.catch((err) => alert('some error occured please try again'));
	}, []);
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
							<h3 className="text-white text-2xl mb-5">
								{patientData.age}
							</h3>
						</center>
					</div>
					<div className="">
						<center>
							<h4 className="text-[#F9AAD0] mb-2 text-xl">
								Weight
							</h4>
						</center>
						<center>
							<h3 className="text-white text-2xl mb-5">
								{patientData.weight} KG
							</h3>
						</center>
					</div>
					<div className="">
						<center>
							<h4 className="text-[#F9AAD0] mb-2 text-xl">
								Height
							</h4>
						</center>
						<center>
							<h3 className="text-white text-2xl mb-2">
								{patientData.height} cm
							</h3>
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
								{patientData.bloodGroup !== undefined
									? patientData.bloodGroup.slice(
											0,
											patientData.bloodGroup.length - 1
									  )
									: null}
								<sup className="">
									{patientData.bloodGroup !== undefined
										? patientData.bloodGroup.slice(
												patientData.bloodGroup.length -
													1,
												patientData.bloodGroup.length
										  )
										: null}
								</sup>
							</h3>
						</center>
					</div>
				</div>
			</div>
		</div>
	);
}

export default PatientDetails;
