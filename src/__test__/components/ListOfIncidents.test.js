import React from 'react'
import { ListOfIncidents } from '../../components/ListOfIncidents'
import Enzyme, { mount, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

describe('<ListOfIncidents />', () => {
  test('render del componente ListOfIncidents', () => {
    const incidents = [
      {
        id: 125106,
        title: 'Street Light Out/Damaged',
        description:
          'Street light out at the top of Johnny Cash bike trail at the stop sign just as you reach rodeo park parking lot',
        address: '122–198 N Granite Cir Folsom CA 95630, United States',
        occurred_at: 1598238903,
        updated_at: 1598270431,
        url: 'https://bikewise.org/api/v1/incidents/125106',
        source: {
          name: 'SeeClickFix.com',
          html_url: 'https://seeclickfix.com/issues/8451667',
          api_url: 'https://seeclickfix.com/api/v2/issues/8451667',
        },
        media: {
          image_url:
            'https://seeclickfix.com/files/issue_images/0186/3902/image.jpg',
          image_url_thumb:
            'https://seeclickfix.com/files/issue_images/0186/3902/image_square.jpg',
        },
        location_type: null,
        location_description: null,
        type: 'Unconfirmed',
        type_properties: null,
      },
    ]
    const wrapper = mount(<ListOfIncidents incidents={incidents} />)
    expect(wrapper.length).toEqual(1)
  })
})
