# TODO: DAI Artsen Website

Dit is de bijgewerkte to-do-lijst gebaseerd op de nieuwe richtlijnen van de klant. De focus ligt op het bouwen van de centrale website `www.dai-artsen.nl` met een modulaire, schaalbare structuur.

---

### Fase 1: Basisstructuur en Navigatie (Hoge Prioriteit)

- [x] **Project Structuur:** Huidige project omzetten naar de nieuwe `dai-artsen.nl` structuur.
- [x] **Routing Opzetten:** Implementeer client-side routing voor de hoofsegmenten:
    - [x] `/` (Home/Over DAI Artsen)
    - [x] `/huisartsen`
    - [x] `/bedrijfsartsen`
    - [x] `/basisartsen`
    - [x] `/paramedici`
    - [x] `/academy-inc`
    - [x] `/contact`
- [x] **Hoofdnavigatie Implementeren:** Maak het hoofdmenu conform de nieuwe structuur (Over DAI Artsen, Huisartsen, Bedrijfsartsen, etc.).
- [x] **Layout Componenten:** Creëer een hoofdlayout met header, footer en een content area die de verschillende segment-pagina's kan renderen.
- [x] **Submenu/Sectie Navigatie:** Ontwikkel een component voor de tweede-laag navigatie binnen de segmenten (bijv. binnen `/huisartsen`).

---

### Fase 2: Pagina Implementatie per Segment

- [x] **Hoofdpagina (Over DAI Artsen):** Ontwikkel de landingspagina voor `www.dai-artsen.nl`. (Structuur en placeholders aanwezig)
- [x] **Segment: Huisartsen (`/huisartsen`)**
    - [x] Bouw de hoofdpagina voor Huisartsen. (Structuur met subnavigatie aanwezig)
    - [ ] Implementeer de subpagina's:
        - [ ] Over DAI Huisartsen (Placeholder aanwezig)
        - [ ] Training & Scholing (Placeholder aanwezig)
        - [ ] Community & Netwerk (incl. 'Lid worden' functionaliteit) (Placeholder aanwezig)
        - [ ] Projecten & Innovatie (Placeholder aanwezig)
        - [ ] Agenda (Placeholder aanwezig)
        - [ ] Contact (specifiek voor huisartsen)
- [x] **Segment: Bedrijfsartsen (`/bedrijfsartsen`)**
    - [x] Bouw de pagina's conform de bestaande structuur van DAI Bedrijfsartsen. (Structuur met subnavigatie aanwezig)
        - [ ] Over DAI Bedrijfsartsen (Placeholder aanwezig)
        - [ ] Voor Organisaties (Placeholder aanwezig)
        - [ ] Voor Bedrijfsartsen (incl. 'Aansluiten bij netwerk' functionaliteit) (Placeholder aanwezig)
        - [ ] Training & Academie (Placeholder aanwezig)
        - [ ] Projecten & Samenwerkingen (Placeholder aanwezig)
        - [ ] Contact (specifiek voor bedrijfsartsen)
- [x] **Segment: Basisartsen (`/basisartsen`)**
    - [x] Ontwikkel de enkele overzichtspagina met de gespecificeerde content en contact/interesse formulier. (Structuur aanwezig)
- [x] **Segment: Paramedici (`/paramedici`)**
    - [x] Ontwikkel de enkele overzichtspagina met de gespecificeerde content en contact/aansluiten formulier. (Structuur aanwezig)
- [ ] **Segment: Academy INC (`/academy-inc`)**
    - [ ] Ontwikkel de overzichtspagina.
    - [ ] Implementeer de doorverwijzing naar `www.academyinc.nl` (indien dit de definitieve keuze is).
- [ ] **Pagina: Contact (`/contact`)**
    - [ ] Bouw de algemene contactpagina met contactformulier.

---

### Fase 3: Backend en Inhoud

- [ ] **Database Schema:** Evalueer en pas het DB schema aan voor de nieuwe segmenten (bijv. verschillende contactformulieren, interesseformulieren).
- [ ] **Backend Procedures:**
    - [ ] Implementeer procedures voor de verschillende formulieren (algemeen contact, interesse basisartsen, etc.).
    - [ ] Implementeer 'Lid worden' / 'Aansluiten bij netwerk' functionaliteit.
- [ ] **Content Management:**
    - [ ] Bepaal hoe de content voor de nieuwe pagina's beheerd wordt (CMS, Markdown, etc.).
    - [ ] [Optioneel, lage prioriteit] Migreer relevante blog/nieuws content naar de nieuwe structuur.

---

### Fase 4: Design, Testen en Afronding

- [ ] **Styling & Design:**
    - [ ] Zorg voor een consistente huisstijl over alle segmenten.
    - [ ] Pas bestaande componenten (indien herbruikbaar) aan de nieuwe huisstijl aan.
- [ ] **Responsive Design:** Test en optimaliseer de website voor mobiele apparaten en tablets.
- [ ] **Testen:**
    - [ ] Test alle navigatielinks en doorverwijzingen.
    - [ ] Valideer de werking van alle formulieren.
- [ ] **Deployment:**
    - [ ] Configureer de redirects (bijv. `dai-bedrijfsartsen.nl` -> `www.dai-artsen.nl/bedrijfsartsen`).
    - [ ] Maak de website live op de Hostnet server.

---

### Gecancelleerde / Vervangen Taken (Oude TODO)

- [x] ~~Navigation menu (6 secties)~~ (Vervangen door nieuwe navigatiestructuur)
- [x] ~~Homepage met hero section en call-to-action~~ (Vervangen door nieuwe homepage voor DAI Artsen)
- [x] ~~De drie pijlers sectie~~ (Niet meer relevant in de nieuwe structuur)
- [x] ~~E-learning 'Zeg nee tegen agressie' pagina~~ (Nu onderdeel van Huisartsen -> Training & Scholing)