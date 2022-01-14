export default function changeQty(id, qty) {
	const retrievedObject = JSON.parse(localStorage.getItem(id));
	retrievedObject.qty = qty;

	localStorage.setItem(id, JSON.stringify(retrievedObject));
}
