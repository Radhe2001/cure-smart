'use client';
import React, { useState } from 'react';
import axios from 'axios';

function Notification() {
	const [notification, setNotification] = useState('');
	const handleAdd = () => {
		axios
			.post('http://localhost:5000/admin/notification/add', {
				notification: notification,
			})
			.then((data) => {
				alert('notification added successfully');
				setNotification('');
			})
			.catch((err) => alert('failed to add notification'));
	};
	return (
		<div className="w-full">
			<center>
				<h3 className="text-white font-semibold tracking-wider text-3xl font-serif py-4">
					Add Notification
				</h3>
			</center>
			<div className="px-4 py-8 h-[11vw] rounded-3xl bg-[#91398B]">
				<div className="flex place-content-center place-items-center gap-[2vw] px-6 bg-[#91398B] overflow-x-hidden ">
					<textarea
						name="notification"
						id="notification"
						value={notification}
						onChange={(e) => setNotification(e.target.value)}
						className="h-[8vw] w-[25vw] py-2 px-4 text-xl font-semibold tracking-wider rounded-xl"
					></textarea>
					<button
						className="text-2xl text-[#91398B] bg-[#ffffff] hover:bg-[#ffffffc0] font-semibold tracking-wider rounded-xl px-6 py-2"
						onClick={handleAdd}
					>
						Add
					</button>
				</div>
			</div>
		</div>
	);
}

export default Notification;
