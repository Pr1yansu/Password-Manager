import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import PasswordDetailsForm from "@/components/forms/password-details-form";
import PasswordHistoryTable from "@/components/tables/password-history-table";
import PasswordSecurityAnalysis from "@/components/tabs/security-analysis";

export default function PasswordDetail({ params }: { params: { id: string } }) {
  const id = decodeURIComponent(params.id);

  return (
    <div className="min-h-screen">
      <header className="bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 sticky top-0 z-10">
        <div className="container mx-auto px-4 pb-3 flex items-center">
          <Link
            href="/"
            className="flex items-center text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Vault
          </Link>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-2xl font-bold mb-6 capitalize">{id}</h1>

          <Tabs defaultValue="details">
            <TabsList className="grid w-full grid-cols-3 mb-6">
              <TabsTrigger value="details">Details</TabsTrigger>
              <TabsTrigger value="history">Password History</TabsTrigger>
              <TabsTrigger value="security">Security</TabsTrigger>
            </TabsList>

            <TabsContent value="details">
              <Card>
                <CardHeader>
                  <CardTitle>Account Details</CardTitle>
                  <CardDescription>
                    View and edit your saved credentials
                  </CardDescription>
                </CardHeader>
                <PasswordDetailsForm />
              </Card>
            </TabsContent>

            <TabsContent value="history">
              <Card>
                <CardHeader>
                  <CardTitle>Password History</CardTitle>
                  <CardDescription>
                    View previous passwords for this account
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <PasswordHistoryTable />
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="security">
              <Card>
                <CardHeader>
                  <CardTitle>Security Analysis</CardTitle>
                  <CardDescription>
                    Review the security of your password
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <PasswordSecurityAnalysis />
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
}
