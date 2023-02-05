// SECTION CLASS
export class Section {
  constructor({ renderer }, containerSelector) {
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }
  // RENDER ITEMS METHOD
  renderItems(items) {
    items.forEach((item) => {this._renderer(item)});
  }
  // ADD ITEM IN DOM METHOD
  addItem(element) {
    this._container.prepend(element);
  }
}
