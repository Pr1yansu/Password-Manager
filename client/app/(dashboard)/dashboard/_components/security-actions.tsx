"use client";
import React from "react";
import { AlertTriangle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const SecurityActions = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Data Breach Alerts</CardTitle>
        <CardDescription>
          Accounts that may have been compromised in data breaches
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-red-50 dark:bg-red-900/20 rounded-lg flex-wrap gap-4">
            <div className="flex items-center">
              <div className="h-10 w-10 rounded-full bg-red-100 dark:bg-red-900 flex items-center justify-center mr-4">
                <AlertTriangle className="h-5 w-5 text-red-500" />
              </div>
              <div>
                <div className="flex items-center">
                  <p className="font-medium">LinkedIn</p>
                  <Badge variant="destructive" className="ml-2">
                    Critical
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  Your account was found in a recent data breach
                </p>
              </div>
            </div>
            <Button size="sm">Change Password</Button>
          </div>

          <div className="flex items-center justify-between p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg flex-wrap gap-4">
            <div className="flex items-center">
              <div className="h-10 w-10 rounded-full bg-yellow-100 dark:bg-yellow-900 flex items-center justify-center mr-4">
                <AlertTriangle className="h-5 w-5 text-yellow-500" />
              </div>
              <div>
                <div className="flex items-center">
                  <p className="font-medium">Adobe</p>
                  <Badge
                    variant="outline"
                    className="ml-2 bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300 border-yellow-200 dark:border-yellow-800"
                  >
                    Warning
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  Your email was found in a historical data breach
                </p>
              </div>
            </div>
            <Button size="sm" variant="outline">
              Change Password
            </Button>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between flex-wrap gap-2">
        <Button variant="link" className="px-0">
          Learn about data breaches
        </Button>
        <Button variant="outline">Run Breach Scan</Button>
      </CardFooter>
    </Card>
  );
};

export default SecurityActions;
