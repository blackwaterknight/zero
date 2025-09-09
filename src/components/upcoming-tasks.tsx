"use client";

import { useToast } from '@/hooks/use-toast';
import { ListTodo, Send, BellRing, CheckCircle2 } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
} from '@/components/ui/dialog';
import { DropdownMenuItem } from '@/components/ui/dropdown-menu';
import { Button } from './ui/button';
import { Avatar, AvatarFallback } from './ui/avatar';
import { Tooltip, TooltipProvider, TooltipTrigger } from './ui/tooltip';
import { TooltipContent } from '@radix-ui/react-tooltip';

const demoTasks = [
    { name: "John Carter", action: "Review SAP Migration Blueprint", initials: "JC" },
    { name: "Maria Garcia", action: "Approve Microservice Architecture", initials: "MG" },
    { name: "Anika Sharma", action: "Update Data Governance Docs", initials: "AS" },
    { name: "David Chen", action: "Finalize CIAM PoC Scope", initials: "DC" },
    { name: "Emily Rogers", action: "Sign-off on AI Ethics Report", initials: "ER" },
];


export function UpcomingTasks() {
    const { toast } = useToast();

    const handleReminder = (name: string) => {
        toast({
            title: "Reminder Sent!",
            description: `A friendly reminder has been sent to ${name}.`,
            action: <CheckCircle2 className="text-green-500" />
        })
    }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
          <ListTodo className="mr-2 h-4 w-4" />
          <span>Upcoming Tasks</span>
        </DropdownMenuItem>
      </DialogTrigger>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>Upcoming Tasks</DialogTitle>
          <DialogDescription>
            A list of pending actions assigned to team members. Send them a reminder to keep things on track.
          </DialogDescription>
        </DialogHeader>
        <div className="mt-4 space-y-4 max-h-[60vh] overflow-y-auto pr-2">
            {demoTasks.map((task, index) => (
                <div key={index} className="flex items-center justify-between gap-4 p-3 bg-card border rounded-lg">
                    <div className="flex items-center gap-3">
                        <Avatar>
                            <AvatarFallback>{task.initials}</AvatarFallback>
                        </Avatar>
                        <div>
                            <p className="font-semibold text-sm">{task.name}</p>
                            <p className="text-muted-foreground text-xs">{task.action}</p>
                        </div>
                    </div>
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                 <Button size="sm" variant="ghost" onClick={() => handleReminder(task.name)}>
                                    <BellRing className="h-4 w-4" />
                                    <span className="sr-only">Send Reminder</span>
                                </Button>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>Send Reminder</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </div>
            ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}
