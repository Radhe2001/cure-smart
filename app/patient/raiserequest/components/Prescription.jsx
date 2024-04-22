import React, { useEffect } from 'react';

function Prescription(props) {
	let dataEnabled = false;
	useEffect(() => {
		dataEnabled = Object.keys(props).length === 0 ? false : true;
	}, []);
	return (
		<section>
			
		</section>
	);
}

export default Prescription;
