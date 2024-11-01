import diabetesStatus from './diabetesStatus';
import {outputWeight} from '../utils';

jest.mock('react-native-localization');

describe('diabetesStatus', () => {
  test('should give uncontrolled', () => {
    expect(diabetesStatus.output({}).weight).toBe(outputWeight.yellow);
    expect(diabetesStatus.output({rbs: 'dontKnow'}).weight).toBe(outputWeight.yellow);
    expect(diabetesStatus.output({rbs: 'moreThan200'}).weight).toBe(
      outputWeight.yellow,
    );
    expect(diabetesStatus.output({rbs: 'lessThan200'}).weight).toBe(
      outputWeight.green,
    );
    expect(
      diabetesStatus.output({rbs: 'moreThan200', fbs: 'lessThan126'}).weight,
    ).toBe(outputWeight.yellow);
    expect(
      diabetesStatus.output({
        pp2bs: 'moreThan200',
        rbs: 'dontKnow',
        hba1c: 'lessThan7',
      }).weight,
    ).toBe(outputWeight.yellow);
  });
});
