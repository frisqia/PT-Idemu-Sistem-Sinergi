document.addEventListener('DOMContentLoaded', function() {
    const catalogs = document.querySelectorAll('.catalogs');
    const catalogCount = catalogs.length;

    let currentIndex = 0;

    function showCatalogs() {
        catalogs.forEach((catalog, index) => {
            if (index >= currentIndex && index < currentIndex + 3) {
                catalog.style.display = 'block';
            } else {
                catalog.style.display = 'none';
            }
        });
    }

    function navigateCatalog(direction) {
        if (direction === 'next' && currentIndex < catalogCount - 3) {
            currentIndex++;
        } else if (direction === 'prev' && currentIndex > 0) {
            currentIndex--;
        }

        showCatalogs();
    }

    const prevButton = document.querySelector('.bx-left-arrow-circle');
    const nextButton = document.querySelector('.bx-right-arrow-circle');

    prevButton.addEventListener('click', () => {
        navigateCatalog('prev');
    });
    nextButton.addEventListener('click', () => {
        navigateCatalog('next');
    });

    showCatalogs();
});
