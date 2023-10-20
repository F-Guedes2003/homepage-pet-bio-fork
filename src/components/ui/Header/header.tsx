import React from "react";
import styles from "./header.module.css";

type HeaderProps = {
  texto: string;
};

export default function Header({ texto }: HeaderProps): JSX.Element{
  return <h1 className={styles.titulo}>{texto}</h1>;
}
