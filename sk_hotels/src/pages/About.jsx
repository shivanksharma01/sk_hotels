import React from "react";

export default function About() {
  const features = [
    {
      title: "Luxury Rooms",
      desc: "Experience comfort and elegance with our well-designed luxury rooms equipped with modern amenities.",
    },
    {
      title: "24/7 Service",
      desc: "Our professional staff is available round the clock to ensure a pleasant stay.",
    },
    {
      title: "Prime Location",
      desc: "Located in the heart of the city with easy access to attractions and transportation.",
    },
    {
      title: "Affordable Pricing",
      desc: "Enjoy premium hospitality at competitive and affordable prices.",
    },
  ];

  const stats = [
    { number: "500+", label: "Happy Guests" },
    { number: "50+", label: "Luxury Rooms" },
    { number: "10+", label: "Years Experience" },
    { number: "24/7", label: "Customer Support" },
  ];

  return (
    <div className="bg-gray-50 py-24 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Hero */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            About SK Hotels
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Welcome to SK Hotels — where luxury meets comfort. We provide
            exceptional hospitality experiences with modern rooms, premium
            services, and world-class amenities.
          </p>
        </div>

        {/* About Story */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <img
            src="https://images.unsplash.com/photo-1566073771259-6a8506099945"
            alt="hotel"
            className="rounded-xl shadow-lg"
          />

          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Our Story
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              SK Hotels was founded with the mission of delivering premium
              hospitality experiences. We believe that every guest deserves
              comfort, luxury, and personalized service.
            </p>

            <p className="text-gray-600 leading-relaxed">
              From modern rooms to exceptional customer service, we ensure that
              every stay becomes a memorable experience for our guests.
            </p>
          </div>
        </div>

        {/* Features */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Why Choose Us
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
              >
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="bg-blue-600 text-white rounded-xl py-12 px-6 mb-20">
          <div className="grid md:grid-cols-4 text-center gap-8">
            {stats.map((stat, index) => (
              <div key={index}>
                <h3 className="text-3xl font-bold">{stat.number}</h3>
                <p className="text-blue-100">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call To Action */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Experience Luxury Today
          </h2>
          <p className="text-gray-600 mb-6">
            Book your stay at SK Hotels and enjoy a memorable hospitality experience.
          </p>

          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
            Book Your Stay
          </button>
        </div>

      </div>
    </div>
  );
}