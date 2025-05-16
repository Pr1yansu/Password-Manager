import { RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AddPasswordForm } from "@/components/forms/add-password-form";
import SecurityScoreCard from "@/components/card/security-score-card";
import TotalPasswordCard from "@/components/card/total-pw-card";
import SecurityAlertCard from "@/components/card/security-alert-card";
import PasswordHealth from "@/components/card/password-health";
import RecentActivity from "@/components/card/recent-activity";
import RecomendationAndActions from "./_components/recomendation-actions";
import SecurityActions from "./_components/security-actions";
import TextRevealAnimation from "./_components/text-reveal-animation";

export default function Dashboard() {
  const name = "John Doe";

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
        <div>
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="text-muted-foreground">
            Welcome back, <TextRevealAnimation id="username" text={name} />
          </p>
        </div>
        <div className="flex items-center gap-x-4 gap-y-2 flex-wrap">
          <AddPasswordForm />
          <Button variant="outline" size={"lg"}>
            <RefreshCw className="mr-2 h-4 w-4" /> Security Scan
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
        <SecurityScoreCard />
        <TotalPasswordCard />
        <SecurityAlertCard />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <div className="lg:col-span-2">
          <PasswordHealth />
        </div>

        <div>
          <RecentActivity />
        </div>
      </div>

      <RecomendationAndActions />

      <SecurityActions />
    </div>
  );
}
