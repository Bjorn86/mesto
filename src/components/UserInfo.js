// USER INFO CLASS
export class UserInfo {
  constructor({ profileNameSelector, profileJobSelector }) {
    this._profileNameElement = document.querySelector(profileNameSelector);;
    this._profileJobElement = document.querySelector(profileJobSelector);
  }
  // GET USER INFO METHOD
  getUserInfo() {
    const userData = {
      name: this._profileNameElement.textContent,
      job: this._profileJobElement.textContent
    }
    return userData;
  }
  // SET USER INFO METHOD
  setUserInfo(userData) {
    this._profileNameElement.textContent = userData.name;
    this._profileJobElement.textContent = userData.job;
  }
}
