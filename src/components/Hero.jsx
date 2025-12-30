import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center bg-brand-red text-brand-white overflow-hidden">
            <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pt-20">

                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="z-10 order-2 lg:order-1 space-y-8"
                >
                    <div className="border-l-2 border-brand-gold pl-6">
                        <span className="text-sm uppercase tracking-[0.4em] text-brand-gold">Psicologia Clínica</span>
                    </div>

                    <h1 className="font-serif text-6xl md:text-8xl lg:text-[6rem] leading-none text-white">
                        Amanda<br />
                        <span className="text-brand-beige italic">Rodrigues</span>
                    </h1>

                    <div className="text-xl md:text-2xl text-gray-200 font-serif italic leading-relaxed max-w-lg space-y-2 opacity-90">
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                        >
                            Instante de ver
                        </motion.p>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7 }}
                            className="pl-12 md:pl-16"
                        >
                            Momento de entender
                        </motion.p>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.9 }}
                            className="pl-24 md:pl-32"
                        >
                            Tempo de concluir.
                        </motion.p>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.1 }}
                        className="pt-8"
                    >
                        <a
                            href="#contato"
                            onClick={(e) => {
                                e.preventDefault();
                                document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' });
                            }}
                            className="inline-block bg-brand-white text-brand-red px-12 py-4 uppercase tracking-[0.25em] text-sm font-bold hover:bg-brand-beige hover:-translate-y-1 hover:shadow-2xl transition-all duration-300"
                        >
                            Agendar Sessão
                        </a>
                    </motion.div>
                </motion.div>

                {/* Image Content */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="order-1 lg:order-2 relative h-[50vh] lg:h-[80vh] w-full"
                >
                    <div className="w-full h-full relative rounded-2xl overflow-hidden flex items-end justify-center">
                        {/* Using new uploaded hero image with removed background */}
                        <img
                            src="/assets/ar-perfil-nobg.png"
                            alt="Dra. Amanda Rodrigues"
                            className="w-full h-full object-contain object-bottom hover:scale-105 transition-transform duration-[2s]"
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
