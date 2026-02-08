import { Hero } from "@/components/home/Hero";
import { Services } from "@/components/home/Services";
import { ProcessStack } from "@/components/home/ProcessStack";

export default function Home() {
  return (
    <div className="flex flex-col gap-y-0">
      <Hero />
      <Services />
      <ProcessStack />
    </div>
  );
}
