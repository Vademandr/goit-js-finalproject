import { galleryItems } from './gallery-items.js';

const galleryElements = document.querySelector('.gallery');

function createGalleryElement({ original, preview, description }) {
  return `
    <li class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </li>`;
}

function selectGallery(event) {
  event.preventDefault();
  if (event.target.nodeName !== 'IMG') return;

  const instance = basicLightbox.create(
    `<img class="gallery__image-big" src="${event.target.dataset.source}">`,
    {
      onShow: () => window.addEventListener('keydown', onEsc),
      onClose: () => window.removeEventListener('keydown', onEsc),
    },
  );

  const onEsc = event => {
    if (event.code === 'Escape') instance.close();
  };

  instance.show();
}

const galleryElementSet = galleryItems.map(createGalleryElement).join('');

galleryElements.insertAdjacentHTML('beforeend', galleryElementSet);
galleryElements.addEventListener('click', selectGallery);