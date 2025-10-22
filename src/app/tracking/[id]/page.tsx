
import { orders } from "@/lib/dummy-data";
import { notFound } from "next/navigation";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Truck, Package, Home, CheckCircle2, CircleDot } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Order } from "@/lib/types";
import Link from "next/link";

const getStatusInfo = (order: Order) => {
  switch (order.status) {
    case "Delivered":
      return {
        progress: 100,
        color: "bg-green-500",
        label: `Delivered on ${order.estimatedDelivery}`,
      };
    case "Out for Delivery":
      return {
        progress: 80,
        color: "bg-primary",
        label: `Arriving on 26 October`,
      };
    case "Shipped":
      return {
        progress: 50,
        color: "bg-primary",
        label: `Arriving ${order.estimatedDelivery}`,
      };
    case "Ordered":
      return {
        progress: 10,
        color: "bg-primary",
        label: "Order confirmed",
      };
  }
};

const getIconForStatus = (status: string) => {
  const lowerCaseStatus = status.toLowerCase();
  if (lowerCaseStatus.includes("delivered")) return <CheckCircle2 className="h-5 w-5 text-green-500" />;
  if (lowerCaseStatus.includes("out for delivery")) return <Truck className="h-5 w-5 text-primary" />;
  if (lowerCaseStatus.includes("shipped") || lowerCaseStatus.includes("departed") || lowerCaseStatus.includes("in transit") || lowerCaseStatus.includes("pending")) return <Truck className="h-5 w-5 text-muted-foreground" />;
  if (lowerCaseStatus.includes("ordered") || lowerCaseStatus.includes("arrived") || lowerCaseStatus.includes("product checking")) return <Package className="h-5 w-5 text-muted-foreground" />;
  return <CircleDot className="h-5 w-5 text-muted-foreground" />;
};


export default function TrackingPage({ params }: { params: { id: string } }) {
  const order = orders.find((o) => o.id === params.id);

  if (!order) {
    notFound();
  }

  const statusInfo = getStatusInfo(order);

  return (
    <div className="grid gap-6">
      <Card>
        <CardHeader>
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <CardTitle className="text-xl font-bold text-primary md:text-2xl">
                {statusInfo.label}
              </CardTitle>
              <CardDescription>
                {order.status === "Delivered"
                  ? `Signed for by: ${order.shippedTo}`
                  : `Shipping to ${order.shippedTo}`}
              </CardDescription>
            </div>
            <p className="text-sm text-muted-foreground self-start sm:self-center">
              Tracking ID: {order.trackingNumber}
            </p>
          </div>
        </CardHeader>
        <CardContent>
          <Progress value={statusInfo.progress} />
          <div className="mt-2 flex justify-between text-xs text-muted-foreground">
            <span>Ordered</span>
            <span>Shipped</span>
            <span className="text-center">Out for Delivery</span>
            <span className="text-right">Delivered</span>
          </div>
        </CardContent>
      </Card>
      
      <div className="grid gap-6 md:grid-cols-3">
        <div className="md:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Tracking History</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="relative">
                <ul className="space-y-8">
                  {order.trackingHistory.map((event, index) => (
                    <li key={index} className="relative flex items-start pl-10">
                       <div className="absolute left-0 top-0 flex h-full w-10 justify-center">
                          {index !== order.trackingHistory.length -1 && (
                            <div className="w-px bg-border"></div>
                          )}
                          <div className={cn(
                            "absolute top-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-background",
                             index === 0 && "ring-4 ring-primary/20"
                           )}>
                             {index === 0 ? <CircleDot className="h-5 w-5 text-primary" /> : getIconForStatus(event.status)}
                           </div>
                       </div>
                      <div className="grid gap-1">
                        <p className={cn("font-semibold", index === 0 && "text-primary")}>
                          {event.status}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {event.location}
                        </p>
                        <time className="text-xs text-muted-foreground">
                          {event.date}, {event.time}
                        </time>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="space-y-6">
           <Card className="overflow-hidden">
                <CardHeader className="p-0">
                    <Image
                        src={order.productImage.startsWith('https') ? order.productImage : `/${order.productImage}`}
                        alt={order.productName}
                        width={400}
                        height={400}
                        className="w-full object-cover"
                        data-ai-hint="product image"
                    />
                </CardHeader>
                <CardContent className="p-4">
                    <h3 className="font-semibold">{order.productName}</h3>
                    <p className="text-sm text-muted-foreground">
                       This kit includes high-performance hardware, software licenses, and exclusive AWS swag.
                    </p>
                </CardContent>
                <CardContent className="grid grid-cols-2 gap-2 p-4 pt-0">
                    <Button variant="outline" asChild>
                        <Link href="/products">View your item</Link>
                    </Button>
                    <Button className="bg-primary hover:bg-accent" asChild>
                        <Link href="#">under process</Link>
                    </Button>
                </CardContent>
            </Card>
        </div>
      </div>
    </div>
  );
}
