"use client";
import React from "react";
import { Progress } from "@/components/ui/progress";
import { AlertTriangle, Clock, Loader2, RefreshCw, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const PasswordSecurityAnalysis = () => {
  const [loading, setLoading] = React.useState<boolean>(false);
  const [generated, setGenerated] = React.useState<string | null>(null);

  const generateStrongPassword = () => {
    const charset =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=";
    let password = "";
    for (let i = 0; i < 16; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      password += charset[randomIndex];
    }
    return password;
  };

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

      {generated && (
        <p className="bg-gray-100 dark:bg-zinc-900 text-muted-foreground text-sm font-medium rounded-lg p-2 mt-4 text-center leading-7 tracking-[1em] show-selection relative">
          {generated}
          <X
            className="size-8 absolute right-0 top-1/2 -translate-1/2 cursor-pointer hover:bg-white dark:hover:bg-zinc-800 rounded-full p-1"
            onClick={() => setGenerated(null)}
          />
        </p>
      )}

      <Button
        className="w-full"
        disabled={loading}
        onClick={() => {
          setLoading(true);
          setTimeout(() => {
            setGenerated(generateStrongPassword());
            setLoading(false);
          }, 1200);
        }}
      >
        {loading ? "Generating..." : "Generate Strong Password"}
        {loading ? (
          <Loader2 className="size-5 ml-2 animate-spin" />
        ) : (
          <RefreshCw className="size-5 ml-2" />
        )}
      </Button>
    </>
  );
};

export default PasswordSecurityAnalysis;
