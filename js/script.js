// POPUP CART 

var buttonBuy = document.querySelector(".item__button-buy");
var popupCart = document.querySelector(".modal__cart");
var pageCatalog = document.querySelector(".catalog");
var buttonAdd = document.querySelector(".modal__add-to-cart");

buttonBuy.addEventListener("click", function (evt) {
  evt.preventDefault;
  popupCart.classList.add('modal-show');
  pageCatalog.classList.add('bg-white');
  
});

buttonAdd.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupCart.classList.remove("modal-show");
  pageCatalog.classList.remove('bg-white');

});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
      if (popupCart.classList.contains("modal-show")) {
          evt.preventDefault();
          popupCart.classList.remove("modal-show");
          pageCatalog.classList.remove('bg-white');

      }
  }
});

// REVIEWS BUTTONS

var reviewPrev = document.querySelector('.review__prev');
var reviewNext = document.querySelector('.review__next');
var reviewOne = document.querySelector('.review__item--one');
var reviewTwo = document.querySelector('.review__item--two');
var reviewThree = document.querySelector('.review__item--three');
var reviewList = [reviewOne, reviewTwo, reviewThree];
var i = 99;

reviewNext.addEventListener('click', function (evt) {
    evt.preventDefault();
  i = i + 1;
  x = i % 3;

  if (x === 0) {
    reviewThree.classList.remove("review-show");
    reviewOne.classList.add("review-show");
  }
  
  if (x === 1) {
    reviewOne.classList.remove('review-show');
    reviewTwo.classList.add('review-show');
  }

  if (x === 2) {
    reviewThree.classList.add("review-show");
    reviewTwo.classList.remove("review-show");
  }

});

reviewPrev.addEventListener('click', function (evt) {
  evt.preventDefault();
i = i - 1;
x = i % 3;

if (x === 0) {
  reviewTwo.classList.remove("review-show");
  reviewOne.classList.add("review-show");
}

if (x === 1) {
  reviewTwo.classList.add('review-show');
  reviewThree.classList.remove('review-show');
}

if (x === 2) {
  reviewOne.classList.remove("review-show");
  reviewThree.classList.add("review-show");
}

});