/* eslint-disable no-undef */
import React from 'react'
import { AlertError } from '../../components/Error'
import { checkRenderComponent, checkSnapShot } from '../checkRenderComponent'

describe('<AlertError />', () => {
  test('Render of <AlertError />', () => {
    checkRenderComponent(expect, <AlertError />)
  })
})

describe('<AlertError/> Snapshot', () => {
  test('Check UI of AlertError', () => {
    checkSnapShot(expect, <AlertError />)
  })
})
