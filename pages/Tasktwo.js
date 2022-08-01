import Navbar from './components/Navbar'
import Image from 'next/image'
import Link from 'next/link'
function Tasktwo() {
    return (
        <div>
            <br/><br/>
            <Image src="/vercel.svg" height={200} width={200}/>
            <center><h1> Rishabh Vercel Assignment</h1> </center>
            <Navbar />
            <h2>Reflection on past experience:</h2><br></br>
            <h3>a. In your next role, what are you looking to learn or do more of?</h3>
            <p>The job role at Vercel has actuated me. When it comes to my next role I would like to grab the oppurtunity to learn and grow my skills from a technical standpoint and a chance to acquire
               leadership skills over time.</p>
               <p>I have always enjoyed facing the clients and prospects, adding
               next.js tech skills will edge my sales expertise to understand the market more deeply
               encouraging customers to grow with Vercel.<b></b> I am thrilled and ready to enter into a new industry 
               with utmost confidence of growing exponentially with a brilliant team.</p>

            <h3>b. Which (non-Vercel) technical or sales article, guide or lightning talk left the biggest positive
                impression on you? Why? (and please provide the link)</h3>
            <p> We know that procrastination is a big part of life and it is one of the main barriers blocking us from getting up, making the right decisions and living the dream life we have thought of. 
                <p>I was also one of those person where procrastination had messed me up until I came across this lightning Ted talk by <b>Tim Urban.</b> He brings the perfect presentation to explaining how procrastination in our minds works.I watched this video 2 years ago but it still influences
                 me everyday to go and achieve my dreams rather than enduring guilt of not starting at the right time.</p></p>
        <p>  It helped me to achieve magnificent results in both personal and professional life.</p>
        <Link href="https://rb.gy/idzzdf">
        <button><b>Link to the video</b></button>
        </Link>
        </div>
    );
}
 
export default Tasktwo;