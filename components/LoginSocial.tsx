import { Button } from "@/components/ui/button";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

export function LoginSocial() {
  return (
    <section className="mt-3">
      <div className="py-3 flex items-center gap-5">
        <div className="flex-grow border-t border-gray-300"></div>
        <p className="text-sm text-muted-foreground">or use</p>
        <div className="flex-grow border-t border-gray-300"></div>
      </div>
      <div className="flex gap-3">
        <Button className="w-full" variant="outline">
          <FcGoogle size={20} />
        </Button>
        <Button className="w-full" variant="outline">
          <FaGithub size={20} />
        </Button>
      </div>
    </section>
  );
}