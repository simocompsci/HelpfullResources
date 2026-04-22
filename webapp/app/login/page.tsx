import Image from "next/image"
import { LoginForm } from "../components/auth/LoginForm"

export default function LoginPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-[#f7f5ff] font-body px-4 py-10">
      <div className="w-full max-w-5xl">
        <div className="mb-10 flex flex-col items-center text-center">
          <Image src="/logo.png" alt="Logo" width={64} height={64} className="mb-6 object-contain" priority />
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#515981]">
            Welcome back
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-[#242c51] md:text-4xl">
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
