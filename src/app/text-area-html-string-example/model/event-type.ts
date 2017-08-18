import { EditEvent } from './model.interface';

export class EditEventType implements EditEvent {

    get event(): any {
        return this._event;
    }

    set event(value: any) {
        this._event = value;
    }

    get data(): any {
        return this._data;
    }

    set data(value: any) {
        this._data = value;
    }

    private _event: any;
    private _data: any;

    constructor(event: any, data: any) {
        this.event = event;
        this.data = data;
    }

}