/* eslint-disable no-undef */
import React from 'react'
import { StolenBikesContainer } from '../../components/StolenBikesContainer'
import { checkRenderComponent } from '../checkRenderComponent'
import { getBikes } from '../../__mocks__/api/callsApiMock'
import { ProviderMock } from '../../__mocks__/ProviderMock'

const mockProps = {
  bikes: getBikes(0, 40),
  loading: false,
  error: null,
  page: 1,
  lengthPage: 10,
  total: 40,
  onChangePage: () => console.log('change!'),
  onSearch: () => console.log('search !')
}
describe('<StolenBikesContainer />', () => {
  test('Render of <StolenBikesContainer />', () => {
    checkRenderComponent(
      expect,
      <ProviderMock>
        <StolenBikesContainer {...mockProps} />
      </ProviderMock>
    )
  })
})
