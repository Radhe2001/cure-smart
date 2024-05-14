'use client';
import React, { useState } from 'react';
import DoctorRequest from './components/DoctorRequest';
import DoctorList from './components/DoctorList';
import Notification from './components/Notification';
import NotificationList from './components/NotificationList';
function Request() {
	return (
		<section className="flex place-content-center pb-10">
			<div className="w-[100%] grid grid-cols-2  px-[5vw] mt-[2vw] gap-[2vw]">
				<DoctorRequest className="mb-4" />
				<DoctorList className="mb-4" />
				<Notification className="mb-4" />
				<NotificationList className="mb-4" />
			</div>
		</section>
	);
}

export default Request;
