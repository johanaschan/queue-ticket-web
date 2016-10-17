import { PrettyTimePipe } from './pretty-time.pipe';

describe('Pipe: PrettyNumber', () => {

  it('create an instance', () => {
    let pipe = new PrettyTimePipe();
    expect(pipe).toBeTruthy();
  });

  it('transforms time', () => {
    let pipe = new PrettyTimePipe();
    expect(pipe.transform(3600000000)).toEqual('1 hour');
  });

});
