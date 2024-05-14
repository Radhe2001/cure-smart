'use client';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function NotificationList() {
	const [notificationList, setNotificationList] = useState([]);
	useEffect(() => {
		axios
			.get('http://localhost:5000/admin/notification/get')
			.then((data) => {
				setNotificationList(data.data);
			})
			.catch((err) => alert('failed to add notification'));
	}, []);
	const handleRemove = (id) => {
		axios
			.delete('http://localhost:5000/admin/notification/delete/' + id)
			.then((data) => {
				alert('Notification removed successfully');
			})
			.catch((err) => alert('failed to remove notification'));
	};
	return (
		<div className="w-full">
			<center>
				<h3 className="text-white font-semibold tracking-wider text-3xl font-serif py-4">
					Doctor Registration Request
				</h3>
			</center>
			<div className="px-4 py-8 rounded-3xl bg-[#91398B]">
				<div className=" px-6 h-[17vh] bg-[#91398B] overflow-x-hidden overflow-y-scroll">
					{notificationList.map((item, index) => {
						return (
							<div
								className="py-2 px-4 mb-4 bg-white grid grid-cols-3 place-content-center place-items-center rounded-md"
								key={index}
							>
								<div className="grid">
									<center>
										<h5 className="text-[#F9AAD0]">
											Notification
										</h5>
									</center>
									<center>
										<h3 className="text-[#91398B] text-xl font-semibold">
											{item.mes}
										</h3>
									</center>
								</div>
								<div className="grid">
									<center>
										<h5 className="text-[#F9AAD0]">Date</h5>
									</center>
									<center>
										<h3 className="text-[#91398B] text-xl font-semibold">
											{item.date}
										</h3>
									</center>
								</div>
								<div className="flex place-items-center gap-4 ">
									<button
										className="bg-[#91398b] text-white px-6 py-2 text-xl font-semibold tracking-wider rounded-2xl"
										onClick={() => handleRemove(item._id)}
									>
										Delete
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

export default NotificationList;
