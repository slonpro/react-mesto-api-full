class Api {
  constructor({ baseUrl, token }) {
    this.baseUrl = baseUrl
    this.token = token
  }

  _getResponse(res) {
    return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`)
  }

  getInitialCards(token) {
    return fetch(`${this.baseUrl}/cards`, {
      credentials: 'include',
      headers: {
        authorization: token,
      }
    })
      .then(this._getResponse);
  }

  addCard({ name, link }) {
    return fetch(`${this.baseUrl}/cards`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        authorization: this.token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name,
        link,
      })
    })
      .then(this._getResponse);
  }

  deleteCard(idCard) {
    return fetch(`${this.baseUrl}/cards/${idCard}`, {
      method: 'DELETE',
      credentials: 'include',
      headers: {
        authorization: this.token,
        'Content-Type': 'application/json'
      },
    })
      .then(this._getResponse);
  }

  getUserInfo(token) {
    return fetch(`${this.baseUrl}/users/me`, {
      credentials: 'include',
      headers: {
        authorization: token,
      }
    })
      .then(this._getResponse);
  }

  setUserInfo({ name, about }) {
    return fetch(`${this.baseUrl}/users/me`, {
      method: 'PATCH',
      credentials: 'include',
      headers: {
        authorization: this.token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name,
        about
      })
    })
      .then(this._getResponse)
  }

  toogleLike(idCard, like) {
    return fetch(`${this.baseUrl}/cards/likes/${idCard}`, {
      method: like ? 'PUT' : 'DELETE',
      credentials: 'include',
      headers: {
        authorization: this.token,
        'Content-Type': 'application/json'
      }
    })
      .then(this._getResponse)
  }

  setUserAvatar({ avatar }) {
    return fetch(`${this.baseUrl}/users/me/avatar`, {
      method: 'PATCH',
      credentials: 'include',
      headers: {
        authorization: this.token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        avatar
      })
    })
      .then(this._getResponse)
  }
}

const token = localStorage.getItem('token');

const api = new Api({
  baseUrl: process.env.NODE_ENV === "production"
  ? "http://84.201.143.83/api"
  : "http://localhost:3000",
  token: token
})

export default api