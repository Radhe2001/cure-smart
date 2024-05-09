'use client';
import React, { useEffect, useState } from 'react';
import ActiveTreatment from './components/ActiveTreatment';
import PastTreatments from './components/PastTreatments';
import { useAppData } from '@/app/context';
import Link from 'next/link';
import axios from 'axios';

function Request() {
	const [add, setAdd] = useState(false);
	const [view, setView] = useState(false);
	const { darkBg, setDarkBg } = useAppData();
	const [addId, setAddId] = useState('');
	const [viewId, setViewId] = useState('');
	const [prescription, setPrescription] = useState('');
	const [activeData, setActiveData] = useState();
	const [viewData, setViewData] = useState();
	useEffect(() => {
		if (addId !== '') {
			axios
				.get(
					'http://localhost:5000/doctor/getActivePrescription/' +
						addId
				)
				.then((data) => {
					setActiveData(data.data);
				})
				.catch((err) => alert('some error occured'));
		}
	}, [addId]);
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
	const handleSend = () => {
		if (prescription !== '') {
			axios
				.post('http://localhost:5000/doctor/addPrescription', {
					prescription: prescription,
					id: addId,
				})
				.then((data) => alert('Prescription added successfully'))
				.catch((err) => alert('Failed to add the prescription'));
		} else alert('Please write prescription first');
	};
	return (
		<section className="flex place-content-center pb-10">
			<div
				className={`${darkBg ? 'bg-[#503642]' : 'bg-[#F9AAD0]'} ${
					view ? 'block' : 'hidden'
				} fixed ml-[5vw] w-[96vw] h-[85vh] flex  z-10 pr-[8vw] pt-[4vw]`}
			>
				<div className=" bg-[#91398b] w-[35vw] h-[23vw] ml-auto mr-auto rounded-3xl p-6 shadow-2xl shadow-black">
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
										{' '}
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
			<div
				className={`${darkBg ? 'bg-[#503642]' : 'bg-[#F9AAD0]'} ${
					add ? 'block' : 'hidden'
				} fixed ml-[5vw] w-[96vw] h-[100vh] flex  z-10 pr-[8vw] pt-[4vw]`}
			>
				<div className=" bg-[#91398b] w-[45vw] h-[32vw] ml-auto mr-auto rounded-3xl p-6 shadow-2xl shadow-black">
					<div className="relative w-full">
						<button
							className="absolute right-0 px-4 text-3xl text-white font-semibold"
							onClick={() => {
								setAdd(false);
								setDarkBg(false);
								setAddId('');
							}}
						>
							x
						</button>
					</div>
					<div className="flex place-content-center mt-4 ">
						{' '}
						<h2 className="text-3xl text-white font-semibold tracking-widest border-b-2 border-white  pb-1">
							Patient Details
						</h2>
					</div>
					{activeData ? (
						<div className="mt-6 p-6 grid">
							<div className="flex flex-wrap  ">
								<div className="flex gap-2 mr-5">
									<h3 className="text-[#c1c3cc] text-lg font-semibold tracking-wider">
										Patient Name
									</h3>
									<h4 className="text-[#c1c3cc] text-lg font-semibold">
										:{' '}
										<span className="ml-2 text-white text-lg tracking-wider">
											{activeData.name
												? activeData.name
												: 'User Name'}
										</span>{' '}
									</h4>
								</div>
								<div className="flex gap-2 mr-5">
									<h3 className="text-[#c1c3cc] text-lg font-semibold tracking-wider">
										DOB
									</h3>
									<h4 className="text-[#c1c3cc] text-lg font-semibold">
										:{' '}
										<span className="ml-2 text-white text-lg tracking-wider">
											{activeData.dob
												? activeData.dob
												: '2001-01-01'}
										</span>{' '}
									</h4>
								</div>
								<div className="flex gap-2 mr-5">
									<h3 className="text-[#c1c3cc] text-lg font-semibold tracking-wider">
										Gender
									</h3>
									<h4 className="text-[#c1c3cc] text-lg font-semibold">
										:{' '}
										<span className="ml-2 text-white text-lg tracking-wider">
											{activeData.gender
												? activeData.gender
												: 'Male'}
										</span>{' '}
									</h4>
								</div>
								<div className="flex gap-2 mr-5">
									<h3 className="text-[#c1c3cc] text-lg font-semibold tracking-wider">
										Blood Group
									</h3>
									<h4 className="text-[#c1c3cc] text-lg font-semibold">
										:{' '}
										<span className="ml-2 text-white text-lg tracking-wider">
											{activeData.bloodGroup
												? activeData.bloodGroup
												: 'O+'}
										</span>{' '}
									</h4>
								</div>
								<div className="flex gap-2 mr-5">
									<h3 className="text-[#c1c3cc] text-lg font-semibold tracking-wider">
										Height
									</h3>
									<h4 className="text-[#c1c3cc] text-lg font-semibold">
										:{' '}
										<span className="ml-2 text-white text-lg tracking-wider">
											{activeData.height
												? activeData.height
												: '160'}{' '}
											cm
										</span>{' '}
									</h4>
								</div>
								<div className="flex gap-2 mr-5">
									<h3 className="text-[#c1c3cc] text-lg font-semibold tracking-wider">
										Weight
									</h3>
									<h4 className="text-[#c1c3cc] text-lg font-semibold">
										:{' '}
										<span className="ml-2 text-white text-lg tracking-wider">
											{activeData.weight
												? activeData.weight
												: '60'}{' '}
											Kg
										</span>{' '}
									</h4>
								</div>
							</div>
							<div className="flex gap-2 mr-5">
								<h3 className="text-[#c1c3cc] text-lg font-semibold tracking-wider">
									Past Illnesses
								</h3>
								<h4 className="text-[#c1c3cc] text-lg font-semibold">
									:{' '}
									<span className="ml-2 text-white text-lg tracking-wider">
										{activeData.illness
											? activeData.illness.map(
													(ele, index) => {
														return (
															<span
																className=""
																key={index}
															>
																{ele + ','}
															</span>
														);
													}
											  )
											: 'None'}
									</span>{' '}
								</h4>
							</div>
							<div className="flex gap-2 mr-5">
								<h3 className="text-[#c1c3cc] text-lg font-semibold tracking-wider">
									Allergies
								</h3>
								<h4 className="text-[#c1c3cc] text-lg font-semibold">
									:{' '}
									<span className="ml-2 text-white text-lg tracking-wider">
										{activeData.allergy
											? activeData.allergy.map(
													(ele, index) => {
														return (
															<span
																className=""
																key={index}
															>
																{ele + ','}
															</span>
														);
													}
											  )
											: 'None'}
									</span>{' '}
								</h4>
							</div>
							<div className="flex place-content-center">
								<span className="border-b-4 border-[#f9aad0] w-[30vw] h-2 my-4"></span>
							</div>
							<div className="grid grid-cols-2">
								<h3 className="text-[#c1c3cc] text-xl font-semibold tracking-wider">
									Current Issue
								</h3>
								<h4 className="text-[#c1c3cc] text-xl font-semibold">
									:{' '}
									<span className="ml-4 text-white text-lg tracking-wider">
										{activeData.issue
											? activeData.issue
											: 'None'}{' '}
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
											activeData.test
										}
										download="filename.jpg"
									>
										{activeData.test
											? activeData.test
											: 'None'}{' '}
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
											activeData.symptom
										}
										download="filename.jpg"
									>
										{' '}
										{activeData.symptom
											? activeData.symptom
											: 'None'}{' '}
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
							<div className="grid">
								<div className="grid mt-3">
									<textarea
										name="prescription"
										className="border-gray-300 text-2xl font-normal font-serif tracking-wider rounded-2xl px-6 py-3 h-[6vw] focus:outline-none border-none text-slate-800 bg-[#f9aad0] "
										onChange={(e) =>
											setPrescription(e.target.value)
										}
										value={prescription}
										required={true}
									></textarea>
									<div className="flex place-content-center">
										<button
											className="bg-[#c1c3cc] text-white px-6 py-2 mt-6 text-xl font-semibold tracking-wider rounded-full hover:bg-[#636a85]"
											onClick={handleSend}
										>
											Send
										</button>
									</div>
								</div>
							</div>
						</div>
					) : null}
				</div>
			</div>
			<div className="w-[70vw] ">
				<ActiveTreatment
					className="mb-4"
					setAdd={setAdd}
					setAddId={setAddId}
				/>
				<div className="h-6 w-10"></div>
				<PastTreatments setView={setView} setViewId={setViewId} />
			</div>
		</section>
	);
}

export default Request;
