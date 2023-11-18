import Image from 'next/image'
import Sidebar from '../components//Sidebar/Sidebar'
import Header from '../components/Header/Header'
import Filter from '@/components/Filters/Filters'
export default function Home() {
  return (
    <>
      <Header />
      <Sidebar />
      <Filter />
    </>
    
  )
}
