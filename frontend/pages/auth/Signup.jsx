import { useState } from 'react' 
import { useForm } from 'react-hook-form' 
import { Link, useNavigate } from 'react-router-dom' 
import { useDispatch } from 'react-redux' 
import { setVerificationSent, setError } from '../../redux/slices/authSlice' 
import { toast } from 'react-toastify' 
 
export default function Signup() { 
  const [loading, setLoading] = useState(false) 
  const { register, handleSubmit, formState: { errors } } = useForm() 
  const dispatch = useDispatch() 
  const navigate = useNavigate() 
 
  const onSubmit = async (data) =
    setLoading(true) 
    try { 
      await new Promise(resolve =, 1000)) 
      localStorage.setItem('tempEmail', data.email) 
      dispatch(setVerificationSent(true)) 
      toast.success('Verification code sent to your email!') 
      navigate('/verify-email') 
    } catch (err) { 
      dispatch(setError('Registration failed')) 
      toast.error('Registration failed') 
    } finally { 
      setLoading(false) 
    } 
  } 
 
  return ( 
    <div className="min-h-screen flex items-center justify-center bg-gray-50"> 
      <div className="max-w-md w-full space-y-8 p-8"> 
        <h2 className="text-3xl font-bold text-center">Create Account</h2> 
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4"> 
          <div> 
            <label className="block text-sm font-medium">Email</label> 
            <input {...register('email', { required: true })} className="w-full p-2 border rounded" /> 
          </div> 
          <div> 
            <label className="block text-sm font-medium">Invite Code (Optional)</label> 
            <input {...register('inviteCode')} className="w-full p-2 border rounded" /> 
          </div> 
          <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded"> 
            {loading ? 'Creating...' : 'Sign Up'} 
          </button> 
        </form> 
      </div> 
    </div> 
  ) 
} 
    } 
