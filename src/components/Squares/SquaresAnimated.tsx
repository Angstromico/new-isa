import { useEffect } from 'react';
import { IMAGES_URL } from '@/constants';

interface Props {
    cuadro1: string
    cuadro2: string
    cuadro3: string
}
   

const SquaresAnimated = ({ cuadro1, cuadro2, cuadro3 }) => {

    const img1 = IMAGES_URL + cuadro1.data.attributes.url;
    const altimg1 = cuadro1.data.attributes.alternativeText;
    const img2 = IMAGES_URL + cuadro2.data.attributes.url;
    const altimg2 = cuadro2.data.attributes.alternativeText;
    const img3 = IMAGES_URL + cuadro3.data.attributes.url;
    const altimg3 = cuadro3.data.attributes.alternativeText;

    useEffect(() => {
        const sections = document.querySelectorAll('.fade-section');

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.remove('opacity-0');
                        entry.target.classList.add('opacity-100');
                    } else {
                        entry.target.classList.remove('opacity-100');
                        entry.target.classList.add('opacity-0');
                    }
                });
            },
            { threshold: 0.1 }
        );

        sections.forEach((section) => {
            observer.observe(section as Element);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <div className=' flex items-center content-center flex-col px-[16px] space-y-[16px] my-[50px]
                         md:flex-row md:fade-section md:align-between md:space-x-[80px] md:px-[160px] md:my-[160px] md:duration-1000
                         '>
            <img src={img1} alt={altimg1 ? altimg1 : ''} className='lg:w-[30%]'></img>
            <img src={img2} alt={altimg2 ? altimg2 : ''} className='lg:w-[30%]'></img>
            <img src={img3} alt={altimg3 ? altimg3 : ''} className='lg:w-[30%]'></img>
        </div>
    );
};

export default SquaresAnimated;
