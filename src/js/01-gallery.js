import { galleryItems } from './gallery-items.js';

const gallery = document.querySelector('.gallery');

const createGalleryItem = (item) => {
  const galleryItem = `
    <li class="gallery__item">
      <a class="gallery__link" href="${item.original}">
        <img class="gallery__image" src="${item.preview}" alt="${item.description}" data-source="${item.original}">
      </a>
    </li>
  `;
  gallery.insertAdjacentHTML('beforeend', galleryItem);
};

const renderGallery = (items) => {
  items.forEach((item) => createGalleryItem(item));
};

renderGallery(galleryItems);

const galleryItemClick = (event) => {
  event.preventDefault();
  if (event.target.nodeName !== 'IMG') {
    return;
  }
  const largeItemUrl = event.target.dataset.source;
  const instance = basicLightbox.create(
    `<div class="modal">
      <img src="${largeItemUrl}" alt=""/>
    </div>`
  );
  instance.show();

  const closeOnEscape = (event) => {
    if (event.key === 'Escape') {
      instance.close();
      window.removeEventListener('keydown', closeOnEscape);
    }
  };
  window.addEventListener('keydown', closeOnEscape);
};

gallery.addEventListener('click', galleryItemClick);
