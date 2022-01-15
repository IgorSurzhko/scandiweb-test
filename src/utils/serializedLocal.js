export function serializedLocal() {
	const allStorage = { ...localStorage };
	let retrievedProds = [];
	for (const prod of Object.values(allStorage)) {
		let res = JSON.parse(prod);
		retrievedProds.push(res);
	}
	return retrievedProds;
}

export function serializedLocalQty() {
	const retrievedProds = serializedLocal();
	const qtyObj = [];
	retrievedProds.map(element => qtyObj.push({ [element.prodId]: element.qty }));
	return qtyObj;
}
