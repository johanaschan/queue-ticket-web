export class Event {
  constructor(private _event: string) {
  }

  get event(): string {
    return this._event;
  }
}
