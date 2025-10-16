"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { orders } from "@/lib/dummy-data";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export default function Home() {
  const router = useRouter();
  const [trackingNumber, setTrackingNumber] = useState("");

  const getStatusVariant = (
    status: "Delivered" | "Out for Delivery" | "Shipped" | "Ordered"
  ): "default" | "secondary" | "outline" => {
    switch (status) {
      case "Delivered":
        return "secondary";
      case "Out for Delivery":
        return "default";
      case "Shipped":
        return "outline";
      default:
        return "secondary";
    }
  };

  const handleTrackOrder = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (trackingNumber === "Zaidaws@123456") {
      router.push("/tracking/Arshad-LLM-2025-2568634512");
    } else {
      // Optional: handle other tracking numbers or show an error
      const order = orders.find((o) => o.trackingNumber.toLowerCase() === trackingNumber.toLowerCase());
      if (order) {
        router.push(`/tracking/${order.id}`);
      } else {
        alert("Invalid tracking number");
      }
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
            <div className="flex w-full items-center space-x-2">
              <Input
                type="text"
                placeholder="Enter tracking number"
                className="flex-1"
                value={trackingNumber}
                onChange={(e) => setTrackingNumber(e.target.value)}
              />
              <Button type="submit" className="bg-primary hover:bg-accent">
                Add Order
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
      
      <div className="space-y-4">
        <h1 className="text-2xl font-bold tracking-tight">Your Orders</h1>
        <div className="grid gap-6">
          {orders.map((order) => (
            <Card key={order.id} className="overflow-hidden">
              <div className="flex flex-col sm:flex-row">
                <div className="flex-shrink-0 bg-white p-4">
                   <Image
                    src={order.productImage}
                    alt={order.productName}
                    width={150}
                    height={150}
                    className="h-24 w-24 rounded-md object-cover sm:h-32 sm:w-32"
                    data-ai-hint="product image"
                  />
                </div>
                <div className="flex flex-1 flex-col">
                  <CardHeader className="flex-row items-start justify-between">
                    <div>
                       <Badge variant={getStatusVariant(order.status)}
                        className={cn(
                          order.status === 'Out for Delivery' && 'bg-primary text-primary-foreground',
                          order.status === 'Delivered' && 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300'
                        )}
                       >
                         {order.status}
                       </Badge>
                      <CardTitle className="mt-2 text-lg">
                        {order.productName}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Arriving by {order.estimatedDelivery}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Tracking ID: {order.trackingNumber}
                    </p>
                  </CardContent>
                  <CardFooter className="mt-auto bg-slate-50 dark:bg-slate-800/50 p-4">
                    <Link href={`/tracking/${order.id}`} className="w-full">
                      <Button className="w-full sm:w-auto bg-primary hover:bg-accent">
                        Track Package
                      </Button>
                    </Link>
                  </CardFooter>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}