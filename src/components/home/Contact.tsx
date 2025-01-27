"use client";

import CustomContainer from "@/shared/ui/CustomContainer";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Label } from "../ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { Textarea } from "../ui/textarea";
import { House, Mail, Phone } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters long"),
  email: z.string().email("Invalid email address"),
  message: z.string().email("Enter your message"),
});

type FormData = z.infer<typeof formSchema>;

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: FormData) => {
    console.log("Form submitted:", data);
  };
  return (
    <CustomContainer title="Contact Us" className="mb-10 mt-5">
      <div className="flex gap-10 justify-between md:flex-row flex-col items-center py-10">
        <Card className="bg-transparent border-0 md:w-1/2 w-full p-4">
          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              {/* Name Field */}
              <div>
                <Label htmlFor="name">Name</Label>
                <Input id="name" {...register("name")} />
                {errors.name && (
                  <p className="text-red-500 text-sm">{errors.name.message}</p>
                )}
              </div>
              <div>
                <Label htmlFor="name">Email</Label>
                <Input id="email" {...register("email")} />
                {errors.name && (
                  <p className="text-red-500 text-sm">{errors.name.message}</p>
                )}
              </div>
              <Textarea
                id="message"
                placeholder="Message here"
                className="resize-none"
                {...register("message")}
              />
              {errors.message && (
                <p className="text-red-500 text-sm">{errors.message.message}</p>
              )}
              {/* Submit Button */}
              <Button type="submit" className="uppercase px-6 border-2 rounded">
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>
        <div className="md:w-1/2 w-full">
          <div className="flex gap-6 flex-col">
            <div className="flex items-center gap-x-8">
              <div>
                <span>
                  <House />
                </span>
              </div>
              <div>
                <h3 className="text-2xl tracking-wider mb-2">Location</h3>
                <h6 className="text-md">
                  Cha-95/2/B, North Badda, Dhaka Bangladesh
                </h6>
              </div>
            </div>
            <div className="flex items-center gap-x-8">
              <div>
                <span>
                  <Phone />
                </span>
              </div>
              <div>
                <h3 className="text-xl tracking-wider mb-2">Phone</h3>
                <h6 className="text-md">+88 01685445764</h6>
              </div>
            </div>
            <div className="flex items-center gap-x-8">
              <div>
                <span>
                  <Mail />
                </span>
              </div>
              <div>
                <h3 className="text-xl tracking-wider mb-2">Email</h3>
                <h6 className="text-md">mdpervejhossain0@gmail.com</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </CustomContainer>
  );
};

export default Contact;
