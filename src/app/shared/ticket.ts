export class Ticket {
  constructor(private _time: number, private _number: number) {
  }

  get time(): number {
    return this._time;
  }

  get number(): number {
    return this._number;
  }
}
