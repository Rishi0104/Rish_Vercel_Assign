import Link from 'next/link'

const Navbar = () => {
    return ( 
        <nav>
            <div className="Logo"></div>
            <Link href="/Homepage"><button className="home"><b>Homepage</b></button></Link>
            <Link href="/Taskone"><button><b>Taskone</b></button></Link>
            <Link href="/Tasktwo"><button><b>Tasktwo</b></button></Link>
            <Link href="/Taskthree"><button><b>Taskthree</b></button></Link>
            <Link href="/Taskfour"><button><b>Taskfour</b></button></Link>
            <Link href="/Taskfive"><button><b>Taskfive</b></button></Link>
        </nav>
     );
}
 
export default Navbar;