import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';

import db from '../db.json';
import Widget from '../src/components/Widget';
import Link from '../src/components/Link';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizBackground from '../src/components/QuizBackground';
import QuizContainer from '../src/components/QuizContainer';
import QuizLogo from '../src/components/QuizLogo';
import Input from '../src/components/Input';
import Button from '../src/components/Button';

export default function Home() {
  const router = useRouter();
  const [name, setName] = React.useState('');

  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head>
        <title>AluraQuiz - Modelo Base</title>
      </Head>
      <QuizContainer>
        <QuizLogo />
        <Widget
          as={motion.section}
          transition={{ delay: 0.5, duration: 0.5 }}
          variants={{
            show: { opacity: 1, y: '0' },
            hidden: { opacity: 0, y: '-100%' },
          }}
          initial="hidden"
          animate="show"
        >
          <Widget.Header>
            <svg viewBox="0 0 564 78" width="100%">
              <g strokeWidth="6">
                <path d="m0 0h564v78h-564z" />
                <path d="m510 12h42v18h-24v6h18v6h-18v6h24v18h-48v-48h6zm-54 0h18v36h24v18h-48v-48h6zm-60 0v6h-6v48h18v-18h18v18h18v-54zm18 24h12v6h-12zm-84-24h54v24h-18v30h-24v-30h-18v-18h6zm-120 0h42v18h-24v6h18v6h-18v6h24v18h-48v-48h6zm48 0h54v6h6v30h-18v6h18v12h-24v-6h-12v-6h-6v12h-18zm-108 0v6h-6v48h48v-6h6v-42h-6v-6zm12 18h12v12h-6v12h-6zm-144-18h18v36h12v-36h24v54h-60v-48h6zm60 0h24v12h6v12h6v-24h24v54h-24v-6h-6v-6h-6v-6h-6v-12h-6v30h-12z" fill="#fff" />
                <path d="m282 24h6v6h6v-6h6v12h-6v6h-6v-6h-6z" fill="#ed1c24" />
              </g>
              <path d="m546 36h6v6h-6zm-504 6h6v6h-6zm126 0h6v6h-6zm132 6h6v6h-6zm120 0h6v6h-6zm-144 6h6v6h-6zm-168 6h6v6h-6zm-18-24h6v6h-6zm156 0h6v6h-6zm162 0h6v6h-6zm-306-18h6v6h-6zm60 6h6v6h-6zm342-12h6v6h-6zm-54 0h6v6h-6zm-60 0h6v6h-6zm-78 0h6v6h-6zm12 0h6v6h-6zm-120 0h6v6h-6zm-60 0h6v6h-6zm-132 0h6v6h-6z" fill="#848484" />
            </svg>
          </Widget.Header>
          <Widget.Content>
            <form onSubmit={function (event) {
              event.preventDefault();
              router.push(`/quiz?name=${name}`);
            }}
            >
              <Input
                name="nomeDoUsuario"
                onChange={(event) => setName(event.target.value)}
                placeholder="Tell us your name!"
                value={name}
              />
              <Button
                type="submit"
                disabled={name.length === 0}
              >
                {`Play ${name}`}
              </Button>
            </form>
          </Widget.Content>
        </Widget>
        <Widget
          as={motion.section}
          transition={{ delay: 0, duration: 0.5 }}
          variants={{
            show: { opacity: 1, y: '0' },
            hidden: { opacity: 0, y: '-100%' },
          }}
          initial="hidden"
          animate="show"
        >
          <Widget.Content>
            <h1>Quizes da Galera</h1>
            <ul>
              {db.external.map((externalLink) => {
                const [projectName, githubUser] = externalLink
                  .replace(/\//g, '')
                  .replace('https:', '')
                  .replace('vercel.app', '')
                  .split('.');

                return (
                  <li key={externalLink}>
                    <Widget.Topic
                      as={Link}
                      href={`/quiz/${projectName}___${githubUser}`}
                      style={{ fontSize: '0.8em' }}
                    >
                      {`${githubUser}/${projectName}`}
                    </Widget.Topic>
                  </li>
                );
              })}
            </ul>
            {/* <p>
              Undertale is a role-playing video game created by indie developer Toby Fox.
              The player controls a child who has fallen into the Underground.
            </p> */}
          </Widget.Content>
        </Widget>
        <Footer
          as={motion.footer}
          transition={{ delay: 1, duration: 0.5 }}
          variants={{
            show: { opacity: 1, transform: 'scale(1)' },
            hidden: { opacity: 0, transform: 'scale(2)' },
          }}
          initial="hidden"
          animate="show"
        />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/bhdamiati/react-next-quiz" />
    </QuizBackground>
  );
}
