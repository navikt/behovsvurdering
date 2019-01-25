
export default class ConditionalNavigation {
    _side: string = "";
    _sideNot: string = "";
    _condition: boolean = true;

    navigerTil(value: string) {
        this._side = value;
        return this;
    }

    hvis(value: boolean) {
        this._condition = value;
        return this;
    }

    ellers(value : string) {
        this._sideNot = value;
        return this;
    }

    naviger() {
        if (this._condition) {
            return this._side;
        }
        return this._sideNot;
    }
}