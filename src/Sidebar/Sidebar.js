import Category from "./Category/Category";
import Price from "./Price/Price";
import Color from "./Colors/Colors";
import "./Sidebar.css";
 
function Sidebar({handleChange}) { 
 return (
  <>
    <section className="Sidebar">
      <div className="logo-container">
        <h1>🛒</h1>
      </div>

      <Category handleChange={handleChange}/>
      <Price handleChange={handleChange}/>
      <Color handleChange={handleChange}/>
    </section>
  </>  
  )
}

export default Sidebar;