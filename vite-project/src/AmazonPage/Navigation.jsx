import logo from "./Assets/Amazon Logo.jpg";

/* component Naming Rules
A component has to return null or valid jsx
 */

function Navigation (){
    return (
        <div className="nav">
         <img src={logo} width="60px" />
         <input placeholder="search"/>

        </div>
    );
}
export default Navigation;