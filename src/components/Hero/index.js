import * as S from "./styles";
import Button from "@/components/Button";
import { useState } from "react";
import ModalVideo from "react-modal-video";
import dynamic from "next/dynamic";

function Hero() {
  const [isOpen, setOpen] = useState(false);
  const ModalVideo = dynamic(() => import("react-modal-video"), { ssr: false });

  return (
    <S.Hero>
      <div className="container">
        <S.Title>
          Otimização <strong>e</strong> qualidade de vida{" "}
          <strong>em um investimento equilibrado</strong>
        </S.Title>
        <S.ButtonWrapper>
          <Button title="Tenho Interesse" link="#contato" color="primary" />

          <S.Button onClick={() => setOpen(true)}>
            <S.Icon
              src="/icons/play.svg"
              alt="Imagem de um play"
              title="Imagem de um play"
            />
            Apresentação
          </S.Button>
        </S.ButtonWrapper>
        <S.Arrow
          src="/icons/arrow-down.svg"
          alt="Seta apontando para baixo"
          title="Seta apontando para baixo"
        />
      </div>

      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="oF-xJ6KbdrQ"
        onClose={() => setOpen(false)}
      />
    </S.Hero>
  );
}

export default Hero;
