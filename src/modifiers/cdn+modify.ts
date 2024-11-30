export function modify(iconId?: string) {
  const BASE_URL_4X: string = `${iconId}@4x.png`;
  return BASE_URL_4X;
}

export function flag(sys?: string) {
  return `https://flagsapi.com/${sys}/flat/64.png`;
}
