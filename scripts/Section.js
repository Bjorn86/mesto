// SECTION CLASS
export class Section {
  constructor({ items, renderer }, containerSelector) {
    this._renderedItems = items;
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }
  // RENDER ITEMS FUNCTION
  renderItems() {
    this._renderedItems.forEach(item => this._renderer(item));
  }
  // ADD ITEM IN DOM FUNCTION
  addItem(element) {
    this._container.append(element);
  }
}
