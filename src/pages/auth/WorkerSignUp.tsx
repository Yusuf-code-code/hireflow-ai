import { useState } from "react";
import Button from "../../components/ui/Button";
import { useNavigate } from "react-router-dom";

export default function WorkerSignup() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  return (
    <main className="min-h-screen bg-black px-6 py-12 text-white">
      <div className="mx-auto flex min-h-[80vh] w-full max-w-md items-center justify-center">
        <div className="w-full">
          <div className="mb-10 text-center">
            <p className="mb-3 text-sm text-zinc-500">
              HireFlow AI
            </p>

            <h1 className="text-4xl font-bold tracking-tight">
              Create your account
            </h1>

            <p className="mt-3 text-zinc-400">
              Start building your professional profile.
            </p>
          </div>

          <form className="space-y-5"
          onSubmit={(event)=>{
            event.preventDefault();
            navigate("/worker/onboarding")
          }}
          >
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-medium text-zinc-200"
              >
                Full name
              </label>

              <input
                id="name"
                name="name"
                type="text"
                placeholder="Your full name"
                className="h-12 w-full rounded-lg border border-zinc-800 bg-zinc-950 px-4 text-white outline-none transition focus:border-zinc-500"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-zinc-200"
              >
                Email
              </label>

              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                className="h-12 w-full rounded-lg border border-zinc-800 bg-zinc-950 px-4 text-white outline-none transition focus:border-zinc-500"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="mb-2 block text-sm font-medium text-zinc-200"
              >
                Password
              </label>

              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Create a password"
                  className="h-12 w-full rounded-lg border border-zinc-800 bg-zinc-950 px-4 pr-20 text-white outline-none transition focus:border-zinc-500"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-zinc-400 hover:text-white"
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>

            <div>
              <label
                htmlFor="confirmPassword"
                className="mb-2 block text-sm font-medium text-zinc-200"
              >
                Confirm password
              </label>

              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                placeholder="Confirm your password"
                className="h-12 w-full rounded-lg border border-zinc-800 bg-zinc-950 px-4 text-white outline-none transition focus:border-zinc-500"
              />
            </div>

            <Button type="submit" className="mt-3 w-full" size="md">
              Create account
            </Button>
          </form>

          <p className="mt-8 text-center text-sm text-zinc-500">
            Already have an account?{" "}
            <a
              href="/login"
              className="text-white transition hover:text-zinc-300"
            >
              Log in
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}