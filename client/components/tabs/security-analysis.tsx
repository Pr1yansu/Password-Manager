import React from "react";
import { Progress } from "@/components/ui/progress";
import { AlertTriangle, Clock, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";

const PasswordSecurityAnalysis = () => {
  return (
    <>
      <div>
        <div className="flex justify-between mb-2">
          <span className="font-medium">Password Strength</span>
          <span className="text-green-500 font-medium">Strong</span>
        </div>
        <Progress value={85} className="h-2" />
      </div>

      <div className="space-y-4">
        <h3 className="font-semibold">Security Checks</h3>

        <div className="flex items-start space-x-3">
          <div className="h-5 w-5 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center mt-0.5">
            <svg
              className="h-3 w-3 text-green-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <div>
            <p className="font-medium">Length</p>
            <p className="text-sm text-muted-foreground">
              Your password is 16 characters long
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-3">
          <div className="h-5 w-5 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center mt-0.5">
            <svg
              className="h-3 w-3 text-green-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <div>
            <p className="font-medium">Complexity</p>
            <p className="text-sm text-muted-foreground">
              Contains uppercase, lowercase, numbers, and symbols
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-3">
          <div className="h-5 w-5 rounded-full bg-red-100 dark:bg-red-900 flex items-center justify-center mt-0.5">
            <AlertTriangle className="h-3 w-3 text-red-500" />
          </div>
          <div>
            <p className="font-medium">Reused Password</p>
            <p className="text-sm text-muted-foreground">
              This password is similar to one used for another account
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-3">
          <div className="h-5 w-5 rounded-full bg-yellow-100 dark:bg-yellow-900 flex items-center justify-center mt-0.5">
            <Clock className="h-3 w-3 text-yellow-500" />
          </div>
          <div>
            <p className="font-medium">Password Age</p>
            <p className="text-sm text-muted-foreground">
              Last changed 3 months ago
            </p>
          </div>
        </div>
      </div>

      <Button className="w-full">
        <RefreshCw className="h-4 w-4 mr-2" />
        Generate New Strong Password
      </Button>
    </>
  );
};

export default PasswordSecurityAnalysis;
