let debounceTimeout;

// Debounce funkcija koja čeka 500ms pre pozivanja searchProducts
function debouncedSearch() {
  clearTimeout(debounceTimeout); // Otkazuje prethodni timeout
  debounceTimeout = setTimeout(() => {
    searchProducts(); // Pozivanje funkcije za pretragu
  }, 500); // Pozivanje nakon 500ms
}

function searchProducts() {
  const query = document.getElementById("search").value.toLowerCase();
  const resultsContainer = document.getElementById("results");
  
  // Čistimo rezultate pretrage pre svake nove pretrage
  resultsContainer.innerHTML = '';

  // AJAX zahtev za učitavanje JSON podataka
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "products.json", true);
  xhr.onload = function() {
    if (xhr.status === 200) {
      const products = JSON.parse(xhr.responseText);
      const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(query)
      );

      // Prikaz filtriranih rezultata
      if (filteredProducts.length > 0) {
        filteredProducts.forEach(product => {
          const item = document.createElement("div");
          item.classList.add("result-item");
          item.innerHTML = `
            <div>
              <strong>${product.name}</strong><br>
              Cena: ${product.price}<br>
              Proizvođač: ${product.manufacturer}<br>
              Kategorija: ${product.category}
            </div>
            <img src="assets/${product.name}.jpg" alt="${product.name}" class="product-image">
          `;
          resultsContainer.appendChild(item);
        });
      } else {
        resultsContainer.innerHTML = '<p>Nema rezultata</p>';
      }
    }
  };
  xhr.send();
}

// Funkcija koja poziva ili ne debouncedSearch na osnovu stanja checkbox-a
function handleInput() {
  const debounceEnabled = document.getElementById("debounce-toggle").checked;
  if (debounceEnabled) {
    debouncedSearch(); // Poziva debouncedSearch ako je debounce uključen
  } else {
    searchProducts(); // Poziva searchProducts direktno ako je debounce isključen
  }
}

document.getElementById("search").addEventListener("keyup", handleInput);
