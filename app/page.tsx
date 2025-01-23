import { Button } from "@/components/ui/button";
import { Jost } from "next/font/google";
import { cn } from "@/lib/utils";
import LoginButton from "@/components/auth/LoginButton";

const font = Jost({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export default function Home() {
  return (
    <div className="flex flex-1 w-full items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-800 text-center">
      <div className="space-y-6">
        <div className="flex text-center">
        </div>
       
      </div>
    </div>
  );
}
