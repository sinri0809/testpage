import { Link } from 'react-router-dom';

const Home = () => {
  return <main>
    <Link to={"/meeting-draft"} >test page</Link>
    this  is home
    <p className="font-thin">font thin <em>italic</em></p>
    <p className="font-light">font light <em>italic</em></p>
    <p className="font-regular">font regular <em>italic</em></p>
    <p className="font-medium">font medium <em>italic</em></p>
    <p className="font-bold">font bold <em>italic</em></p>
    <p className="font-black">font black <em>italic</em></p>
  </main>
}

export default Home;