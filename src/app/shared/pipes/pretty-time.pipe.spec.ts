import { PrettyTimePipe } from './pretty-time.pipe';

describe('Pipe: PrettyNumber', () => {

  it('create an instance', () => {
    let pipe = new PrettyTimePipe();
    expect(pipe).toBeTruthy();
  });

  it('transforms time', () => {
    let pipe = new PrettyTimePipe();
    expect(pipe.transform(299292929292929)).toEqual('3d 11h 8m 13s');
  });

});
