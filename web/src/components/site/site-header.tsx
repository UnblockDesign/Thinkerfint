"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { MenuIcon } from "lucide-react"

import { Button, buttonVariants } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Separator } from "@/components/ui/separator"
import { Logo } from "@/components/site/logo"
import { cn } from "@/lib/utils"

export const products = [
  {
    title: "Digital Lending",
    href: "/#products",
    description: "End-to-end digital lending on top of your existing core.",
  },
  {
    title: "Loan Origination",
    href: "/products/loan-origination",
    description: "Guided origination workflows with governed decisions.",
  },
  {
    title: "Databridge",
    href: "/products/databridge",
    description: "Governed integrations with core and data providers.",
  },
]

const links = [
  { title: "Services", href: "/services" },
  { title: "Newsroom", href: "/newsroom" },
  { title: "About", href: "/about" },
]

// One set of states for every menu item (desktop links, Products trigger,
// dropdown items, mobile menu): hover and open = light grey, press = darker
// grey, current page = primary text, disabled = 50% and not clickable.
const navItemClass = cn(
  "rounded-lg px-2.5 py-2 text-sm font-medium text-[#354053] transition-colors outline-none",
  "hover:bg-muted active:bg-border",
  "focus-visible:ring-3 focus-visible:ring-ring/50",
  "aria-[current=page]:text-primary data-active:text-primary",
  "aria-disabled:pointer-events-none aria-disabled:opacity-50 data-disabled:pointer-events-none data-disabled:opacity-50"
)

const ctaClass = cn(
  buttonVariants(),
  "h-10 rounded-[4px] px-[22px] text-sm font-semibold"
)

export function SiteHeader() {
  const pathname = usePathname()
  // A section stays current on its sub-pages (e.g. a Newsroom article)
  const isCurrent = (href: string) =>
    !href.includes("#") &&
    (pathname === href || pathname.startsWith(`${href}/`))
  const isProductsPage = products.some((item) => isCurrent(item.href))

  return (
    <header className="sticky top-0 z-40 border-b bg-white">
      <div className="relative mx-auto flex h-[76px] w-full max-w-[1440px] items-center justify-between px-4 md:px-10 lg:px-[88px]">
        <Logo />

        <NavigationMenu className="absolute left-1/2 hidden -translate-x-1/2 lg:flex">
          <NavigationMenuList className="gap-2">
            <NavigationMenuItem>
              <NavigationMenuTrigger
                className={cn(navItemClass, isProductsPage && "text-primary")}
              >
                Products
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[320px] gap-1 p-1">
                  {products.map((item) => (
                    <li key={item.title}>
                      <NavigationMenuLink
                        render={<Link href={item.href} />}
                        active={isCurrent(item.href)}
                        className={cn(
                          navItemClass,
                          "flex-col items-start gap-0.5"
                        )}
                      >
                        <span>{item.title}</span>
                        <span className="text-xs text-muted-foreground">
                          {item.description}
                        </span>
                      </NavigationMenuLink>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            {links.map((link) => (
              <NavigationMenuItem key={link.title}>
                <NavigationMenuLink
                  render={<Link href={link.href} />}
                  active={isCurrent(link.href)}
                  className={navItemClass}
                >
                  {link.title}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center gap-3">
          <Link href="#contact" className={cn(ctaClass, "hidden sm:inline-flex")}>
            Consult Our Expert
          </Link>
          <Sheet>
            <SheetTrigger
              render={
                <Button variant="ghost" size="icon" className="lg:hidden" />
              }
            >
              <MenuIcon className="size-5" />
              <span className="sr-only">Open menu</span>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px]">
              <SheetHeader>
                <SheetTitle>
                  <Logo />
                </SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-1 px-4">
                <p className="px-2 pt-2 text-xs text-muted-foreground uppercase">
                  Products
                </p>
                {products.map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    aria-current={isCurrent(item.href) ? "page" : undefined}
                    className={navItemClass}
                  >
                    {item.title}
                  </Link>
                ))}
                <Separator className="my-2" />
                {links.map((link) => (
                  <Link
                    key={link.title}
                    href={link.href}
                    aria-current={isCurrent(link.href) ? "page" : undefined}
                    className={navItemClass}
                  >
                    {link.title}
                  </Link>
                ))}
                <Link href="#contact" className={cn(ctaClass, "mt-4")}>
                  Consult Our Expert
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
