import { Tabs, TabsContent } from "@/components/ui/tabs";
import { cookies } from "next/headers";
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
import DetailsTabList from "@/components/tabs/details-tab-list";

export default async function PasswordDetail({
  params,
}: {
  params: { id: string };
}) {
  const id = decodeURIComponent(params.id);
  const cookieStore = await cookies();
  const defaultValue = cookieStore.get("tab_state")?.value;
  return (
    <section className="min-h-screen">
      <main className="container mx-auto px-4 py-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-2xl font-bold mb-6 capitalize">{id}</h1>

          <Tabs defaultValue={defaultValue || "details"}>
            <DetailsTabList />

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
    </section>
  );
}
