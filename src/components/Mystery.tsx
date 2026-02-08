import { Plane, Eye, GraduationCap, Lock } from 'lucide-react';
import Link from 'next/link';

export default function Mystery() {
    const prizes = [
        {
            icon: <Plane className="w-8 h-8 text-[#C5A065]" />,
            title: "EXPERIÊNCIA PRESENCIAL VIP",
            description: "Uma imersão exclusiva para viver a rotina de alto padrão.",
        },
        {
            icon: <Eye className="w-8 h-8 text-[#C5A065]" />,
            title: "SHADOWING CLÍNICO",
            description: "Acompanhamento prático, lado a lado, vendo a tomada de decisão em tempo real.",
        },
        {
            icon: <GraduationCap className="w-8 h-8 text-[#C5A065]" />,
            title: "MENTORIA & FERRAMENTAS",
            description: "Acesso a recursos que aceleram anos de carreira em semanas.",
        },
    ];

    return (
        <section className="py-20 bg-slate-900 border-y border-[#C5A065]/20">
            <div className="container px-4 mx-auto md:px-6">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight text-white font-playfair md:text-5xl lg:text-5xl mb-6">
                        VOCÊ VAI TER A CHANCE DE ESTAR COMIGO PESSOALMENTE
                    </h2>
                    <p className="text-xl md:text-2xl italic text-[#C5A065] font-light font-playfair">
                        "Nesta aula, não vou entregar apenas conteúdo. Vou entregar ACESSO."
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto mb-16">
                    {prizes.map((prize, index) => (
                        <div
                            key={index}
                            className="relative p-8 bg-slate-950/50 rounded-xl border border-[#C5A065]/30 hover:border-[#C5A065] transition-colors group"
                        >
                            <div className="flex justify-center mb-6">
                                <div className="p-4 rounded-full bg-[#C5A065]/10 group-hover:bg-[#C5A065]/20 transition-colors">
                                    {prize.icon}
                                </div>
                            </div>
                            <h3 className="text-lg font-bold text-center text-white mb-3 tracking-wider">{prize.title}</h3>
                            <p className="text-center text-slate-400 text-sm leading-relaxed">
                                {prize.description}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="max-w-3xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 text-sm font-medium text-amber-200 bg-amber-900/30 rounded-full border border-amber-500/20">
                        <Lock className="w-4 h-4" />
                        <span>A revelação completa de como concorrer a essas experiências será feita EXCLUSIVAMENTE dentro do Grupo VIP.</span>
                    </div>

                    <Link
                        href="https://chat.whatsapp.com/SEU_LINK_AQUI"
                        className="block w-full max-w-md mx-auto py-5 text-lg font-bold text-slate-900 transition-all duration-200 bg-[#C5A065] rounded-xl hover:bg-[#D4AF37] hover:shadow-[0_0_30px_rgba(197,160,101,0.4)] hover:scale-[1.02] active:scale-[0.98]"
                    >
                        ENTRAR NO GRUPO VIP E CONCORRER
                    </Link>
                    <p className="mt-4 text-xs text-slate-500">
                        *O acesso ao grupo é gratuito, mas as vagas para concorrer são limitadas.
                    </p>
                </div>
            </div>
        </section>
    );
}
