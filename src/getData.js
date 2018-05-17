export function getData(url="https://demo0050088.mockable.io/simple/profils") {
	return fetch(url)
		.then(profils => profils.json(), err => console.error('failed to load profils', err));
}