<<<<<<< HEAD
import {MONTH_NAMES} from "../const.js";
import {createElement, formatTime} from "../utils.js";

const createSiteTaskTemplate = (task) => {
  const {description, dueDate, color, repeatingDays, isArchive, isFavorite} = task;

  const isExpired = dueDate instanceof Date && dueDate < Date.now();
  const isDateShowing = !!dueDate;

  const date = isDateShowing ? `${dueDate.getDate()} ${MONTH_NAMES[dueDate.getMonth()]}` : ``;
  const time = isDateShowing ? formatTime(dueDate) : ``;

  const repeatClass = Object.values(repeatingDays).some(Boolean) ? `card--repeat` : ``;
  const deadlineClass = isExpired ? `card--deadline` : ``;
  const archiveButtonInactiveClass = isArchive ? `` : `card__btn--disabled`;
  const favoriteButtonInactiveClass = isFavorite ? `` : `card__btn--disabled`;

  return (
    `<article class="card card--${color} ${repeatClass} ${deadlineClass}">
=======
const createSiteTaskTemplate = () => {
  return (
    `<article class="card card--black">
>>>>>>> master
      <div class="card__form">
        <div class="card__inner">
          <div class="card__control">
            <button type="button" class="card__btn card__btn--edit">
              edit
            </button>
<<<<<<< HEAD
            <button type="button" class="card__btn card__btn--archive ${archiveButtonInactiveClass}">
=======
            <button type="button" class="card__btn card__btn--archive">
>>>>>>> master
              archive
            </button>
            <button
              type="button"
<<<<<<< HEAD
              class="card__btn card__btn--favorites ${favoriteButtonInactiveClass}"
=======
              class="card__btn card__btn--favorites card__btn--disabled"
>>>>>>> master
            >
              favorites
            </button>
          </div>
<<<<<<< HEAD

=======
>>>>>>> master
          <div class="card__color-bar">
            <svg class="card__color-bar-wave" width="100%" height="10">
              <use xlink:href="#wave"></use>
            </svg>
          </div>
<<<<<<< HEAD

          <div class="card__textarea-wrap">
            <p class="card__text">${description}</p>
          </div>

=======
          <div class="card__textarea-wrap">
            <p class="card__text">Example default task with default color.</p>
          </div>
>>>>>>> master
          <div class="card__settings">
            <div class="card__details">
              <div class="card__dates">
                <div class="card__date-deadline">
                  <p class="card__input-deadline-wrap">
<<<<<<< HEAD
                    <span class="card__date">${date}</span>
                    <span class="card__time">${time}</span>
=======
                    <span class="card__date">23 September</span>
                    <span class="card__time">16:15</span>
>>>>>>> master
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>`
  );
};

<<<<<<< HEAD
export default class Task {
  constructor(task) {
    this._task = task;

    this._element = null;
  }

  getTemplate() {
    return createSiteTaskTemplate(this._task);
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
export {createSiteTaskTemplate};
