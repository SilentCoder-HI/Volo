import { redirect } from 'next/navigation';

// Redirect root to the default design session
export default function Page() {
  redirect('/design/new');
  return null;
}
