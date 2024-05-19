'use client';
import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
function ChatBot({ changeShowChat }) {
	const [ques, setQues] = useState([]);
	const [resp, setResp] = useState([]);
	const [toggle, setToggle] = useState(false);
	const arr1 = [1, 2, 4, 5];
	const arr2 = [1, 2, 4, 5];
	const [mes, setMes] = useState('');
	const messagesEndRef = useRef(null);

	useEffect(() => {
		messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
	}, [toggle]);

	const sendChat = (e) => {
		e.preventDefault();
		setQues([...ques, mes]);
		axios
			.post('https://cure-smart-backend.onrender.com/user/chat', {
				mes: mes,
			})
			.then((data) => {
				setResp([...resp, data.data]);
				setToggle(!toggle);
			})
			.catch((err) => console.log(err));
		setMes('');
	};
	return (
		<section className=" grid w-[25vw] h-[34vw] px-6 py-4">
			<div className="flex place-items-center h-[3vw] gap-4">
				{' '}
				<div className="flex place-content-center place-items-center w-[2.5vw] h-[2.5vw] p-2 bg-[#f9aad0] rounded-full border-2 border-black">
					<img src="/images/3.png" alt="" className="" />
				</div>
				<h1 className="text-white text-2xl font-semibold tracking-wide">
					Cure Smart AI Assistant
				</h1>
				<h1
					className="flex place-content-center place-items-center text-3xl ml-auto text-[#322C2B] font-bold py-2 px-4 hover:rounded-full hover:bg-[#00a79d]"
					onClick={() => changeShowChat(false)}
				>
					X
				</h1>
			</div>
			<div className="h-[25vw] bg-[#502779] rounded-xl py-6 px-2 overflow-auto">
				{resp.length > 0 ? (
					resp.map((item, index) => (
						<div className="grid mb-4" key={index}>
							<div className="flex">
								<div className=" max-w-[80%]  mb-4  bg-[#bdeeff] ml-auto rounded-br-xl rounded-l-xl p-2 text-xl text-[#502779]  tracking-wider text-justify">
									{ques[index]}
								</div>
								<div className="h-8 w-4  bg-[#bdeeff]">
									<div className="h-8 w-4 rounded-tl-full bg-[#502779]"></div>
								</div>
							</div>
							<div className="flex">
								<div className="h-8 w-4 bg-[#325b99]">
									<div className="h-8 w-4 rounded-tr-full bg-[#502779]"></div>
								</div>
								<div className="  max-w-[80%] bg-[#325b99] rounded-bl-xl rounded-r-xl p-2 text-xl text-white  tracking-wider text-justify">
									{item}
								</div>
							</div>
						</div>
					))
				) : (
					<div className="flex">
						<div className="h-8 w-4 bg-[#00a79d]">
							<div className="h-8 w-4 rounded-tr-full bg-[#502779]"></div>
						</div>
						<div className="  max-w-[80%] bg-[#00a79d] mb-4 rounded-bl-xl rounded-r-xl p-2 text-xl text-white  tracking-wider text-justify">
							Hello! Please ask me any health related query and I
							will try my best to assist you!
						</div>
					</div>
				)}{' '}
				<div ref={messagesEndRef} />
			</div>
			<div className="flex place-items-center h-[3vw] gap-4 mt-auto">
				<input
					type="text"
					value={mes}
					onChange={(e) => setMes(e.target.value)}
					className="bg-[#502779] w-[85%] h-[2.5vw] rounded-lg px-3 py-1 text-lg text-white"
				/>
				<div className="w-[2.5vw] h-[2.5vw]">
					<img
						src="/images/send.png"
						alt=""
						className=""
						onClick={sendChat}
					/>
				</div>
			</div>
		</section>
	);
}

export default ChatBot;
