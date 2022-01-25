import { productDuplicateCheck } from './productDuplicateCheck';
import changeQty from './productQtyChanger';

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
	const newProduct = {
		prodId,
		name,
		gallery,
		brand,
		qty: 1,
		prices,
		attributes: prodAttrFiltered
	};

	let duplicate = productDuplicateCheck(newProduct);

	if (duplicate.length === 0) {
		setProduct(newProduct);
		localStorage.setItem(prodId, JSON.stringify(newProduct));
	} else {
		duplicate[0].qty += 1;

		changeQty(duplicate[0].prodId, duplicate[0].qty, context);
	}
}
