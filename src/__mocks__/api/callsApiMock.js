import incidents from './incidentsMockApi.json'
import markers from './markersMockApi.json'

export const getOneBike = (index = 0) => incidents.incidents[index]
export const getBikes = (first, last) => incidents.incidents.slice(first, last)
export const getAllBikes = () => incidents.incidents
export const getAllMarkersBikes = () => markers
