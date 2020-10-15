//跨域代理前缀
// const API_PROXY_PREFIX='/api'
// const BASE_URL = process.env.NODE_ENV === 'production' ? process.env.VUE_APP_API_BASE_URL : API_PROXY_PREFIX
const BASE_URL = process.env.VUE_APP_API_BASE_URL
module.exports = {
  LOGIN: `${BASE_URL}/dgg/login`,
  ROUTES: `${BASE_URL}/routes`,
  TEST: `${BASE_URL}/test/tdata` ,
  GETALL: `${BASE_URL}/dgg/getAll`,
  GETMINI: `${BASE_URL}/dgg/getMini`,
  GETBIG: `${BASE_URL}/dgg/getBig`,
  GETDC: `${BASE_URL}/dgg/getDayCompare`,
  GETWC: `${BASE_URL}/dgg/getWeekCompare`,
  GETOC: `${BASE_URL}/dgg/getPartCompareInfo`,
  GETST: `${BASE_URL}/dgg/getSet`,

}
