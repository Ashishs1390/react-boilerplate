import React from 'react';
import App from './App';
import {shallow} from 'enzyme';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import {Provider} from 'react-redux';
import {Home} from './components/home.js';
import {About} from './components/about.js';
import {Topics} from './components/topics.js';

describe('<App/>',()=>{
  let wrapper;
  beforeEach(() => wrapper = shallow(<App />));
  it('should render a <div />', () => {
    expect(wrapper.find('div').length).toEqual(1);
  });
  it('should render a <Provider />', () => {
    expect(wrapper.find('Provider').length).toEqual(1);
  });
});

describe('Routes',()=>{
  const wrapper = shallow(<Router />);
  const pathMap = wrapper.find(Route).reduce((pathMap, route) => {
    const routeProps = route.props();
    pathMap[routeProps.path] = routeProps.component;
    return pathMap;
  }, {});
  expect(pathMap['/']).toBe(Home);
  expect(pathMap['/about']).toBe(About);
  expect(pathMap['/topics']).toBe(Topics);

}); 