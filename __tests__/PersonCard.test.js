import React from 'react'
import { fireEvent, render } from '@testing-library/react-native'
import PersonCard from '../src/components/PersonCard'
import renderer from "react-test-renderer";


describe('personCard actions', () => {

   const onPressMock = jest.fn();
   const onNavigateMock = jest.fn();

   let index = 0
   const item = {
      id: 1,
      name: "user1",
      job: "job1",
      avatar: "avatar1",
   }

   it('should be remove passed item', () => {
      const { getByTestId, findByText } = render(
         <PersonCard
            key={index}
            item={item}
            onDelete={() => onPressMock({ itemId: 1 })}
         />
      )

      fireEvent.press(getByTestId('onDeleteBtn'));
      expect(onPressMock).toHaveBeenCalledWith({ itemId: 1 });
   })

   it('should be called navigation props', () => {
      const { getByTestId } = render(
         <PersonCard
            key={index}
            item={item}
            onDetail={() => onNavigateMock("Detail", { selectedItem: item })}
         />
      )

      fireEvent.press(getByTestId('onDetailBtn'));
      expect(onNavigateMock).toHaveBeenCalledWith("Detail", { selectedItem: item });
   })

   it('should be not empty', () => {
      const { getByTestId } = render(
         <PersonCard
            key={index}
            item={item}
         />
      )

      expect(getByTestId("avatar")).not.toBeNull()
      expect(getByTestId("personName")).not.toBeNull()
   })

   it(`renders correctly`, () => {
      const card = renderer.create(<PersonCard key={index}  item={item}/>).toJSON();
      expect(card.children.length).toBe(2);
   });
});


