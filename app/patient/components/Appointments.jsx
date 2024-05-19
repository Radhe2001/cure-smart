'use client';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Appointments() {
	const [notificationList, setNotificationList] = useState([]);
	useEffect(() => {
		axios
			.get(
				'https://cure-smart-backend.onrender.com/admin/notification/get'
			)
			.then((data) => {
				setNotificationList(data.data);
			})
			.catch((err) => alert('failed to add notification'));
	}, []);
	return (
		<div className="w-full ">
			<div className="flex py-2 place-content-center">
				<h3 className="text-white font-semibold tracking-wider text-3xl font-serif ">
					Announcements
				</h3>
			</div>
			<div className="px-2 py-3 rounded-3xl bg-[#91398B]">
				<div className=" px-4 h-[24vh] bg-[#91398B] overflow-x-hidden overflow-y-scroll">
					{notificationList.map((item, index) => {
						return (
							<div
								className="bg-white px-4 py-2 mb-4 rounded-xl grid"
								key={index}
							>
								<h3 className="text-[#91398B] text-justify text-lg font-semibold ">
									{item.mes}
								</h3>
								<h5 className="ml-auto text-[#8d5281]">
									{item.date}
								</h5>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}

export default Appointments;
