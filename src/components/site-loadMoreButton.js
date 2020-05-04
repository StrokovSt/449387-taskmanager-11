<<<<<<< HEAD
import {createElement} from "../utils.js";

=======
>>>>>>> master
const createSiteLoadMoreButtonTemplate = () => {
  return (
    `<button class="load-more" type="button">load more</button>`
  );
};

export {createSiteLoadMoreButtonTemplate};
<<<<<<< HEAD

export default class LoadMoreButton {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return createSiteLoadMoreButtonTemplate();
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}
=======
>>>>>>> master
