import Image from "next/image";
import Link from "next/link";
import styles from "./index.module.scss";
import copertina from "../public/copertina.jpg";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.copertina}>
        <Image
          src={copertina}
          width={"100%"}
          className={"img"}
          alt="copertina"
        />
        <p>
          Apre a Roma, al <strong>Museo della Fanteria</strong>, dal{" "}
          <strong>21 Ottobre al 17 Marzo</strong>, la mostra monografica
          dedicata al maestro della Pop Art internazionale{" "}
          <strong>Andy Warhol</strong>, dal titolo{" "}
          <strong>Andy Warhol – Universo Warhol</strong>. Con oltre 170 opere,
          la mostra curata dal celebre <strong>Achille Bonito Oliva</strong>,
          ripercorre la carriera artistica del genio creativo che ha colorato la
          grigia quotidianità dell’America del XX secolo, superando i confini di
          un mondo che si apriva alla globalizzazione.
        </p>
        <p>
          Importante è l’omaggio a <strong>Lucio Amelio</strong>, noto
          gallerista italiano, scopritore di Warhol. Tra le chicche, i ritratti
          di Warhol di Christopher Makos, la chitarra autografata dai Rolling
          Stones con cover firmata, la Skateroomedition, il Catalogo della Tate
          Gallery 1971 a doppia firma, The Souper Dress firmato e la famosa
          Brillo Box (after) Serigrafia su legno.
        </p>
        <Link
          href={
            "https://www.navigaresrl.com/mostra/andy-warhol-universo-warhol/"
          }
          className={styles.link}
        >
          Info Mostra
        </Link>
      </div>
      <div className={styles.iscrizione}>
        <h4>
          Iscriviti entro il 20 Ottobre alla nostra Waiting List per ricevere
          uno sconto del 30%
        </h4>
        <h5>
          * lo sconto verrà applicato SOLO per il biglietto INTERO FERIALE
          acquistato in biglietteria
        </h5>
        <Link
          href={
            "mailto:web@navigaresrl.com?subject=Iscrizione Mailing List Andy Roma"
          }
        >
          <p>SCRIVICI NOME E COGNOME</p>
        </Link>
        <h6>N.B : Cliccando su Invia autorizzi il trattamento dei tuoi dati</h6>
      </div>
      <div className={styles.footer}>
        Una produzione di
        <Link href={"https://www.navigaresrl.com/"}>NavigareSrl</Link>
      </div>
    </main>
  );
}
