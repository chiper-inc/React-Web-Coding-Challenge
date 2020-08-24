import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { ImageViewer } from '../../components/ImageViewer'
import { requestGeoJsonByTitle } from '../../store/actionCreators'

const mapStateToProps = (state, ownProps) => {
  const { geoJsonStolenBikes } = state

  return {
    ...ownProps,
    geoJsonStolenBikes
  }
}

const mapDispatchToProps = () => (dispatch) => ({
  actions: bindActionCreators({ requestGeoJsonByTitle }, dispatch)
})

export const ImageViewerContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ImageViewer)
