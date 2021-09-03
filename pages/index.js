import Head from 'next/head'
import Image from 'next/image'
import { Navbar } from '../app/components/Navbar'
import styles from '../styles/Home.module.css';
import { CodeArea } from '../app/components/home/CodeArea';
import { MyInfo } from '../app/components/home/MyInfo';
export default function Home() {
  return (
      <section>
          <Navbar/>
          <div className ={styles.home}>
            <MyInfo/>
            <CodeArea/>
              
          </div>
          
      </section>

  )
}
