import questionTypes from '../../questionTypes/questionTypes';
import {alwaysGreen} from '../utils';
import accessToNebuliser from './accessToNebuliser';

const key = 'giveNebulisation';
const value = () => '';
const show = form => form[accessToNebuliser.key] === true;

export default {
  key,
  label: key,
  type: questionTypes.information,
  show,
  output: alwaysGreen,
  value,
};
