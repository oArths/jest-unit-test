import { render } from '@testing-library/react';
import React from 'react';
import { Square } from "./index.js"
import '@testing-library/jest-dom/';

describe('realizando teste no square', () => {
    it('verificar se o square tem 200px', () => {
        const {container} = render(<Square/>)

        expect(container.firstChild).toHaveStyle('width: 200px')

    })
    it('verificar se o square tem a cor azul', () => {
        const {container} = render(<Square/>)

        expect(container.firstChild).toHaveStyle('background-color: blue')

    })
    it('verificar se o square tem a borda com 10px', () => {
        const {container} = render(<Square/>)

        expect(container.firstChild).toHaveStyle('border-radius: 10px')

    })
    it('verificar se o square tem afont-size de  com 10px', () => {
        const {container} = render(<Square/>)

        expect(container.firstChild).toHaveStyle('font-size: 10px')

    })
})