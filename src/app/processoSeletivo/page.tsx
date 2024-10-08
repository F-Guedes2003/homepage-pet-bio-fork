import React from "react";
import styles from "./ProcessoSeletivo.module.css";
import Cabecalho from "./SubComponentes/Cabecalho/Cabecalho";
import Requisitos from "./SubComponentes/Requisitos/Requisitos";
import Inscricoes from "./SubComponentes/Inscricoes/Inscricoes";
import MenuNavegacao from "../../components/menus/MenuNavegacao/menuNavegacao";
import Footer from "@/components/ui/Footer/footer";

export default function ProcessoSeletivo() {
  return (
    <>
      <MenuNavegacao />

      <div className={styles.corpo}>
        <Cabecalho />

        <section className={styles["corpo_informacoes"]}>
          <Requisitos />
          <Inscricoes />
        </section>
      </div>
      <Footer />
    </>
  );
}
