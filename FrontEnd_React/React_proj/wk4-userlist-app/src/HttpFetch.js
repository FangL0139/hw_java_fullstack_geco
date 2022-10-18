export const httpPostWithHeader = (endpoint, param, userId, token) => {
  return fetch("http://localhost:8080/" + endpoint, {
    method: "POST",
    body: JSON.stringify(param),
    headers: {
      "Content-Type": "application/json",
      "token": token,
      "userId": userId
    }
  },)
}

export const httpPostWithoutHeader = (endpoint, param) => {
  return fetch("http://localhost:8080/" + endpoint, {
    method: "POST",
    body: JSON.stringify(param),
    headers: {
      "Content-Type": "application/json",
    }
  },)
}

export const httpGetWithHeader = (endpoint, userId, token) => {
  return fetch("http://localhost:8080/" + endpoint, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "token": token,
      "userId": userId
    }
  },)
}

export const httpGetWithoutHeader = (endpoint) => {
  return fetch("http://localhost:8080/" + endpoint, {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  },)
}

