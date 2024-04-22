'use client';
import React, { useState } from 'react';

function Login() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [showPassword, setShowPassword] = useState(false);
	const [remember, setRemember] = useState(false);
	const [user, setUser] = useState('Patient');
	const [toggle, setToggle] = useState(false);
	return (
		<section className="">
			<form className="w-[20vw]">
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
							onChange={(e) => 
								setUser(e.target.value)
							}
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
						onChange={(e) => setRemember(e.target.value)}
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
