
import './App.css'

function App() {

  return (
    <>
    <a href='#main'></a>
     <header>
      <div className='header-container'>
      <div>logo</div>
      <nav className='nav-container'>
        <ul className='list'>
          <li> <a href=''>ATMs/Locations</a></li>
          <li> <a href=''>Help</a></li>
          <li> <a href=''>About Us</a></li>
          <li> <a href=''>Espanol</a></li>

        </ul>
      </nav>
      </div>
     </header>
     <div>
      <div className='category-container'>
      <ul className='category-list'>
        <li><a href=''>Personal</a></li>
        <li><a href=''>Investing & Wealth Management</a></li>
        <li><a href=''>Small Business</a></li>
        <li><a href=''>Commercial Banking</a></li>
        <li><a href=''>Corporate & Investment Banking</a></li>

      </ul>
     </div>
     </div>
     <div>
      <div className='options-container'>
      <ul className='options-list'>
        <li><a href=''>Checking</a></li>
        <li><a href=''>Credit Cards</a></li>
        <li><a href=''>Home Loans</a></li>
        <li><a href=''>Personal Loans</a></li>
        <li><a href=''>Auto Loans</a></li>
        <li><a href=''>Premier</a></li>
        <li><a href=''>Education & Tools</a></li>




      </ul>
     </div>
     </div>

     <div className='hero'>
      <div className='card'>
        <div>
          <h2>Good morning</h2>
          <p>Sign on to manage your accounts</p>
          <label>Username</label>
          <input/>
          <label>Password</label>
          <input/>
          <button>Sign On</button>
          <button>Enroll</button>
        </div>
        <div>
        <a href=''>Forgot username or password?</a>
        <a href=''>Security Center</a>
        <a href=''>Privacy, Cookies, and Legal</a>
        </div>
      </div>
      <div>
        <h3>$300 checking bonus on us</h3>
        <p>Open an eligible checking account with qualifying electronic deposits</p>
        <a href=''>Get started</a>
      </div>
     </div>
    </>
  )
}

export default App
