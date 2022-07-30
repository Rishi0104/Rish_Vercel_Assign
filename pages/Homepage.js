import Navbar from './components/Navbar'
import Image from 'next/image'
function Homepage() {
    return (
        <div>
      
            <br/><br/>
            <Image src="/vercel.svg" height={200} width={200}/>
            <center><h1> Rishabh Vercel Assignment</h1> </center>
            <Navbar />

            <ul>
                <li>To view each of the tasks created, please click on the respective tasks on the navbar.</li><br/>
                <li>Once you hover over a specific task, the background properties will change indicating that that particular task has been selected.</li>
            </ul>
      
        </div>
    );
}
 
export default Homepage;