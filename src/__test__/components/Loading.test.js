/* eslint-disable no-undef */
import React from 'react'
import { OrbitalSpinner } from '../../components/Loading'
import { checkRenderComponent, checkSnapShot } from '../checkRenderComponent'

describe('<OrbitalSpinner />', () => {
  test('Render of <OrbitalSpinner />', () => {
    checkRenderComponent(expect, <OrbitalSpinner />)
  })
})

describe('<OrbitalSpinner/> Snapshot', () => {
  test('Check UI of OrbitalSpinner', () => {
    checkSnapShot(expect, <OrbitalSpinner />)
  })
})
