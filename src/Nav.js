import React from 'react';
import { Link} from 'react-router-dom';

function Nav(){
return(
    <nav>
       ||<Link to = "/1">Add Quote</Link>  
       ||<Link to = "/2">See Quotes</Link>   
    </nav>
);
}

export default Nav;