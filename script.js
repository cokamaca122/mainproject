// Prevent Right-Click Context Menu
document.addEventListener("contextmenu", function (e) {
    e.preventDefault();
});

// Prevent Copy Shortcut (Ctrl+C / Cmd+C), Paste (Ctrl+V), Cut (Ctrl+X)
document.addEventListener("keydown", function (e) {
    if ((e.ctrlKey || e.metaKey) && ["c", "v", "x", "a"].includes(e.key.toLowerCase())) {
        e.preventDefault();
    }
});

// Prevent Copy Event
document.addEventListener("copy", function (e) {
    e.preventDefault();
});

// Existing Modal and Click Logic
const smallImage = document.getElementById('smallImage');
const modal = document.getElementById('modal');
const closeBtn = document.getElementById('closeBtn');

// Open modal when small image is clicked
smallImage.addEventListener('click', () => {
    modal.style.display = 'flex';
});

// Close modal when clicking the X button
closeBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    modal.style.display = 'none';
});

// Close modal when clicking outside modalContent
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

// Attach Click Events to Both Regions
document.addEventListener("DOMContentLoaded", () => {
    const clickableRegion1 = document.getElementById('clickableRegion1');
    const clickableRegion2 = document.getElementById('clickableRegion2');

    if (clickableRegion1) {
        clickableRegion1.addEventListener('click', (event) => {
            event.stopPropagation(); // Prevent modal from closing
            window.location.href = "w2_methodologies.html";
        });
    }

    if (clickableRegion2) {
        clickableRegion2.addEventListener('click', (event) => {
            event.stopPropagation(); // Prevent modal from closing
            window.location.href = "w3_disability.html";
        });
    }
});

