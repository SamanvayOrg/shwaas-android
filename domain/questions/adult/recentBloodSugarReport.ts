import questionTypes from '../../questionTypes/questionTypes';
import {alwaysGreen} from '../utils';
import {Question} from "@/domain/Question";

const key = 'recentBloodSugarReport';

const show = ({comorbidities = []}) => comorbidities.includes('diabetes');

export default <Question>{
  key,
  label: key,
  type: questionTypes.boolean,
  show,
  output: alwaysGreen,
};
