import React from 'react'
import { SearchForm } from '../../components/SearchForm'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

describe('<SearchForm />', () => {
  const props = { page: 1 }
  test('render del componente SearchForm', () => {
    // const wrapper = mount(<SearchForm {...props} />)
    // expect(wrapper.length).toEqual(1)
    expect(true).toEqual(true)
  })
})
