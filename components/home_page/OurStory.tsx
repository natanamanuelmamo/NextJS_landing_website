import Image from "next/image";

const OurStory = () => {
  return (
    <section className="relative w-full h-[500px]">
      {/* Background Image */}
      <Image
        src="/our_story.jpg"
        alt="Our Story Background"
        fill
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-white opacity-70" />

      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-start px-8 md:px-20">
        <div className="max-w-xl text-left">
          <h2 className="text-3xl font-bold text-green-700 mb-4">OUR Story</h2>
          <p className="text-gray-700 mb-4">
            Founded in 2020, DAN MART was created to bring affordable, fresh and high-quality
            goods to local families – with a focus on excellent customer service and trusted
            products. We continue to grow every day.
          </p>
          <p className="text-gray-700 mb-6">
            Founded in 2020, DAN MART was created to bring affordable, fresh and high-quality
            goods to local families – with a focus on excellent customer service and trusted
            products. We Continue to grow every day.
          </p>
          <button className="bg-green-700 text-white px-6 py-2 rounded-md hover:bg-green-800 transition">
            Learn more
          </button>
        </div>
      </div>
    </section>
  );
};

export default OurStory;







