import { IUser } from './model.interface';

export class User implements IUser {

    private _user_id: string;
    private _user_name: string;
    private _age: number;
    private _sex: string;

    constructor(userId: string, userName: string) {
        this.user_id = userId;
        this.user_name = userName;
    }

    get user_id(): string {
        return this._user_id;
    }

    set user_id(value: string) {
        this._user_id = value;
    }

    get user_name(): string {
        return this._user_name;
    }

    set user_name(value: string) {
        this._user_name = value;
    }

    set age(value: number) {
        this._age = value;
    }

    get age(): number {
        return this._age;
    }

    get sex(): string {
        return this._sex;
    }

    set sex(value: string) {
        this._sex = value;
    }
}
