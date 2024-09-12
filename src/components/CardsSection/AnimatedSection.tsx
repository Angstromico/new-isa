import { Children, useEffect } from 'react';
import { IMAGES_URL } from '@/constants';

interface Texts {
    title: string;
    description: string;
}

interface SectionProps {
    texts: Texts[];
    image: any;
}

const AnimatedSection = ({texts, image}: SectionProps) => {
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
        <section className="flex flex-col-reverse px-[16px] space-y-[50px] my-[50px]
                            md:flex-row md:basis-1/2 md:px-[160px] md:space-x-[80px] ">
            <div className="my-[50px]">
                <img src={IMAGES_URL + image.data.attributes.url} alt="" className=" rounded-tr-lg md:h-full h-[18em] w-full" />
            </div>
            <div className="flex-1 basis-1/2 flex flex-col space-y-[50px] md:space-y-[80px]">
                { 
                texts.map(({ title, description }, index) => (
                    <div
                        className="space-y-[24px] fade-section opacity-0 transition-opacity duration-1000"
                        key={index}
                    >
                        <div className="flex space-x-[24px]">
                            <div className="bg-gradient-to-t from-azulGradiente from-0% to-verdeGradiente to-100% w-[15px] h-auto" />
                            <div className="w-100">
                                <h2 className="font-400 text-[30px] leading-[39px]  
                                                md:text-[50px] md:leading-[50px]">{title}</h2>
                            </div>
                        </div>
                        <div>
                            <p className="font-400 text-[20px] 
                                            md:text-[24px]">
                                {
                                    Array.isArray(description) ? description.map(({ children }) => {
                                        return children.map(({ text }) => {
                                            return text;
                                        });
                                    }) : description
                                }
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default AnimatedSection;
