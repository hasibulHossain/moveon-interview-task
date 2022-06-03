import * as types from '../types';

/**
 * a summery
 * @param {String} test 
 * @returns {{type: Number, payload: String}}
 */
export const testOne = (test) => {
    return {
        type: types.TEST,
        payload: test
    }
};