import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from './components/Navbar'

export default function Home() {
  return (
    <div>
      
      <br/><br/>
      <Image src="/vercel.svg" height={200} width={200}/>
      <center><h1> Rishabh's Vercel Assignment</h1> </center>
      <Navbar />

      <ul>
        <li>To view each of the tasks created, please click on the respective tasks on the navbar.</li><br/>
        <li>Once you hover over a specific task, the background properties will change indicating that that particular task has been selected.</li>
      </ul>
      
    </div>
  )
}
