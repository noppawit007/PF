import Link from 'next/link'
const Navbar = () => {
  return (
    <div>
     <div class="header">
        <h1>Welcome</h1>
      </div>

      <div class="navbar">
        <Link href="index">Home</Link>
        <Link href="#">Aboutme</Link>
        <Link href="#">Contact</Link>
        <Link href="Login">Login</Link>
        <div class="dropdown">
          <button class="dropbtn">Picture</button>
          <div class="dropdown-content">
            <Link href="pic1">Nature</Link>
            <Link href="pic2">Flowers</Link>
            <Link href="pic3">Picture3</Link>
          </div>
        </div>
      </div><br></br>
    </div>
  )
}
export default Navbar