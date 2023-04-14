import instance from './axios'

export default function setToken(access_token) {
  if (access_token) {
    instance.defaults.headers.common[
      'Authorization'
    ] = `Bearer ${access_token}`
  } else {
    delete instance.defaults.headers.common['Authorization']
  }
}
