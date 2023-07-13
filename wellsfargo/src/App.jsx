
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

     <section className='loan-section'>
      <div className='loan-card'>
        <h3>Earn Points on Rent</h3>
        <p>Redeem for travel, rent credit and more</p>
        <a href=''>Learn more</a>
      </div>

      <div className='loan-card' >
        <h3>Earn Points on Rent</h3>
        <p>Redeem for travel, rent credit and more</p>
        <a href=''>Learn more</a>
      </div>

      <div className='loan-card'>
        <h3>Earn Points on Rent</h3>
        <p>Redeem for travel, rent credit and more</p>
        <a href=''>Learn more</a>
      </div>

      <div className='loan-card'>
        <h3>Earn Points on Rent</h3>
        <p>Redeem for travel, rent credit and more</p>
        <a href=''>Learn more</a>
      </div>
     </section>

     <section className='financial-section'>
      <h2>Financial guidance and support</h2>

      <div className='home-card-container'>
        <div className='home-card'>
          <div >
            <h2>Plan.Prepare.Enjoy home.</h2>
          <p>Discover tools and tips to help make buying or refinancing a littler easier</p></div>
       <a href=''>Get tips for homebuying</a>
        </div>

        <div className='home-card'>

          <div >
            <h2>Plan.Prepare.Enjoy home.</h2>
          <p>Discover tools and tips to help make buying or refinancing a littler easier</p></div>
       <a href=''>Get tips for homebuying</a>
        </div>

        <div className='home-card'>
          <div>
            <h2>Plan.Prepare.Enjoy home.</h2>
          <p>Discover tools and tips to help make buying or refinancing a littler easier</p>
          </div>
       <a href=''>Get tips for homebuying</a>
        </div>


      </div>
     </section>

     <section className='financial-section'>
      <h2>Serving our customers and communities</h2>
      <p>It doesn't happen with one transaction, in one day on the job, or in one quarter.
              It's earned relationship by relationship
            </p>
      <div className='home-card-container'>
        <div className='home-card'>
          <div >
            <h2>Who we are</h2>
          <p>Wells Fargo help sstrengthen communities through diversity, equity, and inclusion,
            economic empowerment, and sustainability</p></div>
       <a href=''>About Wells Fargo</a>
        </div>

        <div className='home-card'>

          <div >
            <h2>Why we're committed to communities</h2>
          <p>We don't just serve our communities- we are our communities. We're committed to helping customers and neighborhoods across the country thrive.</p></div>
       <a href=''>Wells Fargo Stories</a>
        </div>

      </div>
     </section>

     <footer></footer>
    </>
  )
}

export default App
