import { Calendar, Clock, Lock, Plane, Handshake, GraduationCap } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
    return (
        <section className="relative min-h-screen w-full bg-[#FAFAFA] flex flex-col overflow-hidden">

            {/* Top Bar - Ultra Slim */}
            <div className="w-full bg-[#0B1120] py-2 px-4 text-center border-b border-[#C5A065]/20 shrink-0">
                <p className="text-[#C5A065] text-xs md:text-sm font-medium tracking-wide font-serif">
                    Aula Exclusiva para Médicos - Um convite especial para ex-alunos
                </p>
            </div>

            {/* Content Area */}
            <div className="flex-1 container mx-auto px-4 md:px-8 py-4 md:py-6 flex flex-col md:flex-row items-center gap-8 md:gap-12 h-full justify-center">

                {/* Left Column: Content */}
                <div className="w-full md:w-[55%] flex flex-col justify-center space-y-5">

                    <div className="space-y-3">
                        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0B1120] font-playfair leading-[1.2]">
                            SESSÃO CLÍNICA FECHADA: <br />
                            <span className="text-[#C5A065]">O RACIOCÍNIO POR TRÁS DOS CASOS DIFÍCEIS</span>
                        </h1>

                        <p className="text-sm md:text-base text-slate-600 font-inter leading-relaxed max-w-xl">
                            Uma transmissão exclusiva via Zoom, onde vou abrir os bastidores da minha prática diária e discutir a conduta segura em casos de TI-RADS e Biópsia que o livro não ensina.
                        </p>

                        {/* Date & Info - Repositioned */}
                        <div className="flex flex-wrap gap-3 text-xs font-semibold text-slate-500 pt-1">
                            <div className="flex items-center gap-1.5 bg-slate-100 px-2 py-1 rounded">
                                <Calendar className="w-3.5 h-3.5 text-[#C5A065]" />
                                <span>04/03 (Terça)</span>
                            </div>
                            <div className="flex items-center gap-1.5 bg-slate-100 px-2 py-1 rounded">
                                <Clock className="w-3.5 h-3.5 text-[#C5A065]" />
                                <span>20h • Online e Ao vivo no Zoom</span>
                            </div>
                        </div>
                    </div>

                    {/* Mystery Block - Compact & Elegant */}
                    <div className="border-l-2 border-[#C5A065] pl-4 md:pl-6 py-1">
                        <h2 className="text-sm md:text-base font-bold text-[#0B1120] font-playfair mb-3 uppercase tracking-wide">
                            NESTA SESSÃO, NÃO VOU ENTREGAR APENAS CONTEÚDO. <br className="hidden md:block" />VOU ENTREGAR ACESSO.
                        </h2>

                        <ul className="space-y-3 mb-4">
                            <li className="flex items-start gap-3">
                                <GraduationCap className="w-5 h-5 text-[#C5A065] shrink-0 mt-0.5" />
                                <span className="text-sm text-slate-700 font-medium">Bolsa de Estudos Integral para a Formação.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Plane className="w-5 h-5 text-[#C5A065] shrink-0 mt-0.5" />
                                <span className="text-sm text-slate-700 font-medium">Experiência de Imersão Presencial VIP <span className="text-slate-500 font-normal">(Vivência prática única)</span>.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Handshake className="w-5 h-5 text-[#C5A065] shrink-0 mt-0.5" />
                                <span className="text-sm text-slate-700 font-medium">Mentoria de Carreira & Ferramentas exclusivas.</span>
                            </li>
                        </ul>

                        <p className="text-xs text-[#0B1120] font-bold bg-[#C5A065]/10 p-2 rounded border border-[#C5A065]/20 inline-block">
                            🔒 Atenção: A revelação completa e os critérios para concorrer serão feitos EXCLUSIVAMENTE dentro do Grupo VIP.
                        </p>
                    </div>

                    {/* CTA Button */}
                    <div className="w-full flex justify-center pt-4">
                        <Link
                            href="https://chat.whatsapp.com/SEU_LINK_AQUI"
                            className="inline-flex w-full sm:w-auto min-w-[300px] items-center justify-center px-8 py-4 text-sm font-bold text-white text-center transition-all duration-200 bg-[#25D366] rounded-full shadow-md hover:bg-[#128C7E] hover:shadow-lg hover:-translate-y-0.5 uppercase tracking-wide"
                        >
                            GARANTIR MEU ACESSO AO GRUPO EXCLUSIVO
                        </Link>
                    </div>

                </div>

                {/* Right Column: Image Placeholder - Taller to balance */}
                <div className="hidden md:block w-[45%] h-[85vh] relative rounded-lg overflow-hidden shadow-2xl bg-slate-200 self-start mt-4">
                    {/* Placeholder Graphic */}
                    <div className="absolute inset-0 bg-neutral-200 flex flex-col items-center justify-center text-slate-400">
                        <span className="text-sm uppercase tracking-widest font-medium mb-2">[FOTO DA ESPECIALISTA]</span>
                        <span className="text-xs text-slate-400 opacity-60">Sugestão: Foto em pé, jaleco ou social elegante</span>
                    </div>

                    {/* Gradient Overlay at bottom */}
                    <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>

            </div>
        </section>
    );
}
