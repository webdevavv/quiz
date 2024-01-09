var tabLabels = document.querySelectorAll("#tabs > li");

function activateTab(e) {
    e.preventDefault();

    // Deactivate all tabs
    tabLabels.forEach(function (label, index) {
        label.classList.remove("active");
    });

    // Activate current tab
    e.target.parentNode.classList.add("active");
}

// Apply event listeners
tabLabels.forEach(function (label, index) {
    label.addEventListener("click", activateTab);
});