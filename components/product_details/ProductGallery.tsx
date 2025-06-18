// 'use client';

// import { useState } from 'react';

// export default function ProductGallery({ images }: { images: string[] }) {
//   const [selectedImage, setSelectedImage] = useState(images[0]);

//   return (
//     <div className="border rounded-lg p-4">
//       <h2 className="text-xl font-semibold mb-4">Product Gallery</h2>

//       {/* Main Image */}
//       <div className="w-full mb-4">
//         <img
//           src={selectedImage}
//           alt="Selected Product"
//           className="w-full h-auto object-contain rounded-lg border transition-transform duration-300 hover:scale-105"
//         />
//       </div>

//       {/* Thumbnails */}
//       <div className="flex space-x-2 overflow-x-auto">
//         {images.map((img, idx) => (
//           <img
//             key={idx}
//             src={img}
//             alt={`Thumbnail ${idx + 1}`}
//             onClick={() => setSelectedImage(img)}
//             className={`w-20 h-20 object-cover rounded-lg border-2 cursor-pointer transition-all duration-300 ${
//               selectedImage === img
//                 ? 'border-green-500 scale-105'
//                 : 'border-transparent hover:border-gray-300'
//             }`}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }











'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ProductGallery({ images }: { images: string[] }) {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div className="border rounded-lg p-4">
      {/* <h2 className="text-xl font-bold mb-4 text-green-700 animate-fadeInUp">Product Gallery</h2> */}

      <div className="w-full flex">

        {/* Thumbnails */}
        <div className="flex flex-col space-x-2 overflow-x-auto">
          {images.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`Thumbnail ${idx + 1}`}
              onClick={() => setSelectedImage(img)}
              className={`w-30 h-30 object-cover rounded-lg border-2 cursor-pointer transition-all duration-300 ${
                selectedImage === img
                  ? 'border-green-500 scale-105'
                  : 'border-transparent hover:border-gray-300'
              }`}
            />
          ))}
        </div>

        {/* Main Image with Fade Effect */}
        <div className="w-[600px] mb-4 h-[400px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.img
              key={selectedImage}
              src={selectedImage}
              alt="Selected Product"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="w-full max-h-full object-contain rounded-lg  transition-transform duration-300 hover:scale-105"
            />
          </AnimatePresence>
        </div>

      </div>
    </div>
  );
}
