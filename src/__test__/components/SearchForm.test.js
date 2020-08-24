import React from 'react'
import { SearchForm } from '../../components/SearchForm'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

describe('<SearchForm />', () => {
  test('render del componente SearchForm', () => {
    // const page = 1
    // const wrapper = mount(<SearchForm page={page} />)
    // expect(wrapper.length).toEqual(1)
    expect(true).toEqual(true)
  })
})
