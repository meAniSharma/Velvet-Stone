const container = document.getElementById('propertyGrid');

    const images = [
  "https://images.pexels.com/photos/439391/pexels-photo-439391.jpeg",
  "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg",
  "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg",
  "https://images.pexels.com/photos/261146/pexels-photo-261146.jpeg",
  "https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg",
  "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg",
  "https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg",
  "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg",
  "https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg",
  "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg",
  "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg",
  "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg",
  "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg",
  "https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg",
  "https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg",
  "https://images.pexels.com/photos/139146/pexels-photo-139146.jpeg",
  "https://images.pexels.com/photos/280228/pexels-photo-280228.jpeg",
  "https://images.pexels.com/photos/7031408/pexels-photo-7031408.jpeg",
  "https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg", 
  "https://images.pexels.com/photos/276671/pexels-photo-276671.jpeg"

    ];

    const properties = images.map((img, i) => {
      return {
        name: `Property ${i + 1}`,
        address: `${100 + i} Real Estate Rd, City ${i + 1}`,
        beds: Math.floor(Math.random() * 3) + 2,
        baths: Math.floor(Math.random() * 2) + 1,
        sqft: Math.floor(Math.random() * 1000) + 1200,
        img: img + "?auto=compress&cs=tinysrgb&dpr=2&h=300&w=400"
      };
    });

    properties.forEach(p => {
      const card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = `
        <img src="${p.img}" alt="${p.name}" />
        <div class="card-content">
          <div class="property-name">${p.name}</div>
          <div class="address">${p.address}</div>
          <div class="details">
            <div class="detail-item"><span class="icon">🛏</span> ${p.beds} Beds</div>
            <div class="detail-item"><span class="icon">🛁</span> ${p.baths} Baths</div>
            <div class="detail-item"><span class="icon">📏</span> ${p.sqft} sqft</div>
          </div>
        </div>
      `;
      container.appendChild(card);
    });