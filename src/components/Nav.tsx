import { useState } from 'react'
import type { ImageStrapi, ImageContent } from '../types'
import { getInfoFromImg } from '@/hooks'
export interface HeaderInfo {
  links: { texto: string; link: string }[]
  linksSociales: { link: string; icono: ImageStrapi }[]
  path: string
  burguer: ImageContent
  x: ImageContent
  line: string
}

const Nav = ({ links, linksSociales, path, burguer, x, line }: HeaderInfo) => {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [animation, setAnimation] = useState(false)

  const toggleNav = () => {
    if (!animation) {
      setMobileOpen(true)
      setTimeout(() => {
        setAnimation(true)
      }, 100)
    } else {
      setAnimation(false)
      setTimeout(() => {
        setMobileOpen(false)
      }, 500)
    }
  }

  return (
    <>
      <button className='lg:hidden w-6 z-50' onClick={toggleNav} >
        <img
          className='w-full'
          src={!mobileOpen ? burguer.url : x.url}
          alt={
            !mobileOpen
              ? burguer.alt
                ? burguer.alt
                : 'Burguer'
              : x.alt
              ? x.alt
              : 'X Buttom'
          }
        />
      </button>
      {mobileOpen && (
        <div
          className={`lg:hidden fixed top-0 ${
            animation ? 'right-0 opacity-100' : 'right-[-100%] opacity-0'
          } transition-all duration-500 min-w-[300px] h-full bg-grisOscuro max-w-full w-[70%] sm:w-[60%] md:w-1/2 z-30`}
        >
          <nav className='flex flex-col ml-[5%] text-white gap-4 mt-24 justify-start items-start px-2'>
            {links.map((dataLink, i) => {
              const { texto, link } = dataLink

              return (
                <a
                  key={i}
                  className={`font-thin text-xs flex items-center justify-center px-[8px] py-[1.5px] rounded-2xl ${
                    path === link ? 'bg-turquesa' : ''
                  } h-8`}
                  href={link}
                >
                  {texto}
                </a>
              )
            })}
          </nav>
          <div className='w-full flex justify-center'>
            <img className='my-4 w-[90%]' src={line} alt='Line nav mobile' />
          </div>
          <nav className='mt-2 gap-2 justify-around w-full mx-auto flex'>
            {linksSociales.map((dataLink) => {
              const iconInfo = getInfoFromImg(dataLink.icono)

              return (
                <a className='w-7 h-7' href={dataLink.link}>
                  <img
                    className='w-full h-full'
                    src={iconInfo.url}
                    alt={iconInfo.alt ? iconInfo.alt : ''}
                  />
                </a>
              )
            })}
          </nav>
        </div>
      )}
      <nav className='gap-2 text-xs justify-around hidden lg:flex  mx-auto'>
        {links.map((dataLink, i) => {
          const { texto, link } = dataLink

          return (
            <a
              key={i}
              className={`font-thin flex items-center justify-center px-[8px] py-[1.5px] rounded-2xl ${
                path === link ? 'bg-turquesa' : ''
              } h-8`}
              href={link}
            >
              {texto}
            </a>
          )
        })}
      </nav>
      <nav className='gap-3 text-xs justify-center w-1/4 max-w-72 hidden lg:flex'>
        {linksSociales.map((dataLink, i) => {
          const iconInfo = getInfoFromImg(dataLink.icono)

          return (
            <a key={i} className='w-6 h-6' href={dataLink.link}>
              <img
                className='w-full h-full'
                src={iconInfo.url}
                alt={iconInfo.alt ? iconInfo.alt : ''}
              />
            </a>
          )
        })}
      </nav>
    </>
  )
}

export default Nav
