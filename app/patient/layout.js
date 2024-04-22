import Navbar from './components/Navbar';
export default function RootLayout({ children }) {
	return (
		<div className="">
			<div className="fixed h-[100vh]  bg-[#502779]">
				<Navbar />
			</div>
			<div className=" h-[100vh] bg-[#F9AAD0]">
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
						style={{ backgroundImage: 'url(/images/Profile.png)' }}
					></div>
				</div>
				{children}
			</div>
		</div>
	);
}
