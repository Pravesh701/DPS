//Custom imports
import constant from './constants'
import Common from '../utils/common';

/**
 * post api
 * 
 * @param params 
 * @param endPoint 
 * @param errorCalback 
 * @param successCallback 
 */
const postApiCall = (
    endPoint: string,
    params: object,
    successCallback: Function,
    errorCalback: Function,
) => {
    console.log('Request: ', params);
    console.log('Endpoint: ', endPoint);
    console.log('RequestJSON: ', JSON.stringify(params));
    Common.axiosInstance
        .post(endPoint, params)
        .then((response: any) => {
            console.log('response: ', response);
            successCallback(response);
        })
        .catch((error: any) => {
            console.log(error);
            if (error.code === 'ECONNABORTED') {
                let payload = {
                    data: {
                        statusCode: 408
                    }
                };
                errorCalback(payload);
            } else if (error.response) {
                console.log('response: ', error.response);
                errorCalback(error.response);
            } else if (!error.response) {
                let payload = {
                    data: {
                        statusCode: ''
                    }
                };
                errorCalback(payload);
            }
        });
};

/**
 * get api
 * 
 * @param endPoint 
 * @param errorCalback 
 * @param successCallback 
 */

const getApiCall = (
    endPoint: string,
    successCallback: Function,
    errorCalback: Function,
) => {
    console.log('Endpoint: ', endPoint);
    Common.axiosInstance
        .get(endPoint, {})
        .then((response: any) => {
            console.log(response);
            successCallback(response);
        })
        .catch((error: any) => {
            console.log(error.response);
            if (error.code === 'ECONNABORTED') {
                let payload = {
                    data: {
                        statusCode: 408
                    }
                };
                errorCalback(payload);
            } else if (error.response) {
                errorCalback(error.response);
            } else if (!error.response) {
                let payload = {
                    data: {
                        statusCode: ''
                    }
                };
                errorCalback(payload);
            }
        });
};

/**
 * Global API multi purpose handler
 * @param payload
 * @param dropdown
 */
const handleApiError = (payload: any) => {
    constant.showSnackBar(payload.payload.data.errors.message)
};

export default {
    getApiCall,
    postApiCall,
    handleApiError,
};