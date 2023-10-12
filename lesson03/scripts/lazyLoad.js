let lastModified = document.lastModified;
let lastModifiedElement = document.querySelector('#lastModified');

if (lastModifiedElement) {
    lastModifiedElement.textContent = `Last Modified: ${lastModified}`;
}