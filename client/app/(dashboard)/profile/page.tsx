import {
  ArrowLeft,
  Camera,
  Key,
  LogOut,
  User,
  Clock,
  AlertTriangle,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";

export default function Profile() {
  return (
    <section className="container mx-auto px-4 py-6">
      <div className="mb-6">
        <Link
          href="/"
          className="flex items-center text-muted-foreground hover:text-foreground mb-4"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Vault
        </Link>

        <h1 className="text-2xl font-bold">My Profile</h1>
        <p className="text-muted-foreground">
          Manage your personal information and account settings
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-1">
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center">
                  <div className="relative mb-4">
                    <Avatar className="h-24 w-24">
                      <AvatarImage
                        src="/placeholder.svg?height=96&width=96"
                        alt="Profile picture"
                      />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <button
                      aria-label="Change profile picture"
                      className="absolute bottom-0 right-0 rounded-full bg-primary p-1 text-white shadow-sm"
                    >
                      <Camera className="h-4 w-4" />
                    </button>
                  </div>
                  <h2 className="text-xl font-bold">John Doe</h2>
                  <p className="text-sm text-muted-foreground">
                    john.doe@example.com
                  </p>
                  <div className="mt-2 flex items-center space-x-1">
                    <Badge variant="outline" className="text-xs">
                      Premium Plan
                    </Badge>
                  </div>
                  <div className="mt-6 w-full space-y-2">
                    <Button
                      variant="outline"
                      className="w-full justify-start"
                      size="sm"
                    >
                      <User className="mr-2 h-4 w-4" />
                      Account
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full justify-start"
                      size="sm"
                    >
                      <Key className="mr-2 h-4 w-4" />
                      Security
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full justify-start text-destructive"
                      size="sm"
                    >
                      <LogOut className="mr-2 h-4 w-4" />
                      Logout
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="md:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Personal Information</CardTitle>
                <CardDescription>Update your personal details</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="first-name">First Name</Label>
                    <Input id="first-name" defaultValue="John" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="last-name">Last Name</Label>
                    <Input id="last-name" defaultValue="Doe" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    defaultValue="john.doe@example.com"
                  />
                </div>
              </CardContent>
              <CardFooter>
                <Button>Save Changes</Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Account Security</CardTitle>
                <CardDescription>
                  Manage your account security settings
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <h3 className="text-base font-medium">
                      Two-Factor Authentication
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Add an extra layer of security to your account
                    </p>
                  </div>
                  <Badge className="bg-red-500">Not Enabled</Badge>
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <h3 className="text-base font-medium">Master Password</h3>
                    <p className="text-sm text-muted-foreground">
                      Last changed 30 days ago
                    </p>
                  </div>
                  <Button variant="outline" size="sm">
                    Change
                  </Button>
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <h3 className="text-base font-medium">Recovery Key</h3>
                    <p className="text-sm text-muted-foreground">
                      Use this if you forget your master password
                    </p>
                  </div>
                  <Button variant="outline" size="sm">
                    View
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>Your recent account activity</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="mt-0.5">
                      <Clock className="h-5 w-5 text-muted-foreground" />
                    </div>
                    <div>
                      <p className="font-medium">Password changed</p>
                      <p className="text-sm text-muted-foreground">
                        30 days ago
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="mt-0.5">
                      <Clock className="h-5 w-5 text-muted-foreground" />
                    </div>
                    <div>
                      <p className="font-medium">New device logged in</p>
                      <p className="text-sm text-muted-foreground">
                        iPhone 15 • 7 days ago
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="mt-0.5">
                      <AlertTriangle className="h-5 w-5 text-yellow-500" />
                    </div>
                    <div>
                      <p className="font-medium">Login attempt blocked</p>
                      <p className="text-sm text-muted-foreground">
                        Moscow, Russia • 3 days ago
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Link href="/login-history">
                  <Button variant="outline">View Full History</Button>
                </Link>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Danger Zone</CardTitle>
                <CardDescription>Irreversible account actions</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <h3 className="text-base font-medium">Delete Account</h3>
                    <p className="text-sm text-muted-foreground">
                      Permanently delete your account and all your data
                    </p>
                  </div>
                  <Button variant="destructive" size="sm">
                    Delete
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
