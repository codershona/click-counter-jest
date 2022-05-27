// import { render, screen } from '@testing-library/react';
import Enzyme, { shallow } from 'enzyme';

import App from './App';
import  EnzymeAdapter  from '@wojtekmaj/enzyme-adapter-react-17';
import React from 'react';

Enzyme.configure({ adapter: new EnzymeAdapter() });

/**
  * Factory function to create a ShallowWrapper for the App Component
  * @function setup
  * return {ShallowWrapper}
 */


// DRY Refactor
const setup = () => shallow(<App/>);
const findByTestAttr = (wrapper, val) => wrapper.find(`[data-test='${val}']`);


test('renders without any errors', () => {
  const wrapper = setup();
  // first data-test attributes test
  const appComponent = findByTestAttr(wrapper, "component-app"); // DRY refactor done in findByTestAttr()
  expect(appComponent.length).toBe(1);
});

test('renders increment button', () => {
    const wrapper = setup();
  // more data-test attributes test
  const button = findByTestAttr(wrapper, "increment-button"); // DRY refactor done in findByTestAttr()
  expect(button.length).toBe(1);
  
});

test('renders counter display', () => {
    const wrapper = setup();
    // more data-test attributes test
    const counterDisplay = findByTestAttr(wrapper, "counter-display"); // DRY refactor done in findByTestAttr()
    expect(counterDisplay.length).toBe(1);
  
});

test('counter display start 0', () => {
    const wrapper = setup();
    const count = findByTestAttr(wrapper, "count").text(); // text() method
    // expect(count).toBe(0);  --- text() always return strings
    expect(count).toBe("0");  
});

test('clicking button increments counter display', () => {
    const wrapper = setup();
    
    // find the button
    const button = findByTestAttr(wrapper, "increment-button");

    // click the Button
    button.simulate('click');    

    // find the display, and test which is the number has been incremented
    const count = findByTestAttr(wrapper, "count").text(); // text() method
    
    expect(count).toBe("1");
});


