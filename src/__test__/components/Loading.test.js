import React from 'react'
import { Loading } from '../../components/Loading'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

describe('<Loading />', () => {
  test('render del componente Loading', () => {
    const wrapper = shallow(<Loading />)
    expect(wrapper.length).toEqual(1)
  })
})
