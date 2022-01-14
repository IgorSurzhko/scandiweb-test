export default function serializedLocal() {
	const allStorage = { ...localStorage };
	let retrievedProds = [];
	for (const prod of Object.values(allStorage)) {
		let res = JSON.parse(prod);
		retrievedProds.push(res);
	}
	return retrievedProds;
}
