import React from 'react'
import { Error } from '../../components/Error'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

describe('<Error />', () => {
  test('render del componente Error', () => {
    const wrapper = shallow(<Error />)
    expect(wrapper.length).toEqual(1)
  })
})
