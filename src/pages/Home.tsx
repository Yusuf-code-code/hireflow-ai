import FeatureCard from "../components/FeatureCard";
import Navbar from "../components/navbar";

export default function Home() {
    return (
        <div className="min-h-screen bg-black text-white">
          <Navbar/>
         <section className="max-w-5xl mx-auto text-center mt-24 px-6">
            
            <h1 className="text-6xl font-bold leading-tight">Track your job search
                <br/>
                Get hired faster.
            </h1>
         <p className="text-gray-400 text-xl mt-6">
            HireFlow AI helps you manage applications,
            improve your resume, and prepare for interviews
         </p>

         <button className="mt-8 bg-white text-black px-6 py-3 rounded-xl font-semibold">
         Start Building Your Career
         </button>
         </section>
 <section className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 mt-24 px-6 py-6">


        <FeatureCard
          icon="🤖"
          title="AI Resume Analysis"
          description="Improve your resume with AI-powered suggestions."
        />


        <FeatureCard
          icon="📊"
          title="Application Tracking"
          description="Manage every job application in one place."
        />


        <FeatureCard
          icon="🎯"
          title="Interview Preparation"
          description="Practice interviews with AI feedback."
        />


      </section>

        

        </div>
    )
}