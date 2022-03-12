import React from 'react'
import { fireEvent, render } from '@testing-library/react-native'
import { NavigationContainer } from '@react-navigation/native';
import RootStack from '../src/navigation/RootStack';
import Main from '../src/screen/Main';


test('clicking on one item takes you to the details screen', async () => {

    const { debug } = render(<Main />);
    // const toClick = await findByText('Laura Mayer');

    // fireEvent(toClick, 'press');
    // const newHeader = await findByText('Showing details for 5');
    // const newBody = await findByText('the number you have chosen is 5');

    // expect(newHeader).toBeTruthy();
    // expect(newBody).toBeTruthy();
});