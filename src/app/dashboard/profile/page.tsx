import { UserProfileForm } from '@/components/profile-form';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function ProfilePage() {
  return (
    <div className="container max-w-4xl mx-auto py-8">
       <Button variant="ghost" asChild className="mb-4 -ml-4">
        <Link href="/dashboard"> &larr; Back to Dashboard</Link>
      </Button>
      <h1 className="text-3xl font-bold font-headline mb-2">My Profile</h1>
      <p className="text-muted-foreground mb-8">
        Update your personal details and professional designations.
      </p>
      <UserProfileForm />
    </div>
  );
}
