import { useState } from "react";
import { Heart, ChevronLeft, ChevronRight } from "lucide-react";

interface Message {
  id: number;
  name: string;
  message: string;
  amount: number;
  date: string;
  isAnonymous: boolean;
}

const generateMessages = (): Message[] => {
  const names = [
    "Maria Silva", "João Santos", "Ana Paula", "Carlos Oliveira", "Fernanda Lima",
    "Pedro Costa", "Juliana Alves", "Ricardo Souza", "Camila Ferreira", "Lucas Martins",
    "Patricia Rodrigues", "Bruno Pereira", "Amanda Gomes", "Rafael Barbosa", "Larissa Carvalho"
  ];
  
  const messages = [
    "Força Davi! Você vai vencer! 💪",
    "Que Deus abençoe sua família! 🙏",
    "Estamos rezando por você! ❤️",
    "Guerreiro! Logo você estará curado!",
    "Deus é maior que qualquer doença!",
    "Força família! Vocês não estão sozinhos!",
    "Acredito na sua cura! 💙",
    "Meu coração está com vocês!",
    "Que esse tratamento funcione! 🙏",
    "Davi, você é muito forte!",
    "Toda força do mundo pra vocês!",
    "Não desistam! A vitória vem!",
    "Minha oração está com o Davi! ❤️",
    "Que Deus cuide do Davi!",
    "Força guerreiro! Você consegue!"
  ];

  const generatedMessages: Message[] = [];
  
  for (let i = 1; i <= 500; i++) {
    const isAnonymous = Math.random() > 0.7;
    generatedMessages.push({
      id: i,
      name: isAnonymous ? "Anônimo" : names[Math.floor(Math.random() * names.length)],
      message: messages[Math.floor(Math.random() * messages.length)],
      amount: [30, 40, 50, 75, 100, 150, 200, 300, 500][Math.floor(Math.random() * 9)],
      date: `${Math.floor(Math.random() * 28) + 1}/01/2025`,
      isAnonymous
    });
  }
  
  return generatedMessages;
};

const allMessages = generateMessages();

const SupportMessages = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const messagesPerPage = 5;
  const totalPages = Math.ceil(allMessages.length / messagesPerPage);

  const indexOfLastMessage = currentPage * messagesPerPage;
  const indexOfFirstMessage = indexOfLastMessage - messagesPerPage;
  const currentMessages = allMessages.slice(indexOfFirstMessage, indexOfLastMessage);

  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    const showPages = 5;
    
    if (totalPages <= showPages + 2) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      pages.push(1);
      
      if (currentPage > 3) pages.push("...");
      
      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);
      
      for (let i = start; i <= end; i++) {
        if (!pages.includes(i)) pages.push(i);
      }
      
      if (currentPage < totalPages - 2) pages.push("...");
      
      if (!pages.includes(totalPages)) pages.push(totalPages);
    }
    
    return pages;
  };

  return (
    <section className="mt-12">
      <div className="flex items-center gap-2 mb-6">
        <Heart className="text-primary" size={24} />
        <h2 className="section-title mb-0">Mensagens de Apoio</h2>
        <span className="bg-primary text-primary-foreground text-sm px-2 py-0.5 rounded-full">
          {allMessages.length}
        </span>
      </div>

      <div className="space-y-4 mb-6">
        {currentMessages.map((msg) => (
          <div key={msg.id} className="card-message animate-slide-up">
            <div className="flex justify-between items-start mb-2">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-semibold">
                    {msg.isAnonymous ? "?" : msg.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">{msg.name}</p>
                  <p className="text-xs text-muted-foreground">{msg.date}</p>
                </div>
              </div>
              <span className="text-highlight font-semibold">
                R$ {msg.amount}
              </span>
            </div>
            <p className="text-foreground/80 text-sm">{msg.message}</p>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-center gap-1 flex-wrap">
        <button
          onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
          disabled={currentPage === 1}
          className="p-2 rounded-lg border border-border hover:bg-secondary disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          <ChevronLeft size={18} />
        </button>

        {getPageNumbers().map((page, idx) => (
          <button
            key={idx}
            onClick={() => typeof page === "number" && setCurrentPage(page)}
            disabled={page === "..."}
            className={`min-w-[36px] h-9 px-2 rounded-lg text-sm font-medium transition-colors ${
              page === currentPage
                ? "bg-primary text-primary-foreground"
                : page === "..."
                ? "cursor-default"
                : "border border-border hover:bg-secondary"
            }`}
          >
            {page}
          </button>
        ))}

        <button
          onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
          disabled={currentPage === totalPages}
          className="p-2 rounded-lg border border-border hover:bg-secondary disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </section>
  );
};

export default SupportMessages;
