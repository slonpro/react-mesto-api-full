class Api {
  constructor({ baseUrl, token }) {
    this.baseUrl = baseUrl
    this.token = token
  }

  _getResponse(res) {
    return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`)
  }

  getInitialCards() {
    return fetch(`${this.baseUrl}/cohort-28/cards`, {
      headers: {
        authorization: this.token,
      }
    })
      .then(this._getResponse);
  }

  addCard({ name, link }) {
    return fetch(`${this.baseUrl}/cohort-28/cards`, {
      method: 'POST',
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
    return fetch(`${this.baseUrl}/cohort-28/cards/${idCard}`, {
      method: 'DELETE',
      headers: {
        authorization: this.token,
        'Content-Type': 'application/json'
      },
    })
      .then(this._getResponse);
  }

  getUserInfo() {
    return fetch(`${this.baseUrl}/cohort-28/users/me`, {
      headers: {
        authorization: this.token,
      }
    })
      .then(this._getResponse);
  }

  setUserInfo({ name, about }) {
    return fetch(`${this.baseUrl}/cohort-28/users/me`, {
      method: 'PATCH',
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
    return fetch(`${this.baseUrl}/cohort-28/cards/likes/${idCard}`, {
      method: like ? 'PUT' : 'DELETE',
      headers: {
        authorization: this.token,
        'Content-Type': 'application/json'
      }
    })
      .then(this._getResponse)
  }

  setUserAvatar({ avatar }) {
    return fetch(`${this.baseUrl}/cohort-28/users/me/avatar`, {
      method: 'PATCH',
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

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/',
  token: 'ed090d15-3957-4628-b8b0-5938578032af'
})

export default api