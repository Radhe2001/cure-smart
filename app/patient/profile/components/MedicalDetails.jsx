'use client';
import React, { useState } from 'react';

function MedicalDetails() {
	const [disabled, setDisabled] = useState(true);
	const [wight, setWeight] = useState('');
	const [height, setHeight] = useState('');
	const [bloodGroup, setBloodGroup] = useState('A+');
	const [selectedDisease, setSelectedDisease] = useState([]);
	const [selectedAllergy, setSelectedAllergy] = useState([]);
	const disease = [
		'Chickenpox',
		'Malaria',
		'Diabetes',
		'Asthma',
		'Cancer',
		'Mumps',
		'Influeneza',
		'Tuberculosis',
		'Dengue',
		'Others',
		'None',
	];
	const allergy = [
		'Pollen',
		'Dust',
		'Milk',
		'Egg',
		'Peanut',
		'Kiwi',
		'Others',
		'None',
	];

	function handleEditDisease(item, checked) {
		if (checked) {
			setSelectedDisease([...selectedDisease, item]);
		} else {
			let arr = selectedDisease.filter((e) => {
				if (e !== item) return e;
			});
			setSelectedDisease(arr);
		}
	}
	function handleEditAllergy(item, checked) {
		if (checked) {
			setSelectedAllergy([...selectedAllergy, item]);
		} else {
			let arr = selectedAllergy.filter((e) => {
				if (e !== item) return e;
			});
			setSelectedAllergy(arr);
		}
	}
	const handleSubmit = (e) => {
		e.preventDefault();
		setDisabled(true);
	};
	return (
		<section className="">
			<div className="flex place-content-center">
				<form onSubmit={handleSubmit} className="my-10 w-[60vw]">
					<div className="flex gap-[4vw] ">
						<div className="grid">
							<label
								className="text-white text-2xl tracking-wider font-serif font-semibold italic mb-2 ml-3"
								htmlFor="bloodGroup"
							>
								Blood Group
							</label>
							<select
								className="border-gray-300 text-2xl font-normal font-serif tracking-wider rounded-2xl px-6 py-3 focus:outline-none border-none w-[20vw] bg-[#f9aad0] text-slate-800"
								name="bloodGroup"
								value={bloodGroup}
								onChange={(e) => setBloodGroup(e.target.value)}
								required={true}
								disabled={disabled}
							>
								<option value="A+">A+</option>
								<option value="A-">A-</option>
								<option value="B+">B+</option>
								<option value="B-">B-</option>
								<option value="O+">O+</option>
								<option value="O-">O-</option>
								<option value="AB+">AB+</option>
								<option value="AB-">AB-</option>
							</select>
						</div>
						<div className="grid">
							<label
								className="text-white text-2xl tracking-wider font-serif font-semibold italic mb-2 ml-3"
								htmlFor="height"
							>
								Height (cm)
							</label>
							<input
								type="number"
								className="w-[16vw] px-6 py-3 text-2xl font-serif font-semibold tracking-widest rounded-2xl bg-[#f9aad0] text-slate-800 "
								name="height"
								onChange={(e) => setHeight(e.target.value)}
								required={true}
								disabled={disabled}
							/>
						</div>
						<div className="grid">
							<label
								className="text-white text-2xl tracking-wider font-serif font-semibold italic mb-2 ml-3"
								htmlFor="weight"
							>
								Weight (kg)
							</label>
							<input
								type="number"
								className="w-[16vw] px-6 py-3 text-2xl font-serif font-semibold tracking-widest rounded-2xl bg-[#f9aad0] text-slate-800"
								name="weight"
								onChange={(e) => setWeight(e.target.value)}
								required={true}
								disabled={disabled}
							/>
						</div>
					</div>
					<div className="grid w-full">
						<h3 className="text-white text-3xl font-semibold font-serif italic mt-8">
							What illnesses or diseases have you had in past?
						</h3>
						<div className="grid grid-cols-3 gap-[2vw] mt-8">
							{disease.map((item, index) => {
								return (
									<div
										className=" border-gray-300 text-2xl font-normal font-serif tracking-wider rounded-2xl px-6 py-3 focus:outline-none border-none w-[19vw] bg-[#f9aad0] text-slate-800"
										key={index}
									>
										<label className="flex place-items-center gap-4">
											<input
												type="checkbox"
												className="h-6 w-6 border-2 border-slate-700"
												value={item}
												checked={
													selectedDisease.indexOf(
														item
													) === -1
														? false
														: true
												}
												onChange={(e) =>
													handleEditDisease(
														item,
														e.target.checked
													)
												}
												disabled={disabled}
											/>
											{item}
										</label>
									</div>
								);
							})}
						</div>
					</div>
					<div className="grid w-full">
						<h3 className="text-white text-3xl font-semibold font-serif italic mt-8">
							What allergies do you have?
						</h3>
						<div className="grid grid-cols-3 gap-[2vw] mt-8">
							{allergy.map((item, index) => {
								return (
									<div
										className=" border-gray-300 text-2xl font-normal font-serif tracking-wider rounded-2xl px-6 py-3 focus:outline-none border-none w-[19vw] bg-[#f9aad0] text-slate-800"
										key={index}
									>
										<label className="flex place-items-center gap-4">
											<input
												type="checkbox"
												className="h-6 w-6 border-2 border-slate-700"
												value={item}
												checked={
													selectedAllergy.indexOf(
														item
													) === -1
														? false
														: true
												}
												onChange={(e) =>
													handleEditAllergy(
														item,
														e.target.checked
													)
												}
												disabled={disabled}
											/>
											{item}
										</label>
									</div>
								);
							})}
						</div>
					</div>
					<div className="flex place-content-end px-16 mt-8 gap-[1vw]">
						<button
							className="bg-[#c1c3cc] text-slate-800 px-5 py-2 text-2xl font-semibold tracking-wider font-serif rounded-2xl hover:bg-cyan-600"
							onClick={(e) => {
								e.preventDefault();
								setDisabled(false);
							}}
						>
							Edit
						</button>
						<input
							className="bg-[#c1c3cc] text-slate-800 px-5 py-2 text-2xl font-semibold tracking-wider font-serif rounded-2xl hover:bg-cyan-600"
							type="submit"
							value="Save"
						/>
					</div>
				</form>
			</div>
		</section>
	);
}

export default MedicalDetails;
