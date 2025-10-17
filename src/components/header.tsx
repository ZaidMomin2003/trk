import Link from "next/link";
import { Search, MapPin } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Logo from "@/components/logo";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 flex h-16 w-full items-center justify-between gap-2 bg-gray-800 px-2 text-white dark:bg-gray-900 md:px-6 md:gap-4">
      <div className="flex items-center gap-2 md:gap-6">
        <Link href="/" className="flex items-center gap-2">
          <Logo className="hidden sm:block" />
          <Logo width="40" height="40" className="sm:hidden" />
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

      <div className="flex-1 px-2 sm:px-4 lg:px-12">
        <form>
          <div className="relative">
            <Input
              type="search"
              placeholder="Search Swag Tracker"
              className="w-full rounded-lg bg-white text-black focus:ring-primary pr-10"
            />
            <Button
              type="submit"
              size="icon"
              className="absolute right-0 top-0 h-full w-10 rounded-l-none rounded-r-lg bg-primary hover:bg-accent"
            >
              <Search className="h-5 w-5 text-black" />
            </Button>
          </div>
        </form>
      </div>
    </header>
  );
}
