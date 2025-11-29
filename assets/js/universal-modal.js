/**
 * Universal Modal System for Art Gallery Posts
 * Handles image display with optional metadata in a modal overlay
 */

(function() {
    'use strict';

    // Global artwork data store (can be populated by individual posts)
    window.artworkData = window.artworkData || [];

    // Initialize modal when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initUniversalModal);
    } else {
        initUniversalModal();
    }

    function initUniversalModal() {
        const modal = document.getElementById('universalImageModal');
        if (!modal) return;

        const modalImg = document.getElementById('universalModalImage');
        const modalCaption = document.getElementById('universalModalCaption');
        const closeBtn = document.querySelector('.universal-modal-close');
        const overlay = document.querySelector('.universal-modal-overlay');

        // Open modal function
        window.openUniversalModal = function(imageSrc, metadata) {
            if (!modal || !modalImg) return;

            // Set image source
            modalImg.src = imageSrc;
            modalImg.alt = metadata && metadata.titleAr ?
                `${metadata.titleAr} / ${metadata.titleFr || ''}` :
                'Artwork';

            // Build caption HTML with metadata (if available)
            let captionHTML = '';
            if (metadata && (metadata.titleAr || metadata.titleFr || metadata.dimensions)) {
                if (metadata.titleAr) {
                    captionHTML += `<h4 dir="rtl">${metadata.titleAr}</h4>`;
                }
                if (metadata.titleFr) {
                    captionHTML += `<h4>${metadata.titleFr}</h4>`;
                }

                let details = [];
                if (metadata.dimensions) details.push(metadata.dimensions);
                if (metadata.medium) details.push(metadata.medium);
                if (metadata.year) details.push(metadata.year);

                if (details.length > 0) {
                    captionHTML += `<p>${details.join(' / ')}</p>`;
                }

                if (metadata.note) {
                    captionHTML += `<p><em>${metadata.note}</em></p>`;
                }
            }

            if (modalCaption) {
                modalCaption.innerHTML = captionHTML;
                // Hide caption if no metadata
                modalCaption.style.display = captionHTML ? 'block' : 'none';
            }

            // Show modal
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        };

        // Close modal function
        window.closeUniversalModal = function() {
            if (!modal) return;

            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
            if (modalImg) modalImg.src = '';
            if (modalCaption) modalCaption.innerHTML = '';
        };

        // Event listeners for closing modal
        if (closeBtn) {
            closeBtn.addEventListener('click', function(e) {
                e.stopPropagation();
                window.closeUniversalModal();
            });
        }

        if (overlay) {
            overlay.addEventListener('click', window.closeUniversalModal);
        }

        // ESC key to close
        document.addEventListener('keydown', function(event) {
            if (event.key === 'Escape' && modal && modal.style.display === 'block') {
                window.closeUniversalModal();
            }
        });

        // Auto-attach click handlers to artwork images
        // This function can be called after dynamically creating artwork elements
        window.attachArtworkClickHandlers = function() {
            // Handle images with data-artwork-index attribute
            document.querySelectorAll('[data-artwork-index]').forEach(function(element) {
                element.addEventListener('click', function() {
                    const index = parseInt(this.getAttribute('data-artwork-index'));
                    if (window.artworkData && window.artworkData[index]) {
                        const artwork = window.artworkData[index];
                        const imageSrc = this.querySelector('img') ?
                            this.querySelector('img').src :
                            artwork.fullImagePath || '';
                        window.openUniversalModal(imageSrc, artwork);
                    }
                });
            });

            // Handle images with data-modal-image attribute (simple mode without metadata)
            document.querySelectorAll('[data-modal-image]').forEach(function(img) {
                img.addEventListener('click', function() {
                    const imageSrc = this.getAttribute('data-modal-image') || this.src;
                    const alt = this.alt || '';
                    window.openUniversalModal(imageSrc, { title: alt });
                });
            });

            // Handle .artwork-image-wrapper elements
            document.querySelectorAll('.artwork-image-wrapper').forEach(function(wrapper) {
                if (!wrapper.hasAttribute('data-modal-attached')) {
                    wrapper.setAttribute('data-modal-attached', 'true');
                    wrapper.addEventListener('click', function() {
                        const index = parseInt(this.getAttribute('data-artwork-index'));
                        const img = this.querySelector('img');

                        if (!isNaN(index) && window.artworkData && window.artworkData[index]) {
                            const artwork = window.artworkData[index];
                            const imageSrc = img ? img.src : '';
                            window.openUniversalModal(imageSrc, artwork);
                        } else if (img) {
                            // Fallback: show image without metadata
                            window.openUniversalModal(img.src, {});
                        }
                    });
                }
            });
        };

        // Auto-attach handlers on initialization
        window.attachArtworkClickHandlers();
    }
})();
