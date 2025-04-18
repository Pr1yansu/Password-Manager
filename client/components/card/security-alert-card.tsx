import React from "react";
import { AlertTriangle, Clock, ChevronRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const SecurityAlertCard = () => {
  return (
    <Card className="md:col-span-2 lg:col-span-1">
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium">Security Alerts</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between">
          <div className="text-3xl font-bold">3</div>
          <div className="flex flex-col items-end">
            <Badge variant="destructive" className="mb-1">
              <AlertTriangle className="h-3 w-3 mr-1" />
              <span className="text-xs">1 Critical</span>
            </Badge>
            <Badge
              variant="outline"
              className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300 border-yellow-200 dark:border-yellow-800"
            >
              <Clock className="h-3 w-3 mr-1" />
              <span className="text-xs">2 Warnings</span>
            </Badge>
          </div>
        </div>
        <Button variant="link" className="p-0 h-auto mt-3 text-sm">
          View all alerts
          <ChevronRight className="h-3 w-3 ml-1" />
        </Button>
      </CardContent>
    </Card>
  );
};

export default SecurityAlertCard;
