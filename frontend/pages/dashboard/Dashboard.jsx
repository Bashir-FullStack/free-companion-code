import { useSelector } from 'react-redux' 
 
export default function Dashboard() { 
  const user = useSelector((state) =
 
  return ( 
    <div className="p-6"> 
      <h1 className="text-3xl font-bold mb-4">Dashboard</h1> 
      <div className="bg-white p-6 rounded-lg shadow"> 
        <h2 className="text-xl font-semibold mb-2">Welcome, {user?.email}</h2> 
      </div> 
    </div> 
  ) 
} 
