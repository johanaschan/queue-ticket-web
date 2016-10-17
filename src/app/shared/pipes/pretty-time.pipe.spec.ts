import { PrettyTimePipe } from './pretty-time.pipe';

describe('Pipe: PrettyNumber', () => {

  it('create an instance', () => {
    let pipe = new PrettyTimePipe();
    expect(pipe).toBeTruthy();
  });

  it('transforms time', () => {
    let pipe = new PrettyTimePipe();
    expect(pipe.transform(3634382834834298328000)).toEqual('42064616143d 21h 58m 18.5s');
  });

});
