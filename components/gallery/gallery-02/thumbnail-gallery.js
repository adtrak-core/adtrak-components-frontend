// --------------------------------------------------------------------------------------------------
// THUMBNAIL GALLERY
// --------------------------------------------------------------------------------------------------

var thumbGals = document.querySelectorAll(".thumbnail-gallery");

thumbGals.forEach((gal) => {

  gal.querySelector('.thumbnail-gallery-thumbs img:first-of-type').classList.add('border-secondary');

  var thumbs = gal.querySelectorAll('.thumbnail-gallery-thumbs img');

  thumbs.forEach((thumb) => {

    thumb.addEventListener("click", function() {

      // Add active border to clicked thumbnail (remove active border from other thumbnails)
      thumb.parentNode.parentNode.parentNode.querySelectorAll('img').forEach((img) => {
        img.classList.remove('border-secondary');
      })
      thumb.classList.add('border-secondary');

      var fullSrc = thumb.getAttribute('data-full-size');

      gal.querySelector('.thumbnail-gallery-active img').src = fullSrc;

    })

  });
  
});