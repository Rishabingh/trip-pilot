// components/SubmitButton.tsx
'use client'
import { useFormStatus } from 'react-dom'

const textMap = {
  login: { idle: 'Login', loading: 'Logging in...' },
  register: { idle: 'Create Account', loading: 'Creating account...' },
}

const SubmitButton = ({ type }: { type: 'login' | 'register' }) => {
  const { pending } = useFormStatus()

  return (
    <button
      type="submit"
      disabled={pending}
      className="bg-linear-to-r from-blue-600 to-purple-600 text-white py-2 rounded-md cursor-pointer disabled:opacity-60"
    >
      {pending ? textMap[type].loading : textMap[type].idle}
    </button>
  )
}

export default SubmitButton