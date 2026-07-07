import heroBackground from "../assets/images/heroBackground.png";

function Hero() {
  return (
    <section
      className="relative min-h-[calc(100vh-14rem)] bg-cover bg-center bg-no-repeat mx-auto"
      style={{
        backgroundImage: `url(${heroBackground})`,
      }}
    >
      <div className="absolute inset-0 flex flex-col items-center px-4 pt-12 bg-linear-to-b from-black/65 via-black/55 to-background">
        <div className="max-w-2xl text-center">
          <h1 className="text-4xl md:text-6xl">Movie Search</h1>
          <p className="mt-4 text-lg text-muted">
            Discover Movies From Around the World.
          </p>
        </div>
        <form className="mt-6 flex flex-col sm:flex-row items-center gap-4 w-full">
          Search Bar Placeholder
        </form>
      </div>
    </section>
  );
}

export default Hero;
