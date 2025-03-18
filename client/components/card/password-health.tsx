"use client";

import React from "react";
import {
  AlertTriangle,
  RefreshCw,
  PieChart,
  ShieldAlert,
  ShieldCheck,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const PasswordHealth = () => {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Password Health</CardTitle>
        <CardDescription>
          Overview of your password security status
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="overview">
          <TabsList className="grid w-full grid-cols-3 mb-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="reused">Reused</TabsTrigger>
            <TabsTrigger value="weak">Weak</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex flex-col items-center justify-center p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <ShieldCheck className="h-8 w-8 text-green-500 mb-2" />
                <div className="text-xl font-bold">18</div>
                <div className="text-sm text-muted-foreground">Strong</div>
              </div>

              <div className="flex flex-col items-center justify-center p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                <AlertTriangle className="h-8 w-8 text-yellow-500 mb-2" />
                <div className="text-xl font-bold">4</div>
                <div className="text-sm text-muted-foreground">Reused</div>
              </div>

              <div className="flex flex-col items-center justify-center p-4 bg-red-50 dark:bg-red-900/20 rounded-lg">
                <ShieldAlert className="h-8 w-8 text-red-500 mb-2" />
                <div className="text-xl font-bold">2</div>
                <div className="text-sm text-muted-foreground">Weak</div>
              </div>
            </div>

            <div className="flex items-center justify-center p-6">
              <div className="relative w-48 h-48">
                <PieChart className="w-full h-full text-muted-foreground/20" />
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <div className="text-3xl font-bold">75%</div>
                  <div className="text-sm text-muted-foreground">Healthy</div>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                  <span className="text-sm">Strong Passwords</span>
                </div>
                <span className="text-sm font-medium">75%</span>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                  <span className="text-sm">Reused Passwords</span>
                </div>
                <span className="text-sm font-medium">17%</span>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                  <span className="text-sm">Weak Passwords</span>
                </div>
                <span className="text-sm font-medium">8%</span>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="reused">
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center mr-3">
                    <span className="font-medium">G</span>
                  </div>
                  <div>
                    <p className="font-medium">Gmail</p>
                    <p className="text-sm text-muted-foreground">
                      john.doe@gmail.com
                    </p>
                  </div>
                </div>
                <Button size="sm" variant="outline">
                  Fix
                </Button>
              </div>

              <div className="flex items-center justify-between p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center mr-3">
                    <span className="font-medium">A</span>
                  </div>
                  <div>
                    <p className="font-medium">Amazon</p>
                    <p className="text-sm text-muted-foreground">
                      john.doe@example.com
                    </p>
                  </div>
                </div>
                <Button size="sm" variant="outline">
                  Fix
                </Button>
              </div>

              <div className="flex items-center justify-between p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center mr-3">
                    <span className="font-medium">N</span>
                  </div>
                  <div>
                    <p className="font-medium">Netflix</p>
                    <p className="text-sm text-muted-foreground">
                      john.doe@example.com
                    </p>
                  </div>
                </div>
                <Button size="sm" variant="outline">
                  Fix
                </Button>
              </div>

              <div className="flex items-center justify-between p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center mr-3">
                    <span className="font-medium">D</span>
                  </div>
                  <div>
                    <p className="font-medium">Dropbox</p>
                    <p className="text-sm text-muted-foreground">
                      john.doe@example.com
                    </p>
                  </div>
                </div>
                <Button size="sm" variant="outline">
                  Fix
                </Button>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="weak">
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-red-50 dark:bg-red-900/20 rounded-lg">
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center mr-3">
                    <span className="font-medium">T</span>
                  </div>
                  <div>
                    <p className="font-medium">Twitter</p>
                    <p className="text-sm text-muted-foreground">johndoe123</p>
                  </div>
                </div>
                <Button size="sm" variant="outline">
                  Fix
                </Button>
              </div>

              <div className="flex items-center justify-between p-3 bg-red-50 dark:bg-red-900/20 rounded-lg">
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center mr-3">
                    <span className="font-medium">R</span>
                  </div>
                  <div>
                    <p className="font-medium">Reddit</p>
                    <p className="text-sm text-muted-foreground">
                      johndoe_reddit
                    </p>
                  </div>
                </div>
                <Button size="sm" variant="outline">
                  Fix
                </Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="w-full">
          <RefreshCw className="h-4 w-4 mr-2" />
          Run Security Check
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PasswordHealth;
