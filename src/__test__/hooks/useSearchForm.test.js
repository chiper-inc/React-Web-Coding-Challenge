import { renderHook, act } from '@testing-library/react-hooks'
import { useSearchForm } from '../../hooks/useSearchForm'

test('render hook useSearchForm', () => {
  const { result } = renderHook(() => useSearchForm())

  act(() => {
    const event = {
      target: {
        value: 'bike',
      },
    }
    result.current.handleChangeKeyword(event)
  })

  act(() => {
    const event = {
      target: {
        value: '2020-08-21',
      },
    }
    result.current.handleChangeDateFrom(event)
  })

  act(() => {
    const event = {
      target: {
        value: '2020-08-24',
      },
    }
    result.current.handleChangeDateTo(event)
  })
})
