import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="sobre" className="py-32 bg-brand-white">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">

                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="w-full h-96 lg:h-[600px] overflow-hidden rounded-2xl shadow-xl">
                            {/* Using new uploaded about image */}
                            <img
                                src="/assets/ar-second.jpg"
                                className="w-full h-full object-cover object-center"
                                alt="Consultório"
                            />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-10"
                    >
                        <span className="text-xs font-bold tracking-[0.3em] text-brand-gold uppercase">Sobre Mim</span>

                        <h2 className="text-4xl md:text-5xl text-brand-red leading-tight font-serif">
                            Psicóloga Clínica e Psicanalista de orientação Lacaniana.
                        </h2>

                        <div className="text-lg font-light leading-loose text-justify text-[#594A47] space-y-6">
                            <p>
                                Olá, sou psicóloga formada pela Universidade Federal de São João Del-Rei (UFSJ), com
                                pós-graduação em clínica com pessoas autistas e formação em psicanálise pelo Instituto
                                Bergasse (IB). Para além da minha formação acadêmica, meu percurso clínico se desenvolveu a
                                partir da <strong>teoria psicanalítica</strong>. Sendo assim, minha escuta e todo o processo
                                são fundamentados na psicanálise de orientação Lacaniana.
                            </p>

                            <div className="pl-6 border-l-2 border-brand-gold py-2 italic text-brand-red">
                                "Acredito que a formação de todo analista é constante e se faz sustentando o tripé
                                psicanalítico colocado desde Sigmund Freud: supervisão, análise pessoal e estudo constante
                                da teoria."
                            </div>

                            <p>
                                Comecei minha atuação na psicanálise desde a universidade, atendendo crianças, jovens e
                                adultos em estágios supervisionados, ONGs e outras instituições. Hoje, sigo construindo
                                minha clínica particular, sempre tendo em vista a ética que transpassa tanto minha formação
                                como psicóloga quanto meu fazer como analista.
                            </p>

                            <h3 className="text-2xl font-serif text-brand-red mt-8 mb-4">A Abordagem</h3>
                            <p>
                                A psicanálise entende que existe algo em nós, chamado <strong>inconsciente</strong>, que nos
                                constitui e do qual não temos acesso automático. Ele está na "ponta da língua" e em tudo que
                                constrói nossa subjetividade, principalmente nas repetições que, às vezes, mesmo danosas,
                                não conseguimos mudar.
                            </p>
                            <p>
                                Entendo a análise não como uma solução mágica para todo sofrimento, mas como um modo de
                                estar mais avisado do nosso inconsciente. A partir disso, conseguimos fazer arranjos mais
                                interessantes e prazerosos com a vida.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
