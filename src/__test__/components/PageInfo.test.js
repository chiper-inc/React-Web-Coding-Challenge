/* eslint-disable no-undef */
import React from 'react'
import { PageInfo } from '../../components/PageInfo'
import {
  checkRenderComponent,
  checkSnapShot
} from '../checkRenderComponent'

describe('<PageInfo />', () => {
  test('Render of <PageInfo />', () => {
    checkRenderComponent(expect, <PageInfo />)
  })
})

describe('<PageInfo/> Snapshot', () => {
  test('Check UI of OrbitalSpinner', () => {
    checkSnapShot(expect, <PageInfo>test snapshot!</PageInfo>)
  })
})
