import React from "react";
import { AlertTriangle, Lock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const TotalPasswordCard = () => {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium">Total Passwords</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between">
          <div className="text-3xl font-bold">24</div>
          <div className="flex flex-col items-end">
            <Badge variant="outline" className="mb-1">
              <Lock className="h-3 w-3 mr-1" />
              <span className="text-xs">18 Strong</span>
            </Badge>
            <Badge
              variant="outline"
              className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300 border-yellow-200 dark:border-yellow-800"
            >
              <AlertTriangle className="h-3 w-3 mr-1" />
              <span className="text-xs">6 Weak</span>
            </Badge>
          </div>
        </div>
        <div className="flex items-center mt-3">
          <div className="h-2 flex-1 rounded-full overflow-hidden bg-slate-200 dark:bg-slate-700">
            <div className="h-full bg-green-500" style={{ width: "75%" }}></div>
          </div>
          <span className="text-xs ml-2 text-muted-foreground">75%</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default TotalPasswordCard;
