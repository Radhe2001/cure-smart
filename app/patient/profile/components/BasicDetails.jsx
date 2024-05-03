'use client';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function BasicDetails() {
	const [selectedOption, setSelectedOption] = useState('male');
	const [language, setLanguage] = useState('');
	const [disabled, setDisabled] = useState(true);
	const [name, setName] = useState('');
	const [dob, setDob] = useState('');
	const [file, setFile] = useState('/images/profile_default.png');
	const [email, setEmail] = useState('');
	const [number, setNumber] = useState('');
	const [address, setAddress] = useState('');
	const [toggle, setToggle] = useState(false);
	useEffect(() => {
		let token = localStorage.getItem('token');
		axios
			.get('http://localhost:5000/user/get', {
				headers: {
					Authorization: token,
				},
			})
			.then((data) => {
				setName(data.data.data.name);
				setDob(data.data.data.dob);
				setEmail(data.data.data.email);
				setNumber(data.data.data.phone);
				setSelectedOption(data.data.data.gender);
				setLanguage(data.data.data.language);
				setAddress(data.data.data.address);
				if (data.data.data.image !== '')
					setFile(
						'http://localhost:5000/Images/' + data.data.data.image
					);
				else setFile('/images/profile_default.png');
			})
			.catch((err) => alert('some error occured please try again'));
	}, [toggle]);
	const handleSubmit = (e) => {
		e.preventDefault();
		setDisabled(true);
		let token = localStorage.getItem('token');
		const authorization = {
			headers: {
				Authorization: token,
			},
		};
		if (token && file) {
			const formData = new FormData();
			formData.append('name', name);
			formData.append('email', email);
			formData.append('dob', dob);
			formData.append('file', file);
			formData.append('gender', selectedOption);
			formData.append('phone', number);
			formData.append('address', address);
			formData.append('language', language);
			axios
				.post(
					'http://localhost:5000/user/basicprofile',
					formData,
					authorization
				)
				.then((data) => {
					if (data.status === 200) alert('data saved successfully');
					else alert('failed to save data');
					setToggle(!toggle);
				})
				.catch((err) => {
					alert('Some unexpected error occurred');
				});
		} else alert('please provide the image');
	};
	return (
		<section className="">
			<div className="flex place-content-center">
				<form onSubmit={handleSubmit} className="my-10">
					<div className="mb-4 flex place-items-center gap-[2vw]">
						<div className="grid">
							<label
								htmlFor="name"
								className="text-white text-2xl tracking-wider font-serif font-semibold italic mb-2 ml-3"
							>
								Name
							</label>
							<input
								type="text"
								name="name"
								className="w-[30vw] px-6 py-3 text-2xl font-serif font-semibold tracking-wider rounded-2xl bg-[#f9aad0] text-slate-800"
								disabled={disabled}
								value={name}
								onChange={(e) => setName(e.target.value)}
								required={true}
							/>
						</div>
						<div className="grid">
							<label
								className="text-white text-2xl tracking-wider font-serif font-semibold italic mb-2 ml-3"
								htmlFor="dob"
							>
								Date of Birth
							</label>
							<input
								type="date"
								className="w-[20vw] px-6 py-3 text-2xl font-serif font-semibold tracking-wider rounded-2xl bg-[#f9aad0] text-slate-800"
								name="dob"
								disabled={disabled}
								value={dob}
								onChange={(e) => setDob(e.target.value)}
								required={true}
							/>
						</div>
						<div className="grid">
							<h2 className="text-white text-2xl tracking-wider font-serif font-semibold italic mb-2 ml-3">
								Profile Photo
							</h2>
							<div className="relative">
								<div
									className="h-[11vw] w-[11vw] bg-cover"
									style={{
										backgroundImage: `url(${file})`,
									}}
								>
									<div className="relative flex place-content-end place-items-end h-full mt-1">
										<input
											type="file"
											id="fileInput"
											className="hidden"
											disabled={disabled}
											onChange={(e) => {
												setFile(e.target.files[0]);
												console.log(e.target.files);
											}}
										/>
										<label
											htmlFor="fileInput"
											className=" cursor-pointer bg-blue-500 text-white px-4 py-2  h-[2vw] w-[2vw] bg-cover rounded-full"
											style={{
												backgroundImage:
													'url(/images/add_image.png)',
											}}
										></label>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="mb-12 flex gap-[2vw]">
						<div className="grid px-[2vw]">
							<label
								htmlFor="Gender"
								className="text-white text-2xl tracking-wider font-serif font-semibold italic mb-2 ml-3"
							>
								Gender
							</label>
							<div className="flex gap-[1vw]">
								<label className="text-white text-xl tracking-wider font-serif font-semibold italic mb-2  flex place-items-center">
									<input
										type="radio"
										name="gender"
										value="male"
										checked={selectedOption === 'male'}
										onChange={(e) => {
											setSelectedOption(e.target.value);
										}}
										required={true}
										disabled={disabled}
										className="mr-2 h-5 w-5"
									/>
									Male
								</label>
								<label className="text-white text-xl tracking-wider font-serif font-semibold italic mb-2 flex place-items-center">
									<input
										type="radio"
										value="female"
										className="mr-2 h-5 w-5"
										name="gender"
										checked={selectedOption === 'female'}
										onChange={(e) =>
											setSelectedOption(e.target.value)
										}
										required={true}
										disabled={disabled}
									/>
									Female
								</label>
							</div>
						</div>
						<div className="grid">
							<label
								className="text-white text-2xl tracking-wider font-serif font-semibold italic mb-2 ml-3"
								htmlFor="phone"
							>
								Phone Number
							</label>
							<input
								type="number"
								className="w-[20vw] px-6 py-3 text-2xl font-serif font-semibold tracking-widest rounded-2xl bg-[#f9aad0] active:bg-[#f9aad0] text-slate-800"
								name="phone"
								value={number}
								onChange={(e) => setNumber(e.target.value)}
								required={true}
								disabled={disabled}
							/>
						</div>
						<div className="grid">
							<label
								className="text-white text-2xl tracking-wider font-serif font-semibold italic mb-2 ml-3"
								htmlFor="email"
							>
								Email
							</label>
							<input
								type="email"
								className="w-[25vw] px-6 py-3 text-2xl font-serif font-semibold tracking-widest rounded-2xl bg-[#f9aad0] text-slate-800"
								name="email"
								onChange={(e) => setEmail(e.target.value)}
								required={true}
								value={email}
								disabled={disabled}
							/>
						</div>
					</div>
					<div className="mb-4 flex place-items-center place-content-center gap-[2vw]">
						<div className="grid">
							<label
								className="text-white text-2xl tracking-wider font-serif font-semibold italic mb-2 ml-3"
								htmlFor="language"
							>
								Language
							</label>
							<select
								className="border-gray-300 text-2xl font-normal font-serif tracking-wider rounded-2xl px-6 py-3 focus:outline-none border-none w-[25vw] bg-[#f9aad0] text-slate-800"
								name="language"
								value={language}
								onChange={(e) => setLanguage(e.target.value)}
								required={true}
								disabled={disabled}
							>
								<option value="English">English</option>
								<option value="Hindi">Hindi</option>
								<option value="Maithali">Maithali</option>
							</select>
						</div>
						<div className="grid">
							<label
								className="text-white text-2xl tracking-wider font-serif font-semibold italic mb-2 ml-3"
								htmlFor="language"
							>
								Address
							</label>
							<textarea
								name="address"
								className="border-gray-300 text-2xl font-normal font-serif tracking-wider rounded-2xl px-6 py-3 h-[6vw] focus:outline-none border-none text-slate-800 bg-[#f9aad0] w-[35vw]"
								onChange={(e) => setAddress(e.target.value)}
								value={address}
								required={true}
								disabled={disabled}
							></textarea>
						</div>
					</div>
					<div className="flex place-content-end px-16 mt-8 gap-[1vw]">
						<button
							className="bg-[#c1c3cc] text-slate-800 px-5 py-2 text-2xl font-semibold tracking-wider font-serif rounded-2xl hover:bg-cyan-600"
							onClick={(e) => {
								e.preventDefault();
								setDisabled(false);
							}}
						>
							Edit
						</button>
						<input
							className="bg-[#c1c3cc] text-slate-800 px-5 py-2 text-2xl font-semibold tracking-wider font-serif rounded-2xl hover:bg-cyan-600"
							type="submit"
							value="Save"
						/>
					</div>
				</form>
			</div>
		</section>
	);
}

export default BasicDetails;
