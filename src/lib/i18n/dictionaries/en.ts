import type { Dictionary } from "./de";

export const en: Dictionary = {
  /* ── shared ── */
  common: {
    moreInfo: "Learn more",
    allProducts: "View all products",
    allServices: "All services",
    contactUs: "Get in touch",
    openContactForm: "Open contact form",
    learnMore: "Learn more",
    overview: "Overview",
    backToOverview: "Back to overview",
    address: "Address",
    phone: "Phone",
    fax: "Fax",
    email: "Email",
    openingHours: "Opening hours",
    monFri: "Mon–Fri",
  },

  /* ── navbar ── */
  nav: {
    home: "Home",
    company: "About us",
    products: "Products",
    services: "Services",
    jobs: "Careers",
    contact: "Contact",
    contactCta: "Get in touch",
    menu: "Menu",
    language: "Language",
  },

  /* ── footer ── */
  footer: {
    tagline:
      "Leaders in industrial precision and engineering excellence for over six decades. Your reliable partner in global mechanical engineering.",
    quickLinksTitle: "Quick Links",
    servicesTitle: "Services",
    contactTitle: "Contact",
    rights: "All rights reserved",
    legal: {
      privacy: "Privacy",
      imprint: "Imprint",
      contact: "Contact",
    },
    quickLinks: {
      about: "About Ernst Maschinenbau",
      products: "Our products",
      services: "Engineering services",
      examples: "Product examples",
      jobs: "Careers",
    },
    servicesLinks: {
      sondermaschinen: "Custom machinery",
      praezision: "Precision manufacturing",
      lohnarbeit: "Contract manufacturing",
      service: "Service & maintenance",
    },
  },

  /* ── home ── */
  home: {
    meta: {
      title: "Ernst Maschinenbau GmbH – Engineering from Neidenstein",
      description:
        "Custom machinery, precision manufacturing and contract work. Family-owned business since 1965 in Neidenstein, Germany.",
    },
    hero: {
      eyebrow: "Ernst Maschinenbau GmbH · Since 1965",
      titleLine1: "Custom machinery",
      titleLine2A: "and ",
      titleLine2B: "precision manufacturing",
      subtitleLine1: "A family business from the Kraichgau region —",
      subtitleLine2: "active in more than 50 countries worldwide.",
      ctaServices: "Discover our services",
      ctaContact: "Get in touch",
      stats: [
        { v: 60, s: "+", l: "Years of experience", sub: "Since 1965" },
        { v: 500, s: "+", l: "Custom machines", sub: "Delivered worldwide" },
        { v: 50, s: "+", l: "Countries worldwide", sub: "Export & service" },
      ],
    },
    branchen: [
      "Automotive industry",
      "Pharmaceutical industry",
      "Medical technology",
      "Aerospace",
      "Chemical & petrochemical",
      "Mechanical engineering",
      "Energy technology",
      "Electronics",
      "Food industry",
      "Packaging technology",
    ],
    services: {
      caption: "Range of services",
      headline: "Four core competencies — all from a single source",
      ctaAll: "All services",
      items: [
        {
          num: "01",
          id: "sondermaschinen",
          title: "Custom machinery",
          sub: "From idea to series production",
          body:
            "We develop complete custom machines for the most demanding manufacturing tasks — from concept development to turnkey commissioning worldwide.",
          points: [
            "Development & engineering from a single source",
            "PLC control, pneumatics, hydraulics",
            "On-site commissioning worldwide",
            "Complete CE documentation",
          ],
        },
        {
          num: "02",
          id: "praezision",
          title: "Precision manufacturing",
          sub: "CNC machining at the highest level",
          body:
            "State-of-the-art CNC turning and milling centres allow tolerances in the micrometre range. Whether single parts or small series — we manufacture components for the most demanding applications.",
          points: [
            "CNC turning, milling, grinding",
            "Tolerances down to IT5",
            "Steel, stainless steel, aluminium, plastics",
            "3D metrology with inspection report",
          ],
        },
        {
          num: "03",
          id: "lohnarbeit",
          title: "Contract manufacturing",
          sub: "Your flexible manufacturing partner",
          body:
            "As a contract manufacturer we take on your production tasks — reliable, on schedule and in reproducible quality. Turning, milling, cylindrical grinding — all from a single source.",
          points: [
            "Turned parts up to ø 500 mm",
            "Milled parts up to 1,000 × 600 mm",
            "Cylindrical grinding work",
            "Single piece up to series",
          ],
        },
        {
          num: "04",
          id: "service",
          title: "Service & maintenance",
          sub: "Maximum availability for your equipment",
          body:
            "Fast response service, preventive maintenance plans and competent repairs keep your production running — we know our machines inside and out.",
          points: [
            "Maintenance contracts & inspection plans",
            "Fast response times",
            "Spare parts supply",
            "Retrofitting and modernisation",
          ],
        },
      ],
    },
    products: {
      caption: "Steffes product line",
      headline: "Exclusively at Ernst — the Steffes range",
      intro:
        "Since 2020 we have been the exclusive manufacturer and distributor of the entire Steffes product range — proven quality, further developed.",
      items: [
        {
          slug: "dichtigkeitspruefung",
          title: "Leak testing",
          sub: "Pressure decay · Differential pressure · Flow",
          body:
            "Fully and semi-automatic test systems for bottles, canisters, drums and large containers — from 5 ml eye-drop bottles to 5,000 l water tanks.",
          tags: ["Pharma", "Automotive", "Chemical"],
        },
        {
          slug: "wiegesysteme",
          title: "Weighing systems",
          sub: "High-precision weighing technology",
          body:
            "Industrial weighing systems for fully automated production lines. Precise, robust and tailored to your processes.",
          tags: ["Food", "Pharma", "Logistics"],
        },
        {
          slug: "sammelstationen",
          title: "Collection stations",
          sub: "Automated chaining",
          body:
            "Automated collection and chaining systems for modern production lines — reliable, low-maintenance and scalable.",
          tags: ["Automotive", "Industry"],
        },
        {
          slug: "foerderbaender",
          title: "Conveyor belts",
          sub: "Robust conveyor technology",
          body:
            "Tailor-made conveyor belts for every application — from a single component to a fully chained line.",
          tags: ["All industries"],
        },
        {
          slug: "systemergaenzungen",
          title: "System add-ons",
          sub: "Probe · Camera · Data",
          body:
            "Probes, camera systems, data output and other options — individually retrofittable for maximum flexibility.",
          tags: ["Modular", "Retrofittable"],
        },
      ],
    },
    about: {
      caption: "About us",
      activeBadge: "Active in 50+ countries",
      arminTitle: "Dipl.-Ing.",
      martinTitle: "Managing Director",
      headlineLine1: "Six decades of engineering —",
      headlineLine2: "a family promise",
      bodyP1:
        "Thanks to many years of international experience, we are an ideal partner in all areas of mechanical engineering. As a high-performance company in machine and tool construction, we continuously set new standards.",
      bodyP2:
        "True to our customers' needs, we develop economically viable, technically demanding and mature solutions — for generations.",
      bullets: [
        "Over 60 years of experience in custom machinery construction",
        "Active in more than 50 countries internationally",
        "Family business — personal, reliable, direct",
        "State-of-the-art machinery, ISO-compliant manufacturing",
      ],
      cta: "Get to know the company",
    },
    kennzahlen: [
      { v: 60, s: "+", l: "Years of experience", sub: "Since 1965" },
      { v: 500, s: "+", l: "Custom machines", sub: "Delivered worldwide" },
      { v: 50, s: "+", l: "Countries", sub: "Export & service" },
      { v: 100, s: "%", l: "Customer satisfaction", sub: "Our family promise" },
    ],
    timeline: {
      caption: "Our history",
      headline: "60 years of precision and progress",
      todayLabel: "Today",
      items: [
        { year: "1965", event: "Founded as Gebrüder Ernst in Neidenstein" },
        { year: "2000", event: "Renamed Ernst Maschinenbau GmbH" },
        { year: "2003", event: "Armin Ernst joins the engineering department" },
        { year: "2011", event: "Major expansion of the production hall" },
        { year: "2020", event: "Acquisition of the Steffes product range" },
        {
          year: "Today",
          event: "500+ custom machines in 50+ countries worldwide",
        },
      ],
    },
    faq: {
      caption: "Support",
      headline: "Do you have questions?",
      intro:
        "We answer the most common questions. For a personal conversation we are available at any time.",
      directContact: "Direct contact",
      directContactPerson: "Martin Ernst · Managing Director",
      items: [
        {
          q: "Which industries does Ernst Maschinenbau serve?",
          a: "We deliver worldwide to industries such as automotive, pharma, medical, aerospace, chemistry, food and many more. Over 50 countries benefit from our expertise.",
        },
        {
          q: "How fast is your response time for service requests?",
          a: "With active maintenance contracts we guarantee response times of just a few hours. Our service technicians are deployed worldwide.",
        },
        {
          q: "Do you also manufacture small batches and single parts?",
          a: "Yes. From prototype to single piece to small batch — our CNC systems are flexibly set up for all quantities.",
        },
        {
          q: "What tolerances can you achieve?",
          a: "Our modern CNC centres achieve tolerances down to IT5 — micrometre precision. 3D metrology with an inspection report is included.",
        },
      ],
    },
    karriere: {
      eyebrow: "Careers",
      headline: "We're hiring!",
      sub: "Apprentice precision mechanic (m/f/d) · Electrical engineer (m/f/d)",
      cta: "View open positions",
    },
  },

  /* ── kontakt ── */
  kontakt: {
    meta: {
      title: "Contact – Ernst Maschinenbau GmbH",
      description:
        "Contact Ernst Maschinenbau GmbH in Neidenstein, Germany. We look forward to your enquiry.",
    },
    hero: {
      eyebrow: "Contact",
      title: "Let's talk",
      subtitle:
        "We're here for you — personal, fast and competent. Whether enquiry, quote or service.",
    },
    cards: {
      addressTitle: "Address",
      addressLine1: "Industriestrasse 1A",
      addressLine2: "74933 Neidenstein",
      addressLine3: "Germany",
      phoneTitle: "Phone",
      phoneValue: "+49 7263 / 9199-0",
      faxValue: "+49 7263 / 9199-29",
      emailTitle: "Email",
      emailValue: "info@ernstmaschinen.de",
      hoursTitle: "Opening hours",
      hoursValue: "Mon–Fri 7:00 – 16:30",
    },
    form: {
      title: "Write to us",
      intro: "We'll get back to you within one business day.",
      name: "Name",
      company: "Company",
      email: "Email",
      phone: "Phone",
      subject: "Subject",
      message: "Your message",
      send: "Send message",
      privacy: "By submitting you agree to our privacy policy.",
    },
  },

  /* ── impressum ── */
  impressum: {
    meta: {
      title: "Imprint – Ernst Maschinenbau GmbH",
      description: "Legal notice and provider identification of Ernst Maschinenbau GmbH.",
    },
    title: "Imprint",
    sections: {
      provider: "Provider",
      providerBody:
        "Ernst Maschinenbau GmbH\nIndustriestrasse 1A\n74933 Neidenstein\nGermany",
      contact: "Contact",
      contactBody:
        "Phone: +49 7263 / 9199-0\nFax: +49 7263 / 9199-29\nEmail: info@ernstmaschinen.de",
      management: "Management",
      managementBody: "Martin Ernst, Armin Ernst",
      register: "Commercial register",
      registerBody:
        "District court Mannheim · HRB (registration number on request)",
      vat: "VAT ID",
      vatBody:
        "VAT identification number in accordance with § 27a of the German VAT Act.",
      responsible: "Responsible for content",
      responsibleBody: "Martin Ernst (address as above)",
      disclaimer: "Disclaimer",
      disclaimerBody:
        "Despite careful content control, we accept no liability for the content of external links. The operators of the linked pages are solely responsible for their content.",
    },
  },

  /* ── datenschutz ── */
  datenschutz: {
    meta: {
      title: "Privacy policy – Ernst Maschinenbau GmbH",
      description: "Privacy policy of Ernst Maschinenbau GmbH.",
    },
    title: "Privacy policy",
    sections: {
      intro: "General",
      introBody:
        "The protection of your personal data is important to us. We process your personal data confidentially and in accordance with applicable data protection regulations (GDPR, BDSG) as well as this privacy policy.",
      controller: "Controller",
      controllerBody:
        "Ernst Maschinenbau GmbH, Industriestrasse 1A, 74933 Neidenstein, Germany. Email: info@ernstmaschinen.de",
      data: "Collection of personal data",
      dataBody:
        "When you visit our website, technical information (IP address, date/time, browser type, operating system) is processed. This data is used exclusively to ensure the smooth operation of the website.",
      contactForm: "Contact form",
      contactFormBody:
        "When you contact us via our contact form, the data you provide is used exclusively to process your enquiry and will not be passed on to third parties.",
      cookies: "Cookies",
      cookiesBody:
        "This website does not use tracking cookies. Technically necessary cookies may be used for the site to function.",
      rights: "Your rights",
      rightsBody:
        "You have the right to information, correction, deletion and restriction of the processing of your personal data, as well as the right to lodge a complaint with the competent supervisory authority.",
    },
  },

  /* ── other pages ── */
  pages: {
    leistungen: {
      meta: {
        title: "Services – Ernst Maschinenbau GmbH",
        description: "Our services at a glance — custom machinery, precision manufacturing, contract work and service.",
      },
      pageTitle: "Services",
      pageIntro: "Four core competencies — all from a single source.",
    },
    produkte: {
      meta: {
        title: "Products – Ernst Maschinenbau GmbH",
        description: "Steffes product line: leak testing, weighing systems, collection stations, conveyor belts, system add-ons.",
      },
      pageTitle: "Products",
      pageIntro: "Exclusively at Ernst — the Steffes range.",
    },
    stellenangebote: {
      meta: {
        title: "Careers – Ernst Maschinenbau GmbH",
        description: "Open positions at Ernst Maschinenbau in Neidenstein, Germany.",
      },
      pageTitle: "Careers",
      pageIntro: "Become part of our team.",
    },
    unternehmen: {
      meta: {
        title: "Company – Ernst Maschinenbau GmbH",
        description: "Family business since 1965 in Neidenstein — six decades of engineering.",
      },
      pageTitle: "Company",
      pageIntro: "Family business since 1965 in Neidenstein.",
    },
  },
};
