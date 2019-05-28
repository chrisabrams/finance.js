import round from './round';

/**
 * Present Value
 * =PV in Excel
 * @param rate Rate of return
 * @param numPeriods Number of periods
 * @param pmt Cash flow
 */
export default function presentValue(rate: number, numPeriods: number = 1, pmt: number): number {

  const pv = pmt / Math.pow((1 + rate), numPeriods);

  return round(pv);

}
