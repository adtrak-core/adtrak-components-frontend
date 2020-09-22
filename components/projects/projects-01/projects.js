//Project controls
const projectControls = document.querySelectorAll('.project-control');
const projectPanes = document.querySelectorAll('.project-pane');

// Set first pane to show by default
projectPanes.forEach(element => {
    element.classList.add('hidden');
})
projectPanes[0].classList.remove('hidden');

const projectControlsActiveClasses = ['bg-gray-100'];
projectControls[0].classList.add(...projectControlsActiveClasses);

function switchProject(event) {
    event.preventDefault();
    // Find target pane
    let targetPane = event.target.getAttribute('aria-controls');

    // Remove active class from controls
    projectControls.forEach(element => {
        element.classList.remove(...projectControlsActiveClasses);
    });
    // Add active state to trigger
    event.target.classList.add(...projectControlsActiveClasses);

    // Hide all project panes
    projectPanes.forEach(element => {
        element.classList.add('hidden');
    });
    // Show seleced pane
    document.getElementById(targetPane).classList.remove('hidden');
}

// Only apply the event listener if we have buttons
if (Object.keys(projectControls).length > 0) {
    projectControls.forEach(element => {
        element.addEventListener('click', switchProject);
    });
}

// Control gallery thumbnails
const galleryThumbs = document.querySelectorAll('.project-gallery-thumb');

function switchProjectImage(event) {
    // Get the new image src
    let featureSrc = event.target.dataset.feature;

    // Find the target featured image
    let projectFeature = event.target.dataset.projectFeature;

    // Replace the target src with the new src
    document.querySelector('.' + projectFeature).src = featureSrc;
}

if (Object.keys(galleryThumbs).length > 0) {
    galleryThumbs.forEach(element => {
        element.addEventListener('click', switchProjectImage);
    });
}
