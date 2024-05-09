'use client';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function DoctorRequest() {
	const [requestList, setRequestList] = useState([]);
	const [toggle, setToggle] = useState(false);
	useEffect(() => {
		axios
			.get('http://localhost:5000/admin/request')
			.then((data) => {
				if (data.status === 200) {
					setRequestList(data.data.user);
				}
			})
			.catch((err) => console.log(err));
	}, [toggle]);
	const handleApprove = (id) => {
		axios
			.post(`http://localhost:5000/admin/approve/${id}`)
			.then((data) => {
				if (data.status === 200) alert('Doctor approved successfully');
			})
			.catch((err) => {
				if (err.response.status === 400) alert('Some error occured');
			});
		setToggle(!toggle);
	};
	return (
		<div className="w-full">
			<center>
				<h3 className="text-white font-semibold tracking-wider text-3xl font-serif py-4">
					Doctor Registration Request
				</h3>
			</center>
			<div className="px-4 py-8 rounded-3xl bg-[#91398B]">
				<div className=" px-6 h-[60vh] bg-[#91398B] overflow-x-hidden overflow-y-scroll">
					{requestList.map((item, index) => {
						return (
							<div
								className="py-2 px-4 mb-4 bg-white grid grid-cols-3 place-content-center place-items-center rounded-md"
								key={index}
							>
								<div className="grid">
									<center>
										<h5 className="text-[#F9AAD0]">Name</h5>
									</center>
									<center>
										<h3 className="text-[#91398B] text-xl font-semibold">
											{item.name}
										</h3>
									</center>
								</div>
								<div className="grid">
									<center>
										<h5 className="text-[#F9AAD0]">
											Email
										</h5>
									</center>
									<center>
										<h3 className="text-[#91398B] text-xl font-semibold">
											{item.email}
										</h3>
									</center>
								</div>
								<div className="flex place-items-center gap-4 ">
									<button
										className="bg-[#91398b] text-white px-6 py-2 text-xl font-semibold tracking-wider rounded-2xl"
										onClick={() => handleApprove(item._id)}
									>
										Approve
									</button>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}

export default DoctorRequest;
