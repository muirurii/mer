import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import Nav from '@/components/nav'
import Register from '@/components/register'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
       <Nav/>
      <Register/>
    </>
  )
}
