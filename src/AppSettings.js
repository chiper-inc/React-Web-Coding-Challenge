export const ROOT_ID = 'root'
export const ROOT_PORTAL_ID = 'portal-root'
export const URL_API = 'https://bikewise.org/api/v2'
export const DEF_PARAMS_SEARCH = {
  defPage: 1,
  defperPage: 100,
  proximity: 'Berlin, DE',
  // 50 is the correct value in order to get stolen bikes in the metropolitan area of Berlin
  proximity_square: 50,
  incident_type: 'theft'
}
