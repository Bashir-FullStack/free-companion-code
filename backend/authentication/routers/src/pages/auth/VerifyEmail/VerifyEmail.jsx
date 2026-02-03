import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { loginSuccess } from '../../redux/slices/authSlice'
import { setUser } from '../../redux/slices/userSlice'
import { addCoins } from '../../redux/slices/coinSlice'
import { toast } from 'react-toastify'

export default function VerifyEmail() {
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState('')
  const { register, handleSubmit } = useForm()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    const storedEmail = localStorage.getItem('tempEmail')
    if (storedEmail) setEmail(storedEmail)
    else navigate('/signup')
  }, [navigate])

  const onSubmit = async (data) => {
    setLoading(true)
    try {
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      const inviteCode = localStorage.getItem('tempInviteCode')
      const user = {
        id: 'user_' + Date.now(),
        email: email,
        coins: inviteCode ? 150 : 100,
        tier: 'iron',
        inviteCode: 'INV' + Math.random().toString(36).substr(2, 8).toUpperCase(),
      }
      
      dispatch(loginSuccess({ token: 'jwt_token' }))
      dispatch(setUser(user))
      dispatch(addCoins({ amount: inviteCode ? 150 : 100, type: 'SIGNUP', description: 'Signup bonus' }))
      
      localStorage.removeItem('tempEmail')
      localStorage.removeItem('tempInviteCode')
      
      toast.success('Email verified! Welcome!')
      navigate('/survey')
    } catch {
      toast.error('Verification failed')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full space-y-8 p-8">
        <h2 className="text-3xl font-bold text-center">Verify Email</h2>
        <p className="text-center">Code sent to: {email}</p>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Verification Code</label>
            <input 
              {...register('code', { required: true, minLength: 6 })}
              className="w-full p-2 border rounded text-center text-2xl tracking-widest"
              placeholder="123456"
              maxLength={6}
            />
          </div>
          <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded">
            {loading ? 'Verifying...' : 'Verify Email'}
          </button>
        </form>
      </div>
    </div>
  )
}