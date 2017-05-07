import React from 'react';
import NewNode from '../src/components/NewNode';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';   

const clickHandler = jest.fn();

test('New node selection', () => {
  const component = shallow(
    <NewNode
        show={show}
        text={text}
        clickHandler={clickHandler}
    />
  );

  component.simulate('click');
  expect(clickHandler).toBeCalled();
});