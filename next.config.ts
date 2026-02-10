import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 1. Força o Next.js a criar a pasta "out" (HTML estático)
  output: "export",

  // 2. Avisa que o site vai morar numa subpasta (para carregar CSS/JS corretamente)
  // basePath: "/cadastro-smi-c-crm",

  // 3. Desativa a otimização de imagem do servidor (necessário para site estático)
  images: {
    unoptimized: true,
  },

  // 4. Cria pastas com index.html (ex: /sobre/index.html) para evitar erro 404
  trailingSlash: true,
};

export default nextConfig;