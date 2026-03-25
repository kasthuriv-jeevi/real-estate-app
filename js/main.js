// main.js
// Real Estate Website - Search & View Details Logic
// Last updated for Kasthuri 💕

document.addEventListener('DOMContentLoaded', () => {
    console.log("Page fully loaded! 💕 Search & Modal ready now");

    // Search Form Setup
    const searchForm = document.getElementById('searchForm');
    const propertiesContainer = document.getElementById('propertiesContainer');

    if (!searchForm) {
        console.error("Error: searchForm ID not found! Check <form id=\"searchForm\"> in HTML");
        return;
    }

    if (!propertiesContainer) {
        console.error("Error: propertiesContainer ID not found! Check <div id=\"propertiesContainer\"> in HTML");
        return;
    }

    console.log("Search form and properties container found! 🎉");

    // Search Form Submit Handler
    searchForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Stop page refresh

        // Get filter values from form
        const location = document.getElementById('searchLocation')?.value.trim().toLowerCase() || '';
        const propertyType = document.getElementById('searchType')?.value.trim().toLowerCase() || '';
        const bhk = document.getElementById('searchBhk')?.value.trim() || '';
        const minPrice = parseFloat(document.getElementById('searchMinPrice')?.value) || 0;
        const maxPrice = parseFloat(document.getElementById('searchMaxPrice')?.value) || Infinity;

        console.log("Search filters applied:", { location, propertyType, bhk, minPrice, maxPrice });

        // Get all property cards
        const cards = document.querySelectorAll('.property-card');
        let visibleCount = 0;

        cards.forEach(card => {
            const title = card.querySelector('.card-title')?.textContent.toLowerCase() || '';
            const text = card.querySelector('.card-text')?.textContent.toLowerCase() || '';

            let match = true;

            // Location filter
            if (location && !title.includes(location) && !text.includes(location)) {
                match = false;
            }

            // Property Type filter
            if (propertyType && propertyType !== '' && !title.includes(propertyType) && !text.includes(propertyType)) {
                match = false;
            }

            // BHK filter
            if (bhk && bhk !== '' && !title.includes(bhk) && !text.includes(bhk)) {
                match = false;
            }

            // Price filter (simple text match - can improve later)
            const priceMatch = text.match(/₹[\d,.]+ Cr|₹[\d,.]+ Lakhs?/i);
            const priceNum = priceMatch ? parseFloat(priceMatch[0].replace(/[^0-9.]/g, '')) * (priceMatch[0].includes('Cr') ? 100 : 1) : 0;
            if (priceNum < minPrice || (maxPrice !== Infinity && priceNum > maxPrice)) {
                match = false;
            }

            card.style.display = match ? '' : 'none';
            if (match) visibleCount++;
        });

        // Show/hide no results message
        let noResult = document.getElementById('noResults');
        if (!noResult) {
            noResult = document.createElement('div');
            noResult.id = 'noResults';
            noResult.className = 'text-center mt-5 py-4 alert alert-warning';
            noResult.innerHTML = '<h4>No properties match your search 💔</h4><p>Try different filters or clear the form.</p>';
            propertiesContainer.parentNode.insertBefore(noResult, propertiesContainer.nextSibling);
        }

        noResult.style.display = visibleCount === 0 ? 'block' : 'none';

        // Smooth scroll to properties section
        propertiesContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });

    // View Details Modal Logic
    document.querySelectorAll('.view-details-btn').forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent link default

            // Get data from button attributes
            const title = this.getAttribute('data-title') || 'Property Details';
            const location = this.getAttribute('data-location') || 'N/A';
            const bhk = this.getAttribute('data-bhk') || 'N/A';
            const price = this.getAttribute('data-price') || 'Price on request';
            const desc = this.getAttribute('data-desc') || 'No description available.';
            const image = this.getAttribute('data-image') || 'https://via.placeholder.com/600x400?text=No+Image';

            // Fill modal content
            document.getElementById('propertyModalLabel').textContent = title;
            document.getElementById('modalTitle').textContent = title;
            document.getElementById('modalLocation').textContent = location;
            document.getElementById('modalBhk').textContent = bhk;
            document.getElementById('modalPrice').textContent = price;
            document.getElementById('modalDesc').textContent = desc;
            document.getElementById('modalImage').src = image;
            document.getElementById('modalImage').alt = title;

            console.log("Modal opened for:", title);
        });
    });

    console.log("All scripts loaded successfully! Search & Modal fully ready 🎉");
});
// Contact Agent Form - Send button 
document.getElementById('contactAgentForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('contactName').value.trim();
    const phone = document.getElementById('contactPhone').value.trim();
    const email = document.getElementById('contactEmail').value.trim();
    const message = document.getElementById('contactMessage').value.trim();

    if (!name || !phone || !email) {
        alert("Please fill all fields!");
        return;
    }

    console.log("Contact Form Sent!");
    console.log("Name:", name);
    console.log("Phone:", phone);
    console.log("Email:", email);
    console.log("Message:", message);

    alert("Thank you! Your message sent to agent. We will call you soon 😊");

    // Form clear + modal close
    document.getElementById('contactAgentForm').reset();
    bootstrap.Modal.getInstance(document.getElementById('contactAgentModal')).hide();
});
// Read More Button - Blog Modal
document.querySelectorAll('.read-more-btn').forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault();

        // Data 
        const title = this.getAttribute('data-title') || 'Blog Post';
        const date = this.getAttribute('data-date') || 'Date';
        const content = this.getAttribute('data-content') || 'No content.';

        // Modal
        document.getElementById('blogModalLabel').textContent = title;
        document.getElementById('blogTitle').textContent = title;
        document.getElementById('blogDate').textContent = date;
        document.getElementById('blogContent').textContent = content;

        console.log("Read More clicked for:", title);
    });
});