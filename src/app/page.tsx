"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { orders } from "@/lib/dummy-data";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Home() {
  const router = useRouter();
  const [trackingNumber, setTrackingNumber] = useState("");

  const handleTrackOrder = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (trackingNumber.trim() === "") {
        alert("Please enter a tracking number.");
        return;
    }
    
    const order = orders.find((o) => o.trackingNumber.toLowerCase() === trackingNumber.toLowerCase());
    if (order) {
      router.push(`/tracking/${order.id}`);
    } else {
      alert("Invalid tracking number");
    }
  };

  return (
    <div className="flex flex-col gap-8">
      <Card>
        <CardHeader>
          <CardTitle>Track a New Order</CardTitle>
          <CardDescription>
            Enter your Amazon tracking number to start monitoring your shipment.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleTrackOrder}>
            <div className="flex flex-col gap-2 sm:flex-row sm:space-x-2">
              <Input
                type="text"
                placeholder="Enter tracking number"
                className="flex-1"
                value={trackingNumber}
                onChange={(e) => setTrackingNumber(e.target.value)}
              />
              <Button type="submit" className="bg-primary hover:bg-accent">
                Check Track
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
