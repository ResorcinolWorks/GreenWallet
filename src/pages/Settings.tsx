
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { mockUser } from "@/lib/data";
import { 
  User, Bell, Shield, CreditCard, LogOut, 
  ChevronRight, Smartphone, Mail, Eye
} from "lucide-react";

const Settings = () => {
  return (
    <div className="container py-6 space-y-6 max-w-6xl">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
        <p className="text-muted-foreground">
          Manage your account and preferences
        </p>
      </div>

      <Tabs defaultValue="profile" className="w-full">
        <TabsList className="grid grid-cols-4 mb-6">
          <TabsTrigger value="profile" className="flex items-center gap-2">
            <User className="h-4 w-4" />
            <span className="hidden sm:inline">Profile</span>
          </TabsTrigger>
          <TabsTrigger value="notifications" className="flex items-center gap-2">
            <Bell className="h-4 w-4" />
            <span className="hidden sm:inline">Notifications</span>
          </TabsTrigger>
          <TabsTrigger value="privacy" className="flex items-center gap-2">
            <Shield className="h-4 w-4" />
            <span className="hidden sm:inline">Privacy</span>
          </TabsTrigger>
          <TabsTrigger value="payment" className="flex items-center gap-2">
            <CreditCard className="h-4 w-4" />
            <span className="hidden sm:inline">Payment</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="profile" className="space-y-4">
          <Card className="eco-card">
            <CardHeader>
              <CardTitle>Profile Information</CardTitle>
              <CardDescription>
                Update your personal information
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-center mb-6">
                <div className="w-24 h-24 rounded-full bg-muted flex items-center justify-center">
                  <span className="text-3xl font-semibold">
                    {mockUser.name.charAt(0)}
                  </span>
                </div>
              </div>
            
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" defaultValue={mockUser.name} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" defaultValue={mockUser.email} type="email" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" placeholder="Enter your phone number" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="city">City</Label>
                  <Input id="city" placeholder="Enter your city" />
                </div>
              </div>
              
              <div className="flex justify-end">
                <Button>Save Changes</Button>
              </div>
            </CardContent>
          </Card>

          <Card className="eco-card">
            <CardHeader>
              <CardTitle>Account Settings</CardTitle>
              <CardDescription>
                Manage your account preferences
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <Label className="text-base">Currency</Label>
                  <p className="text-sm text-muted-foreground">
                    Change your preferred currency
                  </p>
                </div>
                <div className="flex items-center">
                  <span className="mr-2 font-medium">₹ INR</span>
                  <ChevronRight className="h-4 w-4 text-muted-foreground" />
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <Label className="text-base">Carbon Calculation Method</Label>
                  <p className="text-sm text-muted-foreground">
                    Select how we calculate your carbon footprint
                  </p>
                </div>
                <div className="flex items-center">
                  <span className="mr-2 font-medium">Standard</span>
                  <ChevronRight className="h-4 w-4 text-muted-foreground" />
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <Label className="text-base">Change Password</Label>
                  <p className="text-sm text-muted-foreground">
                    Update your account password
                  </p>
                </div>
                <Button variant="outline" className="gap-1">
                  <Eye className="h-4 w-4" />
                  <span>Update</span>
                </Button>
              </div>
              
              <div className="pt-2">
                <Button variant="destructive" className="gap-1">
                  <LogOut className="h-4 w-4" />
                  <span>Sign Out</span>
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications" className="space-y-4">
          <Card className="eco-card">
            <CardHeader>
              <CardTitle>Notification Preferences</CardTitle>
              <CardDescription>
                Manage how you receive notifications
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-base font-medium">Transaction Alerts</h3>
                
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="new-transactions">New Transactions</Label>
                    <p className="text-sm text-muted-foreground">
                      Get notified about new spending
                    </p>
                  </div>
                  <Switch id="new-transactions" defaultChecked />
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="carbon-heavy">Carbon-Heavy Purchases</Label>
                    <p className="text-sm text-muted-foreground">
                      Alert when you make high-impact purchases
                    </p>
                  </div>
                  <Switch id="carbon-heavy" defaultChecked />
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="weekly-summary">Weekly Summary</Label>
                    <p className="text-sm text-muted-foreground">
                      Receive weekly spending and impact reports
                    </p>
                  </div>
                  <Switch id="weekly-summary" />
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-base font-medium">Notification Channels</h3>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Mail className="h-5 w-5 text-muted-foreground" />
                    <Label>Email Notifications</Label>
                  </div>
                  <Switch defaultChecked />
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Smartphone className="h-5 w-5 text-muted-foreground" />
                    <Label>Push Notifications</Label>
                  </div>
                  <Switch defaultChecked />
                </div>
              </div>
              
              <div className="flex justify-end">
                <Button>Save Preferences</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="privacy" className="space-y-4">
          <Card className="eco-card">
            <CardHeader>
              <CardTitle>Privacy Settings</CardTitle>
              <CardDescription>
                Control your data and privacy preferences
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label className="text-base">Data Collection</Label>
                    <p className="text-sm text-muted-foreground">
                      Allow us to collect transaction data for eco analysis
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label className="text-base">Anonymous Statistics</Label>
                    <p className="text-sm text-muted-foreground">
                      Share anonymous data to improve eco calculations
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label className="text-base">Marketing Communications</Label>
                    <p className="text-sm text-muted-foreground">
                      Receive offers about sustainable products and services
                    </p>
                  </div>
                  <Switch />
                </div>
              </div>
              
              <div className="space-y-2">
                <Button variant="outline" className="w-full justify-start text-left">
                  Download Your Data
                </Button>
                <Button variant="outline" className="w-full justify-start text-left text-red-600 hover:text-red-700 hover:bg-red-50">
                  Delete Your Account
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="payment" className="space-y-4">
          <Card className="eco-card">
            <CardHeader>
              <CardTitle>Connected Accounts</CardTitle>
              <CardDescription>
                Manage your linked bank accounts and payment methods
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="border rounded-lg divide-y">
                <div className="flex items-center justify-between p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                      <span className="text-blue-800 font-semibold">SB</span>
                    </div>
                    <div>
                      <div className="font-medium">State Bank</div>
                      <div className="text-sm text-muted-foreground">••••4567</div>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm">Disconnect</Button>
                </div>
                
                <div className="flex items-center justify-between p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                      <span className="text-green-800 font-semibold">HD</span>
                    </div>
                    <div>
                      <div className="font-medium">HDFC Bank</div>
                      <div className="text-sm text-muted-foreground">••••8901</div>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm">Disconnect</Button>
                </div>
              </div>
              
              <Button className="w-full">Connect New Account</Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Settings;
