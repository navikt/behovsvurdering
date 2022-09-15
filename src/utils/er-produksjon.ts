export function erProduksjon(url: string): boolean {
	const erDev = /dev/.test(url);
	return url.indexOf('nav.no') > -1 && !erDev;
}
