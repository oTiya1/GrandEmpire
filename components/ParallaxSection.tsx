type ParallaxSectionProps = {
  image: string;
  title: string;
  text: string;
};

export default function ParallaxSection({
  image,
  title,
  text,
}: ParallaxSectionProps) {
  return (
    <section
      className="relative min-h-[85vh] bg-cover bg-center bg-fixed flex items-center justify-center"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="absolute inset-0 bg-black/70" />

      <div className="relative z-10 max-w-4xl px-6 text-center">
        <p className="mb-4 text-xs md:text-sm uppercase tracking-[0.35em] text-yellow-500">
          Signature Experience
        </p>
        <h2 className="text-4xl md:text-6xl font-light text-white leading-tight">
          {title}
        </h2>
        <p className="mt-6 text-lg md:text-xl text-gray-200 leading-8">
          {text}
        </p>
      </div>
    </section>
  );
}