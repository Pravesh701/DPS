import { Platform } from 'react-native';
import axios, { AxiosInstance } from 'axios'

/**
 * Device and platform based information
 */
const isIOS = Platform.OS == 'ios';
const isAndroid = !isIOS;
const deviceType = isIOS ? 1 : 2;

//Base RRL
const DEV_API_URL = "https://boiler-plate-api.herokuapp.com/";

const $http: AxiosInstance = axios.create({
    baseURL: DEV_API_URL,
    timeout: 30000,
    headers: {
        'content-type': "application/json; charset=utf-8"
    }
});

const STATUS_CODE = {
    success: 200,
    successAction: 201,
    notFound: 404,
    badRequest: 400,
    Unauthorized: 401,
    invalid: 422,
    timeout: 408,
};

export default {
    isIOS,
    isAndroid,
    deviceType,
    os: Platform.OS,
    status_code: STATUS_CODE,
    axiosInstance: $http,
}