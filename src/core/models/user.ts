import Genre from "./genres";
import _ from 'lodash';
interface copyWithParams {
    name?: string,
    genres?: Genre[]
}

export default class User {
    public name?: string;
    public genres?: Genre[]


    constructor(name?: string, genres?: Genre[]) {
        this.name = name;
        this.genres = genres;
    }

    copyWith(user: copyWithParams): User {
        const newUser = new User(this.name,this.genres);
        if(user.name){
            newUser.name = user.name;
        }
        if(!_.isEmpty(user.genres)){
            newUser.genres = user.genres;
        }
        return newUser;
    }


    toJSON(): string {
        return JSON.stringify({
            name: this.name,
            genres: this.genres
        });
    }
}