import { useEffect, useState } from "react";
import { getWorkStyleLabel } from "../lib/workStyle";
export default function Dashboard() {
  const [scores, setScores] = useState({
  collaboration: 0,
  independence: 0,
  structure: 0,
  adaptability: 0,
  communication: 0,
});

useEffect(() => {
  const savedScores = localStorage.getItem(
    "hireflow_assessment_scores"
  );

  if (savedScores) {
    setScores(JSON.parse(savedScores));
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
              Profile
            </button>

            <button className="text-sm text-zinc-400 transition hover:text-white">
              Settings
            </button>

            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-zinc-800 text-sm font-medium">
              A
            </div>
          </div>
        </div>
      </nav>

      {/* Dashboard */}
      <div className="mx-auto max-w-7xl px-6 py-12">

        {/* Welcome */}
        <div className="mb-10">
          <p className="mb-2 text-sm text-zinc-500">
            Worker Dashboard
          </p>

          <h1 className="text-4xl font-bold tracking-tight">
            Welcome back, Alex.
          </h1>

          <p className="mt-3 text-zinc-400">
            Here's an overview of your HireFlow profile.
          </p>
        </div>

        {/* Top Cards */}
        <div className="grid gap-6 md:grid-cols-2">

          {/* Profile Completion */}
          <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-zinc-500">
                  Profile completion
                </p>

                <h2 className="mt-2 text-3xl font-semibold">
                  75%
                </h2>
              </div>

              <div className="text-sm text-zinc-400">
                Almost there
              </div>
            </div>

            <div className="mt-6 h-2 overflow-hidden rounded-full bg-zinc-800">
              <div
                className="h-full rounded-full bg-white"
                style={{ width: "75%" }}
              />
            </div>

            <p className="mt-4 text-sm text-zinc-500">
              Complete your profile to improve your matches.
            </p>
          </div>

          {/* Assessment */}
          <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-6">
            <p className="text-sm text-zinc-500">
              Work-style assessment
            </p>

            <h2 className="mt-2 text-3xl font-semibold">
              Completed
            </h2>

            <p className="mt-4 text-sm text-zinc-400">
              Your work preferences are ready to help us find better
              opportunities for you.
            </p>

            <button className="mt-6 text-sm font-medium text-white hover:text-zinc-300">
              View results →
            </button>
          </div>
        </div>

        {/* Work Style */}
        <section className="mt-8 rounded-xl border border-zinc-800 bg-zinc-950 p-6">
          <div>
            <p className="text-sm text-zinc-500">
              Your work style
            </p>

            <h2 className="mt-2 text-2xl font-semibold">
              How you work best
            </h2>
          </div>

          <div className="mt-8 space-y-6">

            {/* Collaboration */}
            <div>
              <div className="mb-2 flex justify-between text-sm">
                <div>
  <span>Collaboration</span>

  <p className="mt-1 text-xs text-zinc-500">
    {getWorkStyleLabel(
      "collaboration",
      scores.collaboration
    )}
  </p>
</div>
                
               <span className="text-zinc-500">
  {scores.collaboration}%
</span>
              </div>

              <div className="h-2 rounded-full bg-zinc-800">
                <div
                  className="h-full rounded-full bg-white"
                 style={{ width: `${scores.collaboration}%` }}
                />
              </div>
            </div>

            {/* Independence */}
            <div>
              <div className="mb-2 flex justify-between text-sm">
                <div>
  <span>Independence</span>

  <p className="mt-1 text-xs text-zinc-500">
    {getWorkStyleLabel(
      "independence",
      scores.independence
    )}
  </p>
</div>
                <span className="text-zinc-500">
  {scores.independence}%
</span>
              </div>

              <div className="h-2 rounded-full bg-zinc-800">
                <div
                  className="h-full rounded-full bg-white"
                  style={{ width: `${scores.independence}%` }}
                />
              </div>
            </div>

            {/* Adaptability */}
            <div>
              <div className="mb-2 flex justify-between text-sm">
                <div>
  <span>Adaptability</span>

  <p className="mt-1 text-xs text-zinc-500">
    {getWorkStyleLabel(
      "adaptability",
      scores.adaptability
    )}
  </p>
</div>
                <span className="text-zinc-500">
  {scores.adaptability}%
</span>
              </div>

              <div className="h-2 rounded-full bg-zinc-800">
                <div
                  className="h-full rounded-full bg-white"
                  style={{ width: `${scores.adaptability}%` }}
                />
              </div>
            </div>

            {/* Structure */}
            <div>
              <div className="mb-2 flex justify-between text-sm">
                <div>
  <span>Structure</span>

  <p className="mt-1 text-xs text-zinc-500">
    {getWorkStyleLabel(
      "structure",
      scores.structure
    )}
  </p>
</div>
               <span className="text-zinc-500">
  {scores.structure}%
</span>
              </div>

              <div className="h-2 rounded-full bg-zinc-800">
                <div
                  className="h-full rounded-full bg-white"
               style={{ width: `${scores.structure}%` }}
                />
              </div>
            </div>

          </div>
        </section>

        {/* Recommended Companies */}
        <section className="mt-8">
          <div className="mb-6">
            <p className="text-sm text-zinc-500">
              Opportunities
            </p>

            <h2 className="mt-2 text-2xl font-semibold">
              Recommended companies
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">

            {/* Company A */}
            <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-6">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold">
                  Company A
                </h3>

                <span className="text-sm text-zinc-400">
                  92% match
                </span>
              </div>

              <p className="mt-3 text-sm leading-relaxed text-zinc-500">
                Strong match based on your work style and preferences.
              </p>

              <button className="mt-6 text-sm font-medium text-white hover:text-zinc-300">
                View company →
              </button>
            </div>

            {/* Company B */}
            <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-6">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold">
                  Company B
                </h3>

                <span className="text-sm text-zinc-400">
                  87% match
                </span>
              </div>

              <p className="mt-3 text-sm leading-relaxed text-zinc-500">
                Good alignment with your preferred environment.
              </p>

              <button className="mt-6 text-sm font-medium text-white hover:text-zinc-300">
                View company →
              </button>
            </div>

            {/* Company C */}
            <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-6">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold">
                  Company C
                </h3>

                <span className="text-sm text-zinc-400">
                  81% match
                </span>
              </div>

              <p className="mt-3 text-sm leading-relaxed text-zinc-500">
                Potential match based on your profile.
              </p>

              <button className="mt-6 text-sm font-medium text-white hover:text-zinc-300">
                View company →
              </button>
            </div>

          </div>
        </section>

      </div>
    </main>
  );
}