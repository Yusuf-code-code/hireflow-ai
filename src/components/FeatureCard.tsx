interface FeatureCardProps {
  title: string;
  description: string;
  icon: string;
}

export default function FeatureCard({
    title,
    description,
    icon,
}: FeatureCardProps) {

      
  return (
    <div
      className="
      group
      bg-zinc-950
      border
      border-zinc-800
      p-8
      rounded-3xl
      transition-all
      duration-300
      hover:border-zinc-600
      hover:-translate-y-2
      "
    >

      <div
        className="
        w-14
        h-14
        flex
        items-center
        justify-center
        rounded-2xl
        bg-zinc-900
        text-3xl
        mb-6
        group-hover:scale-110
        transition
        "
      >
        {icon}
      </div>


      <h3 className="
        text-xl
        font-semibold
        text-white
      ">
        {title}
      </h3>


      <p className="
        text-zinc-400
        mt-3
        leading-relaxed
      ">
        {description}
      </p>

    </div>
  )
    
    
}