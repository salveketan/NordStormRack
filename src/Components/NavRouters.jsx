import React from 'react'
import { Link } from 'react-router-dom'

const NavRouters = () => {
    const element = [
        { to: "/clearence", title: "Clearence" },
        { to: "/activewears", title: "activewears" },
        { to: "/bagsaccessories", title: "bagsaccessorie" },
        { to: "/beauty", title: "beauty" },
        { to: "/flashevents", title: "flashevents" },
        { to: "/gifts", title: "gifts" },
        { to: "/home", title: "home" },
        { to: "/kids", title: "kids" },
        { to: "/mens", title: "mens" },
        { to: "/shoes", title: "shoes" },
        { to: "/womens", title: "womens" },
        // { to: "/", title: "landing" },

     
    ]
    return (
        <div>
            {element?.map((e) => <Link key={e.to} to={e.to} style={{margin:"10px"}}>{e.title}</Link>)}
        </div>
    )
}

export default NavRouters
