import {  Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
      
    <nav className="
      max-w-7xl
      mx-auto
      flex
      items-center
      justify-between
      px-6
      py-6
    ">

      {/* Logo */}
      <Link 
        to="/"
        className="
          flex
          items-center
          gap-2
          text-xl
          font-bold
          text-white
        "
      >
        <div className="
          bg-white
          text-black
          p-2
          rounded-xl
        ">
          <Sparkles size={20} />
        </div>

        HireFlow AI
      </Link>


      {/* Navigation */}
      <div className="
        hidden
        md:flex
        items-center
        gap-8
      ">

        <a
          href="#features"
          className="
            text-zinc-400
            hover:text-white
            transition
          "
        >
          Features
        </a>


        <a
          href="#how-it-works"
          className="
            text-zinc-400
            hover:text-white
            transition
          "
        >
          How it works
        </a>


        <a
          href="#pricing"
          className="
            text-zinc-400
            hover:text-white
            transition
          "
        >
          Pricing
        </a>

      </div>


      {/* Buttons */}
      <div className="
        flex
        items-center
        gap-4
      ">

        <Link
          to="/login"
          className="
            text-zinc-300
            hover:text-white
            transition
          "
        >
          Login
        </Link>


        <Link
          to="/register"
          className="
            bg-white
            text-black
            px-5
            py-2.5
            rounded-xl
            font-medium
            hover:bg-zinc-200
            transition
          "
        >
          Get Started
        </Link>

      </div>


    </nav>
  )
    
}