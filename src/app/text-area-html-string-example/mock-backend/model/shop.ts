import { IShop } from './model.interface';

export class Shop implements IShop {

    private _user_id: string;
    private _shop_id: string;
    private _shop_name: string;

    constructor(userId: string, shopId: string, shopName: string) {
        this.user_id = userId;
        this.shop_id = shopId;
        this.shop_name = shopName;
    }

    get user_id(): string {
        return this._user_id;
    }

    set user_id(value: string) {
        this._user_id = value;
    }

    get shop_id(): string {
        return this._user_id;
    }

    set shop_id(value: string) {
        this._user_id = value;
    }

    get shop_name(): string {
        return this._shop_name;
    }

    set shop_name(value: string) {
        this._shop_name = value;
    }
}
