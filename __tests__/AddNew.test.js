import React from 'react'
import { render } from '@testing-library/react-native'
import AddNew from '../src/screen/AddNew';
import renderer from "react-test-renderer";


it("must be 2 child", () => {
    render(<AddNew />)
    const comp = renderer.create(<AddNew />).toJSON();
    expect(comp.children.length).toBe(2);
});