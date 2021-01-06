// --------------------------------------------------------------------------------------------------
// THUMBNAIL GALLERY
// --------------------------------------------------------------------------------------------------

var thumbGals = document.querySelectorAll(".thumbnail-gallery");

thumbGals.forEach((gal) => {

  gal.querySelector('.thumbnail-gallery-thumbs img:first-of-type').classList.add('border-secondary');

  // Set the controlIndex to 0 as we always start on the first image
  var controlIndex = 0;

  // Store all of our image thumbnails in an array
  var thumbs = gal.querySelectorAll('.thumbnail-gallery-thumbs img');

  // Loop through each image thumbnail, storing the element in 'thumb'
  thumbs.forEach((thumb) => {

    // Add a click event listener to each thumb to listen out for when it's clicked.
    thumb.addEventListener("click", function () {

      // Get the image source from the selected image's data attribute
      var fullSrc = thumb.getAttribute('data-full-size');

      // Actually change our image
      gal.querySelector('.thumbnail-gallery-active img').src = fullSrc;


      // Get the controlIndex from the selected image's data attribute 
      // Set controlIndex to this value to move along the array
      controlIndex = thumb.getAttribute('data-index');

      // Check to see if the controlIndex value is 0
      // If it is, then we can hide the left-arrow as we don't need it.
      if (controlIndex > 0) {
        gal.querySelector('.carousel-arrow-left').classList.add('opacity-100');
      }
      else {
        gal.querySelector('.carousel-arrow-left').classList.remove('opacity-100');
      }

      // Active states
      // Add active border to clicked thumbnail (remove active border from other thumbnails)
      thumb.parentNode.parentNode.parentNode.querySelectorAll('img').forEach((img) => {
        img.classList.remove('border-secondary');
      })
      thumb.classList.add('border-secondary');

    });

  });

  // Adaption to allow control arrows.
  // Store all of our control arrows in an array
  var controls = gal.querySelectorAll('.carousel-arrow');

  // Loop through out control arrows, storing each element in 'control'
  controls.forEach((control) => {

    // Add a click event listener to each arrow to listen out for when it's clicked.
    control.addEventListener("click", function () {

      // If we're clicking the right arrow then add 1 to the controlIndex.
      // We'll use this later to get the src of the image we need to switch to.
      if (control.classList.contains('carousel-arrow-right')) {
        controlIndex++;
      }
      else {
        if (controlIndex > 0) {
          controlIndex--;
        }
      }

      // Use the controlIndex to get the image src that we need to change to
      var fullSrc = thumbs[controlIndex].getAttribute('data-full-size');

      // Actually change the image src to the new image
      gal.querySelector('.thumbnail-gallery-active img').src = fullSrc;

      // Finally do a check to show or hide the left arrow
      // Only if the controlIndex is greater than 0 (not on the first image)
      if (controlIndex > 0) {
        gal.querySelector('.carousel-arrow-left').classList.add('opacity-100');
      }
      else {
        gal.querySelector('.carousel-arrow-left').classList.remove('opacity-100');
      }

      // Active states
      // Reset the active state on all image thumbnails
      thumbs.forEach((thumb) => {
        thumb.classList.remove('border-secondary');
      });

      // Set the active state of the new image thumbnail            
      thumbs[controlIndex].classList.add('border-secondary');

    });

  });

});


