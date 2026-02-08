import { CheckCircle2 } from 'lucide-react';

export default function Content() {
    const contentItems = [
        {
            title: "Dissecando Casos Reais",
            description: "Abertura total de protocolos em casos que desafiam o padrão TI-RADS e exigem olhar clínico apurado."
        },
        {
            title: "Segurança Jurídica e Técnica",
            description: "Como blindar seu laudo e ter certeza absoluta na indicação da biópsia, evitando erros diagnósticos."
        },
        {
            title: "A \"Mão\" do Especialista",
            description: "Detalhes de manobra, posicionamento e 'pulos do gato' que os livros não ensinam."
        }
    ];

    return (
        <section className="py-20 bg-white">
            <div className="container px-4 mx-auto md:px-6">
                <div className="max-w-3xl mx-auto text-center mb-12">
                    <h2 className="text-sm font-bold tracking-widest text-[#C5A065] uppercase mb-2">O Conteúdo</h2>
                    <h3 className="text-3xl font-bold text-slate-900 font-playfair">O que você vai dominar</h3>
                </div>

                <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
                    {contentItems.map((item, index) => (
                        <div key={index} className="p-6 bg-slate-50 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                            <div className="mb-4">
                                <CheckCircle2 className="w-10 h-10 text-[#C5A065]" />
                            </div>
                            <h4 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h4>
                            <p className="text-slate-600 leading-relaxed">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
