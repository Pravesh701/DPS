import auth from '@react-native-firebase/auth';
import { StackActions } from '@react-navigation/native';

//Custom Imports
import services from '../../utils/services';
import endPoint from '../../utils/endpoint';
import constant from "../../utils/constants";
import ActionNames from '../../utils/actionNames';
import { UserDataModal } from '../../utils/modals';
import { showHideLoader } from "../../action/commonReduxAction";

export const updateDashboardFields = (key: string, value: any) => ({
    type: ActionNames.UPDATE_DASHBOARD_FIELDS,
    payload: { [key]: value }
});


export const signOutFirebaseUser = (navigation: any) => {
    return (dispatch: Function, getState: Function) => {
        let { isConnected } = getState().internetStatusReducer;
        if (isConnected) {
            dispatch(showHideLoader(true));
            auth()
                .signOut()
                .then(() => {
                    dispatch(showHideLoader(false));
                    dispatch({
                        type: ActionNames.UPDATE_USER_DATA,
                        payload: { ... new UserDataModal() }
                    })
                    navigation.popToTop();
                })
                .catch((error: any) => {
                    dispatch(showHideLoader(false));
                    console.log('Firebase Logout Error', error);
                    navigation.popToTop();
                })
        }
        else {
            constant.showSnackBar("Please check your internet connection.")
        }
    }
}

export const getEmployeeDataApi = () => {
    return (dispatch: Function, getState: Function) => {
        let { isConnected } = getState().internetStatusReducer;
        if (isConnected) {
            dispatch(showHideLoader(true));
            services.getApiCall(endPoint.getEmpData, (response: any)=>{
                dispatch(showHideLoader(false));
                dispatch(updateDashboardFields('employee_details', response.data))
            }, (error: any)=>{
                dispatch(showHideLoader(false));
            })
        }
        else {
            constant.showSnackBar("Please check your internet connection.")
        }
    }
}