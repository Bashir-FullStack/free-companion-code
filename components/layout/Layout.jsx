export default function Layout({ children }) { 
  const { isAuthenticated } = useSelector((state) =
 
  return ( 
    <div className="min-h-screen bg-gray-50"> 
      <nav className="bg-white shadow"> 
        <div className="container mx-auto px-4 py-3"> 
          <div className="flex justify-between"> 
            <Link to="/" className="text-xl font-bold">FCC</Link> 
            {isAuthenticated ? ( 
              <div className="space-x-4"> 
                <Link to="/dashboard">Dashboard</Link> 
                <Link to="/profile">Profile</Link> 
                <button onClick={() =
              </div> 
            ) : ( 
              <div className="space-x-4"> 
                <Link to="/login">Login</Link> 
                <Link to="/signup">Sign Up</Link> 
              </div> 
            )} 
          </div> 
        </div> 
      </nav> 
      <main className="container mx-auto px-4 py-8">{children}</main> 
    </div> 
  ) 
} 
