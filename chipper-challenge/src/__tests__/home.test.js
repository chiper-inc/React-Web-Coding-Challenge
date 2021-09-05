import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import Home from '../components/Home/Home';
import Pagination from '../components/Pagination/Pagination';
import Card from '../components/Card/Card';

configure({ adapter: new Adapter() });

describe('Home', () => {
    let wrapper, store;

    const mockStore = configureStore([thunk]);

    const stolenBikes = [
        {
            date_stolen: 1621746000,
            description: 'This is a custom touring build I made from the TSUNAMI (copied name, not Tsunami Bikes), 26" mountain bike touring travel frame. I bought this in a clearance sale from Factory Five Bicycles Shanghai in 2018. \r\n\r\nhttps://www.taobao.com/list/item-amp/578037154005.htm\r\n\r\nThere is a link to the frameset. Mine is the black variety, but with a stripped, bare metal frame and black fork. ',
            frame_colors: [
                'Silver, gray or bare metal'
            ],
            frame_model: '26in Mountain Bike Touring',
            id: 837872,
            is_stock_img: false,
            large_img: 'https://files.bikeindex.org/uploads/Pu/436617/large_DSC02695.JPG',
            location_found: null,
            manufacturer_name: 'Custom',
            external_id: null,
            registry_name: null,
            registry_url: null,
            serial: '2016H058',
            status: null,
            stolen: true,
            stolen_location: 'Berlin - DE',
            thumb: 'https://files.bikeindex.org/uploads/Pu/436617/small_DSC02695.JPG',
            title: '2016 Custom 26in Mountain Bike Touring',
            url: 'https://bikeindex.org/bikes/837872',
            year: 2016
        },
         {
            date_stolen: 1614436200,
            description: '',
            frame_colors: [
                'Blue'
            ],
            frame_model: 'RDL AL 6.0 19/20 bu/bu',
            id: 1011193,
            is_stock_img: false,
            large_img: 'https://files.bikeindex.org/uploads/Pu/403441/large_IMG_4353.jpg',
            location_found: null,
            manufacturer_name: 'Canyon bicycles',
            external_id: null,
            registry_name: null,
            registry_url: null,
            serial: '0001048600',
            status: null,
            stolen: true,
            stolen_location: 'Berlin - DE',
            thumb: 'https://files.bikeindex.org/uploads/Pu/403441/small_IMG_4353.jpg',
            title: '2020 Canyon bicycles RDL AL 6.0 19/20 bu/bu',
            url: 'https://bikeindex.org/bikes/1011193',
            year: 2020
        },
        {
            date_stolen: 1614373200,
            description: 'Trekking/Commuting/Mountain eBike',
            frame_colors: [
                'White'
            ],
            frame_model: 'Sduro',
            id: 1010778,
            is_stock_img: false,
            large_img: 'https://files.bikeindex.org/uploads/Pu/403123/large_Screenshot_2021-02-26_222956.png',
            location_found: null,
            manufacturer_name: 'Haibike',
            external_id: null,
            registry_name: null,
            registry_url: null,
            serial: 'av18c22536',
            status: null,
            stolen: true,
            stolen_location: 'Berlin - DE',
            thumb: 'https://files.bikeindex.org/uploads/Pu/403123/small_Screenshot_2021-02-26_222956.png',
            title: '2019 Haibike Sduro',
            url: 'https://bikeindex.org/bikes/1010778',
            year: 2019
        },    
    ];

    beforeEach(() => {
        const state = {
            stolenBikes,
            loading: false,
            type: 'all',
        };

        store = mockStore(state);

        wrapper = mount(
            <Provider store={store}>
                <Home />
            </Provider>
        );
    });

    it('should render the correct number of stolen bikes', () => {
        expect(wrapper.find('h3').at(0).text()).toBe(`Total bikes stolen:${stolenBikes.length}`);
    });

    it('should render Pagination component twice', () => {
        expect(wrapper.find(Pagination).length).toBe(2);
    });

    it('should render Pagination component twice', () => {
        expect(wrapper.find(Card).length).toBe(stolenBikes.length);
    });
});
