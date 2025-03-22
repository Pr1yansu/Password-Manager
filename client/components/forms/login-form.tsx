"use client";

import {z} from "zod";
import {ArrowRight, Lock, Mail} from "lucide-react";
import {zodResolver} from "@hookform/resolvers/zod";
import {useForm} from "react-hook-form";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage,} from "@/components/ui/form";
import {useLoginUserMutation} from "@/store/api/auth";
import {useTransition} from "react";

const formSchema = z.object({
    username: z
        .string()
        .min(2, {
            message: "Username or Email is required",
        })
        .max(200, {
            message: "Username or Email is too long",
        }),
    password: z.string().min(0, {
        message: "Password is required",
    }),
});

export default function LoginForm() {
    const [loginUser] = useLoginUserMutation();
    const [isPending, startTransition] = useTransition()

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
            password: "",
        },
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
        startTransition(()=>{
             loginUser({
                username: values.username,
                password: values.password,
                email:values.username,
                ipAddress: "192.168.1.1",
                userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36",
                deviceName: "John's Laptop",
                deviceType: "Laptop",
                osName: "Windows",
                osVersion: "10",
                browserName: "Chrome",
                browserVersion: "119.0.0.0",
                location: "Lagos, Nigeria",
            }).unwrap().then((result) => {
                console.log("result", result);
            }).catch((error) => {
                 console.log("error", error);
                form.setError("username", {
                    type: "manual",
                    message: error.data?.message || "An error occurred",
                });
            });
        })
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                    control={form.control}
                    name="username"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>Username or Email</FormLabel>
                            <FormControl>
                                <div className="relative">
                                    <Mail
                                        className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4"/>
                                    <Input
                                        id="email"
                                        type="email"
                                        placeholder="'example' or 'you@example.com'"
                                        className="pl-10"
                                        {...field}
                                        required
                                    />
                                </div>
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="password"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>Password</FormLabel>
                            <FormControl>
                                <div className="relative">
                                    <Lock
                                        className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4"/>
                                    <Input
                                        id="password"
                                        type="password"
                                        placeholder="••••••••"
                                        className="pl-10"
                                        {...field}
                                        required
                                    />
                                </div>
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                    )}
                />
                <Button type="submit" className="w-full" loading={isPending}>
                    Log In
                    <ArrowRight className="ml-2 h-4 w-4"/>
                </Button>
            </form>
        </Form>
    );
}
