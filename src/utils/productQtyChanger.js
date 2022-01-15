export default function changeQty(id, qty, context) {
	const { setQty } = context;

	const retrievedObject = JSON.parse(localStorage.getItem(id));
	retrievedObject.qty = qty;
	localStorage.setItem(id, JSON.stringify(retrievedObject));

	const qtyObj = { [id]: qty };

	setQty(qtyObj);
}
