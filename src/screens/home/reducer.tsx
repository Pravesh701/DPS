//Custom Imports
import ActionNames from "../../utils/actionNames";
import { DashboardModel } from "../../utils/modals";

export const dashboardReducer = (state: DashboardModel = new DashboardModel(), action: any) => {
    switch (action.type) {
        case ActionNames.UPDATE_DASHBOARD_FIELDS:
            return { ...state, ...action.payload };
        default:
            return state;
    }
}