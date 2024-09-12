import { useEffect } from 'react';

interface Props {
    titulo: string 
    texto: string
}
   

const AnimatedSection = ({ titulo, texto }) => {

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
        <div className='flex flex-col flex-1 space-y-[24px] items-center content-center px-[16px]                  
                        md:flex-row md:fade-section md:content-center md:space-x-[40px] md:px-[160px] md:mt-[160px] md:duration-1000                            
        '>
            <h2 className="font-400 text-[100px] md:text-[190px]">{titulo}</h2>
            <div className="bg-gradient-to-r from-azulGradiente from-0% to-verdeGradiente to-100% w-full h-[20px] 
            md:bg-gradient-to-t md:h-[198px] md:w-[20px]  " />
            <p className='text-[20px] md:text-[37px]'>{texto}</p>
        </div>
    );
};

export default AnimatedSection;
