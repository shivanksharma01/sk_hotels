import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const rooms = [
  {
    id: 1,
    name: "Deluxe King Room",
    price: 12500,
    image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&h=600&fit=crop",
    capacity: "2 Adults",
    size: "45 sq m",
    bed: "1 King Bed",
    amenities: ["Free WiFi", "Air Conditioning", "Mini Bar", "Ocean View", "Room Service"]
  },
  {
    id: 2,
    name: "Superior Twin Room",
    price: 10000,
    image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800&h=600&fit=crop",
    capacity: "2 Adults",
    size: "38 sq m",
    bed: "2 Twin Beds",
    amenities: ["Free WiFi", "Air Conditioning", "TV", "City View", "Coffee Maker"]
  },
  {
    id: 3,
    name: "Executive Suite",
    price: 23500,
    image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&h=600&fit=crop",
    capacity: "3 Adults",
    size: "75 sq m",
    bed: "1 King Bed + Sofa Bed",
    amenities: ["Free WiFi", "Air Conditioning", "Mini Bar", "Balcony", "Jacuzzi", "Living Area"]
  },
  {
    id: 4,
    name: "Family Suite",
    price: 18500,
    image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=800&h=600&fit=crop",
    capacity: "4 Adults + 2 Children",
    size: "90 sq m",
    bed: "2 Queen Beds",
    amenities: ["Free WiFi", "Air Conditioning", "Kitchenette", "Garden View", "Bathtub"]
  },
  {
    id: 5,
    name: "Standard Single Room",
    price: 6500,
    image: "https://images.unsplash.com/photo-1595576508898-0ad5c879a061?w=800&h=600&fit=crop",
    capacity: "1 Adult",
    size: "25 sq m",
    bed: "1 Single Bed",
    amenities: ["Free WiFi", "Air Conditioning", "TV", "Work Desk"]
  },
  {
    id: 6,
    name: "Presidential Suite",
    price: 42000,
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&h=600&fit=crop",
    capacity: "4 Adults",
    size: "150 sq m",
    bed: "2 King Beds",
    amenities: ["Free WiFi", "Air Conditioning", "Private Pool", "Butler Service", "Ocean View", "Home Cinema"]
  },
  {
    id: 7,
    name: "Economy Double Room",
    price: 8000,
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop",
    capacity: "2 Adults",
    size: "30 sq m",
    bed: "1 Double Bed",
    amenities: ["Free WiFi", "Air Conditioning", "TV"]
  },
  {
    id: 8,
    name: "Honeymoon Suite",
    price: 29000,
    image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800&h=600&fit=crop",
    capacity: "2 Adults",
    size: "65 sq m",
    bed: "1 King Bed",
    amenities: ["Free WiFi", "Air Conditioning", "Champagne Service", "Rose Petals", "Ocean View", "Jacuzzi"]
  },
  {
    id: 9,
    name: "Business Suite",
    price: 16500,
    image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800&h=600&fit=crop",
    capacity: "2 Adults",
    size: "55 sq m",
    bed: "1 King Bed",
    amenities: ["Free WiFi", "Air Conditioning", "Work Desk", "Meeting Corner", "Express Check-in"]
  },
  {
    id: 10,
    name: "Poolside Villa",
    price: 35000,
    image: "https://images.unsplash.com/photo-1540541338287-41700207dee6?w=800&h=600&fit=crop",
    capacity: "4 Adults",
    size: "120 sq m",
    bed: "2 Queen Beds",
    amenities: ["Free WiFi", "Private Pool", "Outdoor Shower", "Garden View", "Patio"]
  },
  {
    id: 11,
    name: "Accessible Room",
    price: 9000,
    image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&h=600&fit=crop",
    capacity: "2 Adults",
    size: "40 sq m",
    bed: "1 Queen Bed",
    amenities: ["Free WiFi", "Air Conditioning", "Wheelchair Accessible", "Grab Bars", "Emergency Call Button"]
  },
  {
    id: 12,
    name: "Penthouse Suite",
    price: 54000,
    image: "https://images.unsplash.com/photo-1591088398332-8a7791972843?w=800&h=600&fit=crop",
    capacity: "6 Adults",
    size: "200 sq m",
    bed: "3 King Beds",
    amenities: ["Free WiFi", "Private Terrace", "Ocean View", "Full Kitchen", "Home Cinema", "Butler Service"]
  }
]

export default function Booking() {
  const { roomId } = useParams()
  const [selectedRoom, setSelectedRoom] = useState(roomId || '')
  const [checkIn, setCheckIn] = useState('')
  const [checkOut, setCheckOut] = useState('')
  const [guests, setGuests] = useState(1)
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [specialRequests, setSpecialRequests] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showConfirmation, setShowConfirmation] = useState(false)

  useEffect(() => {
    if (roomId) {
      setSelectedRoom(roomId)
    }
  }, [roomId])

  const calculateNights = () => {
    if (checkIn && checkOut) {
      const start = new Date(checkIn)
      const end = new Date(checkOut)
      const nights = Math.ceil((end - start) / (1000 * 60 * 60 * 24))
      return nights > 0 ? nights : 0
    }
    return 0
  }

  const getSelectedRoomDetails = () => {
    return rooms.find(room => room.id === parseInt(selectedRoom))
  }

  const calculateTotal = () => {
    const room = getSelectedRoomDetails()
    if (room) {
      return room.price * calculateNights()
    }
    return 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setShowConfirmation(true)
    }, 1500)
  }

  const nights = calculateNights()
  const selectedRoomDetails = getSelectedRoomDetails()
  const totalPrice = calculateTotal()

  if (showConfirmation) {
    return (
      <div className="bg-gray-50 min-h-screen pt-20 pb-16">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-12 text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
              </svg>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Booking Confirmed!</h2>
            <p className="text-gray-600 mb-6">
              Thank you for your booking, {firstName}! We have sent a confirmation email to {email}.
            </p>
            <div className="bg-gray-50 rounded-xl p-6 mb-6 text-left">
              <h3 className="font-semibold text-gray-900 mb-4">Booking Details</h3>
              <div className="space-y-2 text-sm">
                <p><span className="text-gray-500">Confirmation #:</span> <span className="font-medium">SK{Date.now().toString().slice(-8)}</span></p>
                <p><span className="text-gray-500">Room:</span> <span className="font-medium">{selectedRoomDetails?.name}</span></p>
                <p><span className="text-gray-500">Check-in:</span> <span className="font-medium">{checkIn}</span></p>
                <p><span className="text-gray-500">Check-out:</span> <span className="font-medium">{checkOut}</span></p>
                <p><span className="text-gray-500">Nights:</span> <span className="font-medium">{nights}</span></p>
                <p><span className="text-gray-500">Guests:</span> <span className="font-medium">{guests}</span></p>
                <p><span className="text-gray-500">Total:</span> <span className="font-medium text-green-600">₹{totalPrice.toLocaleString('en-IN')}</span></p>
              </div>
            </div>
            <button 
              onClick={() => {
                setShowConfirmation(false)
                setSelectedRoom('')
                setCheckIn('')
                setCheckOut('')
                setGuests(1)
                setFirstName('')
                setLastName('')
                setEmail('')
                setPhone('')
                setSpecialRequests('')
              }}
              className="bg-gray-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-700 transition-colors duration-300"
            >
              Make Another Booking
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-gray-50 min-h-screen pt-20 pb-16" id="booking">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block bg-gray-200 text-gray-700 text-sm font-semibold px-4 py-1 rounded-full mb-4">
            Reserve Your Stay
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Book Your Room</h2>
          <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Complete the form below to reserve your perfect room at S.K Hotels. We look forward to welcoming you!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Booking Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-lg p-6 sm:p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                </svg>
                Booking Information
              </h3>

              {/* Room Selection */}
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-semibold mb-2">Select Room *</label>
                <select
                  value={selectedRoom}
                  onChange={(e) => setSelectedRoom(e.target.value)}
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent bg-white text-gray-700"
                >
                  <option value="">Choose a room...</option>
                  {rooms.map((room) => (
                    <option key={room.id} value={room.id}>
                      {room.name} - ₹{room.price.toLocaleString('en-IN')}/night
                    </option>
                  ))}
                </select>
              </div>

              {/* Date Selection */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div>
                  <label className="block text-gray-700 text-sm font-semibold mb-2">Check-in Date *</label>
                  <input
                    type="date"
                    value={checkIn}
                    onChange={(e) => setCheckIn(e.target.value)}
                    required
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent text-gray-700"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 text-sm font-semibold mb-2">Check-out Date *</label>
                  <input
                    type="date"
                    value={checkOut}
                    onChange={(e) => setCheckOut(e.target.value)}
                    required
                    min={checkIn || new Date().toISOString().split('T')[0]}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent text-gray-700"
                  />
                </div>
              </div>

              {/* Number of Guests */}
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-semibold mb-2">Number of Guests *</label>
                <select
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent bg-white text-gray-700"
                >
                  <option value="1">1 Guest</option>
                  <option value="2">2 Guests</option>
                  <option value="3">3 Guests</option>
                  <option value="4">4 Guests</option>
                  <option value="5">5 Guests</option>
                  <option value="6">6 Guests</option>
                </select>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2 mt-8">
                <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                </svg>
                Guest Details
              </h3>

              {/* Name Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div>
                  <label className="block text-gray-700 text-sm font-semibold mb-2">First Name *</label>
                  <input
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                    placeholder="First Name"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent text-gray-700 placeholder-gray-400"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 text-sm font-semibold mb-2">Last Name *</label>
                  <input
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                    placeholder="Last Name"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent text-gray-700 placeholder-gray-400"
                  />
                </div>
              </div>

              {/* Contact Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div>
                  <label className="block text-gray-700 text-sm font-semibold mb-2">Email Address *</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="skhotels@example.com"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent text-gray-700 placeholder-gray-400"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 text-sm font-semibold mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                    placeholder="+1 0000000000"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent text-gray-700 placeholder-gray-400"
                  />
                </div>
              </div>

              {/* Special Requests */}
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-semibold mb-2">Special Requests</label>
                <textarea
                  value={specialRequests}
                  onChange={(e) => setSpecialRequests(e.target.value)}
                  rows={4}
                  placeholder="Any special requests or preferences..."
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent text-gray-700 placeholder-gray-400 resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gray-900 text-white border-none py-4 text-base font-semibold rounded-lg cursor-pointer hover:bg-gray-700 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"/>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
                    </svg>
                    Processing...
                  </>
                ) : (
                  <>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                    </svg>
                    Confirm Booking
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Booking Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 sticky top-24">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/>
                </svg>
                Booking Summary
              </h3>

              {/* Selected Room Preview */}
              {selectedRoomDetails ? (
                <div className="mb-6">
                  <div className="relative h-40 rounded-lg overflow-hidden mb-4">
                    <img
                      src={selectedRoomDetails.image}
                      alt={selectedRoomDetails.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-2 right-2 bg-gray-900 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      ₹{selectedRoomDetails.price.toLocaleString('en-IN')}/night
                    </div>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">{selectedRoomDetails.name}</h4>
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="bg-gray-100 text-gray-700 text-xs px-2.5 py-1 rounded-md">
                      {selectedRoomDetails.capacity}
                    </span>
                    <span className="bg-gray-100 text-gray-700 text-xs px-2.5 py-1 rounded-md">
                      {selectedRoomDetails.size}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {selectedRoomDetails.amenities.slice(0, 3).map((amenity, index) => (
                      <span key={index} className="text-xs text-gray-500 bg-gray-50 px-2 py-1 rounded border border-gray-100">
                        {amenity}
                      </span>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="mb-6 p-4 bg-gray-50 rounded-lg text-center">
                  <p className="text-gray-500 text-sm">Select a room to see details</p>
                </div>
              )}

              {/* Booking Details */}
              <div className="border-t border-gray-200 pt-4 mb-4">
                <div className="flex justify-between mb-2 text-sm">
                  <span className="text-gray-600">Check-in</span>
                  <span className="text-gray-900 font-medium">{checkIn || 'Not selected'}</span>
                </div>
                <div className="flex justify-between mb-2 text-sm">
                  <span className="text-gray-600">Check-out</span>
                  <span className="text-gray-900 font-medium">{checkOut || 'Not selected'}</span>
                </div>
                <div className="flex justify-between mb-2 text-sm">
                  <span className="text-gray-600">Guests</span>
                  <span className="text-gray-900 font-medium">{guests}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Number of Nights</span>
                  <span className="text-gray-900 font-medium">{nights}</span>
                </div>
              </div>

              {/* Price Breakdown */}
              {selectedRoomDetails && nights > 0 && (
                <div className="border-t border-gray-200 pt-4 mb-4">
                  <div className="flex justify-between mb-2 text-sm">
                    <span className="text-gray-600">₹{selectedRoomDetails.price.toLocaleString('en-IN')} x {nights} nights</span>
                    <span className="text-gray-900 font-medium">₹{(selectedRoomDetails.price * nights).toLocaleString('en-IN')}</span>
                  </div>
                  <div className="flex justify-between mb-2 text-sm">
                    <span className="text-gray-600">Taxes & Fees (10%)</span>
                    <span className="text-gray-900 font-medium">₹{Math.round(selectedRoomDetails.price * nights * 0.1).toLocaleString('en-IN')}</span>
                  </div>
                </div>
              )}

              {/* Total */}
              <div className="border-t border-gray-200 pt-4">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-gray-900">Total</span>
                  <span className="text-2xl font-bold text-red-500">₹{(totalPrice + (selectedRoomDetails ? Math.round(selectedRoomDetails.price * nights * 0.1) : 0)).toLocaleString('en-IN')}</span>
                </div>
              </div>

              {/* Additional Info */}
              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                  </svg>
                  <div>
                    <p className="text-sm text-gray-600 font-medium">Free Cancellation</p>
                    <p className="text-xs text-gray-500">Cancel up to 24 hours before check-in for a full refund</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Support */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Need assistance with your booking?</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="tel:+1234567890" className="inline-flex items-center justify-center gap-2 text-gray-700 hover:text-red-500 transition-colors duration-300">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
              </svg>
              +1 234 567 890
            </a>
            <a href="mailto:info@skhotels.com" className="inline-flex items-center justify-center gap-2 text-gray-700 hover:text-red-500 transition-colors duration-300">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
              info@skhotels.com
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
