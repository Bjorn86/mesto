// USER INFO CLASS
export class UserInfo {
  constructor({ profileNameSelector, profileJobSelector }) {
    this._profileNameSelector = profileNameSelector;
    this._profileJobSelector = profileJobSelector;
  }
  // GET USER INFO METHOD
  getUserInfo() {
    const userData = {
      name: document.querySelector(this._profileNameSelector).textContent,
      job: document.querySelector(this._profileJobSelector).textContent
    }
    return userData;
  }
  // SET USER INFO METHOD
  setUserInfo(userData) {
    document.querySelector(this._profileNameSelector).textContent = userData.name;
    document.querySelector(this._profileJobSelector).textContent = userData.job;
  }
}
