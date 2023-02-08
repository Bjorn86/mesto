// USER INFO CLASS
export class UserInfo {
  constructor({ profileNameSelector, profileAboutSelector, profileAvatarSelector }) {
    this._profileNameElement = document.querySelector(profileNameSelector);
    this._profileAboutElement = document.querySelector(profileAboutSelector);
    this._profileAvatarElement = document.querySelector(profileAvatarSelector);
  }
  // GET USER INFO METHOD
  getUserInfo() {
    const userData = {
      name: this._profileNameElement.textContent,
      about: this._profileAboutElement.textContent
    }
    return userData;
  }
  // SET USER INFO METHOD
  setUserInfo({ name, about, avatar, _id }) {
    this._profileNameElement.textContent = name;
    this._profileAboutElement.textContent = about;
    this._profileAvatarElement.src = avatar;
    this._userId = _id;

  }
  // RETURN USER ID METHOD
  getUserId() {
    return this._userId;
  }
}
