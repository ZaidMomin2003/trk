import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { productList } from "@/lib/products-data";

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
                  <div key={item.name} className="flex flex-col gap-1 rounded-lg border p-4">
                    <p className="font-semibold">{item.name}</p>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
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
