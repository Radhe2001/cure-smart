'use client';
import React, { useEffect, useState } from 'react';
import ActiveTreatment from '../components/ActiveTreatment';
import PastTreatments from '../components/PastTreatments';
import { useAppData } from '@/app/context';
import Link from 'next/link';
import axios from 'axios';

function Request() {
	const [viewId, setViewId] = useState('');
	const { darkBg, setDarkBg } = useAppData();
	const [view, setView] = useState(false);
	const [viewData, setViewData] = useState();
	useEffect(() => {
		if (viewId !== '') {
			axios
				.get(
					'http://localhost:5000/doctor/getPastPrescription/' + viewId
				)
				.then((data) => {
					setViewData(data.data);
				})
				.catch((err) => alert('some error occured'));
		}
	}, [viewId]);
	return (
		<section className="flex place-content-center pb-10">
			<div
				className={`${darkBg ? 'bg-[#503642]' : 'bg-[#F9AAD0]'} ${
					view ? 'block' : 'hidden'
				} fixed ml-[5vw] w-[96vw] h-[85vh] flex  z-10 pr-[8vw] pt-[4vw]`}
			>
				<div className=" bg-[#91398b] w-[40vw] h-[23vw] ml-auto mr-auto rounded-3xl p-6 shadow-2xl shadow-black">
					<div className="relative w-full">
						<button
							className="absolute right-0 px-4 text-3xl text-white font-semibold"
							onClick={() => {
								setView(false);
								setDarkBg(false);
							}}
						>
							x
						</button>
					</div>
					<div className="flex place-content-center mt-4 ">
						{' '}
						<h2 className="text-3xl text-white font-semibold tracking-widest border-b-2 border-white pb-1">
							View Prescription
						</h2>
					</div>
					{viewData ? (
						<div className="mt-6 p-6 grid">
							<div className="grid grid-cols-2">
								<h3 className="text-[#c1c3cc] text-xl font-semibold tracking-wider">
									Current Issue
								</h3>
								<h4 className="text-[#c1c3cc] text-xl font-semibold">
									:{' '}
									<span className="ml-4 text-white text-lg tracking-wider">
										{viewData.issue
											? viewData.issue
											: 'None'}
									</span>{' '}
								</h4>
							</div>
							<div className="grid grid-cols-2">
								<h3 className="text-[#c1c3cc] text-xl font-semibold tracking-wider">
									Test Report
								</h3>
								<h4 className="text-[#c1c3cc] text-xl font-semibold">
									:{' '}
									<Link
										className="ml-4 text-white hover:text-cyan-500 text-lg tracking-wider underline underline-offset-4"
										href={
											'http://localhost:5000/Images/' +
											viewData.test
										}
										download="filename.jpg"
									>
										{viewData.test ? viewData.test : 'None'}
									</Link>
								</h4>
							</div>
							<div className="grid grid-cols-2">
								<h3 className="text-[#c1c3cc] text-xl font-semibold tracking-wider">
									Symptom Image
								</h3>
								<h4 className="text-[#c1c3cc] text-xl font-semibold">
									:{' '}
									<Link
										className="ml-4 text-white hover:text-cyan-500 text-lg tracking-wider underline underline-offset-4"
										href={
											'http://localhost:5000/Images/' +
											viewData.symptom
										}
										download="filename.jpg"
									>
										{viewData.symptom
											? viewData.symptom
											: 'None'}
									</Link>
								</h4>
							</div>
							<div className="grid grid-cols-2">
								<h3 className="text-[#c1c3cc] text-xl font-semibold tracking-wider">
									Prescription
								</h3>
								<h4 className="text-[#c1c3cc] text-xl font-semibold">
									:
								</h4>
							</div>
							<div className="flex">
								<h4 className="mt-2 text-white text-lg tracking-wider text-justify">
									{viewData.prescription
										? viewData.prescription
										: 'None'}
								</h4>
							</div>
						</div>
					) : null}
				</div>
			</div>
			<div className="w-[70vw] ">
				<PastTreatments
					className="mb-4"
					setView={setView}
					setViewId={setViewId}
				/>
				<div className="h-6 w-10"></div>
				<ActiveTreatment setView={setView} setViewId={setViewId} />
			</div>
		</section>
	);
}

export default Request;
