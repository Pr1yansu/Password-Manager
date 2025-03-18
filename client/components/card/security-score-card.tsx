"use client";
import React, { useState } from "react";
import { Progress } from "@/components/ui/progress";
import { TrendingUp, Eye, EyeOff } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const SecurityScoreCard = () => {
  const [showSecurityScore, setShowSecurityScore] = useState(false);
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium">Security Score</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            {showSecurityScore ? (
              <div className="text-3xl font-bold">78</div>
            ) : (
              <div className="text-3xl font-bold">••</div>
            )}
            <span className="text-sm text-muted-foreground ml-2">/100</span>
            <button
              onClick={() => setShowSecurityScore(!showSecurityScore)}
              className="ml-2 text-muted-foreground hover:text-foreground"
            >
              {showSecurityScore ? (
                <EyeOff className="h-4 w-4" />
              ) : (
                <Eye className="h-4 w-4" />
              )}
            </button>
          </div>
          <div className="flex items-center text-green-500">
            <TrendingUp className="h-4 w-4 mr-1" />
            <span className="text-xs">+5%</span>
          </div>
        </div>
        <Progress value={78} className="h-2 mt-3" />
        <div className="mt-1 text-xs text-muted-foreground">
          Good, but could be improved
        </div>
      </CardContent>
    </Card>
  );
};

export default SecurityScoreCard;
