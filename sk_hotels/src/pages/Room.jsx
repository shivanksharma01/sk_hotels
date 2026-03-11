import React from 'react'
import { useNavigate } from 'react-router-dom'

const rooms = [
  {
    id: 1,
    name: "Deluxe King Room",
    price: 12500,
    image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&h=600&fit=crop",
    capacity: "2 Adults",
    size: "45 sq m",
    bed: "1 King Bed",
    amenities: ["Free WiFi", "Air Conditioning", "Mini Bar", "Ocean View", "Room Service"],
    description: "Spacious room with stunning ocean views, featuring a comfortable king bed and modern amenities."
  },
  {
    id: 2,
    name: "Superior Twin Room",
    price: 10000,
    image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800&h=600&fit=crop",
    capacity: "2 Adults",
    size: "38 sq m",
    bed: "2 Twin Beds",
    amenities: ["Free WiFi", "Air Conditioning", "TV", "City View", "Coffee Maker"],
    description: "Elegant twin room with city views, perfect for business travelers or friends traveling together."
  },
  {
    id: 3,
    name: "Executive Suite",
    price: 23500,
    image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&h=600&fit=crop",
    capacity: "3 Adults",
    size: "75 sq m",
    bed: "1 King Bed + Sofa Bed",
    amenities: ["Free WiFi", "Air Conditioning", "Mini Bar", "Balcony", "Jacuzzi", "Living Area"],
    description: "Luxurious suite with separate living area, private balcony, and premium jacuzzi experience."
  },
  {
    id: 4,
    name: "Family Suite",
    price: 18500,
    image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=800&h=600&fit=crop",
    capacity: "4 Adults + 2 Children",
    size: "90 sq m",
    bed: "2 Queen Beds",
    amenities: ["Free WiFi", "Air Conditioning", "Kitchenette", "Garden View", "Bathtub"],
    description: "Spacious family suite with kitchenette, perfect for families seeking comfort and convenience."
  },
  {
    id: 5,
    name: "Standard Single Room",
    price: 6500,
    image: "https://images.unsplash.com/photo-1595576508898-0ad5c879a061?w=800&h=600&fit=crop",
    capacity: "1 Adult",
    size: "25 sq m",
    bed: "1 Single Bed",
    amenities: ["Free WiFi", "Air Conditioning", "TV", "Work Desk"],
    description: "Comfortable and affordable single room ideal for solo travelers with essential amenities."
  },
  {
    id: 6,
    name: "Presidential Suite",
    price: 42000,
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&h=600&fit=crop",
    capacity: "4 Adults",
    size: "150 sq m",
    bed: "2 King Beds",
    amenities: ["Free WiFi", "Air Conditioning", "Private Pool", "Butler Service", "Ocean View", "Home Cinema"],
    description: "Ultimate luxury experience with private pool, dedicated butler service, and panoramic ocean views."
  },
  {
    id: 7,
    name: "Economy Double Room",
    price: 8000,
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop",
    capacity: "2 Adults",
    size: "30 sq m",
    bed: "1 Double Bed",
    amenities: ["Free WiFi", "Air Conditioning", "TV"],
    description: "Budget-friendly double room with all basic amenities for a comfortable stay."
  },
  {
    id: 8,
    name: "Honeymoon Suite",
    price: 29000,
    image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800&h=600&fit=crop",
    capacity: "2 Adults",
    size: "65 sq m",
    bed: "1 King Bed",
    amenities: ["Free WiFi", "Air Conditioning", "Champagne Service", "Rose Petals", "Ocean View", "Jacuzzi"],
    description: "Romantic suite perfect for couples, featuring champagne service and beautifully arranged rose petals."
  },
  {
    id: 9,
    name: "Business Suite",
    price: 16500,
    image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800&h=600&fit=crop",
    capacity: "2 Adults",
    size: "55 sq m",
    bed: "1 King Bed",
    amenities: ["Free WiFi", "Air Conditioning", "Work Desk", "Meeting Corner", "Express Check-in"],
    description: "Designed for business travelers with dedicated workspace and express check-in service."
  },
  {
    id: 10,
    name: "Poolside Villa",
    price: 35000,
    image: "https://images.unsplash.com/photo-1540541338287-41700207dee6?w=800&h=600&fit=crop",
    capacity: "4 Adults",
    size: "120 sq m",
    bed: "2 Queen Beds",
    amenities: ["Free WiFi", "Private Pool", "Outdoor Shower", "Garden View", "Patio"],
    description: "Private villa with direct pool access, outdoor shower, and serene garden surroundings."
  },
  {
    id: 11,
    name: "Accessible Room",
    price: 9000,
    image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&h=600&fit=crop",
    capacity: "2 Adults",
    size: "40 sq m",
    bed: "1 Queen Bed",
    amenities: ["Free WiFi", "Air Conditioning", "Wheelchair Accessible", "Grab Bars", "Emergency Call Button"],
    description: "Specially designed accessible room with wheelchair-friendly features and safety amenities."
  },
  {
    id: 12,
    name: "Penthouse Suite",
    price: 54000,
    image: "https://images.unsplash.com/photo-1591088398332-8a7791972843?w=800&h=600&fit=crop",
    capacity: "6 Adults",
    size: "200 sq m",
    bed: "3 King Beds",
    amenities: ["Free WiFi", "Private Terrace", "Ocean View", "Full Kitchen", "Home Cinema", "Butler Service"],
    description: "The pinnacle of luxury with private terrace, full kitchen, and breathtaking 360-degree ocean views."
  }
]

export default function Room() {
  const navigate = useNavigate()
  return (
    <div className="bg-gray-50 min-h-screen pt-20 pb-16" id="rooms">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block bg-gray-200 text-gray-700 text-sm font-semibold px-4 py-1 rounded-full mb-4">
            Accommodations
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Our Rooms & Suites</h2>
          <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Discover our collection of beautifully appointed rooms and suites, designed to provide the ultimate comfort for your stay.
          </p>
        </div>

        {/* Special Offers Banner */}
        <div className="mb-12 bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-6 sm:p-10 text-center">
          <h3 className="text-white text-2xl sm:text-3xl font-bold mb-2">Special Offers</h3>
          <p className="text-gray-300 text-base sm:text-lg">Get up to 20% off on premium suites - Book now!</p>
        </div>

        {/* Room Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {rooms.map((room) => (
            <div 
              key={room.id} 
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
            >
              {/* Room Image */}
              <div className="relative h-48 sm:h-56 overflow-hidden group">
                <img 
                  src={room.image} 
                  alt={room.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-3 right-3 bg-gray-900 text-white px-3 py-1.5 rounded-full text-sm font-semibold shadow-lg">
                  <span className="text-lg font-bold">₹{room.price.toLocaleString('en-IN')}</span>
                  <span className="text-xs font-normal">/night</span>
                </div>
              </div>

              {/* Room Content */}
              <div className="p-4 sm:p-5">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 truncate">{room.name}</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{room.description}</p>

                {/* Room Details */}
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-gray-100 text-gray-700 text-xs px-2.5 py-1 rounded-md flex items-center gap-1">
                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20"><path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"/></svg>
                    {room.capacity}
                  </span>
                  <span className="bg-gray-100 text-gray-700 text-xs px-2.5 py-1 rounded-md flex items-center gap-1">
                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm3 1h6v2H7V5zm6 4H7v2h6V9zm-6 4h6v2H7v-2z" clipRule="evenodd"/></svg>
                    {room.size}
                  </span>
                  <span className="bg-gray-100 text-gray-700 text-xs px-2.5 py-1 rounded-md flex items-center gap-1">
                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20"><path d="M3 5a1 1 0 011-1h12a1 1 0 011 1v10a1 1 0 01-1 1H4a1 1 0 01-1-1V5zm2 2v6h10V7H5z"/></svg>
                    {room.bed}
                  </span>
                </div>

                {/* Amenities */}
                <div className="mb-4">
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Amenities</p>
                  <div className="flex flex-wrap gap-1.5">
                    {room.amenities.slice(0, 4).map((amenity, index) => (
                      <span key={index} className="text-xs text-gray-600 bg-gray-50 px-2 py-1 rounded border border-gray-100">
                        {amenity}
                      </span>
                    ))}
                    {room.amenities.length > 4 && (
                      <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded border border-gray-200">
                        +{room.amenities.length - 4} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Book Button */}
                <button 
                  onClick={() => navigate(`/booking/${room.id}`)}
                  className="w-full bg-gray-900 text-white border-none py-2.5 sm:py-3 text-sm font-semibold rounded-lg cursor-pointer hover:bg-gray-700 transition-all duration-300 flex items-center justify-center gap-2 group">
                  <span>Book Now</span>
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Price Summary Section */}
        <div className="mt-16 bg-white rounded-2xl shadow-lg p-6 sm:p-10">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center">Room Price Overview</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            <div className="text-center p-4 sm:p-6 border-2 border-gray-100 rounded-xl hover:border-gray-300 hover:bg-gray-50 transition-all duration-300">
              <p className="text-gray-500 text-sm font-medium mb-2">Budget</p>
              <p className="text-3xl sm:text-4xl font-bold text-gray-900">₹6,500</p>
              <p className="text-gray-400 text-xs mt-1">per night</p>
            </div>
            <div className="text-center p-4 sm:p-6 border-2 border-gray-100 rounded-xl hover:border-gray-300 hover:bg-gray-50 transition-all duration-300">
              <p className="text-gray-500 text-sm font-medium mb-2">Standard</p>
              <p className="text-3xl sm:text-4xl font-bold text-gray-900">₹12,500</p>
              <p className="text-gray-400 text-xs mt-1">per night</p>
            </div>
            <div className="text-center p-4 sm:p-6 border-2 border-gray-100 rounded-xl hover:border-gray-300 hover:bg-gray-50 transition-all duration-300">
              <p className="text-gray-500 text-sm font-medium mb-2">Premium</p>
              <p className="text-3xl sm:text-4xl font-bold text-gray-900">₹29,000</p>
              <p className="text-gray-400 text-xs mt-1">per night</p>
            </div>
            <div className="text-center p-4 sm:p-6 border-2 border-gray-100 rounded-xl hover:border-gray-300 hover:bg-gray-50 transition-all duration-300">
              <p className="text-gray-500 text-sm font-medium mb-2">Luxury</p>
              <p className="text-3xl sm:text-4xl font-bold text-gray-900">₹54,000</p>
              <p className="text-gray-400 text-xs mt-1">per night</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Need help choosing? Our team is here to assist you.</p>
          <button className="bg-transparent border-2 border-gray-900 text-gray-900 px-8 py-3 text-base font-semibold rounded-lg hover:bg-gray-900 hover:text-white transition-all duration-300">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  )
}
