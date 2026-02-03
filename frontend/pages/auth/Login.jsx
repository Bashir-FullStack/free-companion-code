import { useState } from 'react' 
import { useForm } from 'react-hook-form' 
import { useNavigate } from 'react-router-dom' 
import { useDispatch } from 'react-redux' 
import { loginSuccess } from '../../redux/slices/authSlice' 
import { setUser } from '../../redux/slices/userSlice' 
import { toast } from 'react-toastify' 
 
export default function Login() { 
  const [loading, setLoading] = useState(false) 
  const { register, handleSubmit } = useForm() 
  const dispatch = useDispatch() 
  const navigate = useNavigate() 
 
  const onSubmit = async (data) =
    setLoading(true) 
    try { 
      await new Promise(resolve =, 1000)) 
      dispatch(loginSuccess({ token: 'mock_token' })) 
      dispatch(setUser({ email: data.email, coins: 100, tier: 'iron' })) 
      toast.success('Logged in!') 
      navigate('/dashboard') 
    } catch { 
      toast.error('Login failed') 
    } finally { 
      setLoading(false) 
  } 
 
  return ( 
    <div className="min-h-screen flex items-center justify-center bg-gray-50"> 
      <div className="max-w-md w-full space-y-8 p-8"> 
        <h2 className="text-3xl font-bold text-center">Login</h2> 
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4"> 
          <div> 
            <label className="block text-sm font-medium">Email</label> 
            <input {...register('email', { required: true })} className="w-full p-2 border rounded" /> 
          </div> 
          <div> 
            <label className="block text-sm font-medium">Code</label> 
            <input {...register('code', { required: true })} className="w-full p-2 border rounded" /> 
          </div> 
          <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded"> 
            {loading ? 'Logging in...' : 'Login'} 
          </button> 
        </form> 
      </div> 
    </div> 
  ) 
} 
