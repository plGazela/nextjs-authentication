"use client"

import { z } from "zod"; 
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import Link from "next/link";
import { loginSchema } from "@/lib/formsSchemas";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { LoginSocial } from "@/components/LoginSocial";
import { LockKeyhole } from 'lucide-react';

export default function LoginFrom() {

  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof loginSchema>) => {
    console.log(values);
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="mb-1 flex justify-center gap-2">
          <LockKeyhole />
          Login
        </CardTitle>
        <CardDescription className="text-center">Please Sign In to continue</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>E-Mail</FormLabel>
                  <FormControl>
                    <Input placeholder="gazela@github.com" type="email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input placeholder="********" type="password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full">Sign In</Button>
          </form>
        </Form>
        <LoginSocial />
      </CardContent>
      <CardFooter className="flex justify-center gap-1">
        <p className="text-sm text-muted-foreground">Don't have account?</p>
        <Link 
          href="/auth/register"
          className="text-sm font-medium hover:text-primary/90" 
        >
          Sign Up
        </Link>
      </CardFooter>
    </Card>
  );
}