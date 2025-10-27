import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { productList } from "@/lib/products-data";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CheckCircle } from "lucide-react";

export default function ProductsPage() {
  return (
    <div className="flex flex-col gap-8">
      <Card>
        <CardHeader>
          <CardTitle>AWS SWAG Builder Kit Contents</CardTitle>
          <CardDescription>
            Here is a list of all items included in your kit.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-6">
          {productList.map((category) => (
            <div key={category.category}>
              <h2 className="mb-4 text-xl font-bold">{category.category}</h2>
              <div className="grid gap-4">
                {category.items.map((item) => (
                  <div
                    key={item.name}
                    className="flex flex-col gap-2 rounded-lg border p-4 sm:flex-row sm:items-center sm:justify-between"
                  >
                    <div className="flex items-start gap-4">
                      {category.category === "Software Access & Licenses" && (
                        <div className="flex items-center gap-2 text-green-500 mt-1">
                          <CheckCircle className="h-5 w-5" />
                          <span className="text-sm font-semibold">Delivered</span>
                        </div>
                      )}
                      <div className="flex flex-col gap-1">
                        <p className="font-semibold">{item.name}</p>
                        <p className="text-sm text-muted-foreground">
                          {item.description}
                        </p>
                        {item.price && (
                          <p className="text-sm font-bold">{item.price}</p>
                        )}
                      </div>
                    </div>
                    {item.amazonLink && (
                      <Button asChild className="mt-2 sm:mt-0 sm:ml-4 flex-shrink-0">
                        <Link href={item.amazonLink} target="_blank">
                          View Product
                        </Link>
                      </Button>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
