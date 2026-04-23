'use client'

import React, { useState } from "react"
import { Mail, Lock, Github, Chrome, User } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

type FormState = {
  name: string
  email: string
  password: string
}

type FormErrors = {
  name?: string
  email?: string
  password?: string
  root?: string
}

const initialState: FormState = {
  name: "",
  email: "",
  password: "",
}

function validate(values: FormState): FormErrors {
  const errors: FormErrors = {}

  if (!values.name) {
    errors.name = "Name is required."
  }

  if (!values.email) {
    errors.email = "Email is required."
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "Enter a valid email address."
  }

  if (!values.password) {
    errors.password = "Password is required."
  } else if (values.password.length < 6) {
    errors.password = "Password must be at least 6 characters."
  }

  return errors
}

export function RegisterForm() {
  const [values, setValues] = useState<FormState>(initialState)
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const validationErrors = validate(values)
    setErrors(validationErrors)

    if (Object.keys(validationErrors).length > 0) {
      return
    }

    setIsSubmitting(true)
    setErrors({})

    try {
      // Simulate async signup request
      await new Promise((resolve) => setTimeout(resolve, 1200))
    } catch (error) {
      setErrors({
        root: "Something went wrong while creating your account. Please try again.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  function handleChange<
    K extends keyof FormState,
  >(field: K, value: FormState[K]) {
    setValues((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <Card className="w-full max-w-md px-6 py-7 md:px-8 md:py-9 shadow-lg border-gray-200 rounded-3xl bg-white">
      <CardHeader className="space-y-3">
        <CardTitle className="text-center text-3xl md:text-4xl text-gray-900 font-serif font-semibold">
          Sign up for Save It
        </CardTitle>
        <CardDescription className="text-center text-base font-mono text-gray-500">
          Start organizing your valuable resources today.
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-6">
        {errors.root && (
          <Alert variant="destructive" className="mb-1">
            <AlertTitle>Unable to sign up</AlertTitle>
            <AlertDescription>{errors.root}</AlertDescription>
          </Alert>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-2">
            <Label htmlFor="name" className="font-mono text-gray-900 font-medium">Full Name</Label>
            <div className="relative">
              <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-gray-400">
                <User className="h-4 w-4" aria-hidden="true" />
              </span>
              <Input
                id="name"
                type="text"
                autoComplete="name"
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? "name-error" : undefined}
                className="pl-9 font-mono border-gray-200 focus-visible:ring-[#0a79ff] text-gray-900"
                placeholder="Jane Doe"
                value={values.name}
                onChange={(event) =>
                  handleChange("name", event.target.value)
                }
              />
            </div>
            {errors.name && (
              <p
                id="name-error"
                className="text-xs font-mono font-medium text-destructive"
              >
                {errors.name}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="font-mono text-gray-900 font-medium">Email</Label>
            <div className="relative">
              <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-gray-400">
                <Mail className="h-4 w-4" aria-hidden="true" />
              </span>
              <Input
                id="email"
                type="email"
                autoComplete="email"
                inputMode="email"
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? "email-error" : undefined}
                className="pl-9 font-mono border-gray-200 focus-visible:ring-[#0a79ff] text-gray-900"
                placeholder="you@example.com"
                value={values.email}
                onChange={(event) =>
                  handleChange("email", event.target.value)
                }
              />
            </div>
            {errors.email && (
              <p
                id="email-error"
                className="text-xs font-mono font-medium text-destructive"
              >
                {errors.email}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="password" className="font-mono text-gray-900 font-medium">Password</Label>
            <div className="relative">
              <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-gray-400">
                <Lock className="h-4 w-4" aria-hidden="true" />
              </span>
              <Input
                id="password"
                type="password"
                autoComplete="new-password"
                aria-invalid={!!errors.password}
                aria-describedby={errors.password ? "password-error" : undefined}
                className="pl-9 font-mono border-gray-200 focus-visible:ring-[#0a79ff] text-gray-900"
                placeholder="••••••••"
                value={values.password}
                onChange={(event) =>
                  handleChange("password", event.target.value)
                }
              />
            </div>
            {errors.password && (
              <p
                id="password-error"
                className="text-xs font-mono font-medium text-destructive"
              >
                {errors.password}
              </p>
            )}
          </div>

          <Button
            type="submit"
            className="mt-3 font-mono w-full bg-[#0a79ff] hover:bg-[#0861cc] text-white rounded-xl py-6 text-base font-semibold shadow-md hover:shadow-lg transition-all"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Creating account..." : "Sign up"}
          </Button>
        </form>

        <div className="relative py-2">
          <div className="absolute inset-0 flex items-center">
            <Separator className="bg-gray-200" />
          </div>
          <div className="relative flex justify-center">
            <span className="bg-white px-3 text-xs font-mono font-bold uppercase tracking-widest text-gray-500">
              or sign up with
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
          <Button
            type="button"
            variant="outline"
            className="w-full font-mono justify-center gap-2 border-gray-200 hover:bg-[#f0efff] hover:text-gray-900 text-gray-900"
          >
            <Chrome className="h-4 w-4" aria-hidden="true" />
            <span className="text-sm font-semibold">Google</span>
          </Button>
          <Button
            type="button"
            variant="outline"
            className="w-full font-mono justify-center gap-2 border-gray-200 hover:bg-[#f0efff] hover:text-gray-900 text-gray-900"
          >
            <Github className="h-4 w-4" aria-hidden="true" />
            <span className="text-sm font-semibold">GitHub</span>
          </Button>
        </div>
      </CardContent>

      <CardFooter className="flex-col gap-2 font-mono text-center text-sm text-gray-500 mt-2">
        <p>
          Already have an account?{" "}
          <a
            href="/login"
            className="font-bold text-[#0a79ff] hover:text-[#0861cc] underline-offset-4 hover:underline transition-colors"
          >
            Log in
          </a>
        </p>
      </CardFooter>
    </Card>
  )
}
