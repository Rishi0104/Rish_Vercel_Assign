import Navbar from './components/Navbar'
import Image from 'next/image'
function Taskfive() {
    return (
        <div>
            <br/><br/>
            
            <Image src="/vercel.svg" height={200} width={200}/>
            <center><h1> Rishabh's Vercel Assignment</h1> </center>
            <Navbar />
            <h2>Your personal recommendations:</h2>
            <h3>When it comes to looking for a solution for hosting your Next.js site, what are some of the common things
                you would value as the Engineering Manager for:</h3>
            <p> <b>1. A mom and pop business?</b></p>
            <p> Response</p>
            <p><b>2. An NFT?</b></p>
            <p>Response</p>
            <p><b>3. A Marketing Page for a large corporation like Nintendo?</b></p>
            <p>Response</p>
        </div>
    );
}
 
export default Taskfive;