"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const images = [
  "/gallery1.jpg",
  "/gallery2.jpg",
  "/gallery3.jpg",
  "/gallery4.jpg",
  "/gallery5.jpg",
  "/gallery6.jpg",
];

export default function GalleryLightbox() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      <div className="grid gap-6 md:grid-cols-3">
        {images.map((img) => (
          <button
            key={img}
            type="button"
            onClick={() => setSelectedImage(img)}
            className="group relative overflow-hidden rounded-3xl border border-yellow-600/20 bg-[#111] text-left"
          >
            <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
            <div className="absolute inset-0 z-10 opacity-0 transition duration-500 group-hover:opacity-100 bg-[radial-gradient(circle_at_center,rgba(234,179,8,0.18),transparent_60%)]" />

            <img
              src={img}
              alt="Grand Empire gallery"
              className="h-[260px] md:h-[300px] w-full object-cover object-center transition duration-700 group-hover:scale-110"
            />
          </button>
        ))}
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/92 p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.img
              src={selectedImage}
              alt="Expanded gallery image"
              className="max-h-[88vh] w-full max-w-6xl rounded-3xl object-contain"
              initial={{ scale: 0.94 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.94 }}
              transition={{ duration: 0.25 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}