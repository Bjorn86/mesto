// API CLASS
class Api {
  constructor(options) {
    this._serverUrl = options.baseUrl;
    this._headers = options.headers;
  }
  // CHECKING THE SERVER RESPONSE METHOD
  _checkResponse(res) {
    return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
  }
  // REQUEST METHOD
  _request(url, options) {
    return fetch(url, options).then(this._checkResponse)
  }
  // GET USER INFO METHOD
  getUserInfo() {
    return this._request(`${this._serverUrl}/users/me`, {
      headers: this._headers
    })
  }
  // SEND USER INFO METHOD
  sendUserInfo(userData) {
    return this._request(`${this._serverUrl}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name: `${userData.name}`,
        about: `${userData.about}`
      })
    })
  }
  // SET USER AVATAR METHOD
  setUserAvatar(avatarData) {
    return this._request(`${this._serverUrl}/users/me/avatar`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        avatar: `${avatarData.avatar}`
      })
    })
  }
  // GET INITIAL CARDS METHOD
  getInitialCards() {
    return this._request(`${this._serverUrl}/cards`, {
      headers: this._headers
    })
  }
  // SEND NEW CARD INFO METHOD
  sendNewCardInfo(cardData) {
    return this._request(`${this._serverUrl}/cards`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name: `${cardData.name}`,
        link: `${cardData.link}`
      })
    })
  }
  // DELETE CARD METHOD
  deleteCard(id) {
    return this._request(`${this._serverUrl}/cards/${id}`, {
      method: 'DELETE',
      headers: this._headers
    })
  }
  // SET CARD LIKE METHOD
  setCardLike(id) {
    return this._request(`${this._serverUrl}/cards/${id}/likes`, {
      method: 'PUT',
      headers: this._headers
    })
  }
  //DELETE CARD LIKE METHOD
  deleteCardLike(id) {
    return this._request(`${this._serverUrl}/cards/${id}/likes`, {
      method: 'DELETE',
      headers: this._headers
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
