import Navbar from './components/Navbar'
import Image from 'next/image'
function Taskfive() {
    return (
        <div>
            <br/><br/>
            
            <Image src="/vercel.svg" height={200} width={200}/>
            <center><h1> Rishabh Vercel Assignment</h1> </center>
            <Navbar />
            <h2>Your personal recommendations:</h2>
            <h3>When it comes to looking for a solution for hosting your Next.js site, what are some of the common things
                you would value as the Engineering Manager for:</h3>
            <p> <b>1. A mom and pop business?</b></p>
            <p> <li>Since Mom and Pop is a very low scale business, hence the manager should have the skill to build the site with with minimal but all the acquired functionalities in the given budget</li></p>
            <p><li>The Manager should have the knowledge of the localised area where the business has been set up, which helps in maximizing the outreach through the website. For ex, it could be around the product which is more demanding for quick upselling, or quick delivery options.</li></p>
            <p><li>Last but not the least, the manager should aim for a site which is agile and mobile freindly, has faster loading time, should attract new customers through it UX design and easy scalability option so that the business grows with time. </li></p>
            <p><b>2. An NFT?</b></p>
            <p><li>The Manager should be technically sound while dealing with NFT trading in terms of secuity and blockchain technology.</li></p>
            <p><li>The manager can also bring in the knowledge of art or real state, because NFT tokens are sold on the coverage of artwork or real estate generally.</li></p>
            <p><li>An NFT marketplace is analogous to an e-commerce site, hence it requires a front-end site that is alluring so that the user intends to browse it more.</li></p>
            <p><li>The manager should acknowledge that the site must provide a positive vibe experience in terms of security and transperancy for both buyers and sellers. When someone needs to list a transaction, the site should offer a step-by-step path that creates a rich user experience</li></p>
            <p><li>And lastly with large traffic spikes, the site should have a robust infrastructure that can handle hundreds of thousands of concurrent requests with zero latency.</li></p>
            <p><b>3. A Marketing Page for a large corporation like Nintendo?</b></p>
            <p><li>A big gaming corporation like Nintendo is rich in terms of both money and publicity. So the Engineering Manager has to utilize the resources very efficiently to bring out the best marketing site keeping the budget aside. </li></p>
            <p><li>The Engineering Manager should do a good competitive analysis against its competitors like Xbox or Playstation, how to route their customers to NIntendo. The manager should make the marketing page attached to almost all social media platforms. Reaching out to the countries where Nintendo is unceleberated will bring a major boost to sales.</li></p>
            <p><li>Since websites developed with Next JS are not only lightning-fast but also simple to search for robots and provide a great user experience. The focus should be on bringing more organic traffic with 3 factors into consideration pace, structure, and user experience which will boost Nintendo website search engine rankings.</li></p>
        </div>
    );
}
 
export default Taskfive;