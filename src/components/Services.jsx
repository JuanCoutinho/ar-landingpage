import { motion } from 'framer-motion';
import { BrainCircuit, ShieldCheck, Coins } from 'lucide-react';

const Services = () => {
    const services = [
        {
            icon: <BrainCircuit className="w-8 h-8" />,
            title: "Tratamento",
            content: [
                "O tratamento pela perspectiva lacaniana depende do desejo e do tempo lógico de cada paciente. É você quem decide até onde quer aprender sobre si mesmo.",
                "As intervenções guiam o processo, mas o tempo de elaboração é singular. Não há como pré-determinar a duração, mas garanto uma escuta atenta e ética."
            ],
            note: "*O tratamento não é medicamentoso. Caso necessário, haverá encaminhamento para psiquiatra de confiança."
        },
        {
            icon: <ShieldCheck className="w-8 h-8" />,
            title: "Ética e Sigilo",
            content: [
                "Atendimentos respaldados pelo código de ética do Psicólogo, baseados no respeito, liberdade e integridade. Pautados na responsabilidade social e na singularidade de cada história.",
                "Confidencialidade Absoluta: Conforme o Art. 9º, o sigilo é garantido para proteger a intimidade e a liberdade de expressão do paciente."
            ]
        },
        {
            icon: <Coins className="w-8 h-8" />,
            title: "Investimento",
            content: [
                "O valor é informado diretamente via contato (Art. 20 do Código de Ética proíbe preço como propaganda).",
                "Não trabalho com pacotes; os valores são iguais independente do tempo de tratamento."
            ],
            list: [
                "Nota fiscal para reembolso (convênio)",
                "Pagamento via PIX, dinheiro ou transferência",
                "Opção de pagamento por sessão ou mensal"
            ]
        }
    ];

    return (
        <section id="servicos" className="py-32 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-5xl text-brand-red mb-6 font-serif"
                    >
                        Sobre o serviço
                    </motion.h2>
                    <div className="w-20 h-1 bg-brand-gold mx-auto"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="bg-white border border-gray-200 p-10 text-center group hover:border-brand-gold hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 flex flex-col"
                        >
                            <div className="w-16 h-16 bg-brand-beige/30 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:bg-brand-red group-hover:text-white text-brand-red transition-colors duration-300">
                                {service.icon}
                            </div>
                            <h3 className="text-2xl font-serif text-[#2A2A2A] mb-4">{service.title}</h3>
                            <div className="text-[#594A47] font-light leading-relaxed text-sm text-justify flex-grow space-y-4">
                                {service.content.map((p, i) => (
                                    <p key={i}>{p}</p>
                                ))}
                                {service.note && (
                                    <p className="text-xs mt-4 pt-4 border-t border-gray-100 italic">{service.note}</p>
                                )}
                                {service.list && (
                                    <ul className="mt-4 text-left list-disc list-inside space-y-1 text-xs">
                                        {service.list.map((item, i) => (
                                            <li key={i}>{item}</li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
