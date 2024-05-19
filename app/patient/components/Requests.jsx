'use client';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Requests() {
	const [requestDetail, setRequsetDetail] = useState([]);
	useEffect(() => {
		let token = localStorage.getItem('token');
		const authorization = {
			headers: {
				Authorization: token,
			},
		};
		axios
			.get(
				'https://cure-smart-backend.onrender.com/user/requests',
				authorization
			)
			.then((data) => {
				setRequsetDetail(data.data.data);
			})
			.catch((err) => alert('some error occured please try again'));
	}, []);
	return (
		<div className="w-full">
			<center>
				<h3 className="text-white font-semibold tracking-wider text-3xl font-serif py-2">
					Requests
				</h3>
			</center>
			<div className="bg-[#91398B] h-[16vw] flex place-items-center place-content-center px-8 py-6 rounded-3xl">
				<div className="">
					<div className="mb-6">
						<div className="flex place-items-center gap-5">
							<div className="h-4 w-4 bg-gradient-to-b from-[#ff3377] to-[#097dff]"></div>
							<h3 className="text-[#F9AAD0] text-2xl font-semibold tracking-wider">
								Total Requests Raised
							</h3>
						</div>
						<h3 className="pl-9 pt-2 text-4xl font-semibold text-white tracking-widest">
							{requestDetail.total !== undefined
								? requestDetail.total < 10
									? requestDetail.total
											.toString()
											.padStart(2, '0')
									: requestDetail.total.toString()
								: '00'}
						</h3>
					</div>
					<div className="mb-6">
						<div className="flex place-items-center gap-5">
							<div className="h-4 w-4 bg-gradient-to-b from-[#ff3377] to-[#097dff]"></div>
							<h3 className="text-[#F9AAD0] text-2xl font-semibold tracking-wider">
								Total Active Requests
							</h3>
						</div>
						<h3 className="pl-9 pt-2 text-4xl font-semibold text-white tracking-widest">
							{requestDetail.active !== undefined
								? requestDetail.active < 10
									? requestDetail.active
											.toString()
											.padStart(2, '0')
									: requestDetail.active.toString()
								: '00'}
						</h3>
					</div>
					<div className="">
						<div className="flex place-items-center gap-5">
							<div className="h-4 w-4 bg-gradient-to-b from-[#ff3377] to-[#097dff]"></div>
							<h3 className="text-[#F9AAD0] text-2xl font-semibold tracking-wider">
								Prescription Issued
							</h3>
						</div>
						<h3 className="pl-9 pt-2 text-4xl font-semibold text-white tracking-widest">
							{requestDetail.past !== undefined
								? requestDetail.past < 10
									? requestDetail.past
											.toString()
											.padStart(2, '0')
									: requestDetail.past.toString()
								: '00'}
						</h3>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Requests;
