/* eslint-disable no-undef */
import React from 'react'
import { StolenBikesSearcher } from '../../components/StolenBikesSearcher'
import { checkRenderComponent } from '../checkRenderComponent'

describe('<StolenBikesSearcher />', () => {
  test('Render of <StolenBikesSearcher />', () => {
    checkRenderComponent(expect, <StolenBikesSearcher />)
  })
})
