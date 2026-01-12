import heroImage from "@/assets/hero-child.png";

const HeroSection = () => {
  return (
    <section className="relative">
      {/* Hero Image */}
      <div className="relative w-full overflow-hidden">
        <img
          src={heroImage}
          alt="Davi - criança em tratamento"
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Title */}
      <div className="bg-background px-4 py-6 md:py-8">
        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-foreground leading-tight">
          Meu filho está com câncer em estágio avançado e precisa urgente de um tratamento que custa R$ 1.48 milhão
        </h1>
      </div>
    </section>
  );
};

export default HeroSection;
