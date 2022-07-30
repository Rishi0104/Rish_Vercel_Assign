import Link from 'next/link'

const Navbar = () => {
    return ( 
        <nav>
            <div className="Logo"></div>
            <Link href="/Homepage"><a className='home'>Homepage</a></Link>
            <Link href="/Taskone"><a>Taskone</a></Link>
            <Link href="/Tasktwo"><a>Tasktwo</a></Link>
            <Link href="/Taskthree"><a>Taskthree</a></Link>
            <Link href="/Taskfour"><a>Taskfour</a></Link>
            <Link href="/Taskfive"><a>Taskfive</a></Link>
        </nav>
     );
}
 
export default Navbar;