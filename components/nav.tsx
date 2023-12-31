"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./nav.module.css";

import { cn } from "@/lib/utils";
import Logo from "@/public/MyLogo.png";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const components: { title: string; href: string; description: string[] }[] = [
  {
    title: "Need another developer on your team?",
    href: "/contact/contract",
    description: ["Let me know how to be a valuable addition to your team! "],
  },
  {
    title: "Need help creating or updating a website for your buisness?",
    href: "/contact/designing",
    description: ["I can help you create the website your buisness deservse!"],
  },
  {
    title: "Need help creating a SASS?",
    href: "/contact/developing",
    description: [
      "I can help you create your software as a service buisness ideas!",
    ],
  },
  {
    title: "Jordan Ready",
    href: "/contact",
    description: ["Software Developer", " | ", "Get in touch"],
  },
];

export function NavigationMenuDemo() {
  return (
    <div className={styles.container}>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem className="shadow-purple-300 dark:shadow-purple-700  shadow-sm border border-b-1 gap-2">
            <NavigationMenuTrigger className=" dark:text-purple-300">
              <Link href={"/projects"}>Projects</Link>
            </NavigationMenuTrigger>
            <NavigationMenuContent className={styles.menuContainer}>
              <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-3">
                  <Link href={"/projects"}>
                    <NavigationMenuLink className={styles.logoContainer}>
                      <div>
                        <Image
                          src={Logo}
                          alt="Logo"
                          width={130}
                          height={130}
                          className="rounded-full"
                          loading="lazy"
                          placeholder="blur"
                          sizes="fill"
                        />
                      </div>

                      <div className="mb-2 mt-4 text-lg font-medium">
                        Check these out!
                      </div>
                      <p className="text-sm leading-tight text-muted-foreground">
                        These are some of the projects I've made on my web
                        development journey!
                      </p>
                    </NavigationMenuLink>
                  </Link>
                </li>
                <ListItem href="/frontend" title="Front End">
                  Here are some layout designs and front end projects.
                </ListItem>
                <ListItem href="/fullstack" title="Full Stack">
                  Here are applications that use databases and apis.
                </ListItem>
                <ListItem href="/production-sites" title="Production Sites">
                  Here are some profesional sites hosted in production right
                  now!
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem className="shadow-purple-300 dark:shadow-purple-700 shadow-sm border border-b-1 gap-2">
            <NavigationMenuTrigger className=" dark:text-purple-300">
              Services
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul
                className={`grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ${styles.listContainer}`}
              >
                {components.map((component, index) => (
                  <ListItem
                    key={component.title}
                    title={component.title}
                    href={component.href}
                    className={`${styles.listItem} ${
                      index === components.length - 1 ? styles.lastItem : ""
                    }`}
                  >
                    {component.description.length > 1 && <br />}
                    <span className="text-sm text-muted-foreground">
                      {component.description}
                    </span>
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem className="shadow-purple-300 dark:shadow-purple-700  shadow-sm border border-b-1 gap-2">
            <Link href="/about" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                <span className=" dark:text-purple-300"> About</span>
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem className=" shadow-purple-300 dark:shadow-purple-700  shadow-sm border border-b-1 gap-2">
            <Link href="/contact" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                <span className=" dark:text-purple-300"> Contact</span>
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
