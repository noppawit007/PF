// import styles from './styles.module.css'
import Head from 'next/head'

export default () => {
  return (
    <div>
      
      <div class="header">
  <h1>My Profile</h1>
</div>

<div class="navbar">
  <a href="index">Home</a>
  <a href="#">Aboutme</a>
  <a href="#">Contact</a>
  <a href="Login">Login</a>
  <div class="dropdown">
    <button class="dropbtn">Picture</button>
    <div class="dropdown-content">
    <a href="#">Picture1</a>
    <a href="#">Picture2</a>
    <a href="#">Picture3</a>
    </div>
  </div>
</div><br></br>
      <content>
      <p class="wit">This is Me !</p><br></br>
    <div class="pic1">
    
            </div>
    <div>
        <p class="facebook"><a href="https://www.facebook.com/nopphawit.nakkhaban.7" target="_blank">Facebook</a></p>
    </div>
    <br></br>
    <div class="bo1">My name is Nopphawit Nakkhaban</div><br></br>
    <div class="bo2">My Sudentid is 5735512094</div><br></br>
    <div class="bo3">My Faculty is Computer Engineering</div><br></br>
    <div class="bo4">My Nickname is Wit</div><br></br>
    
      </content>
      <footer className='center flexbox-container'>
        <div>Copy 2020</div>
      </footer>

    </div>
  )
}