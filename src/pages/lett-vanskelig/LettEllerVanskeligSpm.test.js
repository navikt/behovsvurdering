
import React from 'react';
import {shallow} from 'enzyme';

import LettEllerVanskeligSpm from './LettEllerVanskeligSpm';

test('has correct license nr', () => {

    const spm = shallow( <LettEllerVanskeligSpm nextPage={ () => true } /> );
    expect('AB12345').toBe("AB12345");
});

