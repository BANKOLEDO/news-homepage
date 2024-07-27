document.addEventListener('DOMContentLoaded', function() {
    const openMenuBtn = document.getElementById('open-menu');
    const closeMenuBtn = document.getElementById('close-menu');
    const navbar = document.getElementById('navbar');
    const entirePage = document.getElementById('entire-page')
    const mediaQuery = window.matchMedia('(max-width: 800px)');

    const resetView = () => {
        // Reset the elements to their default state
        openMenuBtn.style.display = "";
        closeMenuBtn.style.display = "";
        navbar.style.background = "";
        entirePage.style.background = 'hsl(36, 100%, 99%)';
    }

    openMenuBtn.addEventListener('click', function() {
        navbar.classList.add('open');
        openMenuBtn.style.display = 'none';
        closeMenuBtn.style.display = 'block';
        entirePage.style.background = 'hsl(233, 8%, 79%)';
    });

    closeMenuBtn.addEventListener('click', function() {
        navbar.classList.remove('open');
        openMenuBtn.style.display = 'block';
        closeMenuBtn.style.display = 'none';
        entirePage.style.background = 'hsl(36, 100%, 99%)';
    });

    const handleMediaQueryChange = (event) => {
        resetView();
    }

    // Initial check
    handleMediaQueryChange(mediaQuery);
    // Listen for changes
    mediaQuery.addEventListener('change', handleMediaQueryChange);
});