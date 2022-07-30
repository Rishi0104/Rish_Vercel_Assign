import Navbar from './components/Navbar'
import Image from 'next/image'
function Taskfour() {
    return (
        <div>
            <br/><br/>
            
            <Image src="/vercel.svg" height={200} width={200}/>
            <center><h1> Rishabh Vercel Assignment</h1> </center>
            <Navbar />
            <h2>Practice Email Responses</h2>
            <h3>Sales Inquiry: Do I need Enterprise?</h3>
            <p><b>Subject:</b> Sales Lead for barnesandnoble.com</p>
            <p><b>Name:</b> Joe Fox</p>
            <p><b>Employees:</b>1000+</p>
            <p><b>How can we help you:</b> New site launching soon using Next.js and we are thinking about using Vercel
                to host. I would like more information about the Enterprise option.</p>

            <p> <b>Response:</b></p>

            <h3><b>Sales Inquiry: </b>Would Pro or Enterprise fit better for my team?</h3>
            <p><b>Subject:</b> Sales Lead for hipcamp.com</p>
            <p><b>Name:</b> Melissa Wright</p>
            <p><b>Employees:</b> 10-100</p>
            <p><b>How can we help you:</b> We are looking to re-platform our site and are considering Vercel. Would like to evaluate options to see if Pro or Enterprise would fit out needs better. Timeline is Q3. Can you
                help?</p>
            <p> <b>Response:</b></p>

        </div>
    );
}
 
export default Taskfour;