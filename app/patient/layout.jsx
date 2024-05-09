'use client';
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import ChatBot from './components/ChatBot';
import { useAppData } from '../context';
import axios from 'axios';

export default function RootLayout({ children }) {
	const { darkBg, setDarkBg } = useAppData();
	const [showChat, setShowChat] = useState(false);
	const [image, setImage] = useState('/images/Profile.png');
	const changeShowChat = (val) => setShowChat(val);

	useEffect(() => {
		let token = localStorage.getItem('token');
		axios
			.get('http://localhost:5000/user/get', {
				headers: {
					Authorization: token,
				},
			})
			.then((data) => {
				setImage(
					'http://localhost:5000/Images/' + data.data.data.image
				);
			})
			.catch((err) => alert('some error occured please try again'));
	}, []);
	return (
		<div className="">
			<div className="fixed z-[20] h-[100vh] bg-[#502779]">
				<Navbar />
			</div>
			<div className=" ">
				<img
					src="/images/1.png"
					alt="Chat"
					className={`${
						showChat ? 'hidden' : 'block'
					} w-[6vw] h-[6vw] cursor-pointer top-[50vh] fixed  right-0`}
					onClick={() => setShowChat(true)}
				/>
				<div
					className={`${
						!showChat ? 'hidden' : 'block'
					} w-[28vw] h-[100vh] cursor-pointer flex place-items-end fixed  right-0  top-0 z-[40]`}
				>
					<div className=" w-[26vw] h-[35vw] bg-[#cb6ce6] cursor-pointer rounded-2xl mb-[1vw] mr-[2vw] flex place-content-center place-items-center ">
						<ChatBot changeShowChat={changeShowChat} />
					</div>
				</div>
			</div>
			<div className=" h-[100vh] bg-[#F9AAD0]">
				<div
					className={` h-[100vh]  ${
						darkBg ? 'bg-[#503642]' : 'bg-[#F9AAD0]'
					}`}
				>
					<div className="flex place-items-center gap-10 px-[5vw] pt-3 mb-6">
						<div className="flex place-content-center pb-2">
							<img
								className=" h-28 w-28"
								src="/images/logo.png"
								alt=""
							/>
						</div>{' '}
						<h1 className="mr-auto text-6xl italic font-semibold text-white tracking-wider font-serif">
							Cure Smart
						</h1>
						<div
							className="bg-slate-700 h-14 w-14 bg-cover ml-auto rounded-full"
							style={{
								backgroundImage: `url(${image})`,
							}}
						></div>
					</div>
					{children}
				</div>
			</div>
		</div>
	);
}
