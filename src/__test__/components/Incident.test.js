import React from 'react'
import { Incident } from '../../components/Incident'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

describe('<Incident />', () => {
  test('render del componente Incident image_url y description not null', () => {
    const props = {
      id: '',
      title: '',
      description: 'description',
      occurred_at: '',
      address: '',
      media: {
        image_url: '',
      },
    }
    const wrapper = mount(<Incident {...props} />)
    expect(wrapper.length).toEqual(1)
  })

  test('render del componente Incident image_url y description null', () => {
    const props = {
      id: '',
      title: '',
      description: null,
      occurred_at: '',
      address: '',
      media: {
        image_url: null,
      },
    }
    const wrapper = mount(<Incident {...props} />)
    expect(wrapper.length).toEqual(1)
  })
})
