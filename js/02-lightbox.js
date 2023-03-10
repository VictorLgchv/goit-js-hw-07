import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galeryContainer = document.querySelector(".gallery");
// 1. создать разметку через insertAdjacentHTML у Репеты есть об этом.
const cardsMarkup = createImageCardsMurkup(galleryItems);

galeryContainer.insertAdjacentHTML("beforeend", cardsMarkup);

function createImageCardsMurkup(elem) {
  return elem
    .map(({ preview, original, description }) => {
      return `
<a class="gallery__item" href="${original}">
  <img
    class="gallery__image"
    src="${preview}"
    data-source="${original}"
    alt="${description}"
  />
</a>`;
    })
    .join("");
}
console.log(galleryItems);
var lightbox = new SimpleLightbox(".gallery a", {
  loop: true,
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
});
