import "./footer.scss"
const Footer = () => {
  return (
    <div>
      <footer>
      <div className="footerContainerOne">
        <ul className="footerItemContainer">
          <li>Footer Item 1</li>
          <li>Footer Item 2</li>
          <li>Footer Item 3</li>
          <li>Footer Item 4</li>
        </ul>
      </div>
      <div className="footerContainerTwo">
        <ul className="footerItemContainer">
          <li>Footer Item 1</li>
          <li>Footer Item 2</li>
          <li>Footer Item 3</li>
          <li>Footer Item 4</li>
        </ul>
      </div>
      <div className="footerContainerThree">
        <ul className="footerItemContainer">
          <li>Footer Item 1</li>
          <li>Footer Item 2</li>
          <li>Footer Item 3</li>
          <li>Footer Item 4</li>
        </ul>
      </div>
    </footer>
    <p style={{display:"flex",justifyContent:"center"}}>&copy; Copyright Saauti</p> 
    </div>
    
  );
};

export default Footer;
