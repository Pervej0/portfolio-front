"use client";

import CustomContainer from "@/shared/ui/CustomContainer";
import React, { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Label } from "../ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { Textarea } from "../ui/textarea";
import { House, Mail, Phone } from "lucide-react";
import emailjs from "@emailjs/browser";
import { Toaster, toast } from "sonner";
import { usePathname, useSearchParams } from "next/navigation";

const formSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters long"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Please, enter valid message"),
});

type FormData = z.infer<typeof formSchema>;

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  useEffect(() => {
    if (pathname === "/" && window.location.hash === "#contact") {
      const section = document.querySelector("#contact");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [pathname]);

  const onSubmit = (data: FormData) => {
    emailjs
      .sendForm(
        process.env.EMAIL_SERVICE_ID as string,
        process.env.CONTACT_EMAIL_TEMP_ID as string,
        form.current as any,
        {
          publicKey: process.env.PUBLIC_KEY,
        }
      )
      .then(
        () => {
          toast("Successfully message sent!");
          console.log("SUCCESS!");
          reset();
        },
        (error: any) => {
          toast(error.text || "There is an error to sent your message!");
          console.log("FAILED...", error);
          reset();
        }
      );
  };

  return (
    <>
      <Toaster />
      <section className="bg-[#303030] py-6 mt-6" id="contact">
        <CustomContainer title="Contact Us" className="mt-5 px-4 md:px-auto">
          <div className="flex gap-10 md:justify-between justify-center md:flex-row flex-col items-center py-10">
            <Card className="bg-transparent border-0 md:w-1/2 w-full md:p-4 p-0 m-0">
              <CardContent>
                <form
                  ref={form}
                  onSubmit={handleSubmit(onSubmit)}
                  className="space-y-3"
                >
                  <div>
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" {...register("fullName")} />
                    {errors.fullName && (
                      <p className="text-red-500 text-sm pt-1">
                        {errors.fullName.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <Label htmlFor="name">Email</Label>
                    <Input id="email" type="email" {...register("email")} />
                    {errors.email && (
                      <p className="text-red-500 text-sm pt-1">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <Textarea
                      id="message"
                      placeholder="Message here"
                      className="resize-none"
                      {...register("message")}
                    />
                    {errors.message && (
                      <p className="text-red-500 text-sm pt-1">
                        {errors.message.message}
                      </p>
                    )}
                  </div>
                  <Button
                    type="submit"
                    className="uppercase px-6 border-2 rounded"
                  >
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
      </section>
    </>
  );
};

export default Contact;
