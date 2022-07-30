import Navbar from './components/Navbar'
import Image from 'next/image'
function Tasktwo() {
    return (
        <div>
            <br/><br/>
            <Image src="/vercel.svg" height={200} width={200}/>
            <center><h1> Rishabh Vercel Assignment</h1> </center>
            <Navbar />
            <h2>Reflection on past experience:</h2><br></br>
            <h3>a. In your next role, what are you looking to learn or do more of?</h3>
            <p>  In my next role </p>

            <h3>b. Which (non-Vercel) technical or sales article, guide or lightning talk left the biggest positive
                impression on you? Why? (and please provide the link)</h3>
            <p> this is why </p>
        </div>
    );
}
 
export default Tasktwo;