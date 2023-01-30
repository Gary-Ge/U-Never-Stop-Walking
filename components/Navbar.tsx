import React from "react";

interface INavbarBtn {
  children: string
}

const NavbarBtn: React.FC<INavbarBtn> = ({ children }) => {
  return (
    <li>
      <a href="#" className="no-underline 
        text-white 
        ml-[60px] 
        font-[700] 
        text-[15px] 
        transition-all
        duration-300
      ">
        {children}
      </a>
    </li>
  )
}

const Navbar: React.FC = () => {
  return (
    <div className='h-[150px] flex items-center justify-between pt-[20px] px-[50px] pb-[30px]'>
      <img src="Logo.jpg" height={"300px"} width={"300px"} className='pt-3' />

      <nav className="inline-block">
        <ul className="list-none hidden lg:inline-flex">
          <NavbarBtn> Games </NavbarBtn>
          <NavbarBtn> Teaching </NavbarBtn>
          <NavbarBtn> Stories </NavbarBtn>
          <NavbarBtn> Credits </NavbarBtn>
          <NavbarBtn> Download </NavbarBtn>
          <li className="btn"><a href="#">Sign In</a></li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
