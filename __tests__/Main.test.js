import React from 'react'
import { render } from '@testing-library/react-native'
import Main from '../src/screen/Main'


it('should be rendered plus button', () => {
    const { getByTestId } = render(<Main />)
    getByTestId("roundedAddBtn")
})