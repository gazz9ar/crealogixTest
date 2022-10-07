import { PersonHeightPipe } from './person-height.pipe';

describe('PersonHeightPipe', () => {
  it('create an instance', () => {
    const pipe = new PersonHeightPipe();
    expect(pipe).toBeTruthy();
  });
});
