import auth from '@react-native-firebase/auth';

//Custom import
import screens from "../../utils/screens";
import constant from "../../utils/constants";
import ActionNames from '../../utils/actionNames';
import { showHideLoader } from "../../action/commonReduxAction";

export const createUserWithEmailAndPassword = (navigation: any, email: string, password: string) => {
    return (dispatch: Function, getState: Function) => {
        let { isConnected } = getState().internetStatusReducer;
        if (isConnected) {
            dispatch(showHideLoader(true));
            auth()
                .createUserWithEmailAndPassword(email, password)
                .then((response: any) => {
                    dispatch(showHideLoader(false));
                    console.log('User account created & signed in!', response);
                    dispatch({
                        type: ActionNames.UPDATE_USER_DATA,
                        payload: { ...{ email }, ...{ password } }
                    })
                    navigation.navigate(screens.HOME_DRAWER);
                })
                .catch((error: any) => {
                    console.log('error', error);
                    dispatch(showHideLoader(false));
                    if (error.code === 'auth/email-already-in-use') {
                        constant.showSnackBar("That email address is already in use!")
                        console.log('That email address is already in use!', error);
                    }
                    if (error.code === 'auth/invalid-email') {
                        console.log('That email address is invalid!', error);
                        constant.showSnackBar("That email address is invalid!")
                    }
                });
        }
        else {
            constant.showSnackBar("Please check your internet connection.")
        }
    }
}