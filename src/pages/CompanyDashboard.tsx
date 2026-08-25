import { useEffect, useState } from "react";
import {
  getEnvironmentLabel,
  getCommunicationLabel,
  getStructureLabel,
} from "../lib/companyProfile";
export default function CompanyDashboard()

 {
  const [companyProfile, setCompanyProfile] = useState<
  Record<string, string | string[]>
>({});

useEffect(() => {
  const savedProfile = localStorage.getItem(
    "hireflow_company_profile"
  );

  if (savedProfile) {
    setCompanyProfile(JSON.parse(savedProfile));
  }
}, []);
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Navbar */}
      <nav className="border-b border-zinc-800">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <div className="text-lg font-semibold">
            HireFlow AI
          </div>

          <div className="flex items-center gap-6">
            <button className="text-sm text-zinc-400 transition hover:text-white">
              Company Profile
            </button>

            <button className="text-sm text-zinc-400 transition hover:text-white">
              Settings
            </button>

            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-zinc-800 text-sm font-medium">
              C
            </div>
          </div>
        </div>
      </nav>

      {/* Dashboard */}
      <div className="mx-auto max-w-7xl px-6 py-12">

        {/* Welcome */}
        <div className="mb-10">
          <p className="mb-2 text-sm text-zinc-500">
            Company Dashboard
          </p>

          <h1 className="text-4xl font-bold tracking-tight">
            Welcome back, Acme.
          </h1>

          <p className="mt-3 text-zinc-400">
            Find people who fit the way your company works.
          </p>
        </div>

        {/* Top Cards */}
        <div className="grid gap-6 md:grid-cols-2">

          {/* Company Profile */}
          <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-zinc-500">
                  Company profile
                </p>

                <h2 className="mt-2 text-3xl font-semibold">
                  80%
                </h2>
              </div>

              <span className="text-sm text-zinc-400">
                Looking good
              </span>
            </div>

            <div className="mt-6 h-2 overflow-hidden rounded-full bg-zinc-800">
              <div
                className="h-full rounded-full bg-white"
                style={{ width: "80%" }}
              />
            </div>

            <p className="mt-4 text-sm text-zinc-500">
              Complete your company profile to improve candidate matches.
            </p>
          </div>

          {/* Hiring Status */}
          <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-6">
            <p className="text-sm text-zinc-500">
              Hiring preferences
            </p>

            <h2 className="mt-2 text-3xl font-semibold">
              Active
            </h2>

            <p className="mt-4 text-sm text-zinc-400">
              Your hiring preferences are being used to find compatible
              candidates.
            </p>

            <button className="mt-6 text-sm font-medium text-white transition hover:text-zinc-300">
              Edit preferences →
            </button>
          </div>
        </div>

        {/* Company Preferences */}
        <section className="mt-8 rounded-xl border border-zinc-800 bg-zinc-950 p-6">
          <div>
            <p className="text-sm text-zinc-500">
              Your company
            </p>

            <h2 className="mt-2 text-2xl font-semibold">
              What you're looking for
            </h2>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

            <div>
              <p className="text-sm text-zinc-500">
                Work environment
              </p>

              <p className="mt-2 font-medium">
               {getEnvironmentLabel(
  typeof companyProfile.environment === "string"
    ? companyProfile.environment
    : undefined
)}
              </p>
            </div>

            <div>
              <p className="text-sm text-zinc-500">
                Team structure
              </p>

              <p className="mt-2 font-medium">
               {getCommunicationLabel(
  typeof companyProfile.communication === "string"
    ? companyProfile.communication
    : undefined
)}
              </p>
            </div>

            <div>
              <p className="text-sm text-zinc-500">
                Work style
              </p>

              <p className="mt-2 font-medium">
              {getStructureLabel(
  typeof companyProfile.structure === "string"
    ? companyProfile.structure
    : undefined
)}
              </p>
            </div>

            <div>
              <p className="text-sm text-zinc-500">
                Experience
              </p>

              <p className="mt-2 font-medium">
               {companyProfile.experience || "Not specified"}
              </p>
            </div>

          </div>
        </section>

        {/* Recommended Workers */}
        <section className="mt-8">

          <div className="mb-6">
            <p className="text-sm text-zinc-500">
              Talent discovery
            </p>

            <h2 className="mt-2 text-2xl font-semibold">
              Recommended workers
            </h2>

            <p className="mt-2 text-sm text-zinc-500">
              Candidates whose work style may fit your company.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">

            {/* Worker A */}
            <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-6">

              <div className="flex items-center justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-800 font-medium">
                  A
                </div>

                <span className="text-sm text-zinc-400">
                  94% match
                </span>
              </div>

              <h3 className="mt-5 font-semibold">
                Alex Morgan
              </h3>

              <p className="mt-1 text-sm text-zinc-500">
                Frontend Developer
              </p>

              <p className="mt-4 text-sm leading-relaxed text-zinc-500">
                Strong collaboration and adaptability alignment.
              </p>

              <button className="mt-6 text-sm font-medium text-white transition hover:text-zinc-300">
                View profile →
              </button>
            </div>

            {/* Worker B */}
            <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-6">

              <div className="flex items-center justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-800 font-medium">
                  J
                </div>

                <span className="text-sm text-zinc-400">
                  89% match
                </span>
              </div>

              <h3 className="mt-5 font-semibold">
                Jordan Lee
              </h3>

              <p className="mt-1 text-sm text-zinc-500">
                Product Designer
              </p>

              <p className="mt-4 text-sm leading-relaxed text-zinc-500">
                Strong match for your flexible and collaborative
                environment.
              </p>

              <button className="mt-6 text-sm font-medium text-white transition hover:text-zinc-300">
                View profile →
              </button>
            </div>

            {/* Worker C */}
            <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-6">

              <div className="flex items-center justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-800 font-medium">
                  S
                </div>

                <span className="text-sm text-zinc-400">
                  84% match
                </span>
              </div>

              <h3 className="mt-5 font-semibold">
                Sam Carter
              </h3>

              <p className="mt-1 text-sm text-zinc-500">
                Backend Developer
              </p>

              <p className="mt-4 text-sm leading-relaxed text-zinc-500">
                Good alignment with your preferred team structure.
              </p>

              <button className="mt-6 text-sm font-medium text-white transition hover:text-zinc-300">
                View profile →
              </button>
            </div>

          </div>
        </section>

      </div>
    </main>
  );
}