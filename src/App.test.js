// import { render, screen } from '@testing-library/react';
import Enzyme, { shallow } from 'enzyme';

import App from './App';
import  EnzymeAdapter  from '@wojtekmaj/enzyme-adapter-react-17';
import React from 'react';

Enzyme.configure({ adapter: new EnzymeAdapter() });

test('renders without any errors', () => {
  const wrapper = shallow(<App/>);
  // first data-test attributes test
  const appComponent = wrapper.find("[data-test='component-app']")
  expect(appComponent.length).toBe(1);
});

test('renders increment button', () => {
  
});

test('renders counter display', () => {
  
});

test('counter display start 0', () => {
  
});

test('clicking button increments counter display', () => {
  
});
