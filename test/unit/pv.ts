import { expect } from 'test/helpers';
import pv from '~/pv';

describe('Present Value', () => {

  it('should calculate', () => {

    const result = pv(0.06, 1, 1000);

    expect(result).to.equal(943.40);

  })

})
