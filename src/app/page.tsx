import { redirect } from 'next/navigation';
import { requireSession } from '@/lib/actions/auth-server';
export default async function DashboardLayout() {
    const session = await requireSession();

//  if (!session?.user) {
  //   redirect('/public/register/pages');
  // } else {
  //   redirect('/dashboard');
  // }
}