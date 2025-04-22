document.addEventListener('DOMContentLoaded', () => {
  const grid = document.getElementById('upload-grid');
  const modal = document.getElementById('upload-modal');
  const modalImage = document.getElementById('modal-image');
  const modalTitle = document.getElementById('modal-title');
  const modalFormat = document.getElementById('modal-format');
  const modalSize = document.getElementById('modal-size');
  const modalDate = document.getElementById('modal-date');
  const modalDownload = document.getElementById('modal-download');
  const modalSource = document.getElementById('modal-source');
  const modalClose = document.getElementById('modal-close');

  fetch('uploads.json')
    .then(res => res.json())
    .then(data => {
      data.forEach(upload => {
        const card = document.createElement('div');
        card.className = 'upload-card';
        card.innerHTML = `
          <img src="${upload.image}" alt="${upload.title}" class="upload-thumb" />
        `;
        card.addEventListener('click', () => {
          modalImage.src = upload.image;
          modalImage.alt = upload.title;
          modalTitle.textContent = upload.title;
          modalFormat.textContent = "Format: " + upload.format;
          modalSize.textContent = "Size: " + upload.size;
          modalDate.textContent = "Date: " + upload.date;
          modalDownload.href = upload.torrent;
          modalSource.href = upload.source;
          modal.classList.remove('hidden');
        });
        grid.appendChild(card);
      });
    });

  modalClose.addEventListener('click', () => {
    modal.classList.add('hidden');
  });
});
