
        // 打開燈箱並顯示對應照片
        function openLightbox(element) {
            const lightbox = document.getElementById('lightbox');
            const lightboxImg = document.getElementById('lightbox-img');
            const clickedImgSrc = element.querySelector('img').src;
            
            lightboxImg.src = clickedImgSrc;
            lightbox.style.display = 'flex';
        }

        // 關閉燈箱
        function closeLightbox() {
            const lightbox = document.getElementById('lightbox');
            lightbox.style.display = 'none';
        }
  