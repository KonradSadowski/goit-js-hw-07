import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEL = document.querySelector('.gallery');
// creating img's
for (const image of galleryItems) {
  const imgEl = `<a class="gallery__item" href=${image.original}>
  <img class="gallery__image" src=${image.preview} alt=${image.description} />
</a>`;

  galleryEL.insertAdjacentHTML('afterbegin', imgEl);
}
const lightbox = new SimpleLightbox('.gallery a', {
  captionDelay: 250,
  captionsData: 'alt',
});

const imgClickHandler = event => {
  event.preventDefault();
  if (event.target.nodeName !== 'IMG') {
    return;
  }
};
galleryEL.addEventListener('click', imgClickHandler);
