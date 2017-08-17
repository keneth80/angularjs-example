import { User, Shop } from '../model/index';

export const DML: string[] = [
    'SELECT', 'INSERT', 'DELETE', 'UPDATE'
];

export const TABLE_NAMES: Array<string> = [
    'tb_user', 'tb_shop'
];

export const USER_LIST: Array<User> = [
    new User('user01', 'kenneth'),
    new User('user02', 'Arnold'),
    new User('user03', 'Tony'),
    new User('user04', 'Peter')
];

export const SHOP_LIST: Array<Shop> = [
    new Shop('user01', 'shop01', 'pretty-shop1'),
    new Shop('user01', 'shop02', 'pretty-shop2'),
    new Shop('user01', 'shop03', 'pretty-shop3'),
    new Shop('user02', 'shop01', 'arnold-shop1'),
    new Shop('user02', 'shop02', 'arnold-shop2'),
    new Shop('user02', 'shop03', 'arnold-shop3'),
    new Shop('user03', 'shop01', 'tony-shop1'),
    new Shop('user03', 'shop02', 'tony-shop2'),
    new Shop('user03', 'shop03', 'tony-shop3')
];

// export const USER_TABLE_COLUMNS: string[] = Object.keys(USER_LIST[0]);
export const USER_TABLE_COLUMNS: string[] = ['user_id', 'user_name'];

// export const SHOP_TABLE_COLUMNS: string[] = Object.keys(SHOP_LIST[0]);
export const SHOP_TABLE_COLUMNS: string[] = ['user_id', 'shop_id', 'shop_name'];
