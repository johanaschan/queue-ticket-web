export class Ticket {
  constructor(private _time: number, private _number: number, private _version) {
  }

  get time(): number {
    return this._time;
  }

  get number(): number {
    return this._number;
  }

  get version(): number {
    return this._version;
  }
}
