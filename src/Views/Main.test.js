import React from 'react';
import {render, waitForElement, } from '@testing-library/react';
import Main from './Main';

describe('Test for main page', () => {
    it('Show test: ok ', async () => {
        const { getByTestId  } = render(<Main/>)
        const fieldNode = await waitForElement(() => getByTestId('div-field'));
        console.log(fieldNode);
    })
})