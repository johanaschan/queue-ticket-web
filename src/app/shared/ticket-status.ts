export class TicketStatus {
  constructor(private _estimatedWaitTime: number, private _numbersBefore: number) {
  }

  get estimatedWaitTime(): number {
    return this._estimatedWaitTime;
  }

  get numbersBefore(): number {
    return this._numbersBefore;
  }
}
