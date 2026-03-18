import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function LandingPage() {
  return (
    <div className="bg-black text-white min-h-screen">

      {/* HERO */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-32">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold mb-6"
        >
          Você está a 1 estratégia de mudar seu conteúdo
        </motion.h1>

        <p className="text-gray-300 max-w-2xl mb-8">
          Descubra o método que transforma posts comuns em conteúdo que gera engajamento e vendas.
        </p>

        <Button className="bg-yellow-400 text-black text-lg px-8 py-6 rounded-2xl hover:scale-105 transition">
          Quero acessar agora
        </Button>
      </section>

      {/* DOR */}
      <section className="bg-zinc-900 py-24 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">
          Você posta... mas ninguém vê?
        </h2>
        <p className="text-gray-400 max-w-xl mx-auto">
          O problema não é você. É o formato do seu conteúdo.
        </p>
      </section>

      {/* SOLUÇÃO */}
      <section className="py-24 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">
          Apresentando o Método X
        </h2>
        <p className="text-gray-400 max-w-xl mx-auto">
          Um sistema simples para criar conteúdo que prende atenção e gera resultado.
        </p>
      </section>

      {/* PROVA */}
      <section className="bg-zinc-900 py-24 px-6 text-center">
        <h2 className="text-3xl font-bold mb-10">
          Resultados reais
        </h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="bg-black p-6 rounded-2xl">+120k seguidores</div>
          <div className="bg-black p-6 rounded-2xl">+1M visualizações</div>
          <div className="bg-black p-6 rounded-2xl">Vendas todos os dias</div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-32 text-center">
        <h2 className="text-4xl font-bold mb-6">
          Comece agora
        </h2>
        <Button className="bg-yellow-400 text-black text-xl px-10 py-6 rounded-2xl hover:scale-105 transition">
          Quero entrar agora
        </Button>
      </section>

    </div>
  );
}
