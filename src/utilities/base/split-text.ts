export function splitText(input: string): string[] {
  const regex = /[\s]{2,}/;
  return input.match(regex) ? input.split(regex) : [input];
}
