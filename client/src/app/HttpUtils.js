
const HttpUtils = {
  
  fetch: (url, options) => {
    let defautOpt = {
      credentials: 'include'
    }

    let opts = Object.assign(defautOpt, options)
    return fetch(url, opts).then(response => {
      if (response.ok) {
        return response;
      } else {
        var error = new Error(response.statusText)
        error.response = response
        throw error
      }
    })
  }
}

export default HttpUtils;