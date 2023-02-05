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
  setUserInfo(userData) {
    this._profileNameElement.textContent = userData.name;
    this._profileAboutElement.textContent = userData.about;
    this._userId = userData._id;
  }
  // RETURN USER ID METHOD
  giveUserId() {
    return this._userId;
  }
  // SET USER AVATAR METHOD
  setUserAvatar(avatarData) {
    this._profileAvatarElement.src = avatarData.avatar;
  }
}
