import { serializedLocal } from './serializedLocal';

export function productDuplicateCheck(newProd) {
	let retrievedObject = serializedLocal();

	let result = retrievedObject.filter(
		item =>
			JSON.stringify(item.attributes) === JSON.stringify(newProd.attributes) &&
			item.brand === newProd.brand
	);

	return result;
}
