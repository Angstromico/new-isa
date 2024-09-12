import line from 'imgs/line_horizontal.png';
import { useState } from 'react';
import { IMAGES_URL, BASE_URL } from '@/constants';

interface MobileMenuProps {
  headerMenu: { link: string; texto: string }[];
  headerSocial: { link: string; icono: { data: { attributes: { url: string } } } }[];
  logoInfoUrl: string;
  logoMobilUrl: string;
  path: string;
}

const SideBar: React.FC<MobileMenuProps> = ({ headerMenu, headerSocial, path }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="flex lg:hidden">
        <button type="button" onClick={() => setMenuOpen(true)} className="inline-flex items-center justify-center rounded-md pr-[16px]">
          <svg className="h-[32px] w-[32px]" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
      </div>

      <div className={`lg:hidden fixed inset-0 z-10 ${menuOpen ? 'block' : 'hidden'}`} role="dialog" aria-modal="true">

        <div className="bg-grisOscuro fixed inset-y-0 right-0 z-10 w-full overflow-y-auto px-[16px]">
          <div className="flex items-center justify-end my-[24px] ">
            <button type="button" onClick={() => setMenuOpen(false)} className="rounded-md text-white">
              <span className="sr-only">Close menu</span>
              <svg className="h-[32px] w-[32px]" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="flex flex-col py-[24px] space-y-[24px] basis-1/3">
            {headerMenu.map((link, index) => (
                <a href={link.link} className={`max-w-44 rounded-full text-lg text-white tracking-wider py-[10px] px-[16px] ${path === BASE_URL + link.link ? 'bg-turquesa inactive' : ''}`}
                key={index}>
                {link.texto}
                </a>
            ))}
          </div>

          <div className='w-full flex justify-center'>
            <img src={line.src} alt="LineHeader" className='w-auto' />
          </div>

          <div className="my-[24px]">
            <ul className="flex justify-center space-x-[16px] px-[13px]">
                {headerSocial.map((social, index) => (
                    <li key={index}>
                        <a href={social.link} className="text-white">
                            <img src={IMAGES_URL + social.icono.data.attributes.url} 
                                    alt="" className="h-[40px] w-[40px]" />
                        </a>
                    </li>
                ))}
            </ul>
          </div>

        </div>
      </div>
    </>
  );
};

export default SideBar;
