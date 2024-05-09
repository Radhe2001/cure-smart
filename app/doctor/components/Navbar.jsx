'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

function Navbar() {
	const router = useRouter();
	const [showFull, setShowFull] = useState(false);
	const [active, setActive] = useState(0);
	const handleSignOut = (e) => {
		e.preventDefault();
		localStorage.removeItem('token');
		localStorage.removeItem('remember');
		router.push('/');
	};
	return (
		<nav
			className={`flex place-items-center place-content-center h-screen  ${
				showFull ? 'w-[16vw]' : 'w-[4vw]'
			} transition-all ease-in-out duration-300 h-[100%]`}
		>
			<div className="">
				<div className="cursor-pointer flex place-content-center h-[20vh] place-items-start">
					<img
						src="/images/Hamburger.png"
						alt=""
						className="h-8 w-8"
						onClick={() => setShowFull(!showFull)}
					/>
				</div>
				<div className="flex place-items-center place-content-center my-20">
					<div className="">
						<div className="flex place-content-center mb-10 ">
							<Link
								href="/doctor/profile"
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
								href="/doctor"
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
								href="/doctor/settings"
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
				<div className="flex place-content-center h-[20vh] place-self-end">
					<button
						className={`flex ${
							showFull ? 'w-[13vw]' : 'w-[3vw]'
						}  gap-4 place-items-center h-12 hover:bg-[#91398B] px-3 py-2 rounded-xl`}
						onClick={handleSignOut}
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
