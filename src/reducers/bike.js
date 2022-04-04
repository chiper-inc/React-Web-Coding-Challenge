export default function reducer(state, action) {

  if (action.key) {
    return state.setIn(action.key, action.payload)
  }
  switch (action.type) {
    case "FILTER":
    
      return state.setIn(['bikes', 'filter'],
        state.getIn(['bikes', 'all'])
          .filter(b => b.title.toLowerCase().includes(state.getIn(['search', 'title']).toLowerCase()))
          .filter(b => b.date_stolen === null || b.date_stolen > state.getIn(['search', 'from']))
          .filter(b => b.date_stolen === null || b.date_stolen < state.getIn(['search', 'to']))
      )
    case "CLEAR":
      return state.setIn(['search', 'title'], '')
        .setIn(['search', 'from'], 0)
        .setIn(['search', 'to'], 999999999999999)
    default:
      return state;
  }
}
