/**
 * toFixedTwoDigits
 * @param n The number to be fixed to two digits.
 */
export default function toFixedTwoDigits (n: number): number {

  return Math.round(n * 100) / 100;

}
