const deBase = {
  /* ── shared ── */
  common: {
    moreInfo: "Mehr erfahren",
    allProducts: "Alle Produkte ansehen",
    allServices: "Alle Leistungen",
    contactUs: "Kontakt aufnehmen",
    openContactForm: "Kontaktformular öffnen",
    learnMore: "Mehr erfahren",
    overview: "Übersicht",
    backToOverview: "Zurück zur Übersicht",
    address: "Adresse",
    phone: "Telefon",
    fax: "Fax",
    email: "E-Mail",
    openingHours: "Öffnungszeiten",
    monFri: "Mo–Fr",
  },

  /* ── navbar ── */
  nav: {
    home: "Home",
    company: "Über uns",
    products: "Produkte",
    services: "Leistungen",
    jobs: "Stellenangebote",
    contact: "Kontakt",
    contactCta: "Kontakt aufnehmen",
    menu: "Menü",
    language: "Sprache",
  },

  /* ── footer ── */
  footer: {
    tagline:
      "Führend in industrieller Präzision und Engineering-Exzellenz seit über sechs Jahrzehnten. Ihr verlässlicher Partner im globalen Maschinenbau.",
    quickLinksTitle: "Quick Links",
    servicesTitle: "Leistungen",
    contactTitle: "Kontakt",
    rights: "Alle Rechte vorbehalten",
    legal: {
      privacy: "Datenschutz",
      imprint: "Impressum",
      contact: "Kontakt",
    },
    quickLinks: {
      about: "Über Ernst Maschinenbau",
      products: "Unsere Produkte",
      services: "Engineering-Leistungen",
      examples: "Produktbeispiele",
      jobs: "Stellenangebote",
    },
    servicesLinks: {
      sondermaschinen: "Sondermaschinenbau",
      praezision: "Präzisionsfertigung",
      lohnarbeit: "Lohnfertigung",
      service: "Service & Wartung",
    },
  },

  /* ── home / startseite ── */
  home: {
    meta: {
      title: "Ernst Maschinenbau GmbH – Kompetenz aus Neidenstein",
      description:
        "Entwicklung von Sondermaschinen, Präzisionsfertigung und Lohnarbeit. Familienunternehmen seit 1965 in Neidenstein.",
    },
    hero: {
      eyebrow: "Ernst Maschinenbau GmbH · Seit 1965",
      titleLine1: "Sondermaschinen",
      titleLine2A: "und ",
      titleLine2B: "Präzisionsfertigung",
      subtitleLine1: "Familienunternehmen aus dem Kraichgau —",
      subtitleLine2: "international tätig in über 50 Ländern.",
      ctaServices: "Leistungen entdecken",
      ctaContact: "Kontakt aufnehmen",
      stats: [
        { v: 60, s: "+", l: "Jahre Erfahrung", sub: "Seit 1965" },
        { v: 500, s: "+", l: "Sondermaschinen", sub: "Weltweit geliefert" },
        { v: 50, s: "+", l: "Länder weltweit", sub: "Export & Service" },
      ],
    },
    branchen: [
      "Automobilindustrie",
      "Pharmaindustrie",
      "Medizintechnik",
      "Luft- & Raumfahrt",
      "Chemie & Petrochemie",
      "Maschinenbau",
      "Energietechnik",
      "Elektronik",
      "Lebensmittelindustrie",
      "Verpackungstechnik",
    ],
    services: {
      caption: "Leistungsumfang",
      headline: "Vier Kernkompetenzen — alles aus einer Hand",
      ctaAll: "Alle Leistungen",
      items: [
        {
          num: "01",
          id: "sondermaschinen",
          title: "Sondermaschinenbau",
          sub: "Von der Idee zur Serienanlage",
          body:
            "Wir entwickeln vollständige Sondermaschinen für anspruchsvollste Fertigungsaufgaben — von der Konzeptentwicklung bis zur schlüsselfertigen Inbetriebnahme weltweit.",
          points: [
            "Entwicklung & Konstruktion aus einer Hand",
            "SPS-Steuerung, Pneumatik, Hydraulik",
            "Inbetriebnahme vor Ort weltweit",
            "Vollständige CE-Dokumentation",
          ],
        },
        {
          num: "02",
          id: "praezision",
          title: "Präzisionsfertigung",
          sub: "CNC-Bearbeitung auf höchstem Niveau",
          body:
            "Modernste CNC-Dreh- und Fräszentren erlauben Toleranzen im Mikrometerbereich. Ob Einzelteil oder Kleinserie — wir fertigen Bauteile für anspruchsvollste Anwendungen.",
          points: [
            "CNC-Drehen, Fräsen, Schleifen",
            "Toleranzen bis IT5",
            "Stahl, Edelstahl, Aluminium, Kunststoff",
            "3D-Messtechnik und Prüfprotokoll",
          ],
        },
        {
          num: "03",
          id: "lohnarbeit",
          title: "Lohnfertigung",
          sub: "Ihr flexibler Fertigungspartner",
          body:
            "Als Lohnfertiger übernehmen wir Ihre Fertigungsaufgaben — zuverlässig, termingerecht und in reproduzierbarer Qualität. Drehen, Fräsen, Rundschleifen — alles aus einer Hand.",
          points: [
            "Drehteile bis ø 500 mm",
            "Frästeile bis 1.000 × 600 mm",
            "Rundschleifarbeiten",
            "Einzelstück bis Serie",
          ],
        },
        {
          num: "04",
          id: "service",
          title: "Service & Wartung",
          sub: "Maximale Verfügbarkeit Ihrer Anlagen",
          body:
            "Schneller Reaktionsdienst, präventive Wartungspläne und kompetente Instandsetzung halten Ihre Produktion am Laufen — wir kennen unsere Maschinen in- und auswendig.",
          points: [
            "Wartungsverträge & Inspektionspläne",
            "Schnelle Reaktionszeiten",
            "Ersatzteilversorgung",
            "Retrofit und Modernisierung",
          ],
        },
      ],
    },
    products: {
      caption: "Steffes-Produktlinie",
      headline: "Exklusiv bei Ernst — das Steffes-Sortiment",
      intro:
        "Seit 2020 sind wir exklusiver Hersteller und Vertreiber des gesamten Steffes-Lieferprogramms — bewährte Qualität, weiterentwickelt.",
      items: [
        {
          slug: "dichtigkeitspruefung",
          title: "Dichtigkeitsprüfung",
          sub: "Druckabfall · Differenzdruck · Durchfluss",
          body:
            "Voll- und teilautomatische Prüfanlagen für Flaschen, Kanister, Fässer und Großbehälter — vom 5‑ml-Augentropfenfläschchen bis zum 5.000-l-Wasserbehälter.",
          tags: ["Pharma", "Automobil", "Chemie"],
        },
        {
          slug: "wiegesysteme",
          title: "Wiegesysteme",
          sub: "Hochpräzise Wägetechnik",
          body:
            "Industrielle Wiegesysteme für vollautomatische Produktionslinien. Präzise, robust und auf Ihre Prozesse abgestimmt.",
          tags: ["Lebensmittel", "Pharma", "Logistik"],
        },
        {
          slug: "sammelstationen",
          title: "Sammelstationen",
          sub: "Automatisierte Verkettung",
          body:
            "Automatisierte Sammel- und Verkettungssysteme für moderne Produktionslinien — zuverlässig, wartungsarm und skalierbar.",
          tags: ["Automobil", "Industrie"],
        },
        {
          slug: "foerderbaender",
          title: "Förderbänder",
          sub: "Robuste Fördertechnik",
          body:
            "Maßgeschneiderte Förderbänder für jeden Einsatzbereich — von der Einzelkomponente bis zur vollverketteten Linie.",
          tags: ["Alle Branchen"],
        },
        {
          slug: "systemergaenzungen",
          title: "Systemergänzungen",
          sub: "Tastpinole · Kamera · Daten",
          body:
            "Tastpinolen, Kamerasysteme, Datenausgabe und weitere Optionen — einzeln nachrüstbar für maximale Flexibilität.",
          tags: ["Modular", "Nachrüstbar"],
        },
      ],
    },
    about: {
      caption: "Über uns",
      activeBadge: "Aktiv in 50+ Ländern",
      arminTitle: "Dipl.-Ing.",
      martinTitle: "Geschäftsführung",
      headlineLine1: "Sechs Jahrzehnte Engineering —",
      headlineLine2: "ein Familienversprechen",
      bodyP1:
        "Durch langjährige internationale Erfahrungen sind wir ein idealer Partner in allen Bereichen des Maschinenbaus. Als leistungsfähiger Betrieb im Maschinen- und Werkzeugbau setzen wir immer wieder neue Maßstäbe.",
      bodyP2:
        "Ganz im Sinne des Kunden entstehen wirtschaftlich sinnvolle, technisch anspruchsvolle und ausgereifte Lösungen — seit Generationen.",
      bullets: [
        "Über 60 Jahre Erfahrung im Sondermaschinenbau",
        "International tätig in mehr als 50 Ländern",
        "Familienunternehmen — persönlich, verlässlich, direkt",
        "Modernster Maschinenpark, ISO-konforme Fertigung",
      ],
      cta: "Unternehmen kennenlernen",
    },
    kennzahlen: [
      { v: 60, s: "+", l: "Jahre Erfahrung", sub: "Seit 1965" },
      { v: 500, s: "+", l: "Sondermaschinen", sub: "Weltweit geliefert" },
      { v: 50, s: "+", l: "Länder", sub: "Export & Service" },
      { v: 100, s: "%", l: "Kundenzufriedenheit", sub: "Familienversprechen" },
    ],
    timeline: {
      caption: "Unsere Geschichte",
      headline: "60 Jahre Präzision und Fortschritt",
      todayLabel: "Heute",
      items: [
        { year: "1965", event: "Gründung als Gebrüder Ernst in Neidenstein" },
        { year: "2000", event: "Umfirmierung zur Ernst Maschinenbau GmbH" },
        {
          year: "2003",
          event: "Armin Ernst verstärkt die Entwicklungsabteilung",
        },
        { year: "2011", event: "Große Erweiterung der Produktionshalle" },
        { year: "2020", event: "Übernahme des Steffes-Lieferprogramms" },
        {
          year: "Heute",
          event: "500+ Sondermaschinen in 50+ Ländern weltweit",
        },
      ],
    },
    faq: {
      caption: "Support",
      headline: "Haben Sie Fragen?",
      intro:
        "Wir antworten auf die häufigsten Fragen. Für ein persönliches Gespräch stehen wir jederzeit zur Verfügung.",
      directContact: "Direkter Kontakt",
      directContactPerson: "Martin Ernst · Geschäftsführung",
      items: [
        {
          q: "Welche Branchen beliefert Ernst Maschinenbau?",
          a: "Wir liefern weltweit in Branchen wie Automobil, Pharma, Medizintechnik, Luft- & Raumfahrt, Chemie, Lebensmittel und viele weitere. Über 50 Länder profitieren von unserer Expertise.",
        },
        {
          q: "Wie schnell ist Ihre Reaktionszeit bei Service-Anfragen?",
          a: "Bei laufenden Wartungsverträgen garantieren wir Reaktionszeiten von wenigen Stunden. Unsere Service-Techniker sind weltweit einsatzbereit.",
        },
        {
          q: "Fertigen Sie auch Kleinserien und Einzelstücke?",
          a: "Ja. Vom Prototyp über das Einzelstück bis zur Kleinserie — unsere CNC-Anlagen sind flexibel auf alle Stückzahlen ausgelegt.",
        },
        {
          q: "Welche Toleranzen können Sie einhalten?",
          a: "Unsere modernen CNC-Zentren erreichen Toleranzen bis IT5 — also Mikrometerpräzision. 3D-Messtechnik mit Prüfprotokoll inklusive.",
        },
      ],
    },
    karriere: {
      eyebrow: "Karriere",
      headline: "Wir suchen Verstärkung!",
      sub: "Azubi Feinwerkmechaniker (m/w/d) · Elektrotechniker (m/w/d)",
      cta: "Stellenangebote ansehen",
    },
  },

  /* ── kontakt ── */
  kontakt: {
    meta: {
      title: "Kontakt – Ernst Maschinenbau GmbH",
      description:
        "Kontaktieren Sie Ernst Maschinenbau GmbH in Neidenstein. Wir freuen uns auf Ihre Anfrage.",
    },
    hero: {
      eyebrow: "Kontakt",
      title: "Sprechen Sie mit uns",
      subtitle:
        "Wir sind für Sie da — persönlich, schnell und kompetent. Egal ob Anfrage, Angebot oder Service.",
    },
    cards: {
      addressTitle: "Adresse",
      addressLine1: "Industriestrasse 1A",
      addressLine2: "74933 Neidenstein",
      addressLine3: "Deutschland",
      phoneTitle: "Telefon",
      phoneValue: "+49 7263 / 9199-0",
      faxValue: "+49 7263 / 9199-29",
      emailTitle: "E-Mail",
      emailValue: "info@ernstmaschinen.de",
      hoursTitle: "Öffnungszeiten",
      hoursValue: "Mo–Fr 7:00 – 16:30 Uhr",
    },
    form: {
      title: "Schreiben Sie uns",
      intro: "Wir melden uns innerhalb eines Werktags zurück.",
      name: "Name",
      company: "Unternehmen",
      email: "E-Mail",
      phone: "Telefon",
      subject: "Betreff",
      message: "Ihre Nachricht",
      send: "Nachricht senden",
      privacy:
        "Mit dem Absenden stimmen Sie unserer Datenschutzerklärung zu.",
    },
  },

  /* ── impressum ── */
  impressum: {
    meta: {
      title: "Impressum – Ernst Maschinenbau GmbH",
      description: "Impressum und Anbieterkennzeichnung Ernst Maschinenbau GmbH.",
    },
    title: "Impressum",
    sections: {
      provider: "Anbieter",
      providerBody:
        "Ernst Maschinenbau GmbH\nIndustriestrasse 1A\n74933 Neidenstein\nDeutschland",
      contact: "Kontakt",
      contactBody:
        "Telefon: +49 7263 / 9199-0\nFax: +49 7263 / 9199-29\nE-Mail: info@ernstmaschinen.de",
      management: "Geschäftsführung",
      managementBody: "Martin Ernst, Armin Ernst",
      register: "Handelsregister",
      registerBody:
        "Amtsgericht Mannheim · HRB (Eintragsnummer auf Anfrage)",
      vat: "Umsatzsteuer-ID",
      vatBody:
        "Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz.",
      responsible: "Inhaltlich verantwortlich",
      responsibleBody: "Martin Ernst (Anschrift wie oben)",
      disclaimer: "Haftungsausschluss",
      disclaimerBody:
        "Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte externer Links. Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich.",
    },
  },

  /* ── datenschutz ── */
  datenschutz: {
    meta: {
      title: "Datenschutz – Ernst Maschinenbau GmbH",
      description: "Datenschutzerklärung der Ernst Maschinenbau GmbH.",
    },
    title: "Datenschutzerklärung",
    sections: {
      intro: "Allgemeines",
      introBody:
        "Der Schutz Ihrer persönlichen Daten ist uns wichtig. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften (DSGVO, BDSG) sowie dieser Datenschutzerklärung.",
      controller: "Verantwortlicher",
      controllerBody:
        "Ernst Maschinenbau GmbH, Industriestrasse 1A, 74933 Neidenstein. E-Mail: info@ernstmaschinen.de",
      data: "Erhebung personenbezogener Daten",
      dataBody:
        "Beim Aufruf unserer Website werden technische Informationen (IP-Adresse, Datum/Uhrzeit, Browsertyp, Betriebssystem) verarbeitet. Diese Daten werden ausschließlich zur Sicherstellung eines reibungslosen Betriebs der Website genutzt.",
      contactForm: "Kontaktformular",
      contactFormBody:
        "Bei Anfragen über unser Kontaktformular werden die von Ihnen angegebenen Daten ausschließlich zur Bearbeitung Ihrer Anfrage verwendet und nicht an Dritte weitergegeben.",
      cookies: "Cookies",
      cookiesBody:
        "Diese Website verwendet keine Tracking-Cookies. Technisch notwendige Cookies können zum Funktionieren der Seite eingesetzt werden.",
      rights: "Ihre Rechte",
      rightsBody:
        "Sie haben das Recht auf Auskunft, Berichtigung, Löschung und Einschränkung der Verarbeitung Ihrer personenbezogenen Daten sowie ein Beschwerderecht bei der zuständigen Aufsichtsbehörde.",
    },
  },

  /* ── all other pages: page-level translations (titles, intros) ── */
  /* Phase 2: detailed content of these will be translated in a follow-up. */
  pages: {
    leistungen: {
      meta: {
        title: "Leistungen – Ernst Maschinenbau GmbH",
        description: "Unsere Leistungen im Überblick — Sondermaschinenbau, Präzisionsfertigung, Lohnarbeit und Service.",
      },
      pageTitle: "Leistungen",
      pageIntro: "Vier Kernkompetenzen — alles aus einer Hand.",
    },
    produkte: {
      meta: {
        title: "Produkte – Ernst Maschinenbau GmbH",
        description: "Steffes-Produktlinie: Dichtigkeitsprüfung, Wiegesysteme, Sammelstationen, Förderbänder, Systemergänzungen.",
      },
      pageTitle: "Produkte",
      pageIntro: "Exklusiv bei Ernst — das Steffes-Sortiment.",
    },
    stellenangebote: {
      meta: {
        title: "Stellenangebote – Ernst Maschinenbau GmbH",
        description: "Offene Stellen bei Ernst Maschinenbau in Neidenstein.",
      },
      pageTitle: "Stellenangebote",
      pageIntro: "Werden Sie Teil unseres Teams.",
    },
    unternehmen: {
      meta: {
        title: "Unternehmen – Ernst Maschinenbau GmbH",
        description: "Familienunternehmen seit 1965 in Neidenstein — sechs Jahrzehnte Engineering.",
      },
      pageTitle: "Unternehmen",
      pageIntro: "Familienunternehmen seit 1965 in Neidenstein.",
    },
  },
} as const;

/* Erase literal-string narrowing so other locales can have different text. */
type Widen<T> = T extends string
  ? string
  : T extends number
  ? number
  : T extends boolean
  ? boolean
  : T extends readonly (infer U)[]
  ? Widen<U>[]
  : T extends object
  ? { -readonly [K in keyof T]: Widen<T[K]> }
  : T;

export type Dictionary = Widen<typeof deBase>;
export const de: Dictionary = deBase as unknown as Dictionary;
