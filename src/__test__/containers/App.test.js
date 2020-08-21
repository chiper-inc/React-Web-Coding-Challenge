import React from 'react'
import { App } from '../../containers/App'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

describe('<App />', () => {
  test('render del contenedor App', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.length).toEqual(1)
  })
})
