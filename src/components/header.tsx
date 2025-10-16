import Link from "next/link";
import { Search, ShoppingCart, Bell, User, MapPin } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Logo from "@/components/logo";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 flex h-16 w-full items-center justify-between gap-4 bg-gray-800 px-4 text-white dark:bg-gray-900 md:px-6">
      <div className="flex items-center gap-6">
        <Link href="/" className="flex items-center gap-2">
          <Logo />
          <span className="sr-only">Swag Tracker</span>
        </Link>
        <Button variant="ghost" className="hidden items-center gap-2 text-left lg:flex">
          <MapPin className="h-5 w-5" />
          <div>
            <p className="text-xs">Deliver to</p>
            <p className="font-bold">Muddebihal, 586 212</p>
          </div>
        </Button>
      </div>

      <div className="flex-1 px-4 lg:px-12">
        <form>
          <div className="relative">
            <Input
              type="search"
              placeholder="Search Swag Tracker"
              className="w-full rounded-lg bg-white text-black focus:ring-primary"
            />
            <Button
              type="submit"
              size="icon"
              className="absolute right-0 top-0 h-full rounded-l-none rounded-r-lg bg-primary hover:bg-accent"
            >
              <Search className="h-5 w-5 text-black" />
            </Button>
          </div>
        </form>
      </div>

      <div className="flex items-center gap-2 md:gap-4">
        <Button variant="ghost" size="icon">
          <Bell className="h-6 w-6" />
          <span className="sr-only">Notifications</span>
        </Button>
        <Button variant="ghost" size="icon">
          <ShoppingCart className="h-6 w-6" />
          <span className="sr-only">Cart</span>
        </Button>
        <Button variant="ghost" size="icon">
          <User className="h-6 w-6" />
          <span className="sr-only">Account</span>
        </Button>
      </div>
    </header>
  );
}
