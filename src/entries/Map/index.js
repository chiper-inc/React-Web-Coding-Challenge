import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { requestGeoJsonStolenBikes } from '../../store/actionCreators'
import { Container } from './styles'
import { OrbitalSpinner } from '../../components/Loading'
import { AlertError } from '../../components/Error'
import LeaftMap from '../../components/LeaftMap'

const refContainer = React.createRef()
let leaftMap

export const MapLeaft = ({ loading, error, actions, geoJsonStolenBikes }) => {
  useEffect(() => {
    actions.requestGeoJsonStolenBikes()
    leaftMap = new LeaftMap(refContainer.current, [52.4985969, 13.3783562])
    leaftMap.renderMap()
  }, [actions])

  useEffect(() => {
    leaftMap.renderGeoJson(geoJsonStolenBikes)
  }, [geoJsonStolenBikes])

  return (
    <Container ref={refContainer}>
      {loading && <OrbitalSpinner />}
      {error && <AlertError error={error} />}
    </Container>
  )
}

const mapStateToProps = (state) => {
  const { error, loading, geoJsonStolenBikes } = state
  return {
    error,
    loading,
    geoJsonStolenBikes
  }
}

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({ requestGeoJsonStolenBikes }, dispatch)
})

export const Map = connect(mapStateToProps, mapDispatchToProps)(MapLeaft)
