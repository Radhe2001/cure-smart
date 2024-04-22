'use client';
import React from 'react';
import ActiveTreatment from '../components/ActiveTreatment';
import PastTreatments from '../components/PastTreatments';
function Request() {
	return (
		<section className="flex place-content-center pb-10">
			<div className="w-[70vw] ">
				<PastTreatments className="mb-4" />
				<div className="h-6 w-10"></div>
				<ActiveTreatment />
			</div>
		</section>
	);
}

export default Request;
