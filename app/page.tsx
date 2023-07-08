import Image from 'next/image'
import MainContent from './../components/main';

export default function Home() {

  return (
    <main className="w-full h-auto sm:h-full flex justify-between flex-col py-7 z-[9999] relative">
      <MainContent />
    </main>
  )
}
