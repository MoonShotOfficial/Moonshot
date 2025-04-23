document.addEventListener('DOMContentLoaded', () => {
    const blockGrid = document.querySelector('.block-grid');
    const pageButtons = document.querySelectorAll('.page-btn');

    // Mock data for blocks
    const blocks = [
        { hash: '0x1234567890abcdef', timestamp: '2023-10-01 12:00:00' },
        { hash: '0x9876543210fedcba', timestamp: '2023-10-01 11:59:00' },
        // Add more mock data as needed
    ];

    const itemsPerPage = 4;
    let currentPage = 1;

    function renderBlocks(page) {
        const start = (page - 1) * itemsPerPage;
        const end = start + itemsPerPage;
        const pageBlocks = blocks.slice(start, end);

        blockGrid.innerHTML = '';
        pageBlocks.forEach(block => {
            const blockCard = document.createElement('div');
            blockCard.classList.add('block-card');
            blockCard.innerHTML = `
                <div class="block-hash">${block.hash}</div>
                <div class="block-timestamp">${block.timestamp}</div>
            `;
            blockGrid.appendChild(blockCard);
        });
    }

    function updatePagination() {
        pageButtons.forEach(button => {
            button.classList.remove('active');
            if (parseInt(button.getAttribute('data-page')) === currentPage) {
                button.classList.add('active');
            }
        });
    }

    pageButtons.forEach(button => {
        button.addEventListener('click', () => {
            currentPage = parseInt(button.getAttribute('data-page'));
            renderBlocks(currentPage);
            updatePagination();
        });
    });

    renderBlocks(currentPage);
    updatePagination();
});