import questionTypes from '../../questionTypes/QuestionType';
import {alwaysShow, redIfFalse} from '../utils';
import {Question} from "@/domain/Question";

const key = 'passedUrineInPast6Hours';

const output = form => redIfFalse(form[key]);

export default <Question>{
  key,
  label: key,
  type: questionTypes.boolean,
  show: alwaysShow,
  output,
  optionImages: {
    no: require('../../../assets/images/child/noUrine.jpg'),
  },
  commonImage: require('../../../assets/images/child/noUrine.jpg'),
};
