"use client"

import { z } from "zod"; 
import { zodResolver } from "@hookform/resolvers/zod"
import { useTransition } from "react";
import { useForm } from "react-hook-form"
import Link from "next/link";
import { registerSchema } from "@/lib/formsSchemas";
import { actionRegister } from "@/actions/register";

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

export default function RegisterFrom() {

  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      email: "",
      password: "",
      name: "",
    },
  });

  const onSubmit = (values: z.infer<typeof registerSchema>) => {
    startTransition(() => {
      actionRegister(values);

      // TODO: Add success/error information
    });
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="mb-1 flex justify-center gap-2">
          <LockKeyhole />
          Register
        </CardTitle>
        <CardDescription className="text-center">Please register to continue</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Gazela" type="text" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
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
            <Button type="submit" className="w-full" disabled={isPending}>Create new account</Button>
          </form>
        </Form>
        <LoginSocial />
      </CardContent>
      <CardFooter className="flex justify-center gap-1">
        <p className="text-sm text-muted-foreground">Already registered?</p>
        <Link 
          href="/auth/login"
          className="text-sm font-medium hover:text-primary/90" 
        >
          Log in
        </Link>
      </CardFooter>
    </Card>
  );
}