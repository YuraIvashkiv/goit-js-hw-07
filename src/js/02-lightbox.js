import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');

const createGalleryItem = (item) => {
  const galleryItem = `
  <li class="gallery__item">
   <a class="gallery__link" href="${item.original}">
      <img class="gallery__image" src="${item.preview}" alt="${item.description}"/>
   </a>
</li>
`;
  return gallery.insertAdjacentHTML('beforeend', galleryItem);
};


const renderGallery = (items) => {
    const galleryItems = items.map((item) => createGalleryItem(item));
    gallery.append(...galleryItems);
};

renderGallery(galleryItems);

  const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: "alt",
  captionDelay: 250,
  captionPosition: 'bottom'
  });