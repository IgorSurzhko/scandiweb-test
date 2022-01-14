export default function productSubmitter(state, context) {
	const { setProduct } = context;
	const { name, gallery, brand, prices } = state.product;

	const prodAttrFiltered = state.prodAttr.filter(element => {
		if (Object.keys(element).length !== 0) {
			return true;
		}
		return false;
	});
	let prodId = Date.now();
	const newProduct = { prodId, name, gallery, brand, qty: 1, prices, attributes: prodAttrFiltered };
	setProduct(newProduct);

	localStorage.setItem(prodId, JSON.stringify(newProduct));
}
