import React from 'react';
import "../../App.css";
  
export default function Navbar() {
  const path = window.location.pathname;
  return (
    <>
      <nav className='nav'>
        <a href='/' className='site-title'>E'Ting Tracker</a>
        <ul>
          <CustomLink href="/showTables">Show Table</CustomLink>
          <CustomLink href="/createEntry">Create Entry</CustomLink>
        </ul>
      </nav>
    </>
  );
};


function CustomLink({href, children, ...props}) {
  const path = window.location.pathname;
  return (
    <li className={path === href ? "active" : ""}>
      <a href={href} {...props}>{children}</a>
    </li>
  )
}