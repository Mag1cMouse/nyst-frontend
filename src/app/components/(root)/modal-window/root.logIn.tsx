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
      className="md:absolute flex min-h-screen md:h-max size-full flex-col items-center justify-center bg-black/30 fixed z-300"
      onClick={() => setIsShowModalWindow(false)}
    >
      <form
        action="submit"
        onSubmit={submitForm}
        onClick={(e) => e.stopPropagation()}
        className="relative size-full md:size-max z-20 h-full justify-center flex flex-col items-center gap-3 rounded-lg bg-white py-2.5 px-10 md:px-30 md:py-6 text-sm font-light shadow-2xl shadow-black"
      >
        <img src="/logo.png" className='md:hidden block w-22' alt="" />
        <h1 className="text-4.5xl text-center uppercase">login</h1>
        <img
          src="/cross.svg"
          alt="cross"
          className="absolute top-0 right-0 m-6 size-4 md:size-2.5"
          onClick={() => setIsShowModalWindow(false)}
        />
        <div className="flex flex-col gap-2 w-full">
          <div className="flex flex-col gap-0.5 w-full">
            <span>Email</span>
            <input
              required
              className="bg-gray-150 rounded-sm p-2 outline-none w-full"
              type="email"
              id="email"
              placeholder="Enter your Email"
              onChange={(e) => updateField({ ...form, email: e.target.value })}
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
              onChange={(e) => updateField({ ...form, password: e.target.value })}
            />
          </div>

          <div className="flex justify-between">
            <div className="flex items-center gap-1">
              <div
                onClick={() => updateField({ ...form, remember: !form.remember })}
                  className={clsx('rounded-x border-gray-850 size-4 border', form.remember && 'bg-blue-850')}
              ></div>
              <span>Remember me</span>
            </div>
            <span>Reset Password</span>
          </div>
        </div>
        <button
          type="submit"
          className="bg-blue-850 top-3 rounded-full px-6 py-1 text-base font-medium text-white uppercase w-full"
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
