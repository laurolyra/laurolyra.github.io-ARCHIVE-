import { cleanup } from '@testing-library/react';

afterEach(cleanup);

describe ('some tests', () => {
  test ('some test', () => {
    expect(true).toBeTruthy();
  });
});
