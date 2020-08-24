/* eslint-disable camelcase */
import 'leaflet/dist/leaflet.css'
import './assets/leaftMap.css'
import L from 'leaflet'

const noImageSrc =
  'https://upload.wikimedia.org/wikipedia/commons/5/5a/No_image_available_500_x_500.svg'
const URL_MAPPER =
  'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw'
const DEF_CONFIG = {
  maxZoom: 18,
  attribution:
    'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
    '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
    'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  id: 'mapbox/streets-v11',
  tileSize: 512,
  zoomOffset: -1
}

const renderContentPopUp = (title, srcImg, occurredDate) => {
  const container = document.createElement('div')
  const titleElem = document.createElement('h6')
  const ocurredElem = document.createElement('p')
  const imgElem = document.createElement('img')

  container.className = 'container-fluid text-center'
  container.id = 'popup-map-stolenbikes'
  titleElem.innerHTML = title || 'Unknown'
  titleElem.className = 'title-popup-stolen-bikes'
  imgElem.src = srcImg || noImageSrc
  imgElem.className = 'thumb-popup-stolen-bikes'
  ocurredElem.innerHTML = `<span class="span-text-popup-stolen-bikes">Ocurred at</span> ${occurredDate}`

  container.appendChild(titleElem)
  container.appendChild(imgElem)
  container.appendChild(ocurredElem)

  return container
}

const renderPopUp = (feature, layer) => {
  const {
    properties: { description, occurred_at, title }
  } = feature
  const dummy = document.createElement('div')
  dummy.innerHTML = description
  const img = dummy.getElementsByTagName('img')[0]?.src
  const content = renderContentPopUp(title, img, occurred_at)
  layer.bindPopup(content)
}

export default class LeaftLetMap {
  constructor (htmlElement, rootView) {
    this.leafletMap = null
    this.htmlElement = htmlElement
    this.rootView = rootView

    this.renderMap = this.renderMap.bind(this)
    this.renderGeoJson = this.renderGeoJson.bind(this)
  }

  renderMap () {
    if (!this.leafletMap) {
      this.leafletMap = L.map(this.htmlElement)
    }
    this.leafletMap.setView(this.rootView, 13)
    L.tileLayer(URL_MAPPER, DEF_CONFIG).addTo(this.leafletMap)
  }

  renderGeoJson (geoJson) {
    L.geoJSON([geoJson], {
      onEachFeature: renderPopUp,
      pointToLayer: (feature, latlng) =>
        L.circleMarker(latlng, {
          radius: 8,
          fillColor: '#007bff',
          color: '#000',
          weight: 1,
          opacity: 1,
          fillOpacity: 0.8
        })
    }).addTo(this.leafletMap)
  }

  DisposeElem () {
    this.leafletMap = null
  }
}
