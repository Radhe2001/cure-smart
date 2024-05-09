'use client';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

function Login() {
	const router = useRouter();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [showPassword, setShowPassword] = useState(false);
	const [remember, setRemember] = useState(false);
	const [user, setUser] = useState('Patient');
	const [toggle, setToggle] = useState(false);
	useEffect(() => {
		let rem = localStorage.getItem('remember');
		if (rem === 'patient') router.push('/patient');
		else if (rem === 'doctor') router.push('/doctor');
	}, []);
	const handleSubmit = (e) => {
		e.preventDefault();
		if (email && password) {
			if (user === 'Patient') {
				axios
					.post('http://localhost:5000/user/login', {
						email: email,
						password: password,
					})
					.then((data) => {
						if (data.status === 200) {
							if (remember === true)
								localStorage.setItem('remember', 'patient');
							localStorage.setItem('token', data.data.token);
							router.push('/patient');
						} else alert('Failed to login, Try Again');
					})
					.catch((error) => {
						if (error.response.status !== undefined) {
							if (error.response.status === 400)
								alert('No such user exists');
							else if (error.response.status === 500)
								alert('Please try again to login');
							else alert('Some databse error occured');
						} else {
							alert('Some Unexprected error occured');
						}
					});
			} else if (user === 'Doctor') {
				axios
					.post('http://localhost:5000/doctor/login', {
						email: email,
						password: password,
					})
					.then((data) => {
						if (data.status === 200) {
							if (remember === true)
								localStorage.setItem('remember', 'doctor');
							localStorage.setItem('token', data.data.token);
							router.push('/doctor');
						} else alert('Failed to login, Try Again');
					})
					.catch((error) => {
						if (error.response.status !== undefined) {
							if (error.response.status === 400)
								alert('No such user exists');
							else if (error.response.status === 500)
								alert('Please try again to login');
							else alert('Some databse error occured');
						} else {
							alert('Some Unexprected error occured');
						}
					});
			} else {
				axios
					.post('http://localhost:5000/admin/login', {
						email: email,
						password: password,
					})
					.then((data) => {
						if (data.status === 200) {
							router.push('/admin');
						} else alert('Failed to login, Try Again');
					})
					.catch((error) => {
						if (error.response.status !== undefined) {
							if (error.response.status === 400)
								alert('Unauthorized access');
						} else {
							alert('Some Unexprected error occured');
						}
					});
			}
		} else alert('First fill all the fields');
	};
	return (
		<section className="">
			<form className="w-[20vw]" onSubmit={handleSubmit}>
				<div className="grid mb-6">
					<label
						className="mb-2 text-white text-xl tracking-wider font-serif font-semibold italic"
						htmlFor="email"
					>
						Email
					</label>
					<input
						className="border border-gray-300 text-2xl font-normal font-serif tracking-wider rounded-lg px-4 py-2 focus:outline-none text-slate-800 shadow-lg shadow-[#152538]"
						type="email"
						name="email"
						id="email"
						onChange={(e) => setEmail(e.target.value)}
					/>
				</div>
				<div className="grid mb-6">
					<label
						className="mb-2 text-white text-xl tracking-wider font-serif font-semibold italic"
						htmlFor="password"
					>
						Password
					</label>
					<div className="flex bg-white rounded-lg shadow-lg shadow-[#152538]">
						<input
							className="border border-gray-300 text-2xl font-normal font-serif tracking-wider rounded-lg px-4 py-2 focus:outline-none border-none text-slate-800"
							type={`${toggle ? 'text' : 'password'}`}
							name="password"
							id="password"
							onChange={(e) => setPassword(e.target.value)}
						/>

						<img
							className="ml-auto mr-2"
							src={`${
								toggle ? '/images/hide.png' : '/images/show.png'
							}`}
							alt=""
							onClick={() => setToggle(!toggle)}
						/>
					</div>
				</div>
				<div className="grid mb-6">
					<label
						className="mb-2 text-white text-xl tracking-wider font-serif font-semibold italic"
						htmlFor="password"
					>
						User
					</label>
					<div className="flex bg-white rounded-lg shadow-lg shadow-[#152538] ">
						<select
							className="border-gray-300 text-2xl font-normal font-serif tracking-wider rounded-lg px-4 py-2 focus:outline-none border-none text-slate-800 w-full"
							name="user"
							value={user}
							onChange={(e) => setUser(e.target.value)}
						>
							<option value="Patient">Patient</option>
							<option value="Doctor">Doctor</option>
							<option value="Admin">Admin</option>
						</select>
					</div>
				</div>
				<div className="flex  mb-6 place-items-center gap-3 ">
					<input
						className="border border-gray-300 rounded-lg h-4 w-4 focus:outline-none"
						type="checkbox"
						name="remember"
						id="remember"
						onChange={(e) => {
							setRemember(e.target.checked);
						}}
					/>
					<label
						className="text-white text-xl tracking-wider font-serif font-semibold italic"
						htmlFor="remember"
					>
						Remember me
					</label>
				</div>
				<div className="grid ">
					<input
						className="bg-[#502779] hover:bg-[#3d0872] text-white py-2 text-xl font-serif font-bold tracking-widest italic rounded-lg shadow-xl shadow-[#152538]"
						type="submit"
						value={'Login'}
					/>
				</div>
			</form>
		</section>
	);
}

export default Login;
