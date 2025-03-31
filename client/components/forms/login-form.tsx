"use client";
import {z} from "zod";
import {ArrowRight, Lock, Mail} from "lucide-react";
import {zodResolver} from "@hookform/resolvers/zod";
import {useForm} from "react-hook-form";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {useLoginUserMutation} from "@/store/api/auth";
import {useEffect, useState, useTransition} from "react";
import {getIpAddress, getLocation, getUserAgentInfo} from "@/functions";

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
    const [isPending, startTransition] = useTransition();
    const [mounted, setMounted] = useState(false);
    const [document, setDocument] = useState<null | Document>(null);
    const [error, setError] = useState<string | null>(null);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
            password: "",
        },
    });

    useEffect(() => {
        if (mounted && document) {
            return;
        }
        if (typeof window !== "undefined") {
            setDocument(window.document);
            setMounted(true);
        }
    }, [document, mounted]);

    if (!mounted) {
        return null;
    }

    async function onSubmit(values: z.infer<typeof formSchema>) {
        startTransition(async () => {
            const ipAddress = await getIpAddress();
            const userAgentInfo = getUserAgentInfo();
            const locationData = await getLocation();

            const res = await loginUser({
                usernameOrEmail: values.username,
                password: values.password,
                ipAddress: ipAddress || "Unknown IP",
                userAgent: userAgentInfo.userAgent,
                deviceName: userAgentInfo.deviceName,
                deviceType: userAgentInfo.deviceType,
                osName: userAgentInfo.osName,
                osVersion: userAgentInfo.osVersion,
                browserName: userAgentInfo.browserName,
                browserVersion: userAgentInfo.browserVersion,
                location: locationData?.location || "Unknown Location",
            }).unwrap();

            console.log(res);
            if (res.success) {
                const { token } = res.data;
                if (document) {
                    document.cookie = `${process.env.NEXT_PUBLIC_COOKIE_KEY}=${token}; path=/`;
                }
            } else {
                setError("Invalid username or password");
            }
            setTimeout(() => {
                setError(null);
            }, 5000);
        });
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
                {error && <FormMessage>{error}</FormMessage>}
                <Button type="submit" className="w-full" loading={isPending}>
                    Log In
                    <ArrowRight className="ml-2 h-4 w-4"/>
                </Button>
            </form>
        </Form>
    );
}
