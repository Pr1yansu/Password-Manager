import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const RecentActivity = () => {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
        <CardDescription>Latest actions and events</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="relative pl-6 before:absolute before:left-0 before:top-2 before:h-[calc(100%-8px)] before:w-[2px] before:bg-muted">
            <div className="absolute left-0 top-2 h-4 w-4 rounded-full bg-primary -translate-x-1.5"></div>
            <div className="space-y-1">
              <div className="text-sm font-medium">Password Changed</div>
              <div className="text-sm text-muted-foreground">Gmail account</div>
              <div className="text-xs text-muted-foreground">2 hours ago</div>
            </div>
          </div>

          <div className="relative pl-6 before:absolute before:left-0 before:top-2 before:h-[calc(100%-8px)] before:w-[2px] before:bg-muted">
            <div className="absolute left-0 top-2 h-4 w-4 rounded-full bg-yellow-500 -translate-x-1.5"></div>
            <div className="space-y-1">
              <div className="text-sm font-medium">New Login</div>
              <div className="text-sm text-muted-foreground">
                iPhone 15 • New York
              </div>
              <div className="text-xs text-muted-foreground">
                Yesterday at 10:30 AM
              </div>
            </div>
          </div>

          <div className="relative pl-6 before:absolute before:left-0 before:top-2 before:h-[calc(100%-8px)] before:w-[2px] before:bg-muted">
            <div className="absolute left-0 top-2 h-4 w-4 rounded-full bg-red-500 -translate-x-1.5"></div>
            <div className="space-y-1">
              <div className="text-sm font-medium">Security Alert</div>
              <div className="text-sm text-muted-foreground">
                Blocked login from Moscow, Russia
              </div>
              <div className="text-xs text-muted-foreground">2 days ago</div>
            </div>
          </div>

          <div className="relative pl-6">
            <div className="absolute left-0 top-2 h-4 w-4 rounded-full bg-green-500 -translate-x-1.5"></div>
            <div className="space-y-1">
              <div className="text-sm font-medium">Password Added</div>
              <div className="text-sm text-muted-foreground">
                Bank of America account
              </div>
              <div className="text-xs text-muted-foreground">3 days ago</div>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="link" className="w-full">
          View All Activity
        </Button>
      </CardFooter>
    </Card>
  );
};

export default RecentActivity;
