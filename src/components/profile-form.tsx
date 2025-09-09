"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const profileFormSchema = z.object({
  email: z.string().email(),
  fullName: z.string().min(2, "Full name must be at least 2 characters."),
  designation: z.string(),
  architectDesignation: z.string(),
});

type ProfileFormValues = z.infer<typeof profileFormSchema>;

// This can be expanded or moved to a data file
const designations = ['President', 'Vice President', 'Senior Director', 'Director', 'Program Manager', 'Senior Manager', 'Manager', 'Senior Associate', 'Architect', 'Senior Architect', 'Chief Architect'];
const architectDesignations = ['Enterprise Architect', 'Solution Architect', 'Data Architect', 'Cloud Architect', 'Security Architect', 'None'];


export function UserProfileForm() {
  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileFormSchema),
    // In a real app, you'd fetch this data. For the POC, we use defaults.
    defaultValues: {
      email: "architect@capgemini.com",
      fullName: "Alex Architect",
      designation: "Senior Architect",
      architectDesignation: "Solution Architect"
    },
  });

  function onSubmit(data: ProfileFormValues) {
    // In a real app, this would update the user's profile in Firestore
    console.log("Profile submitted:", data);
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>User Details</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email Address</FormLabel>
                  <FormControl>
                    <Input placeholder="Your email" {...field} readOnly className="bg-muted/50"/>
                  </FormControl>
                   <FormDescription>
                    Your email address is managed by your organization.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., Jane Doe" {...field} />
                  </FormControl>
                   <FormDescription>
                    This name will be used for personalization across the app.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
             <FormField
              control={form.control}
              name="designation"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Capgemini Designation</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your primary designation" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {designations.map(d => <SelectItem key={d} value={d}>{d}</SelectItem>)}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
             <FormField
              control={form.control}
              name="architectDesignation"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Architect Designation</FormLabel>
                   <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your architect-specific role" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {architectDesignations.map(d => <SelectItem key={d} value={d}>{d}</SelectItem>)}
                    </SelectContent>
                  </Select>
                  <FormDescription>
                    Select your specialized architect role, if applicable.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Save Profile</Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
