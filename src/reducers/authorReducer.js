/**
 * Created by chungch on 7/1/2017.
 */
import * as Types from '../actions/actionType';
import InitialState from './InitialState';

export default function authorReducer(state = InitialState.authors, action) {
  switch (action.type) {
    case Types.LOAD_AUTHORS_SUCCESS:
      return action.authors;

    default:
      return state;
  }
}
