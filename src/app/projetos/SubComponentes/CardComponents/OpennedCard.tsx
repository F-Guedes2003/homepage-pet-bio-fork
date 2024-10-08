import React from "react";
import LogoConteiner from "./LogoConteiner";
import OpennedContent from "./OpennedContent";
import { AiFillCloseCircle } from "react-icons/ai";
import "../CardProjeto/cardProjeto.css"
import { IOpennedCardProps} from "../../../../types/ProjectTypes";



export default function OpennedCard({toggleIsOpen,tipo,status,link,titulo,expandido, images}: IOpennedCardProps) {
  return (
    <>
      <LogoConteiner tipo={tipo} link={link} logoConteinerClass="logoConteinerClosed" iconClass="icon-aberto" />
      <AiFillCloseCircle className="closeButton" onClick={toggleIsOpen} />
      <OpennedContent titulo={titulo} status={status} expandido={expandido} images={images}/>
    </>
  );
}
