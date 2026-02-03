
import { Link } from 'react-router-dom' 
 
export default function Home() { 
  return ( 
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100"> 
      <div className="container mx-auto px-4 py-16 text-center"> 
        <h1 className="text-5xl font-bold text-gray-900 mb-6">Free-Companion-Code</h1> 
        <p className="text-xl text-gray-600 mb-8">Learn to code, earn rewards</p> 
        <div className="space-x-4"> 
          <Link to="/signup" className="bg-blue-600 text-white px-6 py-3 rounded-lg">Sign Up</Link> 
          <Link to="/login" className="bg-gray-200 text-gray-800 px-6 py-3 rounded-lg">Login</Link> 
        </div> 
      </div> 
    </div> 
  ) 
} 
