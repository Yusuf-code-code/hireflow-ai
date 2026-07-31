import { Building2, UserRound } from "lucide-react";
import RoleCard from "../../components/common/RoleCard";

export default function RoleSelection() {
    return (
        <div className="min-h-screen bg-black text-white flex items-center justify-center px-6">
            <div className="max-w-5xl w-full text-center">
                <h1 className="text-5xl font-bold">
                    How will you use HireFlow AI?
                
                </h1>
                 <p  className="text-zinc-400 mt-4 text-lg">
                Choose your path to start finding the right match.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mt-12 items-stretch">
              
          <RoleCard
            icon={<UserRound size={40} />}
            title="I'm a Worker"
            description="Build your professional identity and discover companies that fit you."
          />


          <RoleCard
            icon={<Building2 size={40} />}
            title="I'm a Company"
            description="Find talented people who match your needs and culture."
          />
            </div>
            </div>
           
        </div>
    )
}