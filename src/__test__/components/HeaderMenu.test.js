/* eslint-disable no-undef */
import React from 'react'
import { HeaderMenu } from '../../components/HeaderMenu'
import { checkRenderComponent } from '../checkRenderComponent'

describe('<HeaderMenu />', () => {
  test('Render of <HeaderMenu />', () => {
    checkRenderComponent(expect, <HeaderMenu />)
  })
})
