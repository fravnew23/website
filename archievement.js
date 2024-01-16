// Membuat instance Intersection Observer
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Saat elemen galeri muncul dalam viewport
            entry.target.classList.add("gallery-item-visible");
        }
    });
});

// Mengamati semua elemen galeri
const galleryItems = document.querySelectorAll('.gallery-item');
galleryItems.forEach(item => {
    observer.observe(item);
});
