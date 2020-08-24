/* eslint-disable no-undef */
import React from 'react'
import { NotFound } from '../../entries/NotFound'
import { checkRenderComponent, checkSnapShot } from '../checkRenderComponent'
import { ProviderMock } from '../../__mocks__/ProviderMock'

describe('<NotFound />', () => {
  test('Render of <NotFound />', () => {
    checkRenderComponent(
      expect,
      <ProviderMock>
        <NotFound />
      </ProviderMock>
    )
  })
})

describe('<NotFound/> Snapshot', () => {
  test('Check UI of NotFound', () => {
    checkSnapShot(
      expect,
      <ProviderMock>
        <NotFound />
      </ProviderMock>
    )
  })
})
