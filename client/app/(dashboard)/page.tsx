import PasswordCard from "@/components/card/password-card";
import { AddPasswordForm } from "@/components/forms/add-password-form";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Search } from "lucide-react";
import React from "react";

const Home = () => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-xl font-semibold">Password Vault</h3>
          <h5 className="text-sm">Manage your saved passwords securely</h5>
        </div>
        <div className="flex gap-4 items-center">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search vault..."
              className="pl-10 max-w-96 w-full"
            />
          </div>
          <AddPasswordForm />
        </div>
      </div>
      <Separator className="my-2" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <PasswordCard
          title="Gmail"
          username="john.doe@gmail.com"
          lastUpdated="2 days ago"
          strength="strong"
        />
        <PasswordCard
          title="GitHub"
          username="johndoe"
          lastUpdated="1 week ago"
          strength="medium"
        />
        <PasswordCard
          title="Netflix"
          username="john.doe@example.com"
          lastUpdated="3 months ago"
          strength="weak"
        />
        <PasswordCard
          title="Amazon"
          username="john.doe@example.com"
          lastUpdated="5 days ago"
          strength="strong"
        />
        <PasswordCard
          title="Bank of America"
          username="john.d"
          lastUpdated="2 weeks ago"
          strength="strong"
        />
        <PasswordCard
          title="Twitter"
          username="johndoe123"
          lastUpdated="1 month ago"
          strength="medium"
        />
      </div>
    </div>
  );
};

export default Home;
