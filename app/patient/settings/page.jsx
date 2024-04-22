'use client';
import React, { useState } from 'react';

function Settings() {
	const [wantToLogin, setWantToLogin] = useState(false);
	const [showInfo, setShowInfo] = useState(false);
	const [showContact, setShowContact] = useState(false);
	const [showDeleteDesclaimer, setShowDeleteDesclaimer] = useState(false);
	const [showPassword, setShowPassword] = useState(false);
	const [password, setPassword] = useState(false);
	const handleDelete = () => {};
	return (
		<section className="pb-10">
			<div
				className={`${
					showInfo ? 'block' : 'hidden'
				} fixed ml-[4vw] w-[100vw] h-[100vh] flex  z-10 pr-[8vw] pt-[4vw]`}
			>
				<div className=" bg-[#91398b] w-[35vw] h-[23vw] ml-auto rounded-3xl p-6 shadow-2xl shadow-slate-800">
					<div className="relative w-full">
						<button
							className="absolute right-0 px-4 text-3xl text-white font-semibold"
							onClick={() => setShowInfo(false)}
						>
							x
						</button>
					</div>
					<div className="flex place-content-center mt-4 ">
						{' '}
						<h2 className="text-3xl text-white font-semibold tracking-widest border-b-2 border-white pb-1">
							CureSmart v1.0
						</h2>
					</div>
					<div className="mt-6 p-6 text-justify">
						{' '}
						<h4 className="text-xl text-white font-semibold tracking-widest pb-1">
							Cure Smart is a web application aiming to bridge the
							gap between patients and doctors through a
							user-friendly platform. It offers patients the
							ability to request prescriptions and receive advice
							directly from doctors, while allowing both to access
							an artificial intelligence (AI) chatbot for initial
							symptom assessment and medical advice. It is
							designed to revolutionize the interaction between
							patients and healthcare professionals by providing a
							seamless platform for prescription by only
							generating the requests by patient about their
							health condition.
						</h4>
					</div>
				</div>
			</div>
			<div
				className={`${
					showContact ? 'block' : 'hidden'
				} fixed ml-[4vw] w-[100vw] h-[100vh] flex  z-10 pr-[8vw] pt-[4vw]`}
			>
				<div className=" bg-[#91398b] w-[30vw] h-[16vw] ml-auto rounded-3xl p-6 shadow-2xl shadow-slate-800">
					<div className="relative w-full">
						<button
							className="absolute right-0 px-4 text-3xl text-white font-semibold"
							onClick={() => setShowContact(false)}
						>
							x
						</button>
					</div>

					<div className="mt-12 p-6 grid gap-[0.7vw] ">
						{' '}
						<div className="flex gap-[1.3vw] place-items-center">
							<div className="flex place-content-center place-items-center p-[0.5vw] bg-white rounded-full">
								<img
									src="/images/mail.png"
									alt=""
									className="w-[1.5vw] h-[1.5vw]"
								/>
							</div>
							<h4 className="text-3xl text-white font-semibold tracking-widest pb-1">
								curesmartlpu@gmail.com
							</h4>
						</div>
						<div className="flex gap-[1.3vw] place-items-center">
							<div className="flex place-content-center place-items-center p-[0.5vw] bg-white rounded-full">
								<img
									src="/images/phone.png"
									alt=""
									className="w-[1.5vw] h-[1.5vw]"
								/>
							</div>
							<h4 className="text-3xl text-white font-semibold tracking-widest pb-1">
								+91 6204293537
							</h4>
						</div>
						<div className="flex gap-[1.3vw] place-items-center">
							<div className="flex place-content-center place-items-center p-[0.5vw] bg-white rounded-full">
								<img
									src="/images/location.png"
									alt=""
									className="w-[1.5vw] h-[1.5vw]"
								/>
							</div>
							<h4 className="text-3xl text-white font-semibold tracking-widest pb-1">
								Block 36/38, LPU
							</h4>
						</div>
					</div>
				</div>
			</div>
			<div
				className={`${
					showDeleteDesclaimer ? 'block' : 'hidden'
				} fixed ml-[4vw] w-[100vw] h-[100vh] flex  z-10 pr-[8vw] pt-[4vw]`}
			>
				<div className=" bg-[#91398b] w-[28vw] h-[17vw] ml-auto rounded-3xl p-6 shadow-2xl shadow-slate-800">
					<div className="relative w-full">
						<button
							className="absolute right-0 px-4 text-3xl text-white font-semibold"
							onClick={() => setShowDeleteDesclaimer(false)}
						>
							x
						</button>
					</div>

					<div className="mt-6 p-6 grid gap-[0.7vw] ">
						<h2 className="text-3xl text-center font-semibold tracking-wider text-white">
							Are you sure you want to{' '}
							<span className="text-[#ff0000] underline">
								DELETE
							</span>{' '}
							your account?
						</h2>
						<div className="flex place-content-center w-full mt-4 gap-10">
							<button
								className="flex bg-[#502779] text-white px-5 py-2 text-2xl tracking-widest	rounded-full hover:bg-[#4a170baa]"
								onClick={() => {
									setShowDeleteDesclaimer(false);
									setShowPassword(true);
								}}
							>
								Yes
							</button>
							<button
								className="flex bg-[#502779] text-white px-5 py-2 text-2xl tracking-widest	rounded-full hover:bg-[#4a170baa]"
								onClick={() => setShowDeleteDesclaimer(false)}
							>
								No
							</button>
						</div>
						<div className=" flex place-content-center">
							<h4 className="w-[80%] text-center text-white text-lg tracking-wider mt-4">
								<span className="font-semibold px-2">
									Note :
								</span>
								Please note that once deleted all of your data
								will be permanently lost.
							</h4>
						</div>
					</div>
				</div>
			</div>{' '}
			<div
				className={`${
					showPassword ? 'block' : 'hidden'
				} fixed ml-[4vw] w-[100vw] h-[100vh] flex  z-10 pr-[8vw] pt-[4vw]`}
			>
				<div className=" bg-[#91398b] w-[34vw] h-[16vw] ml-auto rounded-3xl p-6 shadow-2xl shadow-slate-800">
					<div className="relative w-full">
						<button
							className="absolute right-0 px-4 text-3xl text-white font-semibold"
							onClick={() => setShowPassword(false)}
						>
							x
						</button>
					</div>

					<div className="mt-6 p-6 grid gap-[0.7vw] ">
						<h2 className="text-3xl text-center font-semibold tracking-wider text-white">
							Please enter your password and press
							<span className="underline px-4">DELETE</span>to
							proceed.
						</h2>
						<div className="flex place-content-center place-items-center gap-4 mt-8">
							<input
								type="text"
								name="name"
								className="px-6 py-3 text-2xl font-serif font-semibold tracking-wider rounded-2xl bg-[#f9aad0] text-slate-800"
								onChange={(e) => setPassword(e.target.value)}
								required={true}
							/>
							<button
								className="flex bg-[#ff0000] text-white px-5 py-3 text-2xl tracking-widest	rounded-2xl hover:bg-[#4a170baa]"
								onClick={handleDelete}
							>
								Delete
							</button>
						</div>
					</div>
				</div>
			</div>
			<center className="text-white text-5xl font-serif font-semibold italic tracking-wider">
				Settings
			</center>
			<section className="flex place-content-center my-10">
				<div className="w-[78vw] grid gap-[2vw]">
					<div className="flex gap-[2vw]">
						<div className="bg-[#91398B] w-[24vw] flex place-items-center gap-[1.5vw] px-[1.5vw] py-[1vw] rounded-2xl">
							<div className="bg-white rounded-full">
								<img
									src="/images/profile_default.png"
									alt=""
									className=" h-[5vw] w-[5vw] rounded-full"
								/>
							</div>

							<h1 className="text-3xl font-serif font-medium text-white bg-[#5d0e57] px-5 py-2 rounded-2xl ">
								Radheshyam Jha
							</h1>
						</div>
						<div className="bg-[#91398B] w-[22vw] flex place-items-center gap-[1.5vw] px-[3vw] py-[1vw] rounded-2xl">
							<h2 className="text-3xl font-serif font-medium text-white">
								Contact Number
							</h2>

							<h3 className="text-3xl font-serif font-medium text-white bg-[#5d0e57] px-5 py-2 rounded-2xl">
								6204293537
							</h3>
						</div>
						<div className="bg-[#91398B] w-[22vw] flex place-items-center gap-[1.5vw] px-[3vw] py-[1vw] rounded-2xl">
							<h2 className="text-3xl font-serif font-medium text-white">
								Language
							</h2>
							<h2 className="text-3xl font-serif font-medium text-white bg-[#5d0e57] px-5 py-2 rounded-2xl">
								English
							</h2>
						</div>
						<div className="flex  place-items-center">
							<button
								className="font-serif italic text-4xl font-bold text-[#F9AAD0] bg-white h-[2.5vw] w-[2.5vw] rounded-full"
								onClick={() => setShowInfo(true)}
							>
								i
							</button>
						</div>
					</div>
					<div className="flex gap-[2vw]">
						<div className="bg-[#91398B] w-[72vw] flex place-items-center gap-[1.5vw] px-[3vw] py-[2vw] rounded-2xl">
							<h2 className="text-3xl font-serif font-medium text-white">
								Current Password
							</h2>
							<input
								type="password"
								className="w-[15vw] px-6 py-3 text-2xl font-serif font-semibold tracking-wider rounded-2xl bg-[#f9aad0] text-slate-800"
								disabled={true}
								// onChange={(e) => setName(e.target.value)}
								required={true}
							/>
							<h2 className="text-3xl font-serif font-medium text-white">
								New Password
							</h2>
							<input
								type="password"
								className="w-[15vw] px-6 py-3 text-2xl font-serif font-semibold tracking-wider rounded-2xl bg-[#f9aad0] text-slate-800"
								disabled={true}
								// onChange={(e) => setName(e.target.value)}
								required={true}
							/>
							<input
								type="password"
								className="w-[15vw] px-6 py-3 text-2xl font-serif font-semibold tracking-wider rounded-2xl bg-[#f9aad0] text-slate-800"
								disabled={true}
								// onChange={(e) => setName(e.target.value)}
								required={true}
							/>
						</div>
						<div className="flex  place-items-center">
							<button className="font-serif italic text-4xl font-bold text-[#F9AAD0] bg-white h-[2.5vw] w-[2.5vw] rounded-full">
								i
							</button>
						</div>
					</div>
					<div className="flex gap-[2vw]">
						<div className="bg-[#91398B] w-[25vw] flex place-items-center gap-[1.5vw] px-[3vw] py-[2vw] rounded-2xl">
							<h2 className="text-4xl font-serif font-medium text-white">
								Enable/Disable Notifications
							</h2>
							<div
								className="flex h-10 w-[6vw] rounded-full bg-white border-[2px] border-[#e980f1] shadow-md shadow-slate-800 "
								onClick={() => setWantToLogin(!wantToLogin)}
							>
								<div
									className={`h-9 w-9 rounded-full  ${
										wantToLogin
											? 'mr-auto bg-[#ff0000]'
											: 'ml-auto bg-[#4ccf00]'
									}  border-4 border-[#e980f1] `}
								></div>
							</div>
						</div>{' '}
						<div className="bg-[#91398B] w-[19vw] flex place-items-center gap-[1.5vw] px-[3vw] py-[2vw] rounded-2xl">
							<h2 className="text-4xl font-serif font-medium text-white">
								Delete Account
							</h2>
							<button
								className="text-3xl font-serif font-medium text-white bg-[#5d0e57] px-5 py-2 rounded-2xl  hover:bg-[#4a170baa]"
								onClick={() => setShowDeleteDesclaimer(true)}
							>
								Delete
							</button>
						</div>
						<div className="bg-[#91398B] w-[24vw] flex place-items-center gap-[1vw] px-[3vw] py-[2vw] rounded-2xl">
							<h2 className="text-4xl font-serif font-medium text-white">
								Help & Support
							</h2>
							<div className="grid gap-[0.5vw]">
								<button className="text-3xl  w-[10vw] font-serif font-medium text-white bg-[#5d0e57] px-5 py-2 rounded-2xl  hover:bg-[#4a170baa]">
									FAQs
								</button>
								<button
									className="text-3xl font-serif w-[10vw] font-medium text-white bg-[#5d0e57] px-5 py-2 rounded-2xl  hover:bg-[#4a170baa]"
									onClick={() => setShowContact(true)}
								>
									Contact Us
								</button>
							</div>
						</div>
					</div>
				</div>
			</section>
		</section>
	);
}

export default Settings;
