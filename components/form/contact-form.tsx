"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  message: z.string().min(2, {
    message: "Message must be at least 2 characters.",
  }),
  email: z.string().email(),
  subject: z.string().min(2, {
    message: "Subject must be at least 2 characters.",
  }),
})

export default function ContactForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      message: "",
      email: "",
      subject: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
    fetch("/api/send", {
      method: "POST",
      body: JSON.stringify({
        subject: values.subject,
        name: values.name,
        message: values.message.trim(),
        email: values.email,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 mt-2">
        <div className="border-y border-neutral-200 py-4 space-y-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="flex items-center gap-4">
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="Name" 
                    {...field} 
                    className="w-full focus-visible:ring-transparent border-neutral-200"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="flex items-center gap-4">
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Email"
                    type="email"
                    {...field}
                    className="w-full focus-visible:ring-transparent border-neutral-200"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="border-b border-neutral-200 py-4">
          <FormField
            control={form.control}
            name="subject"
            render={({ field }) => (
              <FormItem className="flex items-center gap-4">
                <FormLabel>Subject</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Subject"
                    {...field}
                    className="w-full focus-visible:ring-transparent border-neutral-200"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="border-b border-neutral-200 py-4">
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea
                    placeholder="Message"
                    {...field}
                    className="w-full focus-visible:ring-transparent border-neutral-200 min-h-[100px]"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="flex justify-end py-4">
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </Form>
  )
}