interface IUserProfile {
    id?: string,
    name: strig,
    email: string,
    password: string,
    active: boolean,
}

type ActiveProfileState = {
    profile: IUserProfile
}

type ActiveProfileAction = {
    type: string,
    profile: IUserProfile
}

type DispatchType = (args: ActiveProfileAction) => ActiveProfileAction