import Link from 'next/link';
import { Logo } from './logo';
import { Button } from './ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from './ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { LogOut, User, Settings, Calendar, ListTodo } from 'lucide-react';
import { UpcomingTasks } from './upcoming-tasks';
import { DemoCalendar } from './demo-calendar';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background shadow-sm">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/dashboard">
          <Logo />
        </Link>
        <div className="flex items-center gap-4">
          <p className="text-sm font-medium text-muted-foreground hidden sm:block">Welcome back, Sonia!</p>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                <Avatar className="h-10 w-10 border-2 border-primary/50">
                  <AvatarImage src="https://picsum.photos/100/100" alt="Sonia Mishra" data-ai-hint="woman portrait" />
                  <AvatarFallback className="bg-primary text-primary-foreground">SM</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end" forceMount>
              <DropdownMenuLabel className="font-normal">
                <div className="flex flex-col space-y-1">
                  <p className="text-sm font-medium leading-none">Sonia Mishra</p>
                  <p className="text-xs leading-none text-muted-foreground">
                    sonia.mishra@capgemini.com
                  </p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link href="/dashboard/profile">
                  <User className="mr-2 h-4 w-4" />
                  <span>Profile</span>
                </Link>
              </DropdownMenuItem>
               <DemoCalendar />
               <UpcomingTasks />
              <DropdownMenuItem>
                <Settings className="mr-2 h-4 w-4" />
                <span>Settings</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link href="/">
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
