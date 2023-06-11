import { render } from '@testing-library/react';
import Characters from '@components/characters';
import LastViewedCharacters from '../last-viewed-characters';
import Home from '.';

jest.mock('@components/characters', () => jest.fn());
jest.mock('../last-viewed-characters', () => jest.fn());

describe('Home', () => {
  it('should render Characters and LastViewedCharacters', () => {
    render(<Home />);

    expect(Characters).toHaveBeenCalled();
    expect(LastViewedCharacters).toHaveBeenCalled();
  });
});
