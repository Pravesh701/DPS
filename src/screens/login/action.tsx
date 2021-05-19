import auth from '@react-native-firebase/auth';

//Custom import
import common from "../../utils/common";
import screens from "../../utils/screens";
import Services from "../../utils/services";
import constant from "../../utils/constants";
import endPoints from '../../utils/endpoint';
import ActionNames from "../../utils/actionNames";
import { showHideLoader } from "../../action/commonReduxAction";

export const updateUserDataFields = (key: string, value: any) => ({
    type: ActionNames.UPDATE_USER_DATA,
    payload: { [key]: value }
});

export const hitLoginAPI = (navigation: any) => {
    return (dispatch: Function, getState: Function) => {
        let { isConnected } = getState().internetStatusReducer;
        let { email, password } = getState().userDataReducer;
        if (isConnected) {
            let payload = {
                email,
                password
            }
            dispatch(showHideLoader(true));
            Services.postApiCall(endPoints.logInAdmin, payload, (response: any) => {
                let { data } = response;
                dispatch(showHideLoader(false));
                if (data.statusCode === common.status_code.success) {
                    console.log('Response Data', data)
                    navigation.navigate(screens.HOME_DRAWER);
                } else {
                    constant.showSnackBar(data.message);
                }
            }, (error: any) => {
                dispatch(showHideLoader(false));
                constant.showSnackBar(error.data.message);
            })
        }
        else {
            constant.showSnackBar("Please check your internet connection.")
        }
    }
}

export const signInWithEmailAndPassword = (navigation: any) => {
    return (dispatch: Function, getState: Function) => {
        let { isConnected } = getState().internetStatusReducer;
        let { email, password } = getState().userDataReducer;
        if (isConnected) {
            dispatch(showHideLoader(true));
            auth()
                .signInWithEmailAndPassword(email, password)
                .then((response: any) => {
                    dispatch(showHideLoader(false));
                    console.log('signed in!', response);
                    navigation.navigate(screens.HOME_DRAWER);
                })
                .catch(error => {
                    dispatch(showHideLoader(false));
                    console.log('firebase error = ', error);
                    if (error.code === 'auth/invalid-email') {
                        console.log('That email address is invalid!', error);
                        constant.showSnackBar("That email address is invalid!")
                    }else if (error.code === 'auth/user-not-found') {
                        console.log('There is no user record corresponding to this identifier', error);
                        constant.showSnackBar("There is no user record corresponding to this identifier!")
                    }
                    else if (error.code === 'auth/wrong-password') {
                        console.log('There is no user record corresponding to this identifier', error);
                        constant.showSnackBar("Invalid Password")
                    }
                    else{
                        constant.showSnackBar("Error occured!");
                    }
                });
        }
        else {
            constant.showSnackBar("Please check your internet connection.")
        }
    }
}
