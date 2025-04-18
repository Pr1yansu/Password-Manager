"use client";
import React from "react";
import {
  Shield,
  AlertTriangle,
  Clock,
  Unlock,
  RefreshCw,
  BarChart3,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const RecomendationAndActions = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
      <Card>
        <CardHeader>
          <CardTitle>Security Recommendations</CardTitle>
          <CardDescription>Improve your password security</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-start space-x-3">
            <div className="h-8 w-8 rounded-full bg-red-100 dark:bg-red-900 flex items-center justify-center flex-shrink-0">
              <AlertTriangle className="h-4 w-4 text-red-500" />
            </div>
            <div className="max-lg:flex justify-between w-full flex-wrap">
              <div>
                <p className="font-medium">Enable Two-Factor Authentication</p>
                <p className="text-sm text-muted-foreground mb-2">
                  Add an extra layer of security to your account
                </p>
              </div>
              <Button size="sm" variant="outline">
                Enable 2FA
              </Button>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <div className="h-8 w-8 rounded-full bg-yellow-100 dark:bg-yellow-900 flex items-center justify-center flex-shrink-0">
              <RefreshCw className="h-4 w-4 text-yellow-500" />
            </div>
            <div className="max-lg:flex justify-between w-full flex-wrap">
              <div>
                <p className="font-medium">Update Weak Passwords</p>
                <p className="text-sm text-muted-foreground mb-2">
                  2 of your passwords are weak and should be updated
                </p>
              </div>
              <Button size="sm" variant="outline">
                Update Now
              </Button>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <div className="h-8 w-8 rounded-full bg-yellow-100 dark:bg-yellow-900 flex items-center justify-center flex-shrink-0">
              <Unlock className="h-4 w-4 text-yellow-500" />
            </div>
            <div className="max-lg:flex justify-between w-full flex-wrap">
              <div>
                <p className="font-medium">Fix Reused Passwords</p>
                <p className="text-sm text-muted-foreground mb-2">
                  You&apos;re using the same password for 4 different accounts
                </p>
              </div>
              <Button size="sm" variant="outline">
                Fix Now
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
          <CardDescription>Common tasks and shortcuts</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4">
            <Link href="/password-generator">
              <Card className="h-full hover:bg-accent transition-colors cursor-pointer">
                <CardContent className="p-4 flex flex-col items-center justify-center text-center">
                  <RefreshCw className="h-8 w-8 mb-2 text-primary" />
                  <p className="font-medium">Generate Password</p>
                  <p className="text-xs text-muted-foreground">
                    Create strong passwords
                  </p>
                </CardContent>
              </Card>
            </Link>

            <Link href="/settings">
              <Card className="h-full hover:bg-accent transition-colors cursor-pointer">
                <CardContent className="p-4 flex flex-col items-center justify-center text-center">
                  <Shield className="h-8 w-8 mb-2 text-primary" />
                  <p className="font-medium">Security Settings</p>
                  <p className="text-xs text-muted-foreground">
                    Manage security options
                  </p>
                </CardContent>
              </Card>
            </Link>

            <Link href="/login-history">
              <Card className="h-full hover:bg-accent transition-colors cursor-pointer">
                <CardContent className="p-4 flex flex-col items-center justify-center text-center">
                  <Clock className="h-8 w-8 mb-2 text-primary" />
                  <p className="font-medium">Login History</p>
                  <p className="text-xs text-muted-foreground">
                    View recent logins
                  </p>
                </CardContent>
              </Card>
            </Link>

            <Link href="/">
              <Card className="h-full hover:bg-accent transition-colors cursor-pointer">
                <CardContent className="p-4 flex flex-col items-center justify-center text-center">
                  <BarChart3 className="h-8 w-8 mb-2 text-primary" />
                  <p className="font-medium">Password Vault</p>
                  <p className="text-xs text-muted-foreground">
                    Manage all passwords
                  </p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default RecomendationAndActions;
