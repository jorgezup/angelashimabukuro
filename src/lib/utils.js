import fetch from 'isomorphic-unfetch'

const apiURL = process.env.NEXT_PUBLIC_API_URL
async function fetchQuery(path, params = null) {
  let url
  if (params !== null) {
    url = `${apiURL}/${path}/${params}`
  }
  else {
    url = `${apiURL}/${path}`
  }

  const response = await fetch(`${url}`)
  const data = await response.json()
  return data
}

export { apiURL, fetchQuery }