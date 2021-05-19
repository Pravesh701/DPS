// custom imports
import ActionNames from '../utils/actionNames';
import { LoadersModal, UserDataModal, InternetStatusModel } from '../utils/modals';

export const globalLoaderReducer = (state: LoadersModal = new LoadersModal(), action: any) => {
    const { payload } = action;
    switch (action.type) {
        case ActionNames.LOADING:
            return Object.assign({}, state, {
                //@ts-ignore
                [`${payload.scope}Loading`]: payload.isLoading,
            });
        default:
            return { ...state };
    }
};

export const internetStatusReducer = (state: InternetStatusModel = new InternetStatusModel(), action: any) => {
    const { payload } = action;
    switch (action.type) {
        case ActionNames.UPDATE_INTERNET_FIELDS:
            return { ...state, ['isConnected']: payload.isConnected }
        default:
            return { ...state };
    }
}

export const userDataReducer = (state: UserDataModal = new UserDataModal(), action: any) => {
    switch (action.type) {
        case ActionNames.UPDATE_USER_DATA:
            return { ...state, ...action.payload };
        default:
            return state;
    }
}