
import React from 'react';
import { mount, shallow, render } from 'enzyme';

import LettEllerVanskeligSpm from './LettEllerVanskeligSpm';

it('renders without crashing', () => {
    shallow(<LettEllerVanskeligSpm nextPage={ jest.fn() } />);
});
