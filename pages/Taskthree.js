import Navbar from './components/Navbar'
import Image from 'next/image'
function Taskthree() {
    return (
        <div>
            <br/><br/>
            
            <Image src="/vercel.svg" height={200} width={200}/>
            <center><h1> Rishabh Vercel Assignment</h1> </center>
            <Navbar />
            <h2>Using Next.js</h2>
            <h3>Add a temporary redirect to your Next/Vercel project</h3>
            <p> The temporary redirect has been routed to Homepage. If a user enters a wrong url, the sites shows error 404 page and within 3 seconds it routes the user back to the Homepage automatically.</p>
        </div>
    );
}
 
export default Taskthree;