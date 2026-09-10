import { siteConfig } from "./site-config";
import { IndustrialMenu } from "./industrial-menu";
import { ThemeToggle } from "./theme-toggle";

const pillars = [
  ["01", "Assess and plan", "We visit the facility, learn the process, and identify a first project that fits the equipment, team, and budget already in place."],
  ["02", "Install and connect", "We select and install the required hardware, configure the software, and connect the approved signals from floor to screen."],
  ["03", "Train and support", "We show the team how to use the system, document what was installed, and stay available as the operation learns and grows."],
];

const useCases = [
  ["01", "Downtime response", "Find recurring stops and shorten the path from alarm to owner."],
  ["02", "Production visibility", "Give teams one understandable view of pace, loss, and constraint."],
  ["03", "Quality context", "Connect drift and defects to the conditions surrounding the event."],
  ["04", "Maintenance priority", "Focus limited attention on the assets creating the most operating risk."],
];

const steps = [
  ["01", "Visit and assess the site"],
  ["02", "Select the first project"],
  ["03", "Install and configure"],
  ["04", "Train, support, improve"],
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <a className="wordmark" href="#top" aria-label={`${siteConfig.name} home`}>
        <span className="wordmark-mark">W/</span>
        <span>{siteConfig.name}<small>working name</small></span>
      </a>
      <div className="header-status"><i /> FIELD SYSTEMS / SMALL MANUFACTURING</div>
      <ThemeToggle />
      <IndustrialMenu />
    </header>
  );
}

function SignalPanel() {
  return (
    <div className="signal-panel" aria-label="Simulated production overview">
      <div className="panel-topline">
        <span><i /> EXAMPLE CUSTOMER VIEW</span>
        <span className="demo-label">SIMULATED DATA</span>
      </div>
      <div className="metrics-row">
        <div><span>OEE</span><strong>87.4%</strong><small>+2.1 shift</small></div>
        <div><span>OUTPUT</span><strong>1,480</strong><small>parts / hr</small></div>
        <div><span>DOWNTIME</span><strong>06m</strong><small>current shift</small></div>
      </div>
      <div className="chart-wrap">
        <div className="chart-heading"><span>Hourly output</span><span>Target 1,520</span></div>
        <div className="chart" aria-hidden="true">
          <span className="bar bar-1" /><span className="bar bar-2" />
          <span className="bar bar-3" /><span className="bar bar-4" />
          <span className="bar bar-5" /><span className="bar bar-6" />
          <span className="bar bar-7" /><span className="bar bar-8" />
          <span className="target-line" />
        </div>
        <div className="chart-axis"><span>06:00</span><span>10:00</span><span>14:00</span><span>18:00</span></div>
      </div>
      <div className="event-card">
        <div className="event-icon">!</div>
        <div><span>CHANGE DETECTED / 14:32</span><strong>Station 3 needs operator review</strong></div>
        <span className="event-status">ASSIGNED</span>
      </div>
    </div>
  );
}

export function HeroSection() {
  return (
    <section className="hero section-frame">
      <div className="hero-copy">
        <p className="eyebrow"><span /> On-site installation / small manufacturers</p>
        <h1>Smart factory systems, installed for you.</h1>
        <p className="hero-lede">We visit your facility, install the right hardware and software, connect your equipment, and train your team—so you can modernize without building an automation department.</p>
        <div className="hero-actions">
          <a className="button button-primary" href={siteConfig.contactHref}>Request a site assessment <span aria-hidden="true">↗</span></a>
          <a className="button button-secondary" href="#approach">See what we handle <span aria-hidden="true">↓</span></a>
        </div>
        <dl className="hero-notes">
          <div><dt>On site</dt><dd>Assessment and install</dd></div>
          <div><dt>One team</dt><dd>Hardware and software</dd></div>
          <div><dt>Stay supported</dt><dd>Training and follow-through</dd></div>
        </dl>
      </div>
      <SignalPanel />
    </section>
  );
}

export function CapabilityStrip() {
  return (
    <div className="capability-strip" aria-label="Included services">
      <span className="strip-label">One partner from floor to dashboard</span>
      <span>Site assessment</span><span>Hardware</span><span>Software</span><span>Installation</span><span>Support</span>
    </div>
  );
}

export function ApproachSection() {
  return (
    <section className="section-frame content-section" id="approach">
      <div className="section-heading">
        <p className="eyebrow"><span /> End-to-end service / 01</p>
        <h2>From the first walkthrough to a system your team can use.</h2>
        <p>You do not need an internal automation department. We handle the practical work required to get a focused smart-factory project running.</p>
      </div>
      <div className="pillar-grid">
        {pillars.map(([number, title, text]) => (
          <article className="pillar-card" key={number}>
            <span className="card-number">{number}</span>
            <h3>{title}</h3><p>{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export function SystemSection() {
  return (
    <section className="system-section" id="system">
      <div className="section-frame system-grid">
        <div className="system-copy">
          <p className="eyebrow eyebrow-dark"><span /> Installed system / 02</p>
          <h2>We handle the work between the machine and the screen.</h2>
          <p>We assess the existing equipment, add the necessary sensors or edge hardware, configure the software, and deliver a useful view for the people running the operation.</p>
          <a href="#principles">See how we keep the first project practical <span aria-hidden="true">→</span></a>
        </div>
        <div className="flow-board" aria-label="Conceptual data flow">
          <div className="flow-node"><span>01 / ON SITE</span><strong>Existing equipment and process</strong><small>Machines · People · Goals</small></div>
          <div className="flow-connector"><i /><i /><i /></div>
          <div className="flow-node active"><span>02 / INSTALLED</span><strong>Hardware and software layer</strong><small>Sensors · Edge · Configuration</small></div>
          <div className="flow-connector"><i /><i /><i /></div>
          <div className="flow-node"><span>03 / DELIVERED</span><strong>Useful visibility and alerts</strong><small>See · Respond · Improve</small></div>
        </div>
      </div>
    </section>
  );
}

export function UseCasesSection() {
  return (
    <section className="section-frame content-section" id="use-cases">
      <div className="section-heading use-case-heading">
        <p className="eyebrow"><span /> Practical starting points / 03</p>
        <h2>Start with one machine, one line, or one expensive problem.</h2>
      </div>
      <div className="use-case-grid">
        {useCases.map(([number, title, text]) => (
          <article className="use-case-card" key={number}>
            <span className="card-number">{number}</span>
            <div><h3>{title}</h3><p>{text}</p></div>
            <span className="case-arrow" aria-hidden="true">↗</span>
          </article>
        ))}
      </div>
    </section>
  );
}

export function PrinciplesSection() {
  return (
    <section className="principles-section" id="principles">
      <div className="section-frame principles-grid">
        <div>
          <p className="eyebrow"><span /> Service principles / 04</p>
          <h2>Modernization that fits a smaller operation.</h2>
        </div>
        <div className="principle-list">
          <p><span>01</span><strong>Work with existing equipment wherever practical.</strong></p>
          <p><span>02</span><strong>Start small enough to install, learn, and measure.</strong></p>
          <p><span>03</span><strong>Hardware, software, and installation from one team.</strong></p>
          <p><span>04</span><strong>Training, documentation, and support are part of delivery.</strong></p>
        </div>
      </div>
    </section>
  );
}

export function StepsSection() {
  return (
    <section className="section-frame steps-section">
      <p className="eyebrow"><span /> How we get started / 05</p>
      <div className="steps-heading">
        <h2>A direct path from walkthrough to working system.</h2>
        <p>No full-plant transformation pitch. We begin with a focused need, install what is required, and make sure the people using it are comfortable before expanding.</p>
      </div>
      <ol className="steps-grid">
        {steps.map(([number, title]) => <li key={number}><span>{number}</span><strong>{title}</strong></li>)}
      </ol>
    </section>
  );
}

export function FinalCta() {
  return (
    <section className="final-cta" id="assessment">
      <div>
        <p className="eyebrow eyebrow-dark"><span /> Start with a walkthrough</p>
        <h2>Show us one process.<br />We’ll recommend the first project.</h2>
      </div>
      <a className="button button-accent" href={siteConfig.contactHref}>Request a site assessment <span aria-hidden="true">↗</span></a>
    </section>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="wordmark footer-wordmark"><span className="wordmark-mark">W/</span><span>{siteConfig.name}<small>working name</small></span></div>
      <p>{siteConfig.description}</p>
      <div><a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a><span>© {new Date().getFullYear()} / WWB Data Automation</span></div>
    </footer>
  );
}
