import React from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    alert("Message sent successfully!");
  };

  return (
    <div className="container mx-auto px-4 md:px-6 py-16 lg:py-24 max-w-5xl">
      <div className="text-center mb-16">
        <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4">Contact Us</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Have questions about RxFinance? We're here to help. Reach out to our team of experts.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-1 space-y-6">
          <Card className="border-gray-100 shadow-sm">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center text-lg">
                <Mail className="h-5 w-5 mr-2 text-primary" />
                Email
              </CardTitle>
            </CardHeader>
            <CardContent>
              <a href="mailto:teslatexas01@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                teslatexas01@gmail.com
              </a>
            </CardContent>
          </Card>
          
          <Card className="border-gray-100 shadow-sm bg-gray-50">
            <CardContent className="pt-6">
              <h3 className="font-bold text-foreground mb-2">Support Hours</h3>
              <p className="text-sm text-muted-foreground">Monday - Friday</p>
              <p className="text-sm text-muted-foreground">9:00 AM - 5:00 PM EST</p>
            </CardContent>
          </Card>
        </div>

        <div className="md:col-span-2">
          <Card className="border-gray-100 shadow-sm">
            <CardHeader>
              <CardTitle>Send us a message</CardTitle>
              <CardDescription>We'll get back to you as soon as possible.</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="first-name" className="text-sm font-medium text-foreground">First Name</label>
                    <Input id="first-name" placeholder="Jane" required data-testid="input-first-name" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="last-name" className="text-sm font-medium text-foreground">Last Name</label>
                    <Input id="last-name" placeholder="Doe" required data-testid="input-last-name" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-foreground">Email</label>
                  <Input id="email" type="email" placeholder="jane@example.com" required data-testid="input-email" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-foreground">Message</label>
                  <Textarea id="message" placeholder="How can we help?" rows={5} required data-testid="input-message" />
                </div>
                <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white" data-testid="btn-submit-contact">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
