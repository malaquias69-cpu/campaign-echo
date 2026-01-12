import { useState } from "react";
import { Heart, Copy, Check } from "lucide-react";
import { toast } from "sonner";

const DonationSidebar = () => {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(50);
  const [customAmount, setCustomAmount] = useState("");
  const [donorName, setDonorName] = useState("");
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [copied, setCopied] = useState(false);

  const amounts = [30, 40, 50, 75, 100, 150, 200, 300, 500];
  
  const raised = 926984.64;
  const goal = 1500000;
  const percentage = (raised / goal) * 100;
  const donors = 12847;

  const handleAmountClick = (amount: number) => {
    setSelectedAmount(amount);
    setCustomAmount("");
  };

  const handleCustomAmountChange = (value: string) => {
    setCustomAmount(value);
    setSelectedAmount(null);
  };

  const handleCopyPix = async () => {
    try {
      await navigator.clipboard.writeText("elviolopes3@gmail.com");
      setCopied(true);
      toast.success("Chave PIX copiada!");
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast.error("Erro ao copiar");
    }
  };

  const handleDonate = () => {
    const amount = selectedAmount || Number(customAmount);
    if (amount > 0) {
      toast.success(`Obrigado por doar R$ ${amount.toFixed(2)}! 🙏`);
    } else {
      toast.error("Selecione um valor para doar");
    }
  };

  return (
    <div className="card-donation sticky top-[88px]">
      {/* Progress Section */}
      <div className="mb-6">
        <div className="flex justify-between items-end mb-2">
          <div>
            <p className="text-2xl md:text-3xl font-bold text-primary">
              R$ {raised.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
            </p>
            <p className="text-sm text-muted-foreground">
              arrecadados de R$ {goal.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
            </p>
          </div>
          <div className="text-right">
            <p className="text-lg font-semibold text-foreground">{percentage.toFixed(1)}%</p>
          </div>
        </div>
        
        <div className="progress-bar">
          <div 
            className="progress-fill"
            style={{ width: `${percentage}%` }}
          />
        </div>

        <div className="flex items-center gap-2 mt-3 text-muted-foreground">
          <Heart size={16} className="text-primary" />
          <span className="text-sm">{donors.toLocaleString("pt-BR")} doadores</span>
        </div>
      </div>

      {/* Amount Selection */}
      <div className="mb-6">
        <p className="font-semibold text-foreground mb-3">Escolha o valor da doação:</p>
        <div className="grid grid-cols-3 gap-2 mb-3">
          {amounts.map((amount) => (
            <button
              key={amount}
              onClick={() => handleAmountClick(amount)}
              className={selectedAmount === amount ? "btn-amount-selected" : "btn-amount"}
            >
              R$ {amount}
            </button>
          ))}
        </div>
        
        <div className="relative">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">R$</span>
          <input
            type="number"
            placeholder="Outro valor"
            value={customAmount}
            onChange={(e) => handleCustomAmountChange(e.target.value)}
            className="input-field pl-10"
          />
        </div>
      </div>

      {/* Donor Info */}
      <div className="mb-6 space-y-3">
        <input
          type="text"
          placeholder="Seu nome"
          value={donorName}
          onChange={(e) => setDonorName(e.target.value)}
          className="input-field"
          disabled={isAnonymous}
        />
        
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={isAnonymous}
            onChange={(e) => setIsAnonymous(e.target.checked)}
            className="w-4 h-4 rounded border-border text-primary focus:ring-primary"
          />
          <span className="text-sm text-muted-foreground">Doar anonimamente</span>
        </label>
      </div>

      {/* Donate Button */}
      <button onClick={handleDonate} className="btn-donate w-full mb-6">
        Quero Ajudar 🙏
      </button>

      {/* PIX Section */}
      <div className="border-t border-border pt-6">
        <p className="font-semibold text-foreground mb-3">Ou doe via PIX:</p>
        
        <div className="bg-secondary rounded-lg p-4 mb-3">
          <p className="text-sm text-muted-foreground mb-1">Chave PIX (E-mail):</p>
          <p className="font-mono text-foreground font-medium break-all">
            elviolopes3@gmail.com
          </p>
        </div>

        <button
          onClick={handleCopyPix}
          className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground rounded-lg py-3 font-medium hover:bg-primary/90 transition-colors"
        >
          {copied ? <Check size={18} /> : <Copy size={18} />}
          {copied ? "COPIADO!" : "CLIQUE PARA COPIAR"}
        </button>

        <div className="mt-4 text-xs text-muted-foreground space-y-1">
          <p>1. Abra o app do seu banco</p>
          <p>2. Escolha pagar com PIX</p>
          <p>3. Cole a chave copiada</p>
        </div>
      </div>
    </div>
  );
};

export default DonationSidebar;
