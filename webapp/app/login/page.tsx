import { LoginForm } from "../components/auth/LoginForm"

export default function LoginPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-background px-4 py-10">
      <div className="w-full max-w-5xl">
        <div className="mb-10 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
            Welcome back
          </p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-gray-900 md:text-4xl">
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

