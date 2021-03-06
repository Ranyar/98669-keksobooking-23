import { isEscEvent } from './util.js';

const successMessage = document.querySelector('#success').content.querySelector('.success');
const errorMessage = document.querySelector('#error').content.querySelector('.error');

const showMessage = (parentSelector, isSuccess) => {
  const parentElement = document.querySelector(parentSelector);
  const message = (isSuccess) ? successMessage : errorMessage;
  parentElement.appendChild(message);

  const onMessageEscKeydown = (evt) => {
    if (isEscEvent(evt)) {
      evt.preventDefault();
      message.remove();
      document.removeEventListener('keydown', onMessageEscKeydown);
    }
  };

  const onMessageClick = () => {
    message.remove();
    document.removeEventListener('keydown', onMessageEscKeydown);
  };

  setTimeout(() => {
    document.addEventListener('keydown', onMessageEscKeydown);
    message.addEventListener('click', onMessageClick);
  }, 0);
};

export { showMessage };
