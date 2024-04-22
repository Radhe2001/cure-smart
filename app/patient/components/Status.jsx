import React from 'react';

function Status() {
	return (
		<div className="w-full">
			<center>
				<h3 className="text-white font-semibold tracking-wider text-3xl font-serif py-2">
					Health Tracker
				</h3>
			</center>
			<div className="bg-[#91398B] px-8 py-6 h-[13vw] rounded-3xl">
				<center>
					<h3 className="text-white font-semibold text-2xl tracking-wider mb-8">
						How are you Feeling Today?
					</h3>
				</center>
				<form className="grid">
					<div className="flex place-content-center">
						<textarea
							type="text"
							name="status"
							className="w-[90%] py-2 text-xl tracking-wider text-slate-800 font-semibold px-4 outline-none rounded-lg h-[5vw] shadow-xl shadow-slate-900"
							placeholder="write your status here"
						/>
					</div>
					<div className="flex place-content-center">
						<input
							type="submit"
							value="Update"
							className="mt-4 py-2 px-8 bg-white rounded-xl text-xl font-semibold tracking-wider border-slate-700 border-4 shadow-xl shadow-black"
						/>
					</div>
				</form>
			</div>
		</div>
	);
}

export default Status;
