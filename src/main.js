import BoardComponent from "./components/site-board.js";
import BoardController from "./controllers/board.js";
import FilterComponent from "./components/site-filter.js";
import LoadMoreButtonComponent from "./components/site-loadMoreButton.js";
import TaskEditComponent from "./components/site-taskEdit.js";
import TaskComponent from "./components/site-task.js";
import TasksComponent from "./components/site-tasks.js";
import NoTasksComponent from "./components/no-tasks.js";
import SiteMenuComponent from "./components/site-menu.js";
import SortComponent from "./components/site-sort.js";

import {generateTasks} from "./mock/task-mock-data.js";
import {generateMockFilters} from "./mock/filter-mock-data.js";
import {render, replace, remove, RenderPosition} from "./utils/render.js";

const TASK_COUNT = 22;

const siteMainElement = document.querySelector(`.main`);
const siteHeaderElement = siteMainElement.querySelector(`.main__control`);

const tasks = generateTasks(TASK_COUNT);
const filters = generateMockFilters();

render(siteHeaderElement, new SiteMenuComponent(), RenderPosition.BEFOREEND);
render(siteMainElement, new FilterComponent(filters), RenderPosition.BEFOREEND);

const boardComponent = new BoardComponent();
const boardController = new BoardController(boardComponent);

render(siteMainElement, boardComponent, RenderPosition.BEFOREEND);
boardController.render(tasks);
