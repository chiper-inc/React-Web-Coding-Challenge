/* eslint-disable no-undef */
import React from 'react'
import { StolenBikeCard } from '../../components/StolenBikeCard'
import { checkRenderComponent } from '../checkRenderComponent'
import { getOneBike } from '../../__mocks__/api/callsApiMock'
import { ProviderMock } from '../../__mocks__/ProviderMock'
const mockBike = getOneBike(0)

describe('<StolenBikeCard />', () => {
  test('Render of <StolenBikeCard />', () => {
    checkRenderComponent(
      expect,
      <ProviderMock>
        <StolenBikeCard {...mockBike} />
      </ProviderMock>
    )
  })
})
