import { Link } from "react-router-dom";
import FeatureCard from "../../components/common/FeatureCard";
import  Navbar from "../../components/layout/Navbar";
import Button from "../../components/ui/Button";


export default function Home() {
    return (
        <div className="min-h-screen bg-black text-white">
          <Navbar/>
         <section className="max-w-5xl mx-auto text-center mt-24 px-6">
            
            <h1 className="text-6xl font-bold leading-tight">
                AI-powered matching
  <br />
  for talent and companies.
            </h1>
         <p className="text-gray-400 text-xl mt-6">
             HireFlow AI connects talent and companies through
    skills, goals, and compatibility — not just keywords.
         </p>

          <div className="flex justify-center gap-4 mt-8">

    <Button>
      <Link
      to="/choose-role"
       >
     Get Started
     </Link>
    </Button>


    <Button variant="secondary">
     Learn More
    </Button>

  </div>

         </section>
 <section className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 mt-24 px-6 py-6">


      <FeatureCard
  icon="🎯"
  title="AI Compatibility Matching"
  description="Discover opportunities based on your skills, goals, and working style."
/>


<FeatureCard
  icon="👤"
  title="Beyond The Resume"
  description="Showcase your projects, experience, and professional identity."
/>


<FeatureCard
  icon="🏢"
  title="Companies That Fit You"
  description="Find organizations that match your ambitions and career direction."
/>
      </section>

        

        </div>
    )
}