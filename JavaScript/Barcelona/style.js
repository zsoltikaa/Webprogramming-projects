document.addEventListener('DOMContentLoaded', function() {
    const articles = document.querySelectorAll('.grid > article');
    const prevButton = document.getElementById('prevButton');
    const nextButton = document.getElementById('nextButton');
    let currentPage = 0;
    const itemsPerPage = 3;
    
    function showPage(page) {
        const startIndex = page * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        
        articles.forEach(function(article, index) {
            if (index >= startIndex && index < endIndex) {
                article.style.display = 'block';
            } else {
                article.style.display = 'none';
            }
        });
    }
    
    function updateButtons() {
        prevButton.disabled = currentPage === 0;
        nextButton.disabled = currentPage === Math.ceil(articles.length / itemsPerPage) - 1;
    }
    
    function prevPage() {
        if (currentPage > 0) {
            currentPage--;
            showPage(currentPage);
            updateButtons();
        }
    }
    
    function nextPage() {
        if (currentPage < Math.ceil(articles.length / itemsPerPage) - 1) {
            currentPage++;
            showPage(currentPage);
            updateButtons();
        }
    }
    
    prevButton.addEventListener('click', prevPage);
    nextButton.addEventListener('click', nextPage);
    
    showPage(currentPage);
    updateButtons();
});
