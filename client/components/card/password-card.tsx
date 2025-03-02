"use client";

import { useState } from "react";
import { Eye, EyeOff, Clock } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

function PasswordCard({
  title,
  username,
  lastUpdated,
  strength,
}: {
  title: string;
  username: string;
  lastUpdated: string;
  strength: string;
}) {
  const [showPassword, setShowPassword] = useState(false);

  const getStrengthColor = (strength: string) => {
    switch (strength) {
      case "strong":
        return "bg-green-500";
      case "medium":
        return "bg-yellow-500";
      case "weak":
        return "bg-red-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <Card className="overflow-hidden hover:shadow-md transition-shadow">
      <CardContent className="p-0">
        <div className="p-4">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-semibold text-lg">{title}</h3>
            <div className="flex items-center space-x-1">
              <div
                className={`h-2 w-2 rounded-full ${getStrengthColor(strength)}`}
              />
              <span className="text-xs text-muted-foreground capitalize">
                {strength}
              </span>
            </div>
          </div>
          <p className="text-sm text-muted-foreground mb-2">{username}</p>
          <div className="flex items-center mb-3">
            <div className="relative flex-1">
              <Input
                type={showPassword ? "text" : "password"}
                value="••••••••••••"
                readOnly
                className="pr-9"
              />
              <button
                className="absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeOff className="h-4 w-4" />
                ) : (
                  <Eye className="h-4 w-4" />
                )}
              </button>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center text-xs text-muted-foreground">
              <Clock className="h-3 w-3 mr-1" />
              <span>Updated {lastUpdated}</span>
            </div>
            <Link
              href={`/passwords/${encodeURIComponent(title.toLowerCase())}`}
            >
              <Button variant="ghost" size="sm">
                Edit
              </Button>
            </Link>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default PasswordCard;
