import React, { useState } from 'react';
import {
  User,
  Lock,
  Mail,
  Phone,
  MapPin,
  Search,
  Bell,
  TrendingUp,
  ShoppingCart,
  MessageCircle,
  Star,
  Camera,
  Filter,
  DollarSign,
  Users,
  Truck,
  Shield,
  Menu,
  Home,
  Package,
  BarChart3,
  Settings,
  Eye,
  EyeOff
} from 'lucide-react';

const LocalHarvestWireframes = () => { // This is the start of the function body
  // State to manage the currently displayed screen
  const [currentScreen, setCurrentScreen] = useState('splash');
  // State to toggle password visibility in login/signup forms
  const [showPassword, setShowPassword] = useState(false);
  // State for form data (though not actively used for submission in this wireframe)
  const [formData, setFormData] = useState({});

  // Object mapping screen keys to their descriptive names for navigation buttons
  const screens = {
    splash: 'Splash Screen',
    login: 'Login',
    signup: 'Sign Up',
    dashboard: 'Dashboard',
    markets: 'Market Prices',
    buyers: 'Find Buyers',
    products: 'My Products',
    chat: 'Messages',
    profile: 'Profile'
  };

  // --- Component for the Splash Screen ---
  const SplashScreen = () => (
    <div className="bg-green-600 text-white text-center py-20 min-h-screen flex flex-col justify-center items-center rounded-lg shadow-lg m-4">
      <div className="mb-8">
        {/* App Logo */}
        <div className="w-24 h-24 bg-white rounded-full mx-auto mb-4 flex items-center justify-center shadow-md">
          <Package className="w-12 h-12 text-green-600" />
        </div>
        {/* App Title and Tagline */}
        <h1 className="text-4xl font-extrabold mb-2 tracking-wide">LocalHarvest</h1>
        <h2 className="text-2xl font-semibold text-green-100">Connect</h2>
        <p className="text-green-200 mt-4 text-lg">Connecting farmers to local markets</p>
      </div>

      {/* Action Buttons */}
      <div className="space-y-4 px-8 w-full max-w-xs">
        <button
          onClick={() => setCurrentScreen('login')}
          className="w-full bg-white text-green-700 py-3 rounded-xl font-bold text-lg shadow-md hover:bg-gray-100 transition duration-300"
        >
          Login
        </button>
        <button
          onClick={() => setCurrentScreen('signup')}
          className="w-full border-2 border-white text-white py-3 rounded-xl font-bold text-lg shadow-md hover:bg-green-700 hover:border-green-700 transition duration-300"
        >
          Sign Up
        </button>
      </div>

      {/* Security Message */}
      <div className="mt-12 text-sm text-green-200 flex items-center">
        <Shield className="w-5 h-5 inline mr-2" />
        Secured with 256-bit encryption
      </div>
    </div>
  );

  // --- Component for the Login Screen ---
  const LoginScreen = () => (
    <div className="p-6 bg-white min-h-screen rounded-lg shadow-lg m-4">
      {/* Back Button */}
      <button
        onClick={() => setCurrentScreen('splash')}
        className="mb-6 text-gray-600 hover:text-green-600 transition duration-200 flex items-center text-lg"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 mr-2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
        </svg>
        Back
      </button>

      <h1 className="text-3xl font-bold mb-8 text-gray-800">Welcome Back</h1>

      <div className="space-y-6">
        {/* Phone Number Input */}
        <div>
          <label className="block text-sm font-medium mb-2 text-gray-700">Phone Number</label>
          <div className="relative">
            <Phone className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="tel"
              placeholder="+27 xx xxx xxxx"
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition duration-200"
            />
          </div>
        </div>

        {/* Password Input */}
        <div>
          <label className="block text-sm font-medium mb-2 text-gray-700">Password</label>
          <div className="relative">
            <Lock className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Enter password"
              className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition duration-200"
            />
            <button
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition duration-200"
            >
              {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Remember Me & Forgot Password */}
        <div className="flex justify-between items-center text-sm">
          <label className="flex items-center text-gray-700 cursor-pointer">
            <input type="checkbox" className="mr-2 rounded text-green-600 focus:ring-green-500" />
            <span>Remember me</span>
          </label>
          <a href="#" className="text-green-600 font-medium hover:underline">Forgot password?</a>
        </div>

        {/* Login Button */}
        <button
          onClick={() => setCurrentScreen('dashboard')}
          className="w-full bg-green-600 text-white py-3 rounded-xl font-bold text-lg shadow-md hover:bg-green-700 transition duration-300"
        >
          Login
        </button>

        {/* Sign Up Link */}
        <p className="text-center text-sm text-gray-600 mt-6">
          Don't have an account?
          <button
            onClick={() => setCurrentScreen('signup')}
            className="text-green-600 ml-1 font-semibold hover:underline"
          >
            Sign up
          </button>
        </p>
      </div>
    </div>
  );

  // --- Component for the Sign Up Screen ---
  const SignupScreen = () => (
    <div className="p-6 bg-white min-h-screen rounded-lg shadow-lg m-4">
      {/* Back Button */}
      <button
        onClick={() => setCurrentScreen('splash')}
        className="mb-6 text-gray-600 hover:text-green-600 transition duration-200 flex items-center text-lg"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 mr-2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
        </svg>
        Back
      </button>

      <h1 className="text-3xl font-bold mb-8 text-gray-800">Create Account</h1>

      <div className="space-y-6">
        {/* Full Name Input */}
        <div>
          <label className="block text-sm font-medium mb-2 text-gray-700">Full Name</label>
          <div className="relative">
            <User className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Enter full name"
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition duration-200"
            />
          </div>
        </div>

        {/* Phone Number Input */}
        <div>
          <label className="block text-sm font-medium mb-2 text-gray-700">Phone Number</label>
          <div className="relative">
            <Phone className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="tel"
              placeholder="+27 xx xxx xxxx"
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition duration-200"
            />
          </div>
        </div>

        {/* Email Input (Optional) */}
        <div>
          <label className="block text-sm font-medium mb-2 text-gray-700">Email (Optional)</label>
          <div className="relative">
            <Mail className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="email"
              placeholder="Enter email"
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition duration-200"
            />
          </div>
        </div>

        {/* Farm Location Input */}
        <div>
          <label className="block text-sm font-medium mb-2 text-gray-700">Farm Location</label>
          <div className="relative">
            <MapPin className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="City, Province"
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition duration-200"
            />
          </div>
        </div>

        {/* Password Input */}
        <div>
          <label className="block text-sm font-medium mb-2 text-gray-700">Password</label>
          <div className="relative">
            <Lock className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Create password"
              className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition duration-200"
            />
            <button
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition duration-200"
            >
              {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Terms and Privacy Checkbox */}
        <div className="flex items-start">
          <input type="checkbox" className="mt-1 mr-3 rounded text-green-600 focus:ring-green-500" />
          <span className="text-sm text-gray-600">
            I agree to the <a href="#" className="text-green-600 font-medium hover:underline">Terms of Service</a> and <a href="#" className="text-green-600 font-medium hover:underline">Privacy Policy</a>.
            Data encrypted with AES-256 encryption.
          </span>
        </div>

        {/* Create Account Button */}
        <button
          onClick={() => setCurrentScreen('dashboard')}
          className="w-full bg-green-600 text-white py-3 rounded-xl font-bold text-lg shadow-md hover:bg-green-700 transition duration-300"
        >
          Create Account
        </button>

        {/* Login Link */}
        <p className="text-center text-sm text-gray-600 mt-6">
          Already have an account?
          <button
            onClick={() => setCurrentScreen('login')}
            className="text-green-600 ml-1 font-semibold hover:underline"
          >
            Login
          </button>
        </p>
      </div>
    </div>
  );

  // --- Component for the Dashboard Screen ---
  const Dashboard = () => (
    <div className="bg-gray-100 min-h-screen">
      {/* Header */}
      <div className="bg-green-600 text-white p-4 pb-6 rounded-b-xl shadow-md">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold">Good morning, Sipho</h1>
            <p className="text-green-100 text-sm">Johannesburg, Gauteng</p>
          </div>
          <div className="flex space-x-4">
            <Bell className="w-6 h-6 cursor-pointer hover:text-green-200 transition duration-200" />
            <Menu className="w-6 h-6 cursor-pointer hover:text-green-200 transition duration-200" />
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="p-4 -mt-8">
        {/* Negative margin to overlap with header */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-xl shadow-md flex items-center">
            <TrendingUp className="w-9 h-9 text-green-500 mr-3 p-1 bg-green-100 rounded-full" />
            <div>
              <p className="text-sm text-gray-600">Today's Average</p>
              <p className="text-xl font-bold text-gray-800">R 12.50/kg</p>
            </div>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-md flex items-center">
            <Users className="w-9 h-9 text-blue-500 mr-3 p-1 bg-blue-100 rounded-full" />
            <div>
              <p className="text-sm text-gray-600">Active Buyers</p>
              <p className="text-xl font-bold text-gray-800">23</p>
            </div>
          </div>
        </div>
      </div>

      {/* Price Alerts */}
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-3 text-gray-800">Price Alerts</h2>
        <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded-lg shadow-sm">
          <div className="flex items-center">
            <TrendingUp className="w-5 h-5 text-green-600 mr-2" />
            <div>
              <p className="font-medium text-gray-800">Tomatoes up 15%</p>
              <p className="text-sm text-gray-600">R 18.50/kg at Joburg Fresh Market</p>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-3 text-gray-800">Quick Actions</h2>
        <div className="grid grid-cols-2 gap-4">
          <button
            onClick={() => setCurrentScreen('markets')}
            className="bg-white border border-gray-200 p-5 rounded-xl text-center shadow-sm hover:shadow-md hover:border-green-300 transition duration-200 flex flex-col items-center justify-center"
          >
            <BarChart3 className="w-9 h-9 text-green-600 mx-auto mb-2" />
            <p className="font-medium text-gray-800">Market Prices</p>
          </button>
          <button
            onClick={() => setCurrentScreen('buyers')}
            className="bg-white border border-gray-200 p-5 rounded-xl text-center shadow-sm hover:shadow-md hover:border-blue-300 transition duration-200 flex flex-col items-center justify-center"
          >
            <Users className="w-9 h-9 text-blue-600 mx-auto mb-2" />
            <p className="font-medium text-gray-800">Find Buyers</p>
          </button>
          <button
            onClick={() => setCurrentScreen('products')}
            className="bg-white border border-gray-200 p-5 rounded-xl text-center shadow-sm hover:shadow-md hover:border-purple-300 transition duration-200 flex flex-col items-center justify-center"
          >
            <Package className="w-9 h-9 text-purple-600 mx-auto mb-2" />
            <p className="font-medium text-gray-800">My Products</p>
          </button>
          <button
            onClick={() => setCurrentScreen('chat')}
            className="bg-white border border-gray-200 p-5 rounded-xl text-center shadow-sm hover:shadow-md hover:border-yellow-300 transition duration-200 flex flex-col items-center justify-center"
          >
            <MessageCircle className="w-9 h-9 text-yellow-600 mx-auto mb-2" />
            <p className="font-medium text-gray-800">Messages</p>
          </button>
        </div>
      </div>

      {/* Bottom Navigation is rendered by the main component */}
    </div>
  );

  // --- Component for the Market Prices Screen ---
  const MarketPrices = () => (
    <div className="bg-gray-100 min-h-screen">
      {/* Header */}
      <div className="bg-white border-b p-4 shadow-sm">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-semibold text-gray-800">Market Prices</h1>
          <div className="flex space-x-3">
            <Filter className="w-6 h-6 text-gray-600 cursor-pointer hover:text-green-600 transition duration-200" />
            <Search className="w-6 h-6 text-gray-600 cursor-pointer hover:text-green-600 transition duration-200" />
          </div>
        </div>
      </div>

      {/* Location & Date Filter */}
      <div className="bg-gray-50 p-4 border-b border-gray-200">
        <div className="flex justify-between items-center">
          <div className="flex items-center text-gray-700 font-medium">
            <MapPin className="w-4 h-4 text-gray-500 mr-2" />
            <span className="text-sm">Johannesburg Markets</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 ml-1 text-gray-400">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
          </div>
          <span className="text-sm text-gray-500">Today, 24 May</span>
        </div>
      </div>

      // ... (inside MarketPrices component)

      {/* Price List */}
      <div className="p-4 space-y-3">
      {[
        { name: 'Tomatoes', price: 'R 18.50', change: '+15%', color: 'text-green-600', trendIcon: <TrendingUp className="w-4 h-4" /> },
        { name: 'Potatoes', price: 'R 8.20', change: '-5%', color: 'text-red-600', trendIcon: <TrendingUp className="w-4 h-4 rotate-180" /> },
        { name: 'Onions', price: 'R 12.00', change: '+8%', color: 'text-green-600', trendIcon: <TrendingUp className="w-4 h-4" /> },
        { name: 'Carrots', price: 'R 15.75', change: '+2%', color: 'text-green-600', trendIcon: <TrendingUp className="w-4 h-4" /> },
        { name: 'Cabbage', price: 'R 9.50', change: '-10%', color: 'text-red-600', trendIcon: <TrendingUp className="w-4 h-4 rotate-180" /> },
        { name: 'Spinach', price: 'R 11.00', change: '+3%', color: 'text-green-600', trendIcon: <TrendingUp className="w-4 h-4" /> },
        { name: 'Butternut', price: 'R 7.00', change: '-2%', color: 'text-red-600', trendIcon: <TrendingUp className="w-4 h-4 rotate-180" /> },
      ].map((item, i) => (
        <div key={i} className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm flex items-center justify-between hover:shadow-md transition duration-200">
          <div>
            <h3 className="font-semibold text-lg text-gray-800">{item.name}</h3>
            <p className="text-sm text-gray-600">per kg</p>
          </div>
          // ... inside MarketPrices component
<div className="text-right flex items-center">
  <p className="text-xl font-bold text-gray-900 mr-2">{item.price}</p>
  <span className={`text-sm font-medium flex items-center ${item.color}`}>
    {item.trendIcon} {/* Ensure this is directly rendered */}
    {item.change}
  </span>
</div>
        </div>
      ))}
    </div>

// ...
      {/* Bottom Navigation is rendered by the main component */}
    </div>
  );

  // --- Component for the Find Buyers Screen ---
  const BuyersScreen = () => (
    <div className="bg-gray-100 min-h-screen">
      {/* Header */}
      <div className="bg-white border-b p-4 shadow-sm">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-semibold text-gray-800">Find Buyers</h1>
          <Filter className="w-6 h-6 text-gray-600 cursor-pointer hover:text-green-600 transition duration-200" />
        </div>
      </div>

      {/* Search Input */}
      <div className="p-4 bg-gray-50 border-b border-gray-200">
        <div className="relative">
          <Search className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search buyers, markets..."
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl bg-white focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition duration-200"
          />
        </div>
      </div>

      {/* Buyers List */}
      <div className="p-4 space-y-4">
        {[
          { name: 'Joburg Fresh Market', type: 'Wholesale Market', distance: '5.2 km', rating: 4.8, buying: 'Tomatoes, Potatoes, Onions', avatar: '🛒' },
          { name: 'Green Valley Grocers', type: 'Retail Chain', distance: '12.1 km', rating: 4.6, buying: 'Mixed Vegetables, Herbs', avatar: '🏪' },
          { name: 'Farm to Table Co.', type: 'Restaurant Supplier', distance: '8.4 km', rating: 4.9, buying: 'Organic Produce, Specialty Greens', avatar: '🍽️' },
          { name: 'Local Eatery', type: 'Restaurant', distance: '3.5 km', rating: 4.5, buying: 'Seasonal Fruits, Berries', avatar: '🍲' },
          { name: 'Healthy Bites Cafe', type: 'Cafe', distance: '7.8 km', rating: 4.7, buying: 'Lettuce, Cucumbers, Bell Peppers', avatar: '☕' },
        ].map((buyer, i) => (
          <div key={i} className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-md transition duration-200">
            <div className="flex items-center mb-3">
              <div className="w-14 h-14 bg-gray-100 rounded-full flex items-center justify-center text-3xl mr-4 shadow-inner">
                {buyer.avatar}
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-lg text-gray-800">{buyer.name}</h3>
                <p className="text-sm text-gray-600">{buyer.type}</p>
              </div>
              <div className="text-right">
                <div className="flex items-center justify-end text-sm text-gray-700">
                  <Star className="w-4 h-4 text-yellow-400 mr-1" />
                  <span>{buyer.rating}</span>
                </div>
                <p className="text-sm text-gray-500">{buyer.distance}</p>
              </div>
            </div>

            <p className="text-sm text-gray-700 mb-4 border-t border-gray-100 pt-3">
              <span className="font-medium">Currently buying:</span> {buyer.buying}
            </p>

            <div className="flex space-x-3">
              <button
                onClick={() => setCurrentScreen('chat')}
                className="flex-1 bg-green-600 text-white py-2.5 rounded-lg text-base font-semibold shadow-md hover:bg-green-700 transition duration-300"
              >
                Contact
              </button>
              <button className="px-5 py-2.5 border border-gray-300 rounded-lg text-base font-medium text-gray-700 hover:bg-gray-50 transition duration-200">
                View Profile
              </button>
            </div>
          </div>
        ))}
      </div>
      {/* Bottom Navigation is rendered by the main component */}
    </div>
  );

  // --- Component for the My Products Screen ---
  const ProductsScreen = () => (
    <div className="bg-gray-100 min-h-screen">
      {/* Header */}
      <div className="bg-white border-b p-4 shadow-sm">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-semibold text-gray-800">My Products</h1>
          <button className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-semibold shadow-md hover:bg-green-700 transition duration-300">
            + Add Product
          </button>
        </div>
      </div>

      {/* Products List */}
      <div className="p-4 space-y-4">
        {[
          { name: 'Fresh Tomatoes', quantity: '500 kg', price: 'R 18.50/kg', status: 'Available', image: '🍅' },
          { name: 'Organic Potatoes', quantity: '800 kg', price: 'R 8.20/kg', status: 'Available', image: '🥔' },
          { name: 'Red Onions', quantity: '300 kg', price: 'R 12.00/kg', status: 'Sold Out', image: '🧅' },
          { name: 'Sweet Peppers', quantity: '250 kg', price: 'R 22.00/kg', status: 'Available', image: '🌶️' },
          { name: 'Cucumbers', quantity: '400 kg', price: 'R 10.00/kg', status: 'Available', image: '🥒' },
        ].map((product, i) => (
          <div key={i} className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-md transition duration-200">
            <div className="flex items-center mb-3">
              <div className="w-14 h-14 bg-gray-100 rounded-lg flex items-center justify-center text-3xl mr-4 shadow-inner">
                {product.image}
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-lg text-gray-800">{product.name}</h3>
                <p className="text-sm text-gray-600">{product.quantity} available</p>
              </div>
              <div className="text-right">
                <p className="font-bold text-lg text-gray-900">{product.price}</p>
                <span className={`text-xs px-3 py-1 rounded-full font-medium ${
                  product.status === 'Available' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                }`}>
                  {product.status}
                </span>
              </div>
            </div>

            <div className="flex space-x-3 border-t border-gray-100 pt-3">
              <button className="flex-1 bg-gray-100 text-gray-700 py-2.5 rounded-lg text-base font-medium hover:bg-gray-200 transition duration-200">
                Edit
              </button>
              <button className="flex-1 bg-green-600 text-white py-2.5 rounded-lg text-base font-semibold shadow-md hover:bg-green-700 transition duration-300">
                Promote
              </button>
            </div>
          </div>
        ))}
      </div>
      {/* Bottom Navigation is rendered by the main component */}
    </div>
  );

  // --- Component for the Chat Screen ---
  const ChatScreen = () => (
    <div className="flex flex-col h-screen bg-gray-100">
      {/* Header */}
      <div className="bg-white border-b p-4 shadow-sm flex-shrink-0">
        <div className="flex items-center">
          <button
            onClick={() => setCurrentScreen('buyers')}
            className="mr-4 text-gray-600 hover:text-green-600 transition duration-200 text-xl"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
          </button>
          <div className="flex-1">
            <h2 className="font-bold text-lg text-gray-800">Joburg Fresh Market</h2>
            <p className="text-sm text-gray-600">Online now</p>
          </div>
          <Phone className="w-6 h-6 text-gray-600 cursor-pointer hover:text-green-600 transition duration-200" />
        </div>
      </div>

      {/* Messages Area */}
      <div className="flex-1 p-4 space-y-4 overflow-y-auto custom-scrollbar">
        {/* Incoming Message */}
        <div className="flex justify-start">
          <div className="bg-white p-3 rounded-t-xl rounded-br-xl max-w-xs shadow-sm">
            <p className="text-sm text-gray-800">Hi! We're interested in your tomatoes. What's your best price for 200kg?</p>
            <p className="text-xs text-gray-500 mt-1 text-right">10:30 AM</p>
          </div>
        </div>

        {/* Outgoing Message */}
        <div className="flex justify-end">
          <div className="bg-green-600 text-white p-3 rounded-t-xl rounded-bl-xl max-w-xs shadow-sm">
            <p className="text-sm">Hello! For 200kg of fresh tomatoes, I can offer R 17.50/kg. Quality guaranteed!</p>
            <p className="text-xs text-green-200 mt-1 text-right">10:35 AM</p>
          </div>
        </div>

        {/* Incoming Message */}
        <div className="flex justify-start">
          <div className="bg-white p-3 rounded-t-xl rounded-br-xl max-w-xs shadow-sm">
            <p className="text-sm text-gray-800">That sounds good. Can you deliver to our warehouse in Sandton?</p>
            <p className="text-xs text-gray-500 mt-1 text-right">10:40 AM</p>
          </div>
        </div>

        {/* Add more messages for demonstration */}
        <div className="flex justify-end">
          <div className="bg-green-600 text-white p-3 rounded-t-xl rounded-bl-xl max-w-xs shadow-sm">
            <p className="text-sm">Yes, we offer delivery to Sandton. What's your preferred delivery date?</p>
            <p className="text-xs text-green-200 mt-1 text-right">10:45 AM</p>
          </div>
        </div>
        <div className="flex justify-start">
          <div className="bg-white p-3 rounded-t-xl rounded-br-xl max-w-xs shadow-sm">
            <p className="text-sm text-gray-800">Next Tuesday works for us. Please confirm availability.</p>
            <p className="text-xs text-gray-500 mt-1 text-right">10:50 AM</p>
          </div>
        </div>
      </div>

      {/* Message Input */}
      <div className="bg-white border-t p-4 shadow-inner flex-shrink-0">
        <div className="flex items-center space-x-3">
          <button className="text-gray-400 hover:text-green-600 transition duration-200 p-2 rounded-full hover:bg-gray-100">
            <Camera className="w-6 h-6" />
          </button>
          <input
            type="text"
            placeholder="Type a message..."
            className="flex-1 border border-gray-300 rounded-full px-4 py-2.5 focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition duration-200"
          />
          <button className="bg-green-600 text-white rounded-full p-3 shadow-md hover:bg-green-700 transition duration-300">
            <MessageCircle className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );

  // --- Component for the Profile Screen ---
  const ProfileScreen = () => (
    <div className="bg-gray-100 min-h-screen">
      {/* Header */}
      <div className="bg-green-600 text-white p-4 pb-6 rounded-b-xl shadow-md">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-bold">My Profile</h1>
          <Settings className="w-6 h-6 cursor-pointer hover:text-green-200 transition duration-200" />
        </div>
      </div>

      {/* Profile Info */}
      <div className="p-4 -mt-8">
        <div className="bg-white rounded-xl shadow-md p-6 text-center">
          <div className="w-24 h-24 bg-green-200 rounded-full mx-auto mb-4 flex items-center justify-center text-5xl font-bold text-green-800 border-4 border-white shadow-lg">
            S
          </div>
          <h2 className="text-2xl font-bold text-gray-800">Sipho Dlamini</h2>
          <p className="text-gray-600">Farmer</p>
          <p className="text-sm text-gray-500 mt-2">Johannesburg, Gauteng</p>
          <p className="text-sm text-gray-500">+27 72 123 4567</p>
          <p className="text-sm text-gray-500">sipho.d@example.com</p>

          <button className="mt-6 bg-green-600 text-white px-6 py-2 rounded-lg font-semibold shadow-md hover:bg-green-700 transition duration-300">
            Edit Profile
          </button>
        </div>
      </div>

      {/* Account Settings */}
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-3 text-gray-800">Account Settings</h2>
        <div className="bg-white rounded-xl shadow-md">
          <button className="w-full text-left p-4 border-b border-gray-100 flex items-center justify-between hover:bg-gray-50 transition duration-200">
            <span className="font-medium text-gray-700">Change Password</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-gray-400">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
          <button className="w-full text-left p-4 border-b border-gray-100 flex items-center justify-between hover:bg-gray-50 transition duration-200">
            <span className="font-medium text-gray-700">Notification Preferences</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-gray-400">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
          <button className="w-full text-left p-4 border-b border-gray-100 flex items-center justify-between hover:bg-gray-50 transition duration-200">
            <span className="font-medium text-gray-700">Privacy Settings</span>
            <Shield className="w-5 h-5 text-gray-400" />
          </button>
          <button className="w-full text-left p-4 flex items-center justify-between hover:bg-gray-50 transition duration-200 rounded-b-xl">
            <span className="font-medium text-gray-700">About Us</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-gray-400">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>
      </div>

      {/* Logout */}
      <div className="p-4 pt-0">
        <button className="w-full bg-red-500 text-white py-3 rounded-xl font-bold text-lg shadow-md hover:bg-red-600 transition duration-300">
          Log Out
        </button>
      </div>
    </div>
  );

  // --- Main Render Logic ---
  let screenComponent;
  switch (currentScreen) {
    case 'splash':
      screenComponent = <SplashScreen />;
      break;
    case 'login':
      screenComponent = <LoginScreen />;
      break;
    case 'signup':
      screenComponent = <SignupScreen />;
      break;
    case 'dashboard':
      screenComponent = <Dashboard />;
      break;
    case 'markets':
      screenComponent = <MarketPrices />;
      break;
    case 'buyers':
      screenComponent = <BuyersScreen />;
      break;
    case 'products':
      screenComponent = <ProductsScreen />;
      break;
    case 'chat':
      screenComponent = <ChatScreen />;
      break;
    case 'profile':
      screenComponent = <ProfileScreen />;
      break;
    default:
      screenComponent = <SplashScreen />;
  }

  return ( // This return is now correctly inside the function body
    <div className="font-sans bg-gray-50 flex flex-col min-h-screen">
      <div className="flex-grow">
        {screenComponent}
      </div>

      {currentScreen !== 'splash' && currentScreen !== 'login' && currentScreen !== 'signup' && (
        <div className="bg-white border-t border-gray-200 p-3 shadow-lg flex justify-around items-center sticky bottom-0 z-10">
          {Object.entries(screens).map(([key, name]) => {
  // Only show bottom nav for certain screens, excluding splash, login, signup
  if (['dashboard', 'markets', 'buyers', 'products', 'chat', 'profile'].includes(key)) {
    let iconComponent;
    switch (key) {
      case 'dashboard':
        iconComponent = <Home className="w-5 h-5 mb-1" />;
        break;
      case 'markets':
        iconComponent = <BarChart3 className="w-5 h-5 mb-1" />;
        break;
      case 'buyers':
        iconComponent = <Users className="w-5 h-5 mb-1" />;
        break;
      case 'products':
        iconComponent = <Package className="w-5 h-5 mb-1" />;
        break;
      case 'chat':
        iconComponent = <MessageCircle className="w-5 h-5 mb-1" />;
        break;
      case 'profile':
        iconComponent = <User className="w-5 h-5 mb-1" />;
        break;
      default:
        iconComponent = null; // Or some default icon if needed
    }

    return (
      <button
        key={key}
        onClick={() => setCurrentScreen(key)}
        className={`flex flex-col items-center text-xs font-medium px-2 py-1 rounded-lg transition duration-200 ${
          currentScreen === key ? 'text-green-600' : 'text-gray-500 hover:text-green-600'
        }`}
      >
        {iconComponent} {/* Render the chosen icon component */}
        <span className="mt-1 hidden sm:block">{name.split(' ')[0]}</span>
      </button>
    );
  }
  return null; // Important: if the key is not included, return null
})}
        </div>
      )}
    </div>
  );
}; // This closing brace correctly closes the LocalHarvestWireframes function.

export default LocalHarvestWireframes;