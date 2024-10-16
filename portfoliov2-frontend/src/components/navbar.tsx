import { Kbd } from "@nextui-org/kbd";
import { Link } from "@nextui-org/link";
import { Input } from "@nextui-org/input";
import {motion} from "framer-motion";
import {
  Navbar as NextUINavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/navbar";

import { siteConfig } from "@/config/site";
//import { ThemeSwitch } from "@/components/theme-switch";
import {
  GithubIcon,
  SearchIcon,
} from "@/components/icons";
import { Logo } from "@/components/icons";
import HoverInHackerTyper from "./animations/hoverinhackertyper";

export const Navbar = () => {
  const searchInput = (
    <Input
      aria-label="Search"
      classNames={{
        inputWrapper: "bg-default-100",
        input: "text-sm",
      }}
      endContent={
        <Kbd className="hidden lg:inline-block" keys={["command"]}>
          K
        </Kbd>
      }
      labelPlacement="outside"
      placeholder="Search..."
      startContent={
        <SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
      }
      type="search"
    />
  );

  return (
    <>
    <motion.div initial= {{opacity:0, y: -50}} animate= {{opacity: 1, y: 0}} transition={{ duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }}>
    <NextUINavbar maxWidth="xl" position="sticky">
  <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
    <NavbarBrand className="gap-3 max-w-fit">
      <Link
        className="flex justify-start items-center gap-1"
        color="foreground"
        href="/"
      >
        <Logo />
        
        <HoverInHackerTyper hoverFrom="up">Chris's Portfolio Site</HoverInHackerTyper>
      </Link>
    </NavbarBrand>
    
  </NavbarContent>

  <NavbarContent
    className="hidden sm:flex basis-1/5 sm:basis-full"
    justify="end"
  >
    <NavbarItem className="hidden sm:flex gap-2">
      <Link isExternal href={siteConfig.links.github} title="GitHub">
        <GithubIcon className="text-default-500" />
      </Link>
     
    </NavbarItem>

  </NavbarContent>

  <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
    <Link isExternal href={siteConfig.links.github}>
      <GithubIcon className="text-default-500" />
    </Link>
 
    <NavbarMenuToggle />
  </NavbarContent>

  <NavbarMenu>
    {searchInput}
    <div className="mx-4 mt-2 flex flex-col gap-2">
      {siteConfig.navMenuItems.map((item, index) => (
        <NavbarMenuItem key={`${item}-${index}`}>
          <Link
            color={
              index === 2
                ? "primary"
                : index === siteConfig.navMenuItems.length - 1
                  ? "primary"
                  : "foreground"
            }
            href={item.href}
            size="lg"
          >
           <HoverInHackerTyper hoverFrom="up">{item.label}</HoverInHackerTyper>
          </Link>
        </NavbarMenuItem>
      ))}
    </div>
  </NavbarMenu>
</NextUINavbar>

</motion.div>

</>
);
   
};
