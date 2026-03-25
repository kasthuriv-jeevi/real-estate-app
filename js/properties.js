// properties.js - Cards, Filter, See More, Modal Logic
// Images will show 100% now (using reliable placeholders)

const propertiesData = [
    { id: 1, title: "Cozy 3 BHK Independent House", location: "Anna Nagar West", bhk: "3", price: "₹1.45 Cr", desc: "Beautiful independent house with garden and parking.", image: "https://via.placeholder.com/800x500/cccccc/555555?text=Cozy+3+BHK+House", type: "independent house" },
    { id: 2, title: "Luxury 2 BHK Apartment", location: "Velachery", bhk: "2", price: "₹78 Lakhs", desc: "Premium apartment with gym & pool.", image: "https://via.placeholder.com/800x500/cccccc/555555?text=Luxury+2+BHK+Apartment", type: "apartment" },
    { id: 3, title: "Premium 4 BHK Villa", location: "East Coast Road (ECR)", bhk: "4", price: "₹3.8 Cr", desc: "Luxury villa with sea view & private pool.", image: "https://via.placeholder.com/800x500/cccccc/555555?text=Premium+4+BHK+Villa", type: "villa" },
    { id: 4, title: "Spacious 3 BHK Apartment", location: "OMR", bhk: "3", price: "₹1.10 Cr", desc: "Modern apartment near IT hubs.", image: "https://via.placeholder.com/800x500/cccccc/555555?text=Spacious+3+BHK+Apartment", type: "apartment" },
    { id: 5, title: "Elegant 3 BHK Villa", location: "ECR", bhk: "3", price: "₹2.2 Cr", desc: "Beachfront villa with garden, private pool, modern interiors.", image: "https://via.placeholder.com/800x500/cccccc/555555?text=Elegant+3+BHK+Villa", type: "villa" },
    { id: 6, title: "Modern 2 BHK Flat", location: "Anna Nagar", bhk: "2", price: "₹65 Lakhs", desc: "Well-ventilated flat in prime location.", image: "https://via.placeholder.com/800x500/cccccc/555555?text=Modern+2+BHK+Flat", type: "apartment" },
    { id: 7, title: "Luxury 4 BHK Villa", location: "Palavakkam", bhk: "4", price: "₹4.2 Cr", desc: "Sea-facing luxury villa.", image: "https://via.placeholder.com/800x500/cccccc/555555?text=Luxury+4+BHK+Villa", type: "villa" },
    { id: 8, title: "Affordable 3 BHK House", location: "Madipakkam", bhk: "3", price: "₹95 Lakhs", desc: "Family-friendly independent house.", image: "https://via.placeholder.com/800x500/cccccc/555555?text=Affordable+3+BHK+House", type: "independent house" },
    { id: 9, title: "Luxury Beachfront 3 BHK Villa", location: "ECR", bhk: "3", price: "₹2.8 Cr", desc: "Stunning villa with ocean view.", image: "https://via.placeholder.com/800x500/cccccc/555555?text=Luxury+Beachfront+Villa", type: "villa" },
    { id: 10, title: "Premium 3 BHK Independent House", location: "Anna Nagar", bhk: "3", price: "₹1.65 Cr", desc: "Spacious house in prime area.", image: "https://via.placeholder.com/800x500/cccccc/555555?text=Premium+3+BHK+House", type: "independent house" },
    { id: 11, title: "Modern 3 BHK Villa", location: "OMR", bhk: "3", price: "₹1.85 Cr", desc: "Contemporary design with smart features.", image: "https://via.placeholder.com/800x500/cccccc/555555?text=Modern+3+BHK+Villa", type: "villa" }
];

const threeBhk = propertiesData.filter(p => p.bhk === "3");
const twoBhk = propertiesData.filter(p => p.bhk === "2");
const fourBhk = propertiesData.filter(p => p.bhk === "4");

const sections = {
    "3": { grid: document.getElementById("threeBhkGrid"), data: threeBhk, visible: 3 },
    "2": { grid: document.getElementById("twoBhkGrid"), data: twoBhk, visible: 3 },
    "4": { grid: document.getElementById("fourBhkGrid"), data: fourBhk, visible: 3 }
};
function createCard(property) {
    const cardDiv = document.createElement("div");
    cardDiv.className = "col-lg-4 col-md-6 mb-4 property-card animate__animated animate__fadeInUp";
    cardDiv.setAttribute("data-location", property.location.toLowerCase());
    cardDiv.setAttribute("data-type", property.type.toLowerCase());
    cardDiv.setAttribute("data-bhk", property.bhk);
function createCard(property) {
    const cardDiv = document.createElement("div");
    cardDiv.className = "col-lg-4 col-md-6 mb-4 property-card animate__animated animate__fadeInUp";
    cardDiv.setAttribute("data-location", property.location.toLowerCase());
    cardDiv.setAttribute("data-type", property.type.toLowerCase());
    cardDiv.setAttribute("data-bhk", property.bhk);

    const whatsappLink = `https://wa.me/919876543210?text=Hi!%20I'm%20interested%20in%20${encodeURIComponent(property.title)}%20in%20${encodeURIComponent(property.location)}%20-%20${encodeURIComponent(property.bhk)}%20BHK%20for%20${encodeURIComponent(property.price)}`;

    cardDiv.innerHTML = `
        <div class="card h-100 shadow-sm">
            <div class="text-center bg-light p-3" style="height: 260px; display: flex; align-items: center; justify-content: center;">
                <img src="${property.image}"
                     class="card-img-top"
                     alt="${property.title}"
                     loading="lazy"
                     style="max-height: 100%; max-width: 100%; object-fit: contain;"
                     onerror="this.src='https://via.placeholder.com/800x500/cccccc/555555?text=${encodeURIComponent(property.title)}'; this.style.objectFit='contain';">
            </div>
            <div class="card-body d-flex flex-column">
                <h5 class="card-title">${property.title}</h5>
                <p class="card-text text-muted mb-3">
                    <i class="fas fa-map-marker-alt me-1"></i>${property.location} • 
                    ${property.bhk} BHK • ${property.price}
                </p>
                <button class="btn btn-primary mt-auto view-details-btn"
                        data-bs-toggle="modal" data-bs-target="#propertyModal"
                        data-title="${property.title}"
                        data-location="${property.location}"
                        data-bhk="${property.bhk} BHK"
                        data-price="${property.price}"
                        data-desc="${property.desc}"
                        data-image="${property.image}"
                        data-whatsapp="${whatsappLink}">
                    View Details
                </button>
            </div>
        </div>
    `;
    return cardDiv;
}
   
// Initial render
Object.keys(sections).forEach(key => {
    const { grid, data, visible } = sections[key];
    grid.innerHTML = "";
    data.slice(0, visible).forEach(prop => grid.appendChild(createCard(prop)));
});

// Load More
document.querySelectorAll('.load-more-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const type = btn.getAttribute('data-type');
        const section = sections[type];
        const start = section.visible;
        const end = Math.min(start + 8, section.data.length);

        for (let i = start; i < end; i++) {
            section.grid.appendChild(createCard(section.data[i]));
        }

        section.visible = end;

        if (end >= section.data.length) {
            btn.style.display = 'none';
        }
    });
});

// Filter
document.getElementById('filterForm').addEventListener('submit', e => {
    e.preventDefault();
    const location = document.getElementById('filterLocation').value.toLowerCase().trim();
    const type = document.getElementById('filterType').value.toLowerCase();
    const bhk = document.getElementById('filterBhk').value;

    document.querySelectorAll('.property-card').forEach(card => {
        const cardLocation = card.getAttribute('data-location') || '';
        const cardType = card.getAttribute('data-type') || '';
        const cardBhk = card.getAttribute('data-bhk') || '';

        let show = true;
        if (location && !cardLocation.includes(location)) show = false;
        if (type && cardType !== type) show = false;
        if (bhk && cardBhk !== bhk) show = false;

        card.style.display = show ? 'block' : 'none';
    });
});

// Clear Filter
document.getElementById('clearFilter').addEventListener('click', () => {
    document.getElementById('filterForm').reset();
    document.querySelectorAll('.property-card').forEach(card => {
        card.style.display = 'block';
    });
});


// View Details Modal
document.addEventListener('click', e => {
    if (e.target.classList.contains('view-details-btn')) {
        const btn = e.target;
        document.getElementById('propertyModalLabel').textContent = btn.getAttribute('data-title');
        document.getElementById('modalTitle').textContent = btn.getAttribute('data-title');
        document.getElementById('modalLocation').textContent = btn.getAttribute('data-location');
        document.getElementById('modalBhk').textContent = btn.getAttribute('data-bhk');
        document.getElementById('modalPrice').textContent = btn.getAttribute('data-price');
        document.getElementById('modalDesc').textContent = btn.getAttribute('data-desc');
        document.getElementById('modalImage').src = btn.getAttribute('data-image');
        new bootstrap.Modal(document.getElementById('propertyModal')).show();
    }

})
