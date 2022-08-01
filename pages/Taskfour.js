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

            <p><b>Response: </b></p><p>Hi Joe,</p>
            <p>Thank you for trusting Vercel!</p>
            <p>My name is Rishabh and I am your contact at Vercel. I thought I would drop you a quick note to introduce myself. I am excited to help you get started with Vercel Enterprise which is trusted by some of the worlds largest companies for their production deployments and provides the ultimate security partnership.</p>
            <p>I would be happy to connect and talk to you more about what we can offer <b>Barnes and Noble</b> in terms of Vercel Enterprise option.</p>
            <p>You can book the slots for meeting using this <b>Calendly Link</b>. Looking forward to connecting!</p>
            <p>Meanwhile I am also sharing a <button>link</button> which will give you more insight on how <b>Vercel</b> has helped organizations with Enterprise solution.</p>

            <h3><b>Sales Inquiry: </b>Would Pro or Enterprise fit better for my team?</h3>
            <p><b>Subject:</b> Sales Lead for hipcamp.com</p>
            <p><b>Name:</b> Melissa Wright</p>
            <p><b>Employees:</b> 10-100</p>
            <p><b>How can we help you:</b> We are looking to re-platform our site and are considering Vercel. Would like to evaluate options to see if Pro or Enterprise would fit out needs better. Timeline is Q3. Can you
                help?</p>
                <p><b>Response: </b></p><p>Hi Melissa,</p>
            <p>Thank you for choosing Vercel. We are glad that you are looking to grow and scale your business with Vercel.</p>
            <p>My name is Rishabh and I help frontend teams to develop, preview, and ship delightful user experiences seamlessly.</p>
            <p>Pertaining to your request, Pro is for small teams with moderate bandwidth and collaboration requirements whereas Enterprise is for teams seeking greater performance, collaboration, and security.
            Considering <b>Hipcamp</b> business size, we would suggest to go with Pro package which starts at $20 per month, and you can start with a free 14-day trial. The Pro plan focuses on small business websites that are growing.</p>
            But in regards to your timeline, since you are looking to go live by Q3, I would suggest if can we set up a quick call to discuss this further.<p></p>
            <p>Please book your slots using this <b>Calendly Link</b> as per your availabilty. Looking forward to e-meet you!</p>

        </div>
    );
}
 
export default Taskfour;