
import React from 'react';
import { shallow } from 'enzyme';

import InfoPanel from './InfoPanel';
import { Normaltekst } from 'nav-frontend-typografi';
import Icon from 'nav-frontend-ikoner-assets';

it('renders without crashing', () => {
    shallow(<InfoPanel type="ok-sirkel-fyll">Tekst</InfoPanel>);
});

it('renders text', () => {
    const render = shallow(<InfoPanel type="ok-sirkel-fyll">Tekst</InfoPanel>);
    expect( render.find(Icon) ).toHaveLength(1);
    expect( render.find(Normaltekst) ).toHaveLength(1);
    expect( render.contains(<Normaltekst >Tekst</Normaltekst>) ).toBeTruthy();
});
