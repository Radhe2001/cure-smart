import React from 'react';

function Doctor() {
	const arr = [1, 2, 3, 4, 5, 6];
	return (
		<section className="pb-10">
			<center className="text-white text-5xl font-serif font-semibold italic tracking-wider">
				Doctor List
			</center>
			<section className="flex place-content-center my-10">
				<div className="w-[75vw] grid grid-cols-3 gap-[3vw]">
					{arr.map((item, index) => {
						return (
							<div
								className="bg-[#91398b] rounded-3xl w-[23vw] py-[2vw]"
								key={index} 
							>
								<div className="flex place-content-center">
									<img
										className="h-[10vw] w-[10vw]"
										src="/images/Doctor_logo.png"
										alt=""
									/>
								</div>
								<center>
									<h2 className="text-white text-2xl font-semibold italic font-serif tracking-wider pt-2">
										Dr. XYZ
									</h2>
								</center>
								<center>
									<h3 className="text-white text-lg font-semibold italic font-serif tracking-wider pt-1 pb-3 mb-3 w-[10vw] border-b-4 border-[#F9AAD0]">
										H.O.D. Surgery
									</h3>
								</center>
								<center>
									<h3 className="text-white text-lg font-semibold font-mono tracking-wider w-full px-[2vw] text-justify">
										Lorem ipsum dolor sit amet consectetur
										adipisicing elit. Facilis eveniet
										reiciendis, in ducimus similique, iste
										quibusdam cupiditate error itaque
										laudantium consequatur cumque? Optio,
										veritatis quod! Laborum magni assumenda
										incidunt nam!
									</h3>
								</center>
								<center className="mt-3">
									<h3 className="  w-[10vw] text-lg font-bold tracking-widest border-y-4 border-[#F9AAD0] text-white font-serif mb-4">
										<span className="tracking-wider pr-1 text-lg font-semibold italic ">
											Rating
										</span>{' '}
										{4.5}
									</h3>
								</center>
								<div className="flex place-content-center place-items-center">
									<button className=" text-white text-xl font-serif font-semibold tracking-widest bg-[#3b1739c5] px-[2.5vw] py-2 rounded-full">
										Request Prescription
									</button>
								</div>
							</div>
						);
					})}
				</div>
			</section>
		</section>
	);
}

export default Doctor;
