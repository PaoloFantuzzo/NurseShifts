# 🩺 NurseShifts

**NurseShifts** è una Progressive Web App (PWA) progettata specificamente per **infermieri e professionisti sanitari** per gestire in modo semplice, veloce e preciso i propri **turni di servizio, ferie, permessi, corsi di aggiornamento e impegni personali** direttamente su iPhone (e qualsiasi smartphone), senza bisogno di connessione internet e nel totale rispetto della privacy.

> **Ideata e sviluppata da Paolo Fantuzzo**

---

## ✨ Caratteristiche Principali

### 🗓️ Gestione Turni, Ferie e Permessi
- **Turni di Servizio preconfigurati e personalizzabili**: *Mattina*, *Pomeriggio*, *Notte*, *Ricoveri*, oltre alla possibilità di creare nuovi turni personalizzati con colore e orario a scelta.
- **Assenze e Permessi giornalieri**: *Ferie*, *Legge 104*, *Permesso Retribuito*, *Permesso Lutto*, *Congedo Matrimoniale*, *Recupero Ore* e *Recupero Vestizione / Cambio Consegne*.
- **Inserimento Rapido (`⚡`)**: attiva il pulsante fulmine per assegnare i turni toccando direttamente i giorni del mese. Si spegne automaticamente dopo **6 secondi di inattività** per evitare tocchi accidentali.

### ⚖️ Calcolo Orario Contrattuale Reale (CCNL Sanità)
- **Contratti supportati**: **Full Time (36h)**, **Part Time (24h, 18h)** o monte ore settimanale personalizzato.
- **Doppia articolazione oraria**:
  - **`6 × 6` (Lunedì – Sabato)**: giornata lavorativa e valore convenzionale di Ferie/Permessi pari a **6h 00m** (riproporzionato sul monte ore per i Part Time).
  - **`7:12 × 5` (Lunedì – Venerdì)**: giornata lavorativa e valore convenzionale di Ferie/Permessi pari a **7h 12m** (riproporzionato sul monte ore per i Part Time).
- **Esclusione automatica di Domeniche e Festivi**: il monte ore teorico settimanale, mensile e annuale viene calcolato sui giorni lavorabili reali del calendario italiano (inclusi Pasqua e Lunedì dell'Angelo), escludendo Domeniche e festività infrasettimanali dal debito orario.

### 🎓 Corsi di Aggiornamento e Formazione
- Inserimento di uno o più **Corsi di Aggiornamento** anche nella stessa giornata di un turno lavorativo.
- Indicazione di **titolo del corso**, **orario di inizio/fine** e **📍 Luogo** (con elenco luoghi salvati e personalizzabili).
- Conteggio automatico delle ore di formazione nel monte ore lavorato e riepilogo dedicato nelle Statistiche.

### ⚪ Agenda Personale (`Impegno`)
- Voce dedicata **Impegno** (indicatore bianco) posizionata in cima alla lista per annotare appuntamenti personali, visite o commissioni con **titolo, orario, luogo e note**.
- **Convivenza con i turni**: un impegno personale può essere aggiunto anche in un giorno in cui è già presente un turno di lavoro, senza sovrascriverlo e con **0 ore conteggiate** nel monte ore lavorativo.

### 📅 Sincronizzazione con Calendario iPhone
- Esportazione diretta in formato standard `.ics` compatibile con il **Calendario nativo di iPhone (iOS)**.
- Il pulsante Calendario (`📅`) si illumina automaticamente quando ci sono nuovi turni, corsi o impegni da sincronizzare.

### 📊 Dashboard Statistiche & Backup Sicuro
- **Progresso Mensile e Progresso Annuale** con barre di avanzamento e calcolo del saldo ore (`+` / `-`).
- Grafico interattivo delle ore mensili e dettaglio analitico per ogni singola tipologia di turno, permesso e corso frequentato.
- Funzione di **Salvataggio e Ripristino Backup (`.json`)** per conservare o trasferire i propri dati su un nuovo dispositivo.

---

## 🔒 Privacy al 100% e Funzionamento Offline

- **Nessun server esterno, nessuna registrazione**: tutti i turni, i corsi e gli impegni inseriti vengono salvati **esclusivamente nella memoria interna del tuo telefono** (`localStorage`). Nessun dato personale viene inviato in rete.
- **Funziona anche senza internet (Offline)**: una volta installata sulla schermata Home, l'app viene memorizzata sul dispositivo grazie al *Service Worker* e funziona istantaneamente anche in **Modalità Aereo** o in reparti privi di copertura di rete.

---

## 📲 Come installarla su iPhone

1. Apri il link dell'applicazione usando **Safari** su iPhone.
2. Tocca l'icona **Condividi** (il quadratino con la freccia verso l'alto in basso al centro).
3. Scorri il menu e seleziona **Aggiungi alla schermata Home**.
4. Tocca **Aggiungi** in alto a destra: l'icona di **NurseShifts** comparirà sulla tua schermata Home come una vera e propria app a tutto schermo.

---

## ©️ Copyright e Licenza

**Copyright © 2026 Paolo Fantuzzo. Tutti i diritti riservati.**

Questo software, il relativo codice sorgente, il design dell'interfaccia e le icone sono di proprietà esclusiva di **Paolo Fantuzzo**.  
È consentito l'utilizzo personale e gratuito dell'applicazione tramite il link ufficiale. È severamente vietata la copia, la modifica, la ridistribuzione del codice o la commercializzazione (inclusa la pubblicazione su App Store o altri store digitali) senza il consenso scritto dell'autore.
