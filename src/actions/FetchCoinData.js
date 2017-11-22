import axios from 'axios';

import { ActionTypes, C } from '../constants';

const { apiBaseURL } = C;
const {
  FETCHING_COIN_DATA,
  FETCHING_COIN_DATA_SUCCESS,
  FETCHING_COIN_DATA_FAIL,
} = ActionTypes;

export default function FetchCoinData() {
  return (dispatch) => {
    dispatch({ type: FETCHING_COIN_DATA });

    return axios
      .get(`${apiBaseURL}/v1/ticker/?limit=10`)
      .then((res) => {
        dispatch({ type: FETCHING_COIN_DATA_SUCCESS, payload: res.data });
      })
      .catch((err) => {
        dispatch({ type: FETCHING_COIN_DATA_FAIL, payload: err.data });
      });
  };
}
