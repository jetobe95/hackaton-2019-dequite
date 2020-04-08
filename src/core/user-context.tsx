import React, { createContext } from 'react'

export enum LoginType {
    fb,
    tw,
    anonimo
}



export interface IUser {
    name: string,
    loginType: LoginType
}
export interface IUserContext {
    user: IUser,
    landingPageShown: boolean,
    setLandingPageShown(action: boolean): void,
    getLandingPageShown(): boolean,
    token: string,
    setToken(token: string): void,
    getToken(): Promise<string>,
    loadingToken: boolean,
    setLoadingToken(bool: boolean): void,
}

class IUserContextImp implements IUserContext {
    setLoadingToken(bool: boolean): void {
        this.loadingToken = true;
    }
    loadingToken: boolean = false;
    user: IUser = {
        loginType: LoginType.anonimo,
        name: 'Anónimo'
    }
    landingPageShown: boolean = false;
    token: string = '';
    setLandingPageShown(action: boolean): void {
        throw new Error("Method not implemented.");
    }
    getLandingPageShown(): boolean {
        throw new Error("Method not implemented.");
    }
    setToken(token: string): void {
        throw new Error("Method not implemented.");
    }
    getToken(): Promise<string> {
        throw new Error("Method not implemented.");
    }
}



const UserContext = createContext<IUserContext>(new IUserContextImp());


export class Provider extends React.Component implements IUserContextImp {



    async componentDidMount() {
        this.setLoadingToken(true)
        const token = await this.getToken()
        this.setToken(token);
        this.setLoadingToken(false);
    }

    loadingToken: boolean = false;
    user: IUser = {
        loginType: LoginType.anonimo,
        name: 'Anónimo'
    }
    landingPageShown: boolean = false;
    token: string = '';
    setLoadingToken = (bool: boolean) => {
        this.loadingToken = bool;
        this.setState({})
    }

    setLandingPageShown(action: boolean): void {
        localStorage.setItem('LandingPageShown', JSON.stringify(action))
    }
    getLandingPageShown(): boolean {
        const response = localStorage.getItem('LandingPageShown')
        if (response != null) {
            return JSON.parse(response);
        } else {
            return false
        }
    }
    setToken = (token: string) => {
        this.token = token;
        localStorage.setItem('token', token)
        this.setState({});
    }
    getToken(): Promise<string> {
        return new Promise((resolve) => {
            setTimeout(() => {
                const token = localStorage.getItem('token')
                if (token == null) {
                    resolve('')
                } else {
                    resolve(token)

                }
            }, 0)

        })
    }

    render() {
        const value: IUserContext = {
            setToken: this.setToken,
            landingPageShown: this.landingPageShown,
            token: this.token,
            getToken: this.getToken,
            getLandingPageShown: this.getLandingPageShown,
            setLandingPageShown: this.setLandingPageShown,
            user: this.user,
            loadingToken: this.loadingToken,
            setLoadingToken: this.setLoadingToken
        }
        return (
            <UserContext.Provider value={value}>
                {this.props.children}
            </UserContext.Provider>
        )
    }
}

export const Consumer = UserContext.Consumer
export default UserContext


