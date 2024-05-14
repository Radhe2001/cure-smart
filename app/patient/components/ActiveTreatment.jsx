'use client';
import React, { useEffect, useState } from 'react';
import { useAppData } from '@/app/context';
import axios from 'axios';

function ActiveTreatment({ setView, setViewId }) {
	const [array, setArray] = useState([]);
	const { darkBg, setDarkBg } = useAppData();
	useEffect(() => {
		let token = localStorage.getItem('token');
		const authorization = {
			headers: {
				Authorization: token,
			},
		};
		axios
			.get('http://localhost:5000/user/activeTreatment', authorization)
			.then((data) => {
				setArray(data.data.data);
			})
			.catch((err) => alert('some error occured please try again'));
	}, []);
	return (
		<div className="w-full">
			<center>
				<h3 className="text-white font-semibold tracking-wider text-3xl font-serif py-4">
					Active Treatments
				</h3>
			</center>
			<div className="px-4 py-8 rounded-3xl bg-[#91398B]">
				<div className=" px-6 h-[24vh] bg-[#91398B] overflow-x-hidden overflow-y-scroll">
					{array
						? array.map((item, index) => {
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
													{item.doctor !== null
														? item.doctor.name
														: 'Radheshyam'}
												</h3>
											</center>
										</div>
										<div
											className="flex place-items-center gap-4 cursor-pointer"
											onClick={() => {
												setDarkBg(true);
												setView(true);
												setViewId(item._id);
											}}
										>
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
						  })
						: null}
				</div>
			</div>
		</div>
	);
}

export default ActiveTreatment;
