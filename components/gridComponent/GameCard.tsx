// components/GameCard.tsx
import Image from 'next/image';

type GameCardProps = {
  imageSrc: string;
  title: string; // Mantemos o title aqui para o 'alt' text, que é importante para acessibilidade
  provider: string; // Mantemos caso queira usar em outro lugar, como um 'title' attribute
};

export default function GameCard({ imageSrc, title }: GameCardProps) {
  return (
    // O container principal agora é mais simples
    <div className="group relative aspect-[3/4] w-full rounded-2xl overflow-hidden cursor-pointer">
      <Image
        src={imageSrc}
        alt={`Capa do jogo ${title}`} // O título ainda é usado aqui, o que é ótimo!
        fill
        sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
        className="object-cover transition-transform duration-300 group-hover:scale-105"
      />
      {/* 
        O GRADIENTE E O DIV DE TEXTO FORAM REMOVIDOS.
      */}
    </div>
  );
}