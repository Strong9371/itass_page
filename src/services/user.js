import {LOGIN, ROUTES,TEST,GETALL,GETMINI,GETBIG,GETDC ,GETWC,GETOC,GETST} from '@/services/api'
import {request, METHOD, removeAuthorization} from '@/utils/request'

/**
 * 登录服务
 * @param name 账户名
 * @param password 账户密码
 * @returns {Promise<AxiosResponse<T>>}
 */
export async function login(formdataSt) {
  return request(LOGIN, METHOD.GET, {
    "formdata":formdataSt
  })
}

export async function getRoutesConfig() {
  return request(ROUTES, METHOD.GET)
}

/**
 * 退出登录
 */
export function logout() {
  localStorage.removeItem(process.env.VUE_APP_ROUTES_KEY)
  localStorage.removeItem(process.env.VUE_APP_PERMISSIONS_KEY)
  localStorage.removeItem(process.env.VUE_APP_ROLES_KEY)
  removeAuthorization()
}

export async function test(formdataSt) {
  return request(TEST, METHOD.GET,{
    formdata:formdataSt
  })
}

export async function getAll(formdataSt) {
  return request(GETALL, METHOD.GET,{
    formdata:formdataSt
  })
}

export async function getMini(formdataSt) {
  return request(GETMINI, METHOD.GET,{
    formdata:formdataSt
  })
}

export async function getBig(formdataSt) {
  return request(GETBIG, METHOD.GET,{
    formdata:formdataSt
  })

}

export async function getDayCompare(formdataSt) {
  return request(GETDC, METHOD.GET,{
    formdata:formdataSt
  })
}

export async function getWeekCompare(formdataSt) {
  return request(GETWC, METHOD.GET,{
    formdata:formdataSt
  })
}

export async function getOutCompare(formdataSt) {
  return request(GETOC, METHOD.GET,{
    formdata:formdataSt
  })
}

export async function getSet(formdataSt) {
  return request(GETST, METHOD.GET,{
    formdata:formdataSt
  })
}

export default {
  login,
  logout,
  getRoutesConfig,
  test
}
