import React from 'react'
import { fireEvent, render } from '@testing-library/react-native'
import CustomInput from '../src/components/CustomInput'


it('should be changed value when typing', () => {
    const onEventMock = jest.fn();
    const { getByPlaceholderText } = render(<CustomInput setField={onEventMock} placeholder={"John Doe"} />);
    fireEvent(getByPlaceholderText("John Doe"), 'onChangeText', 'new name');
    expect(onEventMock).toHaveBeenCalledWith('new name');
})