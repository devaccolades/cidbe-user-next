"use client"
import Head from 'next/head';
import { usePathname } from 'next/navigation';

export default function Canonical() {
  const pathname = usePathname();
  const canonicalURL = `https://cidbi.com${pathname}`;
  return (
    <Head>
      <link rel="canonical" href={canonicalURL} />
    </Head>
  );
}