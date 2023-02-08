// SECTION CLASS
export class Section {
  constructor({ renderer }, containerSelector) {
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }
  // RENDER ITEMS METHOD
  renderItems(items) {
    items.forEach((item) => {this.addItem(item)});
  }
  // ADD ITEM IN DOM METHOD
  addItem(item) {
    const card = this._renderer(item);
    this._container.prepend(card);
  }
}
