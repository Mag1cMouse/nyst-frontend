import clsx from 'clsx'
import { useState } from 'react'
import { Link } from 'react-router'

type TFormObject = {
  email: string
  password: string
  remember: boolean
}

type TProps = {
  setIsShowModalWindow: (value: boolean) => void
}

export function RootLogin(props: TProps) {
  const { setIsShowModalWindow } = props
  const [showPassword, setShowPassword] = useState(false)
  const [form, setForm] = useState<TFormObject>({
    email: '',
    password: '',
    remember: false,
  })

  const updateField = (field: TFormObject) => {
    setForm(field)
  }
  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(form)
  }

  return (
    <div
      className="fixed z-300 flex size-full min-h-screen flex-col items-center justify-center bg-black/40 md:fixed md:h-max"
      onClick={() => setIsShowModalWindow(false)}
    >
      <form
        action="submit"
        onSubmit={submitForm}
        onClick={(e) => e.stopPropagation()}
        className="font-oswald relative z-20 flex size-full h-full flex-col items-center justify-center gap-3 rounded-lg bg-white px-10 py-2.5 text-sm font-light shadow-2xl shadow-black md:size-max md:min-w-125 md:px-27 md:py-6"
      >
        <img src="/logo.png" className="block w-22 md:hidden" alt="" />
        <h1 className="text-4.5xl text-center uppercase">login</h1>
        <img
          src="/cross.svg"
          alt="cross"
          className="absolute top-0 right-0 m-6 size-4 md:size-2.5"
          onClick={() => setIsShowModalWindow(false)}
        />
        <div className="flex w-full flex-col gap-2">
          <div className="flex w-full flex-col gap-0.5">
            <span>Email</span>
            <input
              required
              className="bg-gray-150 w-full rounded-sm p-2 outline-none"
              type="email"
              id="email"
              placeholder="Enter your Email"
              onChange={(e) => updateField({ ...form, email: e.target.value })}
            />
          </div>

          <div className="relative flex flex-col gap-0.5">
            <span>Password</span>
            <input
              required
              className="bg-gray-150 rounded-sm p-2 outline-none"
              type={showPassword ? 'text' : 'password'}
              id="password"
              placeholder="Enter your Password"
              onChange={(e) => updateField({ ...form, password: e.target.value })}
            />
            <img
              onClick={() => setShowPassword(!showPassword)}
              src={showPassword ? '/eye-on.svg' : '/eye-off.svg'}
              alt="eye"
              className="absolute top-8 right-2 size-4 cursor-pointer opacity-70"
            />
          </div>

          <div className="flex justify-between">
            <div className="flex items-center gap-1">
              <div
                onClick={() => updateField({ ...form, remember: !form.remember })}
                className={clsx(
                  'rounded-x border-gray-850 size-4 border',
                  form.remember && 'border-transparent',
                )}
              >
                {form.remember && <img src="/check.svg" alt="check" className="size-4" />}
              </div>
              <span>Remember me</span>
            </div>
            <span>Reset Password</span>
          </div>
        </div>
        <button
          type="submit"
          className="bg-blue-850 top-3 w-full rounded-full px-6 py-1 text-base font-medium text-white uppercase"
        >
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
