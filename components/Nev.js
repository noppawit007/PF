import Link from 'next/link'
const Navbar = () => {
  return (
    <div>
     <div class="header">
        <h1>Welcome</h1>
      </div>

      <div class="navbar">
        <Link href="index">Home</Link>
        <Link href="aboutme">Aboutme</Link>
        <Link href="contact">Contact</Link>
        <Link href="Login">Login</Link>
        <div class="dropdown">
          <button class="dropbtn">Picture</button>
          <div class="dropdown-content">
            <Link href="Pic1">Gallery</Link>
            
          </div>
        </div>
      </div><br></br>
      </div>
  )
}
export default Navbar