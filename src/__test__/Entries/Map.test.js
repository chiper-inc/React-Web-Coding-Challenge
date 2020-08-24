/* eslint-disable no-undef */
import React from 'react'
import { Map } from '../../entries/Map'
import { checkRenderComponent } from '../checkRenderComponent'
import { ProviderMock } from '../../__mocks__/ProviderMock'
import { mapPropsMock } from '../../__mocks__/Entries/homePropsMock'

describe('<Map />', () => {
  test('Render of <Map />', () => {
    checkRenderComponent(
      expect,
      <ProviderMock>
        <Map {...mapPropsMock} />
      </ProviderMock>
    )
  })
})
