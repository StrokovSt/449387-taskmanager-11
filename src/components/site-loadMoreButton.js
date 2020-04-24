import AbstractComponent from "./abstract-component.js";

const createSiteLoadMoreButtonTemplate = () => {
  return (
    `<button class="load-more" type="button">load more</button>`
  );
};

export {createSiteLoadMoreButtonTemplate};

export default class LoadMoreButton extends AbstractComponent {
  getTemplate() {
    return createSiteLoadMoreButtonTemplate();
  }
}
