import React, { useState } from 'react'
import './HobbiesGallery.css'
import type { HobbiesGalleryItem } from '../../Types'
import { hobbiesGalleryItems } from './HobbiesGalleryData'

const HobbiesGallery = () => {
  const [selected, setSelected] = useState<HobbiesGalleryItem | null>(null)

  return (
    <section className="hobbiesGallery-section">
      {/* <h2 className="hobbiesGallery-heading">Off the screen</h2>
      <p className="hobbiesGallery-subheading">A few glimpses from life beyond the keyboard.</p> */}

      <div className="hobbiesGallery-grid">
        {hobbiesGalleryItems.map((item) => (
          <div
            key={item.id}
            className="hobbiesGallery-thumb"
            onClick={() => setSelected(item)}
          >
            <img src={item.image} alt={item.title} />
          </div>
        ))}
      </div>

      {selected && (
        <div className="hobbiesGallery-overlay" onClick={() => setSelected(null)}>
          <div
            className="hobbiesGallery-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="hobbiesGallery-close"
              onClick={() => setSelected(null)}
              aria-label="Close"
            >
              ✕
            </button>
            <img src={selected.image} alt={selected.title} className="hobbiesGallery-modal-img" />
            <div className="hobbiesGallery-modal-info">
              <h3 className="hobbiesGallery-modal-title">{selected.title}</h3>
              <p className="hobbiesGallery-modal-desc">{selected.description}</p>
              <span className="hobbiesGallery-modal-date">{selected.date}</span>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default HobbiesGallery