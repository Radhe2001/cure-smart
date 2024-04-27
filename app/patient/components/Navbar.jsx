'use client';
import React, { useState } from 'react';
import Link from 'next/link';

function Navbar() {
	const [showFull, setShowFull] = useState(false);
	const [active, setActive] = useState(0);
	return (
		<nav
			className={`flex items-center place-content-center h-screen  ${
				showFull ? 'w-[16vw]' : 'w-[4vw]'
			} transition-all ease-in-out duration-300`}
		>
			<div className="">
				<div className="cursor-pointer flex place-content-center ">
					<img
						src="/images/Hamburger.png"
						alt=""
						className="h-8 w-8"
						onClick={() => setShowFull(!showFull)}
					/>
				</div>
				<div className="flex place-items-center place-content-center my-20">
					<div className="">
						<div className="flex place-content-center mb-10">
							<Link
								href="/patient"
								className={`flex   ${
									showFull ? 'w-[13vw]' : 'w-[3vw]'
								}  gap-4 place-items-center   ${
									active === 0 ? 'bg-[#91398B]' : ''
								} hover:bg-[#91398B]  transition-all ease-in-out duration-300 px-3 py-2 rounded-xl`}
								onClick={() => setActive(0)}
							>
								<img
									src="/images/Home.png"
									alt=""
									className="h-8 w-8"
								/>
								<h3
									className={`${
										showFull ? '' : 'hidden'
									} text-2xl tracking-wider font-serif text-white `}
								>
									Home
								</h3>
							</Link>
						</div>
						<div className="flex place-content-center mb-10 ">
							<Link
								href="/patient/profile"
								className={`flex  ${
									showFull ? 'w-[13vw]' : 'w-[3vw]'
								}  gap-4 place-items-center ${
									active === 1 ? 'bg-[#91398B] ' : ''
								} hover:bg-[#91398B]  px-3 py-2 rounded-xl transition-all ease-in-out duration-300 `}
								onClick={() => setActive(1)}
							>
								<img
									src="/images/Profile.png"
									alt=""
									className="h-8 w-8"
								/>
								<h3
									className={`${
										showFull ? '' : 'hidden'
									} text-2xl tracking-wider font-serif text-white`}
								>
									Profile
								</h3>
							</Link>
						</div>
						<div className="flex place-content-center mb-10 ">
							<Link
								href="/patient/doctor"
								className={`flex ${
									showFull ? 'w-[13vw]' : 'w-[3vw]'
								}  gap-4 place-items-center  ${
									active === 2 ? 'bg-[#91398B] ' : ''
								} hover:bg-[#91398B] px-3 py-2 rounded-xl transition-all ease-in-out duration-300`}
								onClick={() => setActive(2)}
							>
								<img
									src="/images/Doctor.png"
									alt=""
									className="h-8 w-8"
								/>
								<h3
									className={`${
										showFull ? '' : 'hidden'
									} text-2xl tracking-wider font-serif text-white `}
								>
									Doctor List
								</h3>
							</Link>
						</div>
						<div className="flex place-content-center mb-10 ">
							<Link
								href="/patient/request"
								className={`flex ${
									showFull ? 'w-[13vw]' : 'w-[3vw]'
								}  gap-4 place-items-center  ${
									active === 3 ? 'bg-[#91398B] ' : ''
								} hover:bg-[#91398B] px-3 py-2 rounded-xl transition-all ease-in-out duration-300 `}
								onClick={() => setActive(3)}
							>
								<img
									src="/images/Request_List.png"
									alt=""
									className="h-8 w-8"
								/>
								<h3
									className={`${
										showFull ? '' : 'hidden'
									} text-2xl tracking-wider font-serif text-white`}
								>
									Request List
								</h3>
							</Link>
						</div>
						<div className="flex place-content-center mb-10 ">
							<Link
								href={{
									pathname: '/patient/raiserequest',
									query: { doc: 'any' },
								}}
								className={`flex ${
									showFull ? 'w-[13vw]' : 'w-[3vw]'
								}  gap-4 place-items-center  ${
									active === 4 ? 'bg-[#91398B] ' : ''
								} hover:bg-[#91398B] px-3 py-2 rounded-xl transition-all ease-in-out duration-300 `}
								onClick={() => setActive(4)}
							>
								<img
									src="/images/Create_Request.png"
									alt=""
									className="h-8 w-8"
								/>
								<h3
									className={`${
										showFull ? '' : 'hidden'
									} text-2xl tracking-wider font-serif text-white`}
								>
									Raise Request
								</h3>
							</Link>
						</div>
						<div className="flex place-content-center mb-10 ">
							<Link
								href="/patient/settings"
								className={`flex ${
									showFull ? 'w-[13vw]' : 'w-[3vw]'
								}  gap-4 place-items-center  ${
									active === 5 ? 'bg-[#91398B]' : ''
								} hover:bg-[#91398B] px-3 py-2 rounded-xl  transition-all ease-in-out duration-300`}
								onClick={() => setActive(5)}
							>
								<img
									src="/images/Settings.png"
									alt=""
									className="h-8 w-8"
								/>
								<h3
									className={`${
										showFull ? '' : 'hidden'
									} text-2xl tracking-wider font-serif text-white`}
								>
									Settings
								</h3>
							</Link>
						</div>
					</div>
				</div>

				<div className="flex place-content-center">
					<button
						className={`flex ${
							showFull ? 'w-[13vw]' : 'w-[3vw]'
						}  gap-4 place-items-center hover:bg-[#91398B] px-3 py-2 rounded-xl`}
					>
						<img
							src="/images/Sign_out.png"
							alt=""
							className="h-8 w-8"
						/>
						<h3
							className={`${
								showFull ? '' : 'hidden'
							} text-2xl tracking-wider font-serif text-white`}
						>
							Sign Out
						</h3>
					</button>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
