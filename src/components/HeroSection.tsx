import heroImage from "@/assets/hero-child.jpg";

const HeroSection = () => {
  return (
    <section className="relative">
      {/* Hero Image */}
      <div className="relative w-full h-[300px] md:h-[400px] lg:h-[450px] overflow-hidden">
        <img
          src={heroImage}
          alt="Davi - criança em tratamento"
          className="w-full h-full object-cover"
        />
        {/* Overlay with text */}
        <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6">
          <div className="bg-foreground/70 backdrop-blur-sm rounded-lg px-4 py-2">
            <p className="text-primary-foreground text-sm md:text-base font-medium">
              Meu filho lindo ❤️❤️❤️❤️
            </p>
          </div>
        </div>
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
