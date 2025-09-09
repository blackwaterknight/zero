"use client";

import { useState } from 'react';
import { Calendar as CalendarIcon, CalendarClock } from 'lucide-react';
import { format } from 'date-fns';
import { Calendar } from '@/components/ui/calendar';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
} from '@/components/ui/dialog';
import { DropdownMenuItem } from '@/components/ui/dropdown-menu';
import { Badge } from './ui/badge';
import { Card, CardContent } from './ui/card';

const generateDemoMeetings = () => {
  const meetings: { date: Date; title: string; time: string }[] = [];
  const today = new Date();
  const month = today.getMonth();
  const year = today.getFullYear();
  const meetingTitles = [
    'SAP Migration Kick-off',
    'E-commerce Overhaul Sync',
    'Data Warehouse Review',
    'AI Ethics Committee',
    'CIAM PoC Demo',
    'TOGAF Workshop',
    'Quarterly Architecture Review',
  ];

  for (let i = 0; i < 7; i++) {
    const day = Math.floor(Math.random() * 28) + 1;
    const hour = Math.floor(Math.random() * 8) + 9; // 9 AM to 4 PM
    meetings.push({
      date: new Date(year, month, day, hour, 0, 0),
      title: meetingTitles[i % meetingTitles.length],
      time: `${hour}:00`,
    });
  }
  return meetings;
};

const demoMeetings = generateDemoMeetings();

export function DemoCalendar() {
  const [selectedDay, setSelectedDay] = useState<Date | undefined>(new Date());
  const meetingsOnSelectedDay = selectedDay
    ? demoMeetings.filter((m) => format(m.date, 'yyyy-MM-dd') === format(selectedDay, 'yyyy-MM-dd'))
    : [];

  return (
    <Dialog>
      <DialogTrigger asChild>
        <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
          <CalendarIcon className="mr-2 h-4 w-4" />
          <span>My Calendar</span>
        </DropdownMenuItem>
      </DialogTrigger>
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle>My Calendar</DialogTitle>
          <DialogDescription>
            A demonstration of an integrated calendar with scheduled architectural meetings.
          </DialogDescription>
        </DialogHeader>
        <div className="grid md:grid-cols-[1fr_280px] gap-6 mt-4">
          <Calendar
            mode="single"
            selected={selectedDay}
            onSelect={setSelectedDay}
            className="rounded-md border"
            modifiers={{
              meeting: demoMeetings.map((m) => m.date),
            }}
            modifiersClassNames={{
              meeting: 'bg-primary/20 text-primary rounded-full',
            }}
          />
          <div className="space-y-4">
            <h3 className="font-bold">
              Meetings on {selectedDay ? format(selectedDay, 'PPP') : '...'}
            </h3>
            <Card className="h-[340px]">
              <CardContent className="p-4 space-y-3">
                {meetingsOnSelectedDay.length > 0 ? (
                  meetingsOnSelectedDay.map((meeting, i) => (
                    <div key={i} className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg">
                      <CalendarClock className="h-5 w-5 mt-1 text-primary" />
                      <div>
                        <p className="font-semibold">{meeting.title}</p>
                        <p className="text-sm text-muted-foreground">{meeting.time}</p>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="flex flex-col items-center justify-center h-full text-center text-muted-foreground">
                     <CalendarIcon className="w-12 h-12 mb-2" />
                    <p>No meetings scheduled for this day.</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
