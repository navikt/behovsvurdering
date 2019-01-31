
import React from 'react';
import { shallow } from 'enzyme';

import LettEllerVanskeligSpm from './LettEllerVanskeligSpm';

it('renders without crashing', () => {
    shallow(<LettEllerVanskeligSpm
        endreAlternativ={ jest.fn() }
        valgtAlternativ={ jest.fn() }
        nextPage={ jest.fn() } />);
});
