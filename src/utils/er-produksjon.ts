const url = window && window.location && window.location.href ? window.location.href : '';

export function erProduksjon (): boolean {
  return url.indexOf("behovsvurdering.nav.no") > -1;
}