/* eslint-disable no-undef */
import React from 'react'
import { Home } from '../../entries/Home'
import { checkRenderComponent } from '../checkRenderComponent'
import { ProviderMock } from '../../__mocks__/ProviderMock'
import { homePropsMock } from '../../__mocks__/Entries/homePropsMock'

describe('<Home />', () => {
  test('Render of <Home />', () => {
    checkRenderComponent(
      expect,
      <ProviderMock>
        <Home {...homePropsMock} />
      </ProviderMock>
    )
  })
})
