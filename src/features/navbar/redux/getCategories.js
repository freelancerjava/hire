import { useEffect, useCallback } from 'react';
import axios from 'axios';

import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import {
  NAVBAR_GET_CATEGORIES_BEGIN,
  NAVBAR_GET_CATEGORIES_SUCCESS,
  NAVBAR_GET_CATEGORIES_FAILURE,
  NAVBAR_GET_CATEGORIES_DISMISS_ERROR,
} from './constants';
import { strapi } from '../../../axios';

export function getCategories(args = {}) {
  return (dispatch) => { // optionally you can have getState as the second argument
    dispatch({
      type: NAVBAR_GET_CATEGORIES_BEGIN,
    });

    const promise = new Promise((resolve, reject) => {
      const doRequest = strapi.request(`post`, 'graphql', {
        data: {
          query: `
            query{
                categories{
                    id
                    name
                    suid
                    thumbnail{
                        url
                    }
                }
            }`
        }
      })
      doRequest.then(
        (res) => {
          // console.log(res);
          dispatch({
            type: NAVBAR_GET_CATEGORIES_SUCCESS,
            data: res.data.categories,
          });
          resolve(res);
        },
        // Use rejectHandler as the second argument so that render errors won't be caught.
        (err) => {
          dispatch({
            type: NAVBAR_GET_CATEGORIES_FAILURE,
            data: { error: err },
          });
          reject(err);
        },
      );
    });

    return promise;
  };
}

export function dismissGetCategoriesError() {
  return {
    type: NAVBAR_GET_CATEGORIES_DISMISS_ERROR,
  };
}

export function useGetCategories(params) {
  const dispatch = useDispatch();

  const { getCategoriesPending, getCategoriesError, categories } = useSelector(
    state => ({
      categories: state.navbar.categories,
      getCategoriesPending: state.navbar.getCategoriesPending,
      getCategoriesError: state.navbar.getCategoriesError,
    }),
    shallowEqual,
  );

  const boundAction = useCallback((...args) => {
    return dispatch(getCategories(...args));
  }, [dispatch]);

  const boundDismissError = useCallback(() => {
    return dispatch(dismissGetCategoriesError());
  }, [dispatch]);

  return {
    categories,
    getCategories: boundAction,
    getCategoriesPending,
    getCategoriesError,
    dismissGetCategoriesError: boundDismissError,
  };
}

export function reducer(state, action) {
  switch (action.type) {
    case NAVBAR_GET_CATEGORIES_BEGIN:
      // Just after a request is sent
      return {
        ...state,
        getCategoriesPending: true,
        getCategoriesError: null,
      };

    case NAVBAR_GET_CATEGORIES_SUCCESS:
      // The request is success
      // console.log("data", action.data);
      return {
        ...state,
        categories: action.data,
        getCategoriesPending: false,
        getCategoriesError: null,
      };

    case NAVBAR_GET_CATEGORIES_FAILURE:
      // The request is failed
      return {
        ...state,
        getCategoriesPending: false,
        getCategoriesError: action.data.error,
      };

    case NAVBAR_GET_CATEGORIES_DISMISS_ERROR:
      // Dismiss the request failure error
      return {
        ...state,
        getCategoriesError: null,
      };

    default:
      return state;
  }
}
