import { galleryItems } from "./gallery-items.js";

const galeryContainer = document.querySelector(".gallery");
// 1. создать разметку через insertAdjacentHTML у Репеты есть об этом.
const cardsMarkup = createImageCardsMurkup(galleryItems);

galeryContainer.insertAdjacentHTML("beforeend", cardsMarkup);

function createImageCardsMurkup(elem) {
  return elem
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
<a class="gallery__link" href="${original}">
  <img
    class="gallery__image"
    src="${preview}"
    data-source="${original}"
    alt="${description}"
  />
</a>
</div>`;
    })
    .join("");
}

// 2. При клике по картинке открыть модалку с соответсвующей картинкой. При нажатии ESC закрыть модалку.
galeryContainer.addEventListener("click", onClickOpenModal);

function onClickOpenModal(evt) {
  evt.preventDefault();
  const instance = basicLightbox.create(`
    <img src="${evt.target.dataset.source}">
`);
  if (evt.target.nodeName !== "IMG") {
    return;
  }

  instance.show();

  window.addEventListener("keydown", onPressEsc);
  function onPressEsc(event) {
    const ESC_KEY_CODE = "Escape";
    if (event.code === ESC_KEY_CODE) {
      instance.close();
      window.removeEventListener("keydown", onPressEsc);
    }
  }
}
