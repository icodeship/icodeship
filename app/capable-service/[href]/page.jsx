'use client';

import { useParams } from 'next/navigation';
import Capabilities_service from '@/Components/Capability_service';

export const dynamic = 'force-dynamic';

export default function CapableServicePage() {
  const params = useParams();
  
  return <Capabilities_service href={params.href} />;
}
