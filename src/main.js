import {createSiteMenuTemplate} from "./components/site-menu.js";
import {createFilterTemplate} from "./components/site-filter.js";
import {createSiteBoardTemplate} from "./components/site-board.js";
import {createSiteTaskTemplate} from "./components/site-task.js";
import {createSiteTaskEditTemplate} from "./components/site-taskEdit.js";
import {createSiteLoadMoreButtonTemplate} from "./components/site-loadMoreButton.js";
import {generateMockFilters} from "./mock/filter-mock-data.js";
import {generateTasks} from "./mock/task-mock-data.js";

const TASK_COUNT = 22;
const SHOWING_TASKS_COUNT_ON_START = 8;
const SHOWING_TASKS_COUNT_BY_BUTTON = 8;

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const siteMainElement = document.querySelector(`.main`);
const siteHeaderElement = siteMainElement.querySelector(`.main__control`);

const filters = generateMockFilters();
const tasks = generateTasks(TASK_COUNT);

render(siteHeaderElement, createSiteMenuTemplate(), `beforeend`);
render(siteMainElement, createFilterTemplate(filters), `beforeend`);
render(siteMainElement, createSiteBoardTemplate(), `beforeend`);

const taskListElement = siteMainElement.querySelector(`.board__tasks`);
const boardElement = siteMainElement.querySelector(`.board`);

render(taskListElement, createSiteTaskEditTemplate(tasks[0]), `beforeend`);

let showingTasksCount = SHOWING_TASKS_COUNT_ON_START;

tasks.slice(1, showingTasksCount).forEach((task) => render(taskListElement, createSiteTaskTemplate(task), `beforeend`));

render(boardElement, createSiteLoadMoreButtonTemplate(), `beforeend`);

const loadMoreButton = boardElement.querySelector(`.load-more`);
loadMoreButton.addEventListener(`click`, () => {
  const prevTasksCount = showingTasksCount;
  showingTasksCount = showingTasksCount + SHOWING_TASKS_COUNT_BY_BUTTON;

  tasks.slice(prevTasksCount, showingTasksCount).forEach((task) => render(taskListElement, createSiteTaskTemplate(task), `beforeend`));

  if (showingTasksCount >= tasks.length) {
    loadMoreButton.remove();
  }
});
