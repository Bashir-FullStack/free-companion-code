import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { logout } from '../../redux/slices/authSlice'

export default function Layout({ children }) {
  const { isAuthenticated } = useSelector((state) => state.auth)
  const dispatch = useDispatch()

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow">
        <div className="container mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            <Link to="/" className="text-xl font-bold text-blue-600">Free-Companion-Code</Link>
            <div className="space-x-4">
              {isAuthenticated ? (
                <>
                  <Link to="/dashboard" className="text-gray-700 hover:text-blue-600">Dashboard</Link>
                  <Link to="/lessons" className="text-gray-700 hover:text-blue-600">Lessons</Link>
                  <Link to="/profile" className="text-gray-700 hover:text-blue-600">Profile</Link>
                  <button 
                    onClick={() => dispatch(logout())}
                    className="text-gray-700 hover:text-red-600"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link to="/login" className="text-gray-700 hover:text-blue-600">Login</Link>
                  <Link to="/signup" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                    Sign Up
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>
      <main className="container mx-auto px-4 py-8">{children}</main>
    </div>
  )
}