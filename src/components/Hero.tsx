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
                                <span>04/03 (Quarta)</span>
                            </div>
                            <div className="flex items-center gap-1.5 bg-slate-100 px-2 py-1 rounded">
                                <Clock className="w-3.5 h-3.5 text-[#C5A065]" />
                                <span>20h • On-line, Gratuita, e Ao Vivo no Zoom</span>
                            </div>
                        </div>
                    </div>

                    {/* Mystery Block - Compact & Elegant */}
                    <div className="border-l-2 border-[#C5A065] pl-4 md:pl-6 py-1">
                        <h2 className="text-xs md:text-sm font-bold text-[#0B1120] font-playfair mb-3 uppercase tracking-wide">
                            EU NÃO VOU ENTREGAR APENAS CONTEÚDO, VOU TE ENTREGAR ACESSO.
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

                        <div className="flex flex-col gap-2">
                            <p className="text-xs text-[#0B1120] font-bold bg-[#C5A065]/10 p-2 rounded border border-[#C5A065]/20 inline-block">
                                🔒 Atenção: A revelação completa e os critérios para concorrer serão feitos EXCLUSIVAMENTE dentro do Grupo VIP.
                            </p>
                            <p className="text-xs text-red-700 font-bold flex items-center gap-1.5">
                                ⚠️ Vagas limitadas pela capacidade da sala do Zoom.
                            </p>
                        </div>
                    </div>

                    {/* CTA Button */}
                    <div className="w-full flex justify-center pt-0">
                        <Link
                            href="https://chat.whatsapp.com/SEU_LINK_AQUI"
                            className="inline-flex w-full sm:w-auto min-w-[300px] items-center justify-center px-8 py-4 text-sm font-bold text-white text-center transition-all duration-200 bg-[#25D366] rounded-full shadow-md hover:bg-[#128C7E] hover:shadow-lg hover:-translate-y-0.5 uppercase tracking-wide"
                        >
                            GARANTIR MEU ACESSO AO GRUPO EXCLUSIVO
                        </Link>
                    </div>

                </div>

                {/* Right Column: Image */}
                <div className="block w-full md:w-[45%] h-[450px] md:h-[85vh] relative rounded-lg overflow-hidden shadow-2xl self-start mt-8 md:mt-4 group">
                    <div className="absolute inset-0 bg-[#0B1120]/10 z-10 group-hover:bg-transparent transition-colors duration-500"></div>
                    <img
                        src="/dra-claudia.png"
                        alt="Dra. Claudia Chagas"
                        className="object-cover w-full h-full object-top"
                    />

                    {/* Gradient Overlay at bottom */}
                    <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/80 to-transparent z-20"></div>

                    {/* Name Badge */}
                    <div className="absolute bottom-6 left-6 z-30">
                        <p className="text-white font-playfair font-bold text-lg">Dra. Claudia Chagas</p>
                        <p className="text-[#C5A065] text-xs font-medium tracking-wider">Referência em Tireoide</p>
                    </div>
                </div>

            </div>
        </section>
    );
}
