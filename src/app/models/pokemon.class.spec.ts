import { Pokemon } from './pokemon.class';

describe('Pokemon', () => {
  it('should create an instance', () => {
    expect(new Pokemon()).toBeTruthy();
  });
});
