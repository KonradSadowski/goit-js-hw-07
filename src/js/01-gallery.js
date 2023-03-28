import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector(`.gallery`);
for (const image of galleryItems) {
  const imgEl = `<div class="gallery__item">
    <a class="gallery__link" href=${image.original}>
    <img 
    class="gallery__image"
    src=${image.preview}
    data-source=${image.original}
    alt=${image.description}/>
    </a>
    </div>`;

  galleryEl.insertAdjacentHTML('afterbegin', imgEl);

  galleryEl.addEventListener('click', event => event.preventDefault());
}

galleryEl.querySelector('.gallery__item').onclick = () => {
  basicLightbox
    .create(
      `
		<img src='https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg'>
	`
    )
    .show();
};
