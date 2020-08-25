/* eslint-disable no-undef */
import React from 'react'
import { AlertError } from '../../components/Error'
import {
  checkRenderComponent,
  checkSnapShot
} from '../checkRenderComponent'

describe('<Error />', () => {
  test('Render of <Error />', () => {
    checkRenderComponent(expect, <AlertError />)
  })
})

describe('<Render/> Snapshot', () => {
  test('Check UI of Render', () => {
    checkSnapShot(expect, <AlertError />)
  })
})
