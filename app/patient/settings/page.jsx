'use client';
import React, { useEffect, useState } from 'react';
import { useAppData } from '@/app/context';
import axios from 'axios';
import { useRouter } from 'next/navigation';

function Settings() {
	const router = useRouter();
	const { darkBg, setDarkBg } = useAppData();
	const [wantToLogin, setWantToLogin] = useState(false);
	const [showInfo, setShowInfo] = useState(false);
	const [showFaq, setShowFaq] = useState(false);
	const [showContact, setShowContact] = useState(false);
	const [showDeleteDesclaimer, setShowDeleteDesclaimer] = useState(false);
	const [showPassword, setShowPassword] = useState(false);
	const [password, setPassword] = useState(false);
	const [oldPassword, setOldPassword] = useState('');
	const [newPassword, setNewPassword] = useState('');
	const [rePassword, setRePassword] = useState('');
	const [disabled, setDisabled] = useState(true);
	const [toggle, setToggle] = useState(false);
	const [name, setName] = useState('User Name');
	const [phone, setPhone] = useState('0000000000');
	const [language, setLanguage] = useState('None');
	const [image, setImage] = useState('/images/profile_default.png');
	const faqs = [
		{
			ques: 'What is CureSmart?',
			ans: 'CureSmart is a web application designed to bridge the gap between patients and doctors by offering a user-friendly platform for medical consultation and prescription requests.',
		},
		{
			ques: 'How does CureSmart work?',
			ans: ' CureSmart allows patients to request prescriptions and receive medical advice directly from doctors through a seamless online platform. Additionally, users can access an artificial intelligence (AI) chatbot for initial symptom assessment and medical guidance.',
		},
		{
			ques: 'Who can use CureSmart?',
			ans: 'CureSmart is available for anyone seeking medical advice or prescription services. However, users should be aware that CureSmart is not a substitute for emergency medical care, and individuals experiencing severe or life-threatening symptoms should seek immediate medical attention.',
		},
		{
			ques: 'Is CureSmart secure? ',
			ans: 'Yes, CureSmart takes user privacy and data security seriously. We employ industry-standard security measures to protect your personal information and ensure secure communication between patients and healthcare professionals.',
		},
		{
			ques: 'How can I sign up for CureSmart? ',
			ans: ' Signing up for CureSmart is easy! Simply visit our website and follow the instructions to create an account. Once registered, you can start using our platform to connect with doctors and access medical services.',
		},
		{
			ques: 'Are the doctors on CureSmart licensed?',
			ans: 'Yes, all doctors on CureSmart are licensed professionals with expertise in various medical specialties. We carefully vet each healthcare provider to ensure they meet our standards of professionalism and quality care.',
		},
		{
			ques: 'Can I request a specific doctor on CureSmart? ',
			ans: ' While CureSmart does not currently offer the option to choose a specific doctor, our platform connects you with qualified healthcare professionals based on availability and your specific needs. Rest assured that all doctors on CureSmart are committed to providing high-quality medical care.',
		},
		{
			ques: 'What services are available on CureSmart?',
			ans: 'CureSmart offers a range of services, including prescription requests, medical advice, and initial symptom assessment through our AI chatbot. Our goal is to provide comprehensive healthcare support in a convenient and accessible format.',
		},
		{
			ques: 'Is CureSmart covered by insurance?',
			ans: " CureSmart's services may be covered by some insurance plans. However, coverage varies depending on your insurance provider and policy. We recommend checking with your insurance company to determine if CureSmart services are eligible for reimbursement.",
		},
		{
			ques: 'How can I provide feedback or report issues with CureSmart?',
			ans: 'We welcome your feedback and are committed to continuously improving CureSmart. If you encounter any issues or have suggestions for enhancement, please contact our customer support team through the provided channels on our website. Your input is valuable to us in delivering the best possible user experience.',
		},
	];

	useEffect(() => {
		let token = localStorage.getItem('token');
		axios
			.get('https://cure-smart-backend.onrender.com/user/get', {
				headers: {
					Authorization: token,
				},
			})
			.then((data) => {
				setName(data.data.data.name);
				setPhone(data.data.data.phone);
				setLanguage(data.data.data.language);
				setImage(
					'https://cure-smart-backend.onrender.com/Images/' +
						data.data.data.image
				);
			})
			.catch((err) => alert('some error occured please try again'));
	}, [toggle]);
	const savePassword = () => {
		if (oldPassword && newPassword && rePassword) {
			if (newPassword === rePassword) {
				let token = localStorage.getItem('token');
				const authorization = {
					headers: {
						Authorization: token,
					},
				};
				axios
					.post(
						'https://cure-smart-backend.onrender.com/user/setpassword',
						{ oldPassword: oldPassword, newPassword: newPassword },
						authorization
					)
					.then((data) => {
						(() => {
							setNewPassword('');
							setOldPassword('');
							setRePassword('');
						})();
						if (data.status === 200)
							alert('Password has been updated successfully');
					})
					.catch((err) => {
						if (err.response.status === 400)
							alert('Failed to update password');
						else if (err.response.status === 500)
							alert('Your old password is invalid');
						else if (err.response.status === 402)
							alert('Error occured please login again');
						else alert('Some unexpected error occurred');
					});
			} else alert('New password mismatch');
		} else alert('Please fill all the fields first');
	};
	const handleDelete = () => {
		let token = localStorage.getItem('token');
		const authorization = {
			headers: {
				Authorization: token,
			},
		};
		axios
			.post(
				'https://cure-smart-backend.onrender.com/user/delete',
				{
					password: password,
				},
				authorization
			)
			.then((data) => {
				if (data.status === 200) {
					localStorage.removeItem('remember');
					setDarkBg(!darkBg);
					localStorage.removeItem('token');
					router.push('/');
				} else alert('Failed to login, Try Again');
			})
			.catch((err) => {
				if (err.response.status !== undefined) {
					if (err.response.status === 501)
						alert('No such user exists');
					else if (err.response.status === 500)
						alert("Password don't match");
					else alert('Some databse error occured');
				} else {
					alert('Some Unexprected error occured');
				}
			});
	};
	return (
		<section className={`pb-10 `}>
			<div
				className={`${darkBg ? 'bg-[#503642]' : 'bg-[#F9AAD0]'} ${
					showFaq ? 'block' : 'hidden'
				} fixed ml-[4vw] w-[96vw] h-[100vh] flex  z-10 pr-[8vw] pt-[4vw]`}
			>
				<div className=" bg-[#91398b] w-[50vw] h-[30vw] ml-auto mr-auto rounded-3xl p-6 shadow-2xl shadow-black">
					<div className="relative w-full">
						<button
							className="absolute right-0 px-4 text-3xl text-white font-semibold"
							onClick={() => {
								setShowFaq(false);
								setDarkBg(false);
							}}
						>
							x
						</button>
					</div>
					<div className="flex place-content-center mt-4 ">
						{' '}
						<h2 className="text-3xl text-white font-semibold text-center tracking-widest underline underline-offset-4 pb-1 w-[60%]">
							Some Frequently Asked Questions
						</h2>
					</div>
					<div className="overflow-y-scroll h-[23vw] mt-4">
						{faqs.map((ele, index) => {
							return (
								<div
									className="mt-2 mb-4 px-6 text-justify"
									key={index}
								>
									{' '}
									<h4 className="text-xl  font-semibold tracking-widest pb-1 text-[#aeb3b4]">
										<span className="mr-4">
											{index + 1 + '.)'}
										</span>
										{ele.ques}
									</h4>
									<h4 className="text-xl  font-semibold tracking-widest pb-1 text-white ml-10 mt-2">
										{ele.ans}
									</h4>
								</div>
							);
						})}
					</div>
				</div>
			</div>
			<div
				className={`${darkBg ? 'bg-[#503642]' : 'bg-[#F9AAD0]'} ${
					showInfo ? 'block' : 'hidden'
				} fixed ml-[4vw] w-[96vw] h-[100vh] flex  z-10 pr-[8vw] pt-[4vw]`}
			>
				<div className=" bg-[#91398b] w-[35vw] h-[23vw] ml-auto mr-auto rounded-3xl p-6 shadow-2xl shadow-black">
					<div className="relative w-full">
						<button
							className="absolute right-0 px-4 text-3xl text-white font-semibold"
							onClick={() => {
								setShowInfo(false);
								setDarkBg(false);
							}}
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
				className={`${darkBg ? 'bg-[#503642]' : 'bg-[#F9AAD0]'} ${
					showContact ? 'block' : 'hidden'
				} fixed ml-[4vw] w-[96vw] h-[100vh] flex  z-10 pr-[8vw] pt-[4vw]`}
			>
				<div className=" bg-[#91398b] w-[30vw] h-[16vw] ml-auto mr-auto rounded-3xl p-6 shadow-2xl shadow-slate-800">
					<div className="relative w-full">
						<button
							className="absolute right-0 px-4 text-3xl text-white font-semibold"
							onClick={() => {
								setShowContact(false);
								setDarkBg(false);
							}}
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
				className={`${darkBg ? 'bg-[#503642]' : 'bg-[#F9AAD0]'} ${
					showDeleteDesclaimer ? 'block' : 'hidden'
				} fixed ml-[4vw] w-[96vw] h-[100vh] flex  z-10 pr-[8vw] pt-[4vw]`}
			>
				<div className=" bg-[#91398b] w-[28vw] h-[17vw] ml-auto mr-auto rounded-3xl p-6 shadow-2xl shadow-slate-800">
					<div className="relative w-full">
						<button
							className="absolute right-0 px-4 text-3xl text-white font-semibold"
							onClick={() => {
								setShowDeleteDesclaimer(false);
								setDarkBg(false);
							}}
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
				className={`${darkBg ? 'bg-[#503642]' : 'bg-[#F9AAD0]'} ${
					showPassword ? 'block' : 'hidden'
				} fixed ml-[4vw] w-[96vw] h-[100vh] flex  z-10 pr-[8vw] pt-[4vw]`}
			>
				<div className=" bg-[#91398b] w-[34vw] h-[16vw] ml-auto mr-auto rounded-3xl p-6 shadow-2xl shadow-slate-800">
					<div className="relative w-full">
						<button
							className="absolute right-0 px-4 text-3xl text-white font-semibold"
							onClick={() => {
								setShowPassword(false);
								setDarkBg(false);
							}}
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
									src={image}
									alt=""
									className=" h-[5vw] w-[5vw] rounded-full"
								/>
							</div>

							<h1 className="text-3xl font-serif font-medium text-white bg-[#5d0e57] px-5 py-2 rounded-2xl ">
								{name}
							</h1>
						</div>
						<div className="bg-[#91398B] w-[22vw] flex place-items-center gap-[1.5vw] px-[3vw] py-[1vw] rounded-2xl">
							<h2 className="text-3xl font-serif font-medium text-white">
								Contact Number
							</h2>

							<h3 className="text-3xl font-serif font-medium text-white bg-[#5d0e57] px-5 py-2 rounded-2xl">
								{phone}
							</h3>
						</div>
						<div className="bg-[#91398B] w-[22vw] flex place-items-center gap-[1.5vw] px-[3vw] py-[1vw] rounded-2xl">
							<h2 className="text-3xl font-serif font-medium text-white">
								Language
							</h2>
							<h2 className="text-3xl font-serif font-medium text-white bg-[#5d0e57] px-5 py-2 rounded-2xl">
								{language}
							</h2>
						</div>
						<div className="flex  place-items-center">
							<button
								className="font-serif italic text-4xl font-bold text-[#F9AAD0] bg-white h-[2.5vw] w-[2.5vw] rounded-full"
								onClick={() => {
									setDarkBg(true);
									setShowInfo(true);
								}}
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
								type="text"
								className="w-[15vw] px-6 py-3 text-2xl font-serif font-semibold tracking-wider rounded-2xl bg-[#f9aad0] text-slate-800"
								disabled={disabled}
								value={oldPassword}
								onChange={(e) => setOldPassword(e.target.value)}
							/>
							<h2 className="text-3xl font-serif font-medium text-white">
								New Password
							</h2>
							<input
								type="text"
								className="w-[15vw] px-6 py-3 text-2xl font-serif font-semibold tracking-wider rounded-2xl bg-[#f9aad0] text-slate-800"
								disabled={disabled}
								value={newPassword}
								onChange={(e) => setNewPassword(e.target.value)}
							/>
							<input
								type="text"
								className="w-[15vw] px-6 py-3 text-2xl font-serif font-semibold tracking-wider rounded-2xl bg-[#f9aad0] text-slate-800"
								disabled={disabled}
								value={rePassword}
								onChange={(e) => setRePassword(e.target.value)}
							/>
						</div>
						<div className="flex  place-items-center">
							<div
								className="font-serif italic text-4xl font-bold bg-[#502779] text-[#F9AAD0]  h-[3vw] w-[3vw] rounded-full bg-cover flex  place-items-center place-content-center cursor-pointer"
								onClick={() => {
									setDisabled(!disabled);
									if (!disabled) savePassword();
								}}
							>
								<div
									className="bg-cover p-2 w-[2vw] h-[2vw]"
									style={{
										backgroundImage:
											'url(/images/editpassword.png)',
									}}
								></div>
							</div>
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
								onClick={() => {
									setDarkBg(true);
									setShowDeleteDesclaimer(true);
								}}
							>
								Delete
							</button>
						</div>
						<div className="bg-[#91398B] w-[24vw] flex place-items-center gap-[1vw] px-[3vw] py-[2vw] rounded-2xl">
							<h2 className="text-4xl font-serif font-medium text-white">
								Help & Support
							</h2>
							<div className="grid gap-[0.5vw]">
								<button
									className="text-3xl  w-[10vw] font-serif font-medium text-white bg-[#5d0e57] px-5 py-2 rounded-2xl  hover:bg-[#4a170baa]"
									onClick={() => {
										setDarkBg(true);
										setShowFaq(true);
									}}
								>
									FAQs
								</button>
								<button
									className="text-3xl font-serif w-[10vw] font-medium text-white bg-[#5d0e57] px-5 py-2 rounded-2xl  hover:bg-[#4a170baa]"
									onClick={() => {
										setDarkBg(true);
										setShowContact(true);
									}}
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
