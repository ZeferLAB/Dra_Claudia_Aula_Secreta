export default function Footer() {
    return (
        <footer className="py-8 text-center bg-slate-950 text-slate-500 border-t border-slate-900">
            <div className="container px-4 mx-auto text-sm">
                <p className="mb-4 text-slate-400">
                    ⚠️ Vagas limitadas pela capacidade da sala do Zoom. A qualquer momento este link pode expirar.
                </p>
                <p>
                    &copy; {new Date().getFullYear()} Dra. Claudia Chagas. Todos os direitos reservados.
                </p>
            </div>
        </footer>
    );
}
