import Image from 'next/image';

type GameCardProps = {
  imageSrc: string;
  title: string;
  provider: string;
};

export default function GameCard({ imageSrc, title, provider }: GameCardProps) {
  return (
    // 'group' é usado para o efeito de hover no filho (a imagem)
    <div className="group relative aspect-[3/4] w-full rounded-2xl overflow-hidden cursor-pointer">
      {/* Imagem de Fundo */}
      <Image
        src={imageSrc}
        alt={`Capa do jogo ${title}`}
        fill
        sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
        className="object-cover transition-transform duration-300 group-hover:scale-105"
      />
      {/* Gradiente para legibilidade do texto */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

      {/* Conteúdo de Texto */}
      <div className="absolute inset-0 p-4 flex flex-col justify-end">
        <h3 className="text-white text-xl font-bold uppercase tracking-wide [text-shadow:0_1px_3px_rgba(0,0,0,0.8)]">
          {title}
        </h3>
        <p className="text-white/70 text-sm font-semibold uppercase [text-shadow:0_1px_2px_rgba(0,0,0,0.7)]">
          {provider}
        </p>
      </div>
    </div>
  );
}