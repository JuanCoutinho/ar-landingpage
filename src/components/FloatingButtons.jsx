import { useState, useEffect } from 'react';
import { ArrowUp, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const FloatingButtons = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <div className="fixed bottom-8 right-8 flex flex-col gap-4 z-50">
            {/* WhatsApp Button */}
            <motion.a
                href="https://wa.me/5533999828549"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
                className="bg-[#25D366] p-4 rounded-full shadow-lg text-white hover:shadow-xl transition-shadow duration-300 flex items-center justify-center"
                aria-label="Contato via WhatsApp"
            >
                <MessageCircle size={24} fill="white" />
            </motion.a>

            {/* Scroll to Top Button */}
            <AnimatePresence>
                {isVisible && (
                    <motion.button
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0 }}
                        whileHover={{ scale: 1.1 }}
                        onClick={scrollToTop}
                        className="bg-brand-red p-4 rounded-full shadow-lg text-brand-white hover:bg-brand-red/90 hover:shadow-xl transition-all duration-300 flex items-center justify-center"
                        aria-label="Voltar ao topo"
                    >
                        <ArrowUp size={24} />
                    </motion.button>
                )}
            </AnimatePresence>
        </div>
    );
};

export default FloatingButtons;
