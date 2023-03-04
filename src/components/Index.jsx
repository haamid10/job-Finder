import Nav from './NavBar/Nav'
import Jobs from "./jobDiv/Jobs"
import Search from './SearchDiv/Search'
import Value from "./ValueDiv/Value"
import Footer from "./footerDiv/Footer"
const Index = () => {
  return (
    <div className='w-[85%] m-auto bg-white '>
      <Nav/>
      <Search/>
      <Jobs/>
      <Value/>
      <Footer/>

    </div>
  )
}

export default Index
