import React from 'react'
import { fireEvent, render } from '@testing-library/react-native'
import AddNew from '../src/screen/AddNew';
import renderer from "react-test-renderer";
import CustomButton from '../src/components/CustomButton';



it("should be rendered correct times", () => {
    render(<AddNew />)
    const comp = renderer.create(<AddNew />).toJSON();

    expect(comp.children.length).toBe(2);
    expect(comp.children[0].children[0].children.length).toEqual(4)
});


it("should be return main page", () => {
    const onNavigateMock = jest.fn();
    const { getByTestId } = render(<CustomButton onAction={() => onNavigateMock("Main")} />)

    fireEvent.press(getByTestId('customButton'));
    expect(onNavigateMock).toHaveBeenCalledWith("Main")
});