import Button from "components/common/Button";
// import favicon from '../../assets/profile.png'

const Header = () => {
  return <header className="header">
    <Button label="home" className="btn-go-home" />
    {/* <img src={favicon} className="App-logo" alt="logo" /> */}
    <div className="btn-tools__wrap">
      <Button label="search" className="btn-search" />
      <Button label="sidedropbox" className="btn-app-drawer" />
    </div>
  </header>
};

export default Header;