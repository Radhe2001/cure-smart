'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import axios from 'axios';

function Doctor() {
	const [data, setData] = useState([]);
	useEffect(() => {
		axios
			.get('https://cure-smart-backend.onrender.com/admin/doctors')
			.then((data) => {
				setData(data.data.user);
			})
			.catch((err) => alert('some error occured please try again'));
	}, []);
	return (
		<section className="pb-10">
			<center className="text-white text-5xl font-serif font-semibold italic tracking-wider">
				Doctor List
			</center>
			<section className="flex place-content-center my-10">
				<div className="w-[75vw] grid grid-cols-3 gap-[3vw]">
					{data.map((item, index) => {
						return (
							<div
								className="bg-[#91398b] rounded-3xl w-[23vw] py-[2vw]"
								key={index}
							>
								<div className="flex place-content-center">
									<img
										className="h-[10vw] w-[10vw]"
										src={
											item.image === ''
												? '/images/Doctor_logo.png'
												: 'https://cure-smart-backend.onrender.com/Images/' +
												  item.image
										}
										alt=""
									/>
								</div>
								<center>
									<h2 className="text-white text-2xl font-semibold italic font-serif tracking-wider pt-2">
										{item.name}
									</h2>
								</center>
								<center>
									<h3 className="text-white text-lg font-semibold italic font-serif tracking-wider pt-1 pb-3 mb-3 w-[10vw] border-b-4 border-[#F9AAD0]">
										{item.specialization}
									</h3>
								</center>
								<center>
									<h3 className="text-white text-lg font-semibold font-mono tracking-wider w-full px-[2vw] text-justify">
										{item.description}
									</h3>
								</center>
								<center className="mt-3">
									<h3 className="  w-[10vw] text-lg font-bold tracking-widest border-y-4 border-[#F9AAD0] text-white font-serif mb-4">
										<span className="tracking-wider pr-1 text-lg font-semibold italic ">
											Rating
										</span>{' '}
										{item.rating}
									</h3>
								</center>
								<Link
									className="flex place-content-center place-items-center"
									href={{
										pathname: '/patient/raiserequest',
										query: {
											doc: `${item._id}`,
										},
									}}
								>
									<button className=" text-white text-xl font-serif font-semibold tracking-widest bg-[#3b1739c5] px-[2.5vw] py-2 rounded-full">
										Request Prescription
									</button>
								</Link>
							</div>
						);
					})}
				</div>
			</section>
		</section>
	);
}

export default Doctor;
