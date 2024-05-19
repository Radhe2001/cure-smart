'use client';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MedicalDetails from '../profile/components/MedicalDetails';
function Raiserequest({ searchParams }) {
	const [doctor, setDoctor] = useState('');
	const [doctors, setDoctors] = useState([]);
	const [user, setUser] = useState([]);
	const [id, setId] = useState('');
	const [disabled, setDisabled] = useState(false);
	const [test, setTest] = useState();
	const [symptoms, setSymptoms] = useState();
	const [description, setDescription] = useState('');
	const [doc, setDoc] = useState('');
	useEffect(() => {
		if (searchParams.doc === 'any') {
			setDisabled(false);
			axios
				.get('https://cure-smart-backend.onrender.com/admin/doctors')
				.then((data) => {
					setDoctors(data.data.user);
				})
				.catch((err) => alert('some error occured please try again'));
		} else {
			setDisabled(true);
			setId(searchParams.doc);
			axios
				.get(
					'https://cure-smart-backend.onrender.com/doctor/detail/' +
						searchParams.doc
				)
				.then((data) => {
					setDoctor(data.data.user);
					setDoc(data.data.user.name);
				})
				.catch((err) => alert('some error occured please try again'));
		}
	}, []);

	const handleClick = () => {
		let token = localStorage.getItem('token');
		const authorization = {
			headers: {
				Authorization: token,
			},
		};
		if (token) {
			const formData = new FormData();
			formData.append('description', description);
			formData.append('test', test);
			formData.append('symptoms', symptoms);
			formData.append('doc', doc);
			axios
				.post(
					'https://cure-smart-backend.onrender.com/doctor/prescriptionRequest',
					formData,
					authorization
				)
				.then((data) => {
					if (data.status === 200)
						alert('prescription requested successfully');
					else alert('failed to request prescription');
				})
				.catch((err) => {
					alert('Some unexpected error occurred');
				});
		} else alert('please provide the image');
	};

	return (
		<section className={`pb-10 `}>
			<center className="text-white text-5xl font-serif font-semibold italic tracking-wider">
				Raise Prescription Request
			</center>
			<section className="flex place-content-center my-10">
				<div className="w-[68vw] bg-[#91398b] p-[1.5vw] rounded-3xl">
					<div className="flex">
						<div className="flex place-items-center place-content-center w-full gap-[3vw] pb-[2vw] border-b-4 border-[#f9aad0]">
							<label
								className="text-white text-3xl tracking-wider font-serif font-semibold italic mb-2 ml-3"
								htmlFor="language"
							>
								Select Doctor
							</label>
							<select
								className="border-gray-300 text-2xl font-normal font-serif tracking-wider rounded-2xl px-6 py-3 focus:outline-none border-none w-[25vw] bg-[#f9aad0] text-slate-800"
								name="doctor"
								onChange={(e) => setDoc(e.target.value)}
								disabled={disabled}
							>
								<option value="choose">
									{disabled ? doctor.name : 'Choose'}
								</option>
								{doctors.map((element, index) => {
									return (
										<option
											value={element.name}
											key={index}
										>
											{element.name}
										</option>
									);
								})}
							</select>
							<div
								className="h-[10vw] w-[10vw]  bg-cover ml-[2vw]"
								style={{
									backgroundImage: `url(${
										disabled
											? 'https://cure-smart-backend.onrender.com/Images/' +
											  doctor.image
											: '/images/Doctor_logo.png'
									})`,
								}}
							></div>
						</div>
					</div>
					<div className="flex place-content-center place-items-center">
						<div className="grid my-[2vw] gap-[1vw]">
							<div className="flex place-items-center">
								<label
									className="w-[20vw] text-white text-2xl tracking-wider font-serif font-semibold italic mb-2 ml-3"
									htmlFor="phone"
								>
									Describe your medical issue :
								</label>
								<textarea
									type="number"
									className="border-gray-300 text-2xl font-normal font-serif tracking-wider rounded-2xl px-6 py-3 h-[6vw] focus:outline-none border-none text-slate-800 bg-[#f9aad0] w-[35vw]"
									name="phone"
									onChange={(e) =>
										setDescription(e.target.value)
									}
									required={true}
								></textarea>
							</div>
							<div className="flex place-items-center">
								<label
									className="w-[20vw] text-white text-2xl tracking-wider font-serif font-semibold italic mb-2 ml-3"
									htmlFor="phone"
								>
									Medical test report (if any) :
								</label>
								<input
									type="file"
									className="w-[20vw] px-6 py-3 text-2xl font-serif font-semibold tracking-widest rounded-2xl bg-[#f9aad0] active:bg-[#f9aad0] text-slate-800"
									name="test"
									onChange={(e) => setTest(e.target.files[0])}
								/>
							</div>
							<div className="flex place-items-center">
								<label
									className="w-[20vw] text-white text-2xl tracking-wider font-serif font-semibold italic mb-2 ml-3"
									htmlFor="phone"
								>
									Symptom Images (if any) :
								</label>
								<input
									type="file"
									className="w-[20vw] px-6 py-3 text-2xl font-serif font-semibold tracking-widest rounded-2xl bg-[#f9aad0] active:bg-[#f9aad0] text-slate-800"
									name="symptoms"
									onChange={(e) =>
										setSymptoms(e.target.files[0])
									}
								/>
							</div>
							<div className="flex place-content-center place-items-center mt-[1vw]">
								<button
									className=" text-white text-2xl font-serif font-semibold tracking-widest bg-[#502779] px-[2.5vw] py-3 rounded-full"
									onClick={handleClick}
								>
									Request Prescription
								</button>
							</div>
						</div>
					</div>
				</div>
			</section>
		</section>
	);
}

export default Raiserequest;
