import Button from "../ui/Button";
import { motion } from "framer-motion";

interface RoleCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  onClick: () => void;
}

export default function RoleCard({
  icon,
  title,
  description,
  onClick,
}: RoleCardProps) {
  return (
        <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
       onClick={onClick}
      className="flex h-full flex-col py-6"
    >
    <div className="flex h-full flex-col rounded-xl border border-zinc-800 bg-zinc-950 p-10">
      <div className="flex flex-col items-center text-center">
        <div className="mb-8 text-white">
          {icon}
        </div>

        <h2 className="text-2xl font-semibold mb-4">
          {title}
        </h2>

        <p className="text-zinc-400 leading-relaxed min-h-[56px]">
          {description}
        </p>
      </div>

      <Button className="mt-10 px-8" size="md"   onClick={(event) => {
          event.stopPropagation();
          onClick();
        }}>
        Continue
      </Button>
    </div>
    </motion.div>
  );
}