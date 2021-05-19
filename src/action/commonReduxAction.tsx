//Custom import
import ActionNames from '../utils/actionNames';

export const updateInternetStatusFields = (key: string, value: boolean) => ({
    type: ActionNames.UPDATE_INTERNET_FIELDS,
    payload: { [key]: value }
});

export const showHideLoader = (isLoading: boolean) => ({
    type: ActionNames.LOADING,
    payload: { scope: 'common', isLoading: isLoading }
});