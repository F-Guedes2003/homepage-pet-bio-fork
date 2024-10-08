"use client";

import React from "react";
import styles from "./Inscricoes.module.css";
import { AiOutlineCloudDownload } from "react-icons/ai";
import useFetchProcessos from "@/hooks/fetch/useFetchProcessos";

export default function Inscricoes() {
  const { inscricao } = useFetchProcessos();

  let stateClass;

  if (inscricao?.estado == '(encerrado)') stateClass = styles.encerrado;

  else if (inscricao?.estado == '(ativo)' || inscricao?.estado == '(inscrições abertas)' ) stateClass = styles.ativo;

  else stateClass = '';

  return (
    <div className={styles.Inscricao}>
      <h2 className={styles.titulo}>Inscrições</h2>
      <p className={styles.texto}>
        {inscricao?.introducao}{" "}
        <a
          className={styles.email}
          href={`mailto:${inscricao?.email}?subject= Processo seletivo PET/LICBIO`}
        >
          {inscricao?.email}
        </a>
        .
      </p>
      <p className={styles.texto}>
        {inscricao?.prazo}{" "}
        <span className={stateClass}>{inscricao?.data}</span>{" "}
        {inscricao?.estado}.
      </p>
      <p className={styles.texto}>{inscricao?.detalhes}</p>
      <p className={styles.download}>
        <a href={inscricao?.drive} rel="noreferrer" target="_blank">
          <AiOutlineCloudDownload className={styles.btnDownload} />
        </a>
      </p>
    </div>
  );
}


