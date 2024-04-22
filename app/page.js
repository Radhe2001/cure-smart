'use client';
import Image from 'next/image';
import Login from './components/Login';
import Register from './components/Register';
import { useState } from 'react';
export default function Home() {
	const [wantToLogin, setWantToLogin] = useState(true);
	return (
		<main className="flex place-items-center w-[100vw] h-[100vh] ">
			<section className="flex place-items-center place-content-center w-[30vw] h-[100vh] bg-[#91398b]">
				<div className="">
					<div className="flex place-content-center pt-8 pb-2">
						<div className="flex place-items-center gap-4">
							<img
								src="/images/logo.png"
								className="w-[5vw] h-[5vw]"
							/>
							<h1 className="text-6xl text-white font-bold tracking-wide font-serif italic">
								Cure Smart
							</h1>
						</div>
					</div>
					<h1 className="flex place-content-center text-white text-2xl font-thin italic">
						Step one for staying healthy!
					</h1>
					<div className="flex place-content-center mt-16 gap-8">
						<h1 className="text-3xl text-white font-light tracking-wider font-serif">
							{wantToLogin ? 'Sign In' : 'Sign Up'}
						</h1>
						<div
							className="flex h-10 w-20 rounded-full bg-white border-[2px] border-[#e980f1] shadow-md shadow-slate-800 "
							onClick={() => setWantToLogin(!wantToLogin)}
						>
							<div
								className={`h-9 w-9 rounded-full  ${
									wantToLogin ? 'mr-auto' : 'ml-auto'
								} bg-[#d6cfdc] border-4 border-[#e980f1] `}
							></div>
						</div>
					</div>
					<div className="flex place-content-center mt-20 ">
						{wantToLogin ? <Login /> : <Register />}
					</div>
				</div>
			</section>
			<section className="bg-[#f9aad0]">
				<div
					className="w-[70vw] h-[100vh] bg-cover flex place-content-center place-items-center"
				>
					<img className='h-[75%] w-[55%]' src="/images/loginpage_logo.png" />
				</div>
			</section>
		</main>
	);
}
