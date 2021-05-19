//Loader
class LoadersModal {
    commonLoading: boolean = false;
}

//User Auth Details 
class UserDataModal {
    email: string = '';
    password: string = '';
}

//Internet Check InternetStatusModel
class InternetStatusModel {
    isConnected: boolean = false
}

//Home screen API
class DashboardModel {
    employee_details: Array<object> = [];
}

//Main ReducersModal Model
class ReducersModal {
    userDataReducer: UserDataModal = new UserDataModal();
    globalLoaderReducer: LoadersModal = new LoadersModal();
    internetStatusReducer: InternetStatusModel = new InternetStatusModel();
    dashboardReducer: DashboardModel = new DashboardModel();
}

export {
    LoadersModal,
    ReducersModal,
    UserDataModal,
    DashboardModel,
    InternetStatusModel,
}