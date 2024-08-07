import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import { User } from "@supabase/supabase-js"
import Link from "next/link"
import LogoutButton from "./LogoutButton"

const getUser = (user: User) => {
  if (user.user_metadata.first_name) {
    return user.user_metadata.first_name.split(' ')[0]
  }

  if (user.user_metadata.full_name) {
    return user.user_metadata.full_name.split(' ')[0]
  }
}

export default function HeaderNavigationMenu({ user }: {
  user: User
}) {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>
            {getUser(user)}
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <NavigationMenuItem asChild>
              <LogoutButton />
            </NavigationMenuItem>
            {/* <Link href="/logout" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Cerrar sesión
              </NavigationMenuLink>
            </Link> */}
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}
