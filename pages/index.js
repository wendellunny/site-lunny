import Head from 'next/head'
import Image from 'next/image'
import { Navbar } from '../app/components/Navbar'
import styles from '../styles/Home.module.css';
import { AboutHome } from '../app/components/home/AboutHome';
export default function Home() {
  return (
      <section>
          <Navbar/>
          <div className ={styles.home}>
              <AboutHome/>
          </div>
          
      </section>

  )
}
