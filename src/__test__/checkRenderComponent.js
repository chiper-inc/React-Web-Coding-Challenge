import { mount } from 'enzyme'
import { create } from 'react-test-renderer'

export const checkRenderComponent = (expect, component) => {
  const renderedComp = mount(component)
  expect(renderedComp.length).toEqual(1)
}

export const checkSnapShot = (expect, component) => {
  const renderComp = create(component)
  expect(renderComp.toJSON()).toMatchSnapshot()
}
