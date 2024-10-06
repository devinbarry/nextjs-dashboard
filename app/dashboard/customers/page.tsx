import CustomersTable from '@/app/ui/customers/table';
import { Metadata } from 'next';
import { Suspense } from 'react';
import { fetchFilteredCustomers } from "@/app/lib/data";

export const metadata: Metadata = {
  title: 'Customers',
};

export default async function CustomersPage(
  props: {
    searchParams?: Promise<{
      query?: string;
      page?: string;
    }>;
  }
) {
  const searchParams = await props.searchParams;
  const query = searchParams?.query || '';
  const customers = await fetchFilteredCustomers(query);
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <CustomersTable customers={customers}/>
    </Suspense>
  )
}
