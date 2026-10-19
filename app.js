/* addmagic · site script: theme, language, the loop, log, reveals */
(function () {
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- dictionary ---------- */
  const T = {
    en: {
      'skip': 'Skip to content',
      'nav.solutions': 'Solutions', 'nav.process': 'How it works', 'nav.approach': 'Our approach', 'nav.contact': 'Contact', 'nav.cta': "Let's talk",
      'theme.toLight': 'Switch to light mode', 'theme.toDark': 'Switch to dark mode',
      'hero.pill': 'AI-powered marketing systems', 'hero.l1': 'Less manual.', 'hero.l2': 'More magic.',
      'hero.sub': 'Intelligent automations that connect your tools, sharpen your campaigns, and give your team more room to create.',
      'hero.cta1': 'Explore what we automate', 'hero.cta2': 'How it works', 'hero.chip': 'Ideas → intelligence → impact',
      'strip.1': 'Automation that feels effortless', 'strip.2': 'Built for bold brands', 'strip.3': 'Creative thinking. Intelligent execution.',
      'tools.label': 'Works with the tools you already use',
      'sol.eyebrow': 'What we automate', 'sol.title1': 'Four systems.', 'sol.title2': 'One connected loop.',
      'sol.intro': 'Pick a system and watch how it runs: your tools on the left, the outcomes on the right, addmagic in the middle doing the repetitive part.',
      'scn.leads.name': 'Lead nurturing', 'scn.leads.claim': 'Every lead gets the right next message.',
      'scn.leads.desc': 'New contacts are enriched, scored and routed automatically. Follow-ups go out on time, in your voice, and your sales team sees why.',
      'scn.campaigns.name': 'Campaign workflows', 'scn.campaigns.claim': 'Campaigns that build themselves from a brief.',
      'scn.campaigns.desc': 'From brief to live ads: copy variants, audiences and budgets are prepared with AI, reviewed by a human, and launched across channels in one flow.',
      'scn.creative.name': 'Creative operations', 'scn.creative.claim': 'Assets, versions and approvals without the chase.',
      'scn.creative.desc': 'Formats are resized, captions drafted and approvals tracked, so creatives spend their time on ideas instead of exports.',
      'scn.reporting.name': 'Reporting intelligence', 'scn.reporting.claim': 'One morning summary instead of twelve dashboards.',
      'scn.reporting.desc': 'Data from ads, CRM and analytics is pulled together, explained in plain language, and sent to the people who decide.',
      'loop.review': 'Human review', 'loop.inputs': 'Your tools', 'loop.core': 'Automation', 'loop.outputs': 'What you get',
      'proc.eyebrow': 'How it works', 'proc.title1': 'From first call to running system', 'proc.title2': 'in four phases.',
      'ph.1.t': 'Discover', 'ph.1.d': 'We map your tools, your handovers and the places where time is lost. Half a day, no slides.', 'ph.1.o': 'Output: a map of your marketing operations',
      'ph.2.t': 'Design', 'ph.2.d': 'We draft the flows with you: what triggers what, where a human decides, what the result looks like.', 'ph.2.o': 'Output: one page per flow, readable by everyone',
      'ph.3.t': 'Build', 'ph.3.d': 'We connect the tools, tune the prompts to your voice and test with real data before anything goes live.', 'ph.3.o': 'Output: tested automations inside your systems',
      'ph.4.t': 'Run', 'ph.4.d': 'We keep it running, measure it and improve it month by month. You stay in control of every step.', 'ph.4.o': 'Output: a system that gets better with use',
      'app.eyebrow': 'Our approach', 'app.title1': 'AI does the repetition.', 'app.title2': 'People keep the judgement.',
      'pr.1.t': 'Humans decide', 'pr.1.d': 'Every automation has a review step where it matters: offers, tone, spend.',
      'pr.2.t': 'Your tools, not ours', 'pr.2.d': 'We build inside the systems you already pay for. No new platform to learn, nothing to migrate.',
      'pr.3.t': 'Plain language', 'pr.3.d': 'No black boxes. Each flow comes with a one-page description your whole team can read.',
      'log.title': 'Example automation log', 'log.tag': 'Illustration',
      'ct.title1': "Let's see what we can", 'ct.title2': 'automate for you.',
      'ct.text': 'Tell us about your tools and your most repetitive task. We reply personally.', 'ct.cta': 'Write to us', 'ct.copy': 'Copy', 'ct.copied': 'Copied',
      'ft.line': 'AddMagic UG (haftungsbeschränkt) · Bensheim, Germany', 'ft.imprint': 'Imprint', 'ft.privacy': 'Privacy', 'ft.home': 'Home',
      'ft.note': 'Made in Bensheim. Runs on the tools you already use.',
      'lg.imprint': 'Imprint', 'lg.law': 'Information according to § 5 DDG (German Digital Services Act)', 'lg.rep': 'Represented by the managing director:', 'lg.reg': 'Register court:', 'lg.regno': 'Registration number:', 'lg.mail': 'Email:', 'lg.vat': 'VAT identification number:', 'lg.vatpending': 'to be added', 'lg.resp': 'Responsible for content according to § 18 (2) MStV:',
      'lg.privacy': 'Privacy', 'lg.p.title': 'Privacy notice',
      'lg.p.1t': 'Controller', 'lg.p.1': 'AddMagic UG (haftungsbeschränkt), Beginenstraße 48, 64625 Bensheim, Germany, email hello@addmagic.de.',
      'lg.p.2t': 'Hosting', 'lg.p.2': 'This website is served by GitHub Pages (GitHub, Inc., 88 Colin P Kelly Jr St, San Francisco, CA 94107, USA). When you visit, technically necessary data such as IP address, time, requested page and browser type is processed in server logs. Legal basis is Art. 6 (1) f GDPR (secure operation of the website). GitHub privacy information: https://docs.github.com/site-policy/privacy-policies/github-general-privacy-statement.',
      'lg.p.3t': 'No cookies, no trackers', 'lg.p.3': 'This website sets no cookies and embeds no analytics or advertising services. Fonts are served from the same server. Your language and colour scheme choice is stored only in your browser (localStorage) and never transmitted.',
      'lg.p.4t': 'Contact by email', 'lg.p.4': 'If you write to us by email, we process your details to handle your request (Art. 6 (1) b GDPR). The data is deleted once it is no longer needed for that purpose and no statutory retention duties apply.',
      'lg.p.5t': 'Your rights', 'lg.p.5': 'You have the right to access, rectification, erasure, restriction of processing, data portability and objection, and the right to lodge a complaint with a supervisory authority. The competent authority is the Hessian Commissioner for Data Protection and Freedom of Information.'
    },
    de: {
      'skip': 'Zum Inhalt springen',
      'nav.solutions': 'Leistungen', 'nav.process': 'So arbeiten wir', 'nav.approach': 'Unser Ansatz', 'nav.contact': 'Kontakt', 'nav.cta': 'Lass uns reden',
      'theme.toLight': 'Zum hellen Modus wechseln', 'theme.toDark': 'Zum dunklen Modus wechseln',
      'hero.pill': 'KI-gestützte Marketing-Systeme', 'hero.l1': 'Weniger Handarbeit.', 'hero.l2': 'Mehr Magie.',
      'hero.sub': 'Intelligente Automatisierungen, die Ihre Tools verbinden, Ihre Kampagnen schärfen und Ihrem Team mehr Raum zum Gestalten geben.',
      'hero.cta1': 'Was wir automatisieren', 'hero.cta2': 'So arbeiten wir', 'hero.chip': 'Ideen → Intelligenz → Wirkung',
      'strip.1': 'Automatisierung, die sich leicht anfühlt', 'strip.2': 'Gemacht für mutige Marken', 'strip.3': 'Kreativ gedacht. Intelligent umgesetzt.',
      'tools.label': 'Funktioniert mit den Tools, die Sie schon nutzen',
      'sol.eyebrow': 'Was wir automatisieren', 'sol.title1': 'Vier Systeme.', 'sol.title2': 'Ein verbundener Kreislauf.',
      'sol.intro': 'Wählen Sie ein System und sehen Sie, wie es läuft: links Ihre Tools, rechts die Ergebnisse, in der Mitte addmagic, das den wiederkehrenden Teil übernimmt.',
      'scn.leads.name': 'Lead-Nurturing', 'scn.leads.claim': 'Jeder Lead bekommt die passende nächste Nachricht.',
      'scn.leads.desc': 'Neue Kontakte werden automatisch angereichert, bewertet und weitergeleitet. Follow-ups gehen pünktlich und in Ihrer Tonalität raus, und der Vertrieb sieht, warum.',
      'scn.campaigns.name': 'Kampagnen-Workflows', 'scn.campaigns.claim': 'Kampagnen, die aus einem Briefing entstehen.',
      'scn.campaigns.desc': 'Vom Briefing bis zur Live-Anzeige: Textvarianten, Zielgruppen und Budgets werden mit KI vorbereitet, von einem Menschen geprüft und in einem Durchgang auf allen Kanälen gestartet.',
      'scn.creative.name': 'Creative Operations', 'scn.creative.claim': 'Assets, Versionen und Freigaben ohne Hinterherlaufen.',
      'scn.creative.desc': 'Formate werden angepasst, Captions vorformuliert und Freigaben nachverfolgt. Kreative verbringen ihre Zeit mit Ideen statt mit Exporten.',
      'scn.reporting.name': 'Reporting-Intelligenz', 'scn.reporting.claim': 'Eine Zusammenfassung am Morgen statt zwölf Dashboards.',
      'scn.reporting.desc': 'Daten aus Ads, CRM und Analytics werden zusammengeführt, verständlich erklärt und an die Menschen geschickt, die entscheiden.',
      'loop.review': 'Prüfung durch Menschen', 'loop.inputs': 'Ihre Tools', 'loop.core': 'Automatisierung', 'loop.outputs': 'Ihr Ergebnis',
      'proc.eyebrow': 'So arbeiten wir', 'proc.title1': 'Vom ersten Gespräch zum laufenden System', 'proc.title2': 'in vier Phasen.',
      'ph.1.t': 'Verstehen', 'ph.1.d': 'Wir erfassen Ihre Tools, Ihre Übergaben und die Stellen, an denen Zeit verloren geht. Ein halber Tag, keine Folien.', 'ph.1.o': 'Ergebnis: eine Landkarte Ihrer Marketing-Abläufe',
      'ph.2.t': 'Entwerfen', 'ph.2.d': 'Wir skizzieren die Abläufe mit Ihnen: Was löst was aus, wo entscheidet ein Mensch, wie sieht das Ergebnis aus.', 'ph.2.o': 'Ergebnis: eine Seite pro Ablauf, für alle lesbar',
      'ph.3.t': 'Bauen', 'ph.3.d': 'Wir verbinden die Tools, stimmen die Prompts auf Ihre Sprache ab und testen mit echten Daten, bevor etwas live geht.', 'ph.3.o': 'Ergebnis: getestete Automatisierungen in Ihren Systemen',
      'ph.4.t': 'Betreiben', 'ph.4.d': 'Wir halten alles am Laufen, messen und verbessern Monat für Monat. Jeder Schritt bleibt in Ihrer Hand.', 'ph.4.o': 'Ergebnis: ein System, das mit der Nutzung besser wird',
      'app.eyebrow': 'Unser Ansatz', 'app.title1': 'KI übernimmt die Wiederholung.', 'app.title2': 'Menschen behalten das Urteil.',
      'pr.1.t': 'Menschen entscheiden', 'pr.1.d': 'Jede Automatisierung hat dort eine Prüfschleife, wo es zählt: Angebote, Tonalität, Budget.',
      'pr.2.t': 'Ihre Tools, nicht unsere', 'pr.2.d': 'Wir bauen in den Systemen, die Sie ohnehin bezahlen. Keine neue Plattform, keine Migration.',
      'pr.3.t': 'Klare Sprache', 'pr.3.d': 'Keine Blackbox. Zu jedem Ablauf gibt es eine einseitige Beschreibung, die Ihr ganzes Team lesen kann.',
      'log.title': 'Beispiel-Protokoll einer Automatisierung', 'log.tag': 'Illustration',
      'ct.title1': 'Schauen wir, was wir für Sie', 'ct.title2': 'automatisieren können.',
      'ct.text': 'Erzählen Sie uns von Ihren Tools und Ihrer lästigsten Routineaufgabe. Wir antworten persönlich.', 'ct.cta': 'Schreiben Sie uns', 'ct.copy': 'Kopieren', 'ct.copied': 'Kopiert',
      'ft.line': 'AddMagic UG (haftungsbeschränkt) · Bensheim', 'ft.imprint': 'Impressum', 'ft.privacy': 'Datenschutz', 'ft.home': 'Startseite',
      'ft.note': 'Gemacht in Bensheim. Läuft auf den Tools, die Sie schon nutzen.',
      'lg.imprint': 'Impressum', 'lg.law': 'Angaben gemäß § 5 DDG', 'lg.rep': 'Vertreten durch den Geschäftsführer:', 'lg.reg': 'Registergericht:', 'lg.regno': 'Registernummer:', 'lg.mail': 'E-Mail:', 'lg.vat': 'Umsatzsteuer-Identifikationsnummer:', 'lg.vatpending': 'wird nachgetragen', 'lg.resp': 'Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV:',
      'lg.privacy': 'Datenschutz', 'lg.p.title': 'Datenschutzerklärung',
      'lg.p.1t': 'Verantwortlicher', 'lg.p.1': 'AddMagic UG (haftungsbeschränkt), Beginenstraße 48, 64625 Bensheim, E-Mail hello@addmagic.de.',
      'lg.p.2t': 'Hosting', 'lg.p.2': 'Diese Website wird über GitHub Pages (GitHub, Inc., 88 Colin P Kelly Jr St, San Francisco, CA 94107, USA) ausgeliefert. Beim Aufruf werden technisch notwendige Daten wie IP-Adresse, Zeitpunkt, aufgerufene Seite und Browsertyp in Server-Logs verarbeitet. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (sicherer Betrieb der Website). Informationen zum Datenschutz bei GitHub: https://docs.github.com/site-policy/privacy-policies/github-general-privacy-statement.',
      'lg.p.3t': 'Keine Cookies, keine Tracker', 'lg.p.3': 'Diese Website setzt keine Cookies und bindet keine Analyse- oder Werbedienste ein. Schriften werden lokal vom selben Server geladen. Ihre Wahl von Sprache und Farbschema wird ausschließlich in Ihrem Browser (localStorage) gespeichert und nicht übertragen.',
      'lg.p.4t': 'Kontakt per E-Mail', 'lg.p.4': 'Wenn Sie uns per E-Mail schreiben, verarbeiten wir Ihre Angaben zur Bearbeitung der Anfrage (Art. 6 Abs. 1 lit. b DSGVO). Die Daten werden gelöscht, sobald sie für den Zweck nicht mehr erforderlich sind und keine gesetzlichen Aufbewahrungspflichten bestehen.',
      'lg.p.5t': 'Ihre Rechte', 'lg.p.5': 'Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit und Widerspruch sowie das Recht, sich bei einer Aufsichtsbehörde zu beschweren. Zuständig ist der Hessische Beauftragte für Datenschutz und Informationsfreiheit.'
    }
  };

  /* scenarios for the loop (inputs / outputs) */
  const SCN = {
    leads:     { en: { in: ['Website form', 'Ad leads', 'LinkedIn'], out: ['CRM, enriched', 'Follow-up sequence', 'Sales alert'] },
                 de: { in: ['Website-Formular', 'Ad-Leads', 'LinkedIn'], out: ['CRM, angereichert', 'Follow-up-Sequenz', 'Vertriebs-Alarm'] } },
    campaigns: { en: { in: ['Campaign brief', 'Brand assets', 'Budget plan'], out: ['Meta Ads', 'Google Ads', 'LinkedIn Ads'] },
                 de: { in: ['Kampagnen-Briefing', 'Markenassets', 'Budgetplan'], out: ['Meta Ads', 'Google Ads', 'LinkedIn Ads'] } },
    creative:  { en: { in: ['Design files', 'Copy deck', 'Approval list'], out: ['Social formats', 'Web banners', 'Print-ready files'] },
                 de: { in: ['Design-Dateien', 'Textsammlung', 'Freigabeliste'], out: ['Social-Formate', 'Web-Banner', 'Druckfertige Dateien'] } },
    reporting: { en: { in: ['Ads data', 'CRM', 'Analytics'], out: ['Morning summary', 'Alerts', 'Monthly deck'] },
                 de: { in: ['Ads-Daten', 'CRM', 'Analytics'], out: ['Morgen-Zusammenfassung', 'Alarme', 'Monatsreport'] } }
  };

  /* example log lines (clearly marked as illustration in the UI) */
  const LOG = {
    en: [['08:02', 'New lead from website form', ''], ['08:02', 'Enriched: company, size, industry', 'ai'], ['08:03', 'Scored 82, routed to Sales North', 'ai'], ['08:03', 'Follow-up drafted in your voice', 'ai'], ['08:15', 'Human review: approved', 'hu'], ['08:16', 'Sent. Reply tracking on', 'ok'], ['09:40', 'Reply received, meeting proposed', ''], ['09:41', 'Calendar invite sent, CRM updated', 'ok']],
    de: [['08:02', 'Neuer Lead über Website-Formular', ''], ['08:02', 'Angereichert: Firma, Größe, Branche', 'ai'], ['08:03', 'Bewertet mit 82, weitergeleitet an Vertrieb Nord', 'ai'], ['08:03', 'Follow-up in Ihrer Tonalität entworfen', 'ai'], ['08:15', 'Prüfung durch Menschen: freigegeben', 'hu'], ['08:16', 'Gesendet. Antwort-Tracking aktiv', 'ok'], ['09:40', 'Antwort erhalten, Termin vorgeschlagen', ''], ['09:41', 'Kalendereinladung verschickt, CRM aktualisiert', 'ok']]
  };

  let lang = document.documentElement.lang === 'de' ? 'de' : 'en';
  let scn = 'leads';

  function applyLang() {
    const d = T[lang];
    $$('[data-i18n]').forEach(el => { const k = el.dataset.i18n; if (d[k] != null) el.textContent = d[k]; });
    $$('[data-i18n-html]').forEach(el => { const k = el.dataset.i18nHtml; if (d[k] != null) el.textContent = d[k]; });
    $$('[data-i18n-aria]').forEach(el => { const k = el.dataset.i18nAria; if (d[k] != null) el.setAttribute('aria-label', d[k]); });
    $$('.lang button').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.lang === lang)));
    document.documentElement.lang = lang;
    document.title = lang === 'de' ? 'addmagic · Weniger Handarbeit. Mehr Magie.' : 'addmagic · Less manual. More magic.';
    const mail = $('#mail'); if (mail) mail.href = 'mailto:hello@addmagic.de?subject=' + encodeURIComponent(lang === 'de' ? 'Lass uns über Automatisierung reden' : "Let's talk about automation");
    setScenario(scn, true); renderLog(); updateThemeLabel();
  }
  $$('.lang button').forEach(b => b.addEventListener('click', () => { lang = b.dataset.lang; try { localStorage.setItem('am-lang', lang); } catch (e) {} applyLang(); }));

  /* ---------- theme ---------- */
  function updateThemeLabel() {
    const t = document.documentElement.dataset.theme; const btn = $('#theme'); if (!btn) return;
    btn.setAttribute('aria-label', T[lang][t === 'dark' ? 'theme.toLight' : 'theme.toDark']);
    const meta = $('meta[name="theme-color"]'); if (meta) meta.content = t === 'dark' ? '#07070D' : '#F5F5FD';
  }
  $('#theme')?.addEventListener('click', () => {
    const next = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = next; try { localStorage.setItem('am-theme', next); } catch (e) {}
    updateThemeLabel();
  });

  /* ---------- mobile menu ---------- */
  const burger = $('#burger'), links = $('#links');
  burger?.addEventListener('click', () => { const open = !links.classList.contains('open'); links.classList.toggle('open', open); burger.setAttribute('aria-expanded', String(open)); });
  links?.addEventListener('click', e => { if (e.target.tagName === 'A') { links.classList.remove('open'); burger.setAttribute('aria-expanded', 'false'); } });

  /* ---------- progress + current section ---------- */
  const prog = $('#progress');
  const secs = ['solutions', 'process', 'approach', 'contact'].map(id => document.getElementById(id)).filter(Boolean);
  function onScroll() {
    const h = document.documentElement; const max = h.scrollHeight - h.clientHeight;
    if (prog) prog.style.width = (max > 0 ? (h.scrollTop / max) * 100 : 0) + '%';
    let cur = null; secs.forEach(s => { if (s.getBoundingClientRect().top < innerHeight * .45) cur = s.id; });
    $$('.links a').forEach(a => a.classList.toggle('is-current', a.getAttribute('href') === '#' + cur));
  }
  addEventListener('scroll', onScroll, { passive: true }); onScroll();

  /* ---------- reveals ---------- */
  const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), { threshold: .15 });
  $$('.reveal').forEach(el => io.observe(el));
  const phases = $$('.phase');
  if (phases.length) { const po = new IntersectionObserver(es => es.forEach(e => e.target.classList.toggle('is-on', e.isIntersecting)), { threshold: .6 }); phases.forEach(p => po.observe(p)); }

  /* ---------- hero rabbit: gentle pointer tilt ---------- */
  const rab = $('#rabbit');
  if (rab && !reduce && matchMedia('(pointer:fine)').matches) {
    const hero = $('.hero');
    hero.addEventListener('pointermove', e => { const r = hero.getBoundingClientRect(); const x = (e.clientX - r.left) / r.width - .5, y = (e.clientY - r.top) / r.height - .5; rab.style.transform = `rotateY(${x * 8}deg) rotateX(${-y * 6}deg) translate3d(${x * 10}px,${y * 8}px,0)`; });
    hero.addEventListener('pointerleave', () => { rab.style.transform = ''; });
  }

  /* ---------- the loop ---------- */
  const loop = $('#loop');
  const pathsG = $('#paths'), pulsesG = $('#pulses');
  const W = 760, H = 460, cx = 380, cy = 230;
  const inPts = [[84, 101], [84, 230], [84, 359]], outPts = [[676, 101], [676, 230], [676, 359]];
  const paths = [];
  function mkPath(d, cls) { const p = document.createElementNS('http://www.w3.org/2000/svg', 'path'); p.setAttribute('d', d); p.setAttribute('class', cls); pathsG.appendChild(p); return p; }
  if (loop) {
    inPts.forEach(([x, y]) => paths.push({ el: mkPath(`M${x + 60},${y} C${x + 170},${y} ${cx - 150},${cy} ${cx - 62},${cy}`, 'in'), dir: 1 }));
    outPts.forEach(([x, y]) => paths.push({ el: mkPath(`M${cx + 62},${cy} C${cx + 150},${cy} ${x - 170},${y} ${x - 60},${y}`, 'out'), dir: 1 }));
    paths.forEach(p => { p.len = p.el.getTotalLength(); });
    const pulses = [];
    if (!reduce) {
      for (let i = 0; i < 9; i++) { const c = document.createElementNS('http://www.w3.org/2000/svg', 'circle'); c.setAttribute('r', i % 3 === 0 ? 3.5 : 2.5); pulsesG.appendChild(c); pulses.push({ el: c, path: paths[i % paths.length], t: (i * 0.37) % 1, speed: 0.0022 + (i % 4) * 0.0005 }); }
      let last = 0;
      function tick(ts) { const dt = Math.min(40, ts - last); last = ts; pulses.forEach(p => { p.t += p.speed * dt / 16; if (p.t > 1) { p.t = 0; p.path = paths[Math.floor(Math.random() * paths.length)]; } const pt = p.path.el.getPointAtLength(p.t * p.path.len); p.el.setAttribute('cx', pt.x); p.el.setAttribute('cy', pt.y); p.el.setAttribute('opacity', Math.sin(p.t * Math.PI).toFixed(2)); }); requestAnimationFrame(tick); }
      requestAnimationFrame(tick);
    }
    paths.forEach(p => p.el.classList.add('active'));
  }
  function setScenario(key, instant) {
    scn = key; const s = SCN[key][lang];
    $$('.tab').forEach(t => { const on = t.dataset.scn === key; t.classList.toggle('is-active', on); t.setAttribute('aria-selected', String(on)); });
    const nodes = ['in0', 'in1', 'in2', 'out0', 'out1', 'out2'].map(id => document.getElementById(id));
    if (!nodes[0]) return;
    const labels = [...s.in, ...s.out];
    const write = () => nodes.forEach((n, i) => { n.querySelector('span').textContent = labels[i]; n.classList.remove('swap'); });
    if (instant || reduce) { write(); return; }
    nodes.forEach(n => n.classList.add('swap')); setTimeout(write, 320);
  }
  $$('.tab').forEach(t => t.addEventListener('click', () => setScenario(t.dataset.scn, false)));

  /* ---------- log ---------- */
  let logTimer = null;
  function renderLog() {
    const ol = $('#log'); if (!ol) return; ol.innerHTML = ''; clearTimeout(logTimer);
    const lines = LOG[lang]; let i = 0;
    const add = () => { if (i >= lines.length) { logTimer = setTimeout(renderLog, 9000); return; } const [t, m, c] = lines[i++]; const li = document.createElement('li'); li.innerHTML = `<time>${t}</time><span class="${c}">${m}</span>`; ol.appendChild(li); logTimer = setTimeout(add, reduce ? 0 : 900 + Math.random() * 700); };
    add();
  }

  /* ---------- copy email ---------- */
  $('#copy')?.addEventListener('click', async () => { const hint = $('.copy-hint'); try { await navigator.clipboard.writeText('hello@addmagic.de'); hint.textContent = T[lang]['ct.copied']; setTimeout(() => hint.textContent = T[lang]['ct.copy'], 1800); } catch (e) { location.href = 'mailto:hello@addmagic.de'; } });

  /* ---------- marquee duplicate ---------- */
  const track = $('#track'); if (track) track.innerHTML += track.innerHTML;

  applyLang();
})();
