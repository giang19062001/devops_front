import { Outlet, Link } from "react-router-dom";

const Layout = () => {
   return (
      <div style={{margin : 50}}>
            <div style={{display:"flex", flexDirection:"row", gap:15}}>
               <b>
                  <Link to="/">Home</Link>
               </b>
               <b>
                  <Link to="/blog">Blog</Link>
               </b>
            </div>

         <Outlet />
      </div>
   );
};

export default Layout;
