import clsx from 'clsx'
import { useState } from 'react'
import { Link } from 'react-router'

type TFormObject = {
  email: string
  password: string
  remember: boolean
}

export function RootLogin() {
  const [form, setForm] = useState<TFormObject>({
    email: '',
    password: '',
    remember: false,
  })

  const updateField = (field: Partial<TFormObject>) => {
    setForm((prev) => ({ ...prev, ...field }))
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <form action="" className="flex flex-col gap-3 px-30 py-6 text-sm font-light shadow-2xl shadow-black">
        <h1 className="text-4_5xl text-center uppercase">login</h1>
        <div className="flex flex-col gap-2">
          <div className="flex flex-col gap-0.5">
            <span>Email</span>
            <input
              required
              className="bg-gray-150 rounded-sm p-2 outline-none"
              type="email"
              id="email"
              placeholder="Enter your Email"
              onChange={e => updateField( {email: e.target.value} )}
            />
          </div>

          <div className="flex flex-col gap-0.5">
            <span>Password</span>
            <input
              required
              className="bg-gray-150 rounded-sm p-2 outline-none"
              type="password"
              id="password"
              placeholder="Enter your Password"
              onChange={e => updateField( {password: e.target.value} )}
            />
          </div>

          <div className="flex justify-between">
            <div className="flex items-center gap-1">
              <div
                onClick={() => updateField({ remember: !form.remember })}
                className={clsx('rounded-x border-gray-850 size-4 border', form.remember && 'bg-red-500')}
              ></div>
              <span>Remember me</span>
            </div>
            <span>Reset Password</span>
          </div>
        </div>
        <button className="bg-blue-850 top-3 rounded-full px-6 py-1 text-base font-medium text-white uppercase">
          login
        </button>

        <div className="flex">
          <span>
            Don`t have an account?{' '}
            <Link to="/signup" className="font-medium uppercase">
              Sign up
            </Link>
          </span>
        </div>
      </form>
    </div>
  )
}
