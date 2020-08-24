/* eslint-disable no-undef */
import React from 'react'
import { ImageViewer } from '../../components/ImageViewer'
import { checkRenderComponent } from '../checkRenderComponent'

describe('<ImageViewer />', () => {
  test('Render of <ImageViewer />', () => {
    checkRenderComponent(expect, <ImageViewer />)
  })
})
