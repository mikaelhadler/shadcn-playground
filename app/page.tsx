import Image from 'next/image'
import { CardWithForm } from '@/components/CardWithForm'
import { TableDemo } from '@/components/TableDemo'
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <CardWithForm />
      <TableDemo />
    </main>
  )
}
