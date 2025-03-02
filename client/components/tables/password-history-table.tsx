import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Eye } from "lucide-react";

const PasswordHistoryTable = () => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Date Changed</TableHead>
          <TableHead>Password</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>March 1, 2025</TableCell>
          <TableCell>••••••••••••</TableCell>
          <TableCell>
            <Button variant="ghost" size="sm">
              <Eye className="h-4 w-4 mr-2" />
              View
            </Button>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>January 15, 2025</TableCell>
          <TableCell>••••••••••••</TableCell>
          <TableCell>
            <Button variant="ghost" size="sm">
              <Eye className="h-4 w-4 mr-2" />
              View
            </Button>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>November 20, 2024</TableCell>
          <TableCell>••••••••••••</TableCell>
          <TableCell>
            <Button variant="ghost" size="sm">
              <Eye className="h-4 w-4 mr-2" />
              View
            </Button>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default PasswordHistoryTable;
