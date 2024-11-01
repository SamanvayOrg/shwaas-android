import questionTypes from '../../questionTypes/questionTypes';
import {objectify, outputWeight} from '../utils';
import age from '../common/age';
import sex from './sex';
import weightForAgeGrade3 from './weightForAgeGrade3';
import accessToWeighingMachine from './accessToWeighingMachine';
import {Question} from "@/domain/Question";

const key = 'childWeight';

const show = form =>
  form[accessToWeighingMachine.key] === true && form[age.key] <= 120;

const output = form => {
  const ageInMonths = form[age.key];
  const sexOfChild = form[sex.key];

  const reference = weightForAgeGrade3.find(item => item.age === ageInMonths);
  return form[key] <= reference[sexOfChild]
    ? objectify(outputWeight.red)
    : objectify(outputWeight.green);
};

export default <Question>{
  key,
  label: key,
  type: questionTypes.numeric,
  unit: 'kg',
  show,
  output,
};
