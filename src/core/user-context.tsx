import React, { createContext } from 'react'
import User from './models/user';

export enum LoginType {
    fb,
    tw,
    anonimo
}

export interface IUserContext {
    user: User,
    landingPageShown: boolean,
    setLandingPageShown(action: boolean): void,
    getLandingPageShown(): boolean,
    token: string,
    setToken(token: string): void,
    getToken(): Promise<string>,
    loadingToken: boolean,
    setLoadingToken(bool: boolean): void,
    setUser(User: User): void,
    getUser(): User,
    searchQuery: string,
    setSearchQuery(arg: string): void
}


const UserContext = createContext<any>({});
export class Provider extends React.Component implements IUserContext {

    searchQuery: string = '';
    loadingToken: boolean = false;
    user: User = new User()
    landingPageShown: boolean = false;
    token: string = '';

    async componentDidMount() {
        this.setLoadingToken(true)
        const token = await this.getToken()
        this.user = this.getUser()
        this.setToken(token);
        this.setLoadingToken(false);
    }

    setUser = (user: User): void => {
        localStorage.setItem('user', user.toJSON())
        this.user = user;
        this.setState({})
    }

    setSearchQuery = (arg: string): void => {
        this.searchQuery = arg;
        this.setState({})
    }

    getUser(): User {
        const jsonString = localStorage.getItem('user');
        if (jsonString) {
            const userJson = JSON.parse(jsonString);
            const user = new User(userJson.name, userJson.genres);
            return user;
        } else {
            return new User();
        }
    }
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
            setLoadingToken: this.setLoadingToken,
            setUser: this.setUser,
            getUser: this.getUser,
            searchQuery: this.searchQuery,
            setSearchQuery: this.setSearchQuery,
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


