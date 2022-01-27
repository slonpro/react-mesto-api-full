class Auth {
  constructor({baseUrl}) {
    this.baseUrl = baseUrl
  }

  _getResponse(res) {
    return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`)
  }


  register({password, email}) {
    return fetch(`${this.baseUrl}/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ password, email })
    })
      .then(this._getResponse);
  };

  authorize(password, email) {
    return fetch(`${this.baseUrl}/signin`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ password, email })
    })
      .then(this._getResponse)
  };

  checkToken(token) {
    return fetch(`${this.baseUrl}/users/me`, {
      method: 'GET',
      credentials: 'include',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `${token}`,
      }
    })
      .then(this._getResponse)
  }
}

 const auth = new Auth({
  baseUrl: "http://84.201.143.83/api",
})

export default auth