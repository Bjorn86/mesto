// SECTION CLASS
export class Section {
  constructor({ items, renderer }, containerSelector) {
    this._renderedItems = items;
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }
  // RENDER ITEMS METHOD
  renderItems() {
    this._renderedItems.forEach((item) => {this._renderer(item)});
  }
  // ADD ITEM IN DOM METHOD
  addItem(element) {
    this._container.append(element);
  }
}
