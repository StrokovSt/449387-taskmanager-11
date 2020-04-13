import {createSiteMenuTemplate} from "./components/site-menu.js";
import {createFilterTemplate} from "./components/site-filter.js";
import {createSiteBoardTemplate} from "./components/site-board.js";
import {createSiteTaskTemplate} from "./components/site-task.js";
import {createSiteTaskEditTemplate} from "./components/site-taskEdit.js";
import {createSiteLoadMoreButtonTemplate} from "./components/site-loadMoreButton.js";

const TASK_COUNT = 3;

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const siteMainElement = document.querySelector(`.main`);
const siteHeaderElement = siteMainElement.querySelector(`.main__control`);

render(siteHeaderElement, createSiteMenuTemplate(), `beforeend`);
render(siteMainElement, createFilterTemplate(), `beforeend`);
render(siteMainElement, createSiteBoardTemplate(), `beforeend`);

const taskListElement = siteMainElement.querySelector(`.board__tasks`);
const boardElement = siteMainElement.querySelector(`.board`);

render(taskListElement, createSiteTaskEditTemplate(), `beforeend`);

for (let i = 0; i < TASK_COUNT; i++) {
  render(taskListElement, createSiteTaskTemplate(), `beforeend`);
}

render(boardElement, createSiteLoadMoreButtonTemplate(), `beforeend`);
