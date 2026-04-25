import { LoginForm } from "../components/auth/LoginForm"

export default function LoginPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-[#f7f5ff] px-4 py-10">
      <div className="w-full max-w-5xl">
        <div className="mb-10 flex flex-col items-center text-center">
          <p className="text-xs font-mono font-bold uppercase tracking-[0.22em] text-gray-500">
            Welcome back
          </p>
          <h1 className="mt-3 text-3xl font-serif font-semibold tracking-tight text-black md:text-4xl">
            Sign in to your workspace
          </h1>
        </div>

        <div className="flex justify-center">
          <LoginForm />
        </div>
      </div>
    </main>
  )
}
