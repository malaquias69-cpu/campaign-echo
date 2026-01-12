const CampaignContent = () => {
  return (
    <div className="prose prose-lg max-w-none text-foreground">
      <section className="mb-8">
        <h2 className="section-title">O diagnóstico que destruiu o nosso chão</h2>
        <p className="text-foreground/90 leading-relaxed mb-4">
          Olá, meu nome é <strong>Luciana</strong> e sou mãe do <strong>Davi</strong>, um menino de apenas 
          <strong> 7 anos</strong> que ama jogar bola, brincar com os amigos e sonha em ser jogador de futebol. 
          Ele é a luz da minha vida e de toda a nossa família. 💙
        </p>
        <p className="text-foreground/90 leading-relaxed mb-4">
          Tudo começou quando o Davi começou a sentir dores nas pernas e cansaço excessivo. No início, 
          pensamos que era apenas o cansaço das brincadeiras, mas as dores só aumentavam. Levamos ele 
          ao médico e, após vários exames, veio a notícia que destruiu nosso mundo: 
          <strong className="text-highlight"> Davi foi diagnosticado com Leucemia Linfoblástica Aguda (LLA) 
          em estágio avançado</strong>. 😢
        </p>
      </section>

      <section className="mb-8">
        <h2 className="section-title">A luta contra a doença</h2>
        <p className="text-foreground/90 leading-relaxed mb-4">
          Desde o diagnóstico, Davi já passou por inúmeras sessões de quimioterapia, internações e 
          procedimentos dolorosos. Ele é um guerreiro! Mesmo com todo o sofrimento, ele ainda consegue 
          sorrir e nos dar força. 💪
        </p>
        <p className="text-foreground/90 leading-relaxed mb-4">
          Os médicos nos informaram que existe um tratamento inovador chamado <strong>CAR-T Cell</strong>, 
          que é a nossa única esperança de cura definitiva para o Davi. Esse tratamento consiste em 
          modificar geneticamente as células de defesa do próprio paciente para combater o câncer.
        </p>
        <p className="text-foreground/90 leading-relaxed mb-4">
          Infelizmente, esse tratamento <strong>não é oferecido pelo SUS</strong> e custa aproximadamente 
          <strong className="text-highlight"> R$ 1.480.000,00 (um milhão, quatrocentos e oitenta mil reais)</strong>. 
          Um valor impossível para nossa família, que já gastou todas as economias com os tratamentos 
          anteriores.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="section-title">Por que precisamos da sua ajuda? 🙏</h2>
        <p className="text-foreground/90 leading-relaxed mb-4">
          Nós, como família, já fizemos tudo o que estava ao nosso alcance. Vendemos o carro, pegamos 
          empréstimos, meu marido trabalha dia e noite, mas ainda assim estamos muito longe de conseguir 
          o valor necessário.
        </p>
        <p className="text-foreground/90 leading-relaxed mb-4">
          <strong>O tempo está contra nós.</strong> Cada dia que passa, a doença avança. Os médicos nos 
          alertaram que precisamos iniciar o tratamento o mais rápido possível para aumentar as chances 
          de cura do Davi.
        </p>
        <p className="text-foreground/90 leading-relaxed mb-4">
          Por isso, venho pedir a ajuda de vocês. <strong>Qualquer valor, por menor que seja, faz uma 
          diferença enorme</strong>. Uma doação de R$ 10, R$ 20, R$ 50... tudo soma e nos aproxima do 
          nosso objetivo de salvar a vida do meu filho. ❤️
        </p>
      </section>

      <section className="mb-8">
        <h2 className="section-title">Como a sua doação será utilizada</h2>
        <ul className="list-disc list-inside space-y-2 text-foreground/90">
          <li><strong>Tratamento CAR-T Cell:</strong> R$ 1.480.000,00</li>
          <li><strong>Medicamentos e acompanhamento:</strong> R$ 15.000,00</li>
          <li><strong>Despesas hospitalares adicionais:</strong> R$ 5.000,00</li>
        </ul>
        <p className="text-foreground/90 leading-relaxed mt-4">
          Todo o dinheiro arrecadado será utilizado exclusivamente para o tratamento do Davi. 
          Prestamos contas de cada centavo através de notas fiscais e recibos.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="section-title">Compartilhe essa campanha 📲</h2>
        <p className="text-foreground/90 leading-relaxed mb-4">
          Se você não pode doar neste momento, <strong>compartilhar essa campanha é igualmente 
          importante</strong>! Quanto mais pessoas conhecerem a história do Davi, maiores são as 
          chances de alcançarmos nossa meta.
        </p>
        <p className="text-foreground/90 leading-relaxed">
          Compartilhe no WhatsApp, Facebook, Instagram, Twitter... em todos os lugares! Juntos, 
          podemos salvar a vida do Davi! 🙏💙
        </p>
      </section>

      <section className="bg-accent rounded-xl p-6 mb-8">
        <h3 className="text-xl font-bold text-foreground mb-3">💙 Da nossa família para vocês</h3>
        <p className="text-foreground/90 italic">
          "Agradeço de todo o coração cada pessoa que está lendo essa história e se sensibilizando 
          com a nossa dor. Que Deus abençoe cada um de vocês. O Davi vai vencer essa luta, eu tenho 
          fé! E quando ele estiver curado, vou contar para ele sobre todos os anjos que nos ajudaram 
          nessa jornada."
        </p>
        <p className="text-right text-foreground/80 mt-3 font-medium">— Luciana, mãe do Davi</p>
      </section>
    </div>
  );
};

export default CampaignContent;
