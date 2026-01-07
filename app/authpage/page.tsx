"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function AuthPage() {
  return (
    <div className="min-h-screen flex items-center justify-center ">
      <Tabs defaultValue="login" className="w-full max-w-md">
        
        

        
        <TabsContent value="login">
          <Card>
            <div className="mx-auto"><TabsList className="grid grid-cols-2 mb-6">
          <TabsTrigger value="login">Login</TabsTrigger>
          <TabsTrigger value="register">Register</TabsTrigger>
        </TabsList></div>
            <CardHeader>
              <CardTitle>Welcome back </CardTitle>
              <CardDescription>
                Enter your email and password to login
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="ram@email.com" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" />
              </div>

              <Button className="w-full">Login</Button>
            </CardContent>
          </Card>
        </TabsContent>

        
        <TabsContent value="register">
          <Card>
            <CardHeader>
              <CardTitle>Create an account </CardTitle>
              <CardDescription>
                Fill the form to create a new account
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Ram Sah" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="ram@email.com" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" />
              </div>

              <Button className="w-full">Register</Button>
            </CardContent>
          </Card>
        </TabsContent>

      </Tabs>
    </div>
  )
}
