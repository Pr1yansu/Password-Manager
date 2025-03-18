import {
  ArrowLeft,
  Bell,
  Lock,
  Eye,
  Database,
  Globe,
  Moon,
  Sun,
  Smartphone,
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export default function Settings() {
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

        <h1 className="text-2xl font-bold">Settings</h1>
        <p className="text-muted-foreground">
          Manage your account preferences and security settings
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <Tabs defaultValue="security">
          <TabsList className="grid grid-cols-5 mb-6">
            <TabsTrigger value="security">
              <Lock className="h-4 w-4 mr-2" />
              <span className="hidden sm:inline">Security</span>
            </TabsTrigger>
            <TabsTrigger value="preferences">
              <Eye className="h-4 w-4 mr-2" />
              <span className="hidden sm:inline">Preferences</span>
            </TabsTrigger>
            <TabsTrigger value="notifications">
              <Bell className="h-4 w-4 mr-2" />
              <span className="hidden sm:inline">Notifications</span>
            </TabsTrigger>
            <TabsTrigger value="devices">
              <Smartphone className="h-4 w-4 mr-2" />
              <span className="hidden sm:inline">Devices</span>
            </TabsTrigger>
            <TabsTrigger value="data">
              <Database className="h-4 w-4 mr-2" />
              <span className="hidden sm:inline">Data</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="security">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Master Password</CardTitle>
                  <CardDescription>
                    Change your master password that encrypts all your data
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="current-password">Current Password</Label>
                    <Input id="current-password" type="password" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="new-password">New Password</Label>
                    <Input id="new-password" type="password" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="confirm-password">
                      Confirm New Password
                    </Label>
                    <Input id="confirm-password" type="password" />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button>Update Password</Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Two-Factor Authentication</CardTitle>
                  <CardDescription>
                    Add an extra layer of security to your account
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label className="text-base">Authenticator App</Label>
                      <p className="text-sm text-muted-foreground">
                        Use an authenticator app to generate verification codes
                      </p>
                    </div>
                    <Button variant="outline">Setup</Button>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label className="text-base">SMS Verification</Label>
                      <p className="text-sm text-muted-foreground">
                        Receive verification codes via text message
                      </p>
                    </div>
                    <Button variant="outline">Setup</Button>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label className="text-base">Recovery Codes</Label>
                      <p className="text-sm text-muted-foreground">
                        Generate backup codes to access your account
                      </p>
                    </div>
                    <Button variant="outline">Generate</Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Auto-Logout</CardTitle>
                  <CardDescription>
                    Automatically log out after a period of inactivity
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Select defaultValue="30">
                    <SelectTrigger className="w-full sm:w-[240px]">
                      <SelectValue placeholder="Select timeout" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="5">5 minutes</SelectItem>
                      <SelectItem value="15">15 minutes</SelectItem>
                      <SelectItem value="30">30 minutes</SelectItem>
                      <SelectItem value="60">1 hour</SelectItem>
                      <SelectItem value="never">Never</SelectItem>
                    </SelectContent>
                  </Select>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="preferences">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Appearance</CardTitle>
                  <CardDescription>
                    Customize how SecureVault looks
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label>Theme</Label>
                    <RadioGroup
                      defaultValue="system"
                      className="flex flex-col space-y-1"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="light" id="theme-light" />
                        <Label
                          htmlFor="theme-light"
                          className="flex items-center"
                        >
                          <Sun className="h-4 w-4 mr-2" />
                          Light
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="dark" id="theme-dark" />
                        <Label
                          htmlFor="theme-dark"
                          className="flex items-center"
                        >
                          <Moon className="h-4 w-4 mr-2" />
                          Dark
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="system" id="theme-system" />
                        <Label
                          htmlFor="theme-system"
                          className="flex items-center"
                        >
                          <Globe className="h-4 w-4 mr-2" />
                          System
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="flex items-center justify-between">
                    <Label htmlFor="compact-view">Compact View</Label>
                    <Switch id="compact-view" />
                  </div>

                  <div className="flex items-center justify-between">
                    <Label htmlFor="show-favicons">Show Website Icons</Label>
                    <Switch id="show-favicons" defaultChecked />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Password Generator</CardTitle>
                  <CardDescription>
                    Default settings for generated passwords
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="default-length">
                      Default Password Length
                    </Label>
                    <Select defaultValue="16">
                      <SelectTrigger
                        id="default-length"
                        className="w-full sm:w-[240px]"
                      >
                        <SelectValue placeholder="Select length" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="8">8 characters</SelectItem>
                        <SelectItem value="12">12 characters</SelectItem>
                        <SelectItem value="16">16 characters</SelectItem>
                        <SelectItem value="20">20 characters</SelectItem>
                        <SelectItem value="24">24 characters</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="flex items-center justify-between">
                    <Label htmlFor="include-uppercase">
                      Include Uppercase Letters
                    </Label>
                    <Switch id="include-uppercase" defaultChecked />
                  </div>

                  <div className="flex items-center justify-between">
                    <Label htmlFor="include-numbers">Include Numbers</Label>
                    <Switch id="include-numbers" defaultChecked />
                  </div>

                  <div className="flex items-center justify-between">
                    <Label htmlFor="include-symbols">Include Symbols</Label>
                    <Switch id="include-symbols" defaultChecked />
                  </div>

                  <div className="flex items-center justify-between">
                    <Label htmlFor="avoid-ambiguous">
                      Avoid Ambiguous Characters
                    </Label>
                    <Switch id="avoid-ambiguous" defaultChecked />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Language</CardTitle>
                  <CardDescription>
                    Choose your preferred language
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Select defaultValue="en">
                    <SelectTrigger className="w-full sm:w-[240px]">
                      <SelectValue placeholder="Select language" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="en">English</SelectItem>
                      <SelectItem value="es">Español</SelectItem>
                      <SelectItem value="fr">Français</SelectItem>
                      <SelectItem value="de">Deutsch</SelectItem>
                      <SelectItem value="ja">日本語</SelectItem>
                    </SelectContent>
                  </Select>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="notifications">
            <Card>
              <CardHeader>
                <CardTitle>Notification Settings</CardTitle>
                <CardDescription>
                  Choose when and how you want to be notified
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label className="text-base">Security Alerts</Label>
                    <p className="text-sm text-muted-foreground">
                      Get notified about suspicious login attempts
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label className="text-base">Password Breach Alerts</Label>
                    <p className="text-sm text-muted-foreground">
                      Get notified if your passwords appear in data breaches
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label className="text-base">
                      Password Expiry Reminders
                    </Label>
                    <p className="text-sm text-muted-foreground">
                      Get reminded when passwords are due for a change
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label className="text-base">New Device Logins</Label>
                    <p className="text-sm text-muted-foreground">
                      Get notified when your account is accessed from a new
                      device
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label className="text-base">Product Updates</Label>
                    <p className="text-sm text-muted-foreground">
                      Get notified about new features and improvements
                    </p>
                  </div>
                  <Switch />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="devices">
            <Card>
              <CardHeader>
                <CardTitle>Connected Devices</CardTitle>
                <CardDescription>
                  Manage devices that have access to your vault
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="h-10 w-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                        <svg
                          className="h-5 w-5"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <rect
                            x="2"
                            y="3"
                            width="20"
                            height="14"
                            rx="2"
                            ry="2"
                          ></rect>
                          <line x1="8" y1="21" x2="16" y2="21"></line>
                          <line x1="12" y1="17" x2="12" y2="21"></line>
                        </svg>
                      </div>
                      <div>
                        <p className="font-medium">MacBook Pro</p>
                        <p className="text-sm text-muted-foreground">
                          Last active: Today at 2:15 PM
                        </p>
                        <p className="text-xs text-muted-foreground">
                          New York, USA • Chrome 121.0
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <span className="text-xs bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300 px-2 py-1 rounded-full mr-2">
                        Current
                      </span>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-destructive"
                      >
                        Logout
                      </Button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="h-10 w-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                        <svg
                          className="h-5 w-5"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <rect
                            x="5"
                            y="2"
                            width="14"
                            height="20"
                            rx="2"
                            ry="2"
                          ></rect>
                          <line x1="12" y1="18" x2="12.01" y2="18"></line>
                        </svg>
                      </div>
                      <div>
                        <p className="font-medium">iPhone 15</p>
                        <p className="text-sm text-muted-foreground">
                          Last active: Today at 10:30 AM
                        </p>
                        <p className="text-xs text-muted-foreground">
                          New York, USA • Safari 17.2
                        </p>
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-destructive"
                    >
                      Logout
                    </Button>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="h-10 w-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                        <svg
                          className="h-5 w-5"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <rect
                            x="2"
                            y="3"
                            width="20"
                            height="14"
                            rx="2"
                            ry="2"
                          ></rect>
                          <line x1="8" y1="21" x2="16" y2="21"></line>
                          <line x1="12" y1="17" x2="12" y2="21"></line>
                        </svg>
                      </div>
                      <div>
                        <p className="font-medium">Windows PC</p>
                        <p className="text-sm text-muted-foreground">
                          Last active: Feb 28, 2025
                        </p>
                        <p className="text-xs text-muted-foreground">
                          Chicago, USA • Edge 121.0
                        </p>
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-destructive"
                    >
                      Logout
                    </Button>
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <Button variant="destructive" size="sm">
                    Logout From All Devices
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="data">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Import & Export</CardTitle>
                  <CardDescription>Transfer your password data</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-sm font-medium">Import Passwords</h3>
                    <p className="text-sm text-muted-foreground">
                      Import passwords from another password manager or browser
                    </p>
                    <div className="flex space-x-2">
                      <Select defaultValue="csv">
                        <SelectTrigger className="w-[180px]">
                          <SelectValue placeholder="Select format" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="csv">CSV File</SelectItem>
                          <SelectItem value="json">JSON File</SelectItem>
                          <SelectItem value="1password">1Password</SelectItem>
                          <SelectItem value="lastpass">LastPass</SelectItem>
                          <SelectItem value="dashlane">Dashlane</SelectItem>
                        </SelectContent>
                      </Select>
                      <Button variant="outline">Import</Button>
                    </div>
                  </div>

                  <div className="space-y-2 pt-4 border-t">
                    <h3 className="text-sm font-medium">Export Passwords</h3>
                    <p className="text-sm text-muted-foreground">
                      Export your passwords as an encrypted file
                    </p>
                    <div className="flex space-x-2">
                      <Select defaultValue="encrypted">
                        <SelectTrigger className="w-[180px]">
                          <SelectValue placeholder="Select format" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="encrypted">
                            Encrypted File
                          </SelectItem>
                          <SelectItem value="csv">CSV File</SelectItem>
                          <SelectItem value="json">JSON File</SelectItem>
                        </SelectContent>
                      </Select>
                      <Button variant="outline">Export</Button>
                    </div>
                    <p className="text-xs text-muted-foreground mt-2">
                      Warning: Unencrypted exports contain your passwords in
                      plain text
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Data Storage</CardTitle>
                  <CardDescription>
                    Manage how your data is stored and synced
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label className="text-base">Cloud Sync</Label>
                      <p className="text-sm text-muted-foreground">
                        Sync your passwords across all your devices
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label className="text-base">Local Backup</Label>
                      <p className="text-sm text-muted-foreground">
                        Create automatic backups on your device
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>

                  <div className="pt-4 border-t">
                    <Button variant="destructive" size="sm">
                      Delete All Data
                    </Button>
                    <p className="text-xs text-muted-foreground mt-2">
                      This will permanently delete all your passwords and
                      account data
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
