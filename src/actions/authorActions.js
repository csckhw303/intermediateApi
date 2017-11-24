/**
 * Created by chungch on 7/1/2017.
 */
import AuthorApi from '../api/mockAuthorApi';
import * as types from './actionType';
import {beginAjaxCall} from './ajaxStatusActions';

function loadAuthorSuccess(authors) {
  return {type: types.LOAD_AUTHORS_SUCCESS, authors } ;
}

export function loadAllAuthors() {
  return dispatch => {
    dispatch(beginAjaxCall());
    return AuthorApi.getAllAuthors().then(authors =>{
      dispatch(loadAuthorSuccess(authors));
      }).catch(error => { throw(error);})
  };
}
