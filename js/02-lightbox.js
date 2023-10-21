import { galleryItems } from './gallery-items.js';

const galleryElements = document.querySelector('.gallery');

function createGalleryElement({ original, preview, description }) {
  return `
    <li class="gallery__item" id="item">
      <a class="gallery__link" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}">
      </a>
    </li>
  `;
}

function createGallery(galleryItems) {
  return galleryItems.map(createGalleryElement).join('');
}

const galleryElementSet = createGallery(galleryItems);

galleryElements.insertAdjacentHTML('beforeend', galleryElementSet);

const lightbox = new SimpleLightbox('.gallery a', {
  caption: true,
  captionsData: 'alt',
  captionDelay: 250,
});