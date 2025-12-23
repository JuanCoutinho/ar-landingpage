import { motion } from 'framer-motion';
import { MessageCircle, Mail, Instagram, MapPin, Video } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contato" className="py-32 bg-brand-red text-brand-white relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="text-xs uppercase tracking-[0.4em] text-brand-gold mb-4 block">Contato</span>
                    <h2 className="text-5xl md:text-7xl font-serif mb-10 leading-tight">
                        Se você deseja iniciar essa jornada,<br />entre em contato comigo.
                    </h2>

                    <a
                        href="https://wa.me/5533999828549"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 bg-brand-white text-brand-red px-10 py-4 uppercase tracking-[0.25em] text-sm font-bold hover:bg-brand-beige hover:scale-105 transition-all duration-300"
                    >
                        <MessageCircle size={20} />
                        Iniciar Conversa
                    </a>
                </motion.div>

                <div className="mt-20 max-w-4xl mx-auto border-t border-brand-gold/30 pt-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left mb-12">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            <h4 className="text-[#A67C6D] text-sm uppercase tracking-widest mb-4 flex items-center gap-2">
                                <MapPin size={16} /> Atendimento Presencial
                            </h4>
                            <p className="text-brand-white/80 font-light text-lg">Bairro Agenor de Campos<br />Mongaguá - SP</p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            <h4 className="text-[#A67C6D] text-sm uppercase tracking-widest mb-4 flex items-center gap-2">
                                <Video size={16} /> Atendimento Online
                            </h4>
                            <p className="text-brand-white/80 font-light text-lg">Para todo o Brasil<br />via vídeo chamada</p>
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 text-sm uppercase tracking-widest text-brand-white/60"
                    >
                        <a href="mailto:amandarodriguesb8@gmail.com" className="hover:text-white transition-colors flex items-center gap-2">
                            <Mail size={16} /> amandarodriguesb8@gmail.com
                        </a>
                        <a href="https://wa.me/5533999828549" className="hover:text-white transition-colors flex items-center gap-2">
                            <MessageCircle size={16} /> (33) 99982-8549
                        </a>
                        <a href="https://instagram.com/psi_amanda8" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-2">
                            <Instagram size={16} /> @psi_amanda8
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
