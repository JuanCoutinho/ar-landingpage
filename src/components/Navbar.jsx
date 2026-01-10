import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logoNav from '../assets/logo-nav.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsOpen(false);
        }
    };

    return (
        <>
            <nav
                className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg py-4' : 'bg-white py-6'
                    }`}
            >
                <div className="container mx-auto px-6 flex items-center justify-between">
                    <a href="#" className="flex items-center">
                        <img src={logoNav} alt="Amanda Rodrigues" className="h-16 md:h-20 w-auto transition-all duration-300" />
                    </a>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-12">
                        {['Sobre', 'Serviços', 'Contato'].map((item) => (
                            <button
                                key={item}
                                onClick={() => scrollToSection(item.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""))}
                                className="text-gray-700 hover:text-brand-red uppercase tracking-widest text-xs font-medium transition-colors"
                            >
                                {item}
                            </button>
                        ))}
                    </div>

                    {/* Mobile Toggle */}
                    <button className="md:hidden text-gray-700" onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: '-100%' }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: '-100%' }}
                        transition={{ duration: 0.5, ease: 'easeInOut' }}
                        className="fixed inset-0 bg-brand-red z-40 flex flex-col justify-center items-center gap-8"
                    >
                        {['Sobre', 'Serviços', 'Contato'].map((item) => (
                            <button
                                key={item}
                                onClick={() => scrollToSection(item.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""))}
                                className="text-white text-4xl font-serif hover:text-brand-beige transition-colors"
                            >
                                {item}
                            </button>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
