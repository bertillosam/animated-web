import React, { useEffect, useState } from 'react'
import { cn } from "../lib/utils"

const Navbar = () => {
  const [Scrolling, setScrolling] = useState(false);
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const navItem =[
    {name:"Home", href:"home"},
    {name:"About", href:"about"},
    {name:"Skills", href:"skills"},
    {name:"Contact", href:"contact"},
  ]

  useEffect(()=>{
    const handleScroll =()=>{
      setScrolling(window.screenY > 10);
    }    

    window.addEventListener("scroll",handleScroll);
    return()=> window.removeEventListener("scroll", handleScroll);
  },[])

  return (
    <nav className={cn("fixed w-full z-40 transition-all duration-300",
      Scrolling ? "py-3 bg-background/80 backdrop=blur-md shadow-xs" :"py-5"
    )}>

      <div className='container flex item-center justify-between'>
        <a className='text-xl font-bold flex items-center' href="#home">
          <span className='relative z-10'>
            Samo {" "}
            <span className='text-glow text-primary'>
              web
            </span>
          </span>
        </a>
        <div className='hidden md:flex space-x-8'>
          {navItem.map((item, key) => (
            <a key={key} href={item.href} className='text-foreground/65 font-bold hover:text-primary transition-colors duration-300'>
              {item.name}
            </a>
          ))}
        </div>


        <div className={cn('fixed inset-0 bg-background/95 background-blur-md z-40 flex flex-col items-center justify-center', 'transition-all duration-300 md:hidden',
          isOpenMenu ?"opacity-100 pointer-events-auto":"opacity-0 pointer-events-auto"
        )}>
          <div className='flex flex-col space-y-8 text-xl'>
          {navItem.map((item, key) => (
            <a key={key} href={item.href} className='hover:text-primary transition-colors duration-300' onClick={()=>setIsOpenMenu(false)}>
              {item.name}
            </a>
          ))}
          </div>
        </div>
      </div>

    </nav>
  )
}

export default Navbar