import Link from "next/link";
import {Shield} from "lucide-react";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle,} from "@/components/ui/card";

export default function Auth({
  title,
  description,
  children,
  type,
}: {
  title: string;
  description: string;
  children: React.ReactNode;
  type: "login" | "register";
}) {
  return (
    <div className="min-h-screen bg-gradient-to-br dark:from-background dark:to-zinc-800 from-blue-100 to-blue-40 flex flex-col items-center justify-center p-4 w-full">
      <div className="w-full max-w-md">
        <div className="flex items-center justify-center mb-8">
          <Shield className="h-8 w-8 text-primary mr-2" />
          <h1 className="text-2xl font-bold">SecureVault</h1>
        </div>
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
          </CardHeader>
          <CardContent>{children}</CardContent>
          <CardFooter>
            {type === "login" && (
              <div className="text-sm text-center w-full space-y-2">
                <div className="text-sm text-center">
                  <Link
                    href="/forgot-password"
                    className="text-primary hover:underline"
                  >
                    Forgot your password?
                  </Link>
                </div>
                <div className="text-sm text-center">
                  Don&apos;t have an account?{" "}
                  <Link
                    href="/register"
                    className="text-primary hover:underline font-semibold"
                  >
                    Sign up
                  </Link>
                </div>
              </div>
            )}
            {type === "register" && (
              <div className="text-sm text-center w-full">
                Already have an account?{" "}
                <Link
                  href="/login"
                  className="text-primary hover:underline font-semibold"
                >
                  Log in
                </Link>
              </div>
            )}
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
