/* eslint-disable no-undef */
import React from 'react'
import { StolenBikesList } from '../../components/StolenBikesList'
import { checkRenderComponent } from '../checkRenderComponent'
import { getBikes } from '../../__mocks__/api/callsApiMock'
import { ProviderMock } from '../../__mocks__/ProviderMock'

const mockProps = {
  bikes: getBikes(0, 40),
  total: 40
}
describe('<StolenBikesList />', () => {
  test('Render of <StolenBikesList />', () => {
    checkRenderComponent(
      expect,
      <ProviderMock>
        <StolenBikesList {...mockProps} />
      </ProviderMock>
    )
  })
})
