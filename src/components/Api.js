// API CLASS
class Api {
  constructor(options) {
    this._serverUrl = options.baseUrl;
    this._headers = options.headers;
  }
  // SERVER RESPONSE PROCESSING METHOD
  _responseProcessing(res) {
    return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
  }
  // GET USER INFO METHOD
  getUserInfo() {
    return fetch(`${this._serverUrl}/users/me`, {
      headers: this._headers
    })
      .then((res) => {
        return this._responseProcessing(res);
      })
  }
  // SEND USER INFO METHOD
  sendUserInfo(userData) {
    return fetch(`${this._serverUrl}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name: `${userData.name}`,
        about: `${userData.about}`
      })
    })
      .then((res) => {
        return this._responseProcessing(res);
      })
  }
  // SET USER AVATAR METHOD
  setUserAvatar(avatarData) {
    return fetch(`${this._serverUrl}/users/me/avatar`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        avatar: `${avatarData.avatar}`
      })
    })
      .then((res) => {
        return this._responseProcessing(res);
      })
  }
  // GET INITIAL CARDS METHOD
  getInitialCards() {
    return fetch(`${this._serverUrl}/cards`, {
      headers: this._headers
    })
      .then((res) => {
        return this._responseProcessing(res);
      })
  }
  // SEND NEW CARD INFO METHOD
  sendNewCardInfo(cardData) {
    return fetch(`${this._serverUrl}/cards`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name: `${cardData.name}`,
        link: `${cardData.link}`
      })
    })
      .then((res) => {
        return this._responseProcessing(res);
      })
  }
  // DELETE CARD METHOD
  deleteCard(id) {
    return fetch(`${this._serverUrl}/cards/${id}`, {
      method: 'DELETE',
      headers: this._headers
    })
      .then((res) => {
        return this._responseProcessing(res);
      })
  }
  // SET CARD LIKE METHOD
  setCardLike(id) {
    return fetch(`${this._serverUrl}/cards/${id}/likes`, {
      method: 'PUT',
      headers: this._headers
    })
      .then((res) => {
        return this._responseProcessing(res);
      })
  }
  //DELETE CARD LIKE METHOD
  deleteCardLike(id) {
    return fetch(`${this._serverUrl}/cards/${id}/likes`, {
      method: 'DELETE',
      headers: this._headers
    })
      .then((res) => {
        return this._responseProcessing(res);
      })
  }
}

export const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-59',
  headers: {
    authorization: '1625a9d8-48f8-436e-897b-1626c226f4c0',
    'Content-Type': 'application/json'
  }
})
