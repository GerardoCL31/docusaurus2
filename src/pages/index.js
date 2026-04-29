import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();

  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">
          Documentacion tecnica del proyecto full-stack para Bar Corona.
        </p>
        <div className={styles.buttons}>
          <Link className="button button--secondary button--lg" to="/docs/intro">
            Abrir documentacion
          </Link>
          <a
            className={clsx('button button--secondary button--lg', styles.githubButton)}
            href="https://github.com/GerardoCL31/CoronaHUB"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Abrir repositorio de CoronaHUB en GitHub">
            <svg viewBox="0 0 24 24" aria-hidden="true" className={styles.githubIcon}>
              <path
                fill="currentColor"
                d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2.15c-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18A10.9 10.9 0 0 1 12 6.02c.98 0 1.96.13 2.88.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.8 1.19 1.83 1.19 3.09 0 4.42-2.69 5.39-5.25 5.68.41.36.78 1.06.78 2.14v3.16c0 .31.21.68.79.56A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z"
              />
            </svg>
            GitHub
          </a>
          <a
            className={clsx('button button--secondary button--lg', styles.githubButton)}
            href="https://barcorona.es"
            target="_blank"
            rel="noopener noreferrer">
            BarCorona.es
          </a>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();

  return (
    <Layout title={siteConfig.title} description="Dossier tecnico de CoronaHUB">
      <HomepageHeader />
      <main>
        <section className={styles.summary}>
          <div className="container">
            <div className={styles.grid}>
              <article>
                <h2>Proyecto</h2>
                <p>Justificacion, objetivos, alcance y requisitos del TFG.</p>
              </article>
              <article>
                <h2>Arquitectura</h2>
                <p>Capas, tecnologias, persistencia y estructura del monorepo.</p>
              </article>
              <article>
                <h2>Aplicacion</h2>
                <p>Frontend, backend, seguridad, API e integracion con Telegram.</p>
              </article>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
