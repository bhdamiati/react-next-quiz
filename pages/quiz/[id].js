import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import QuizScreen from '../../src/screens/Quiz';

export default function QuizDaGaleraPage({ externalDb }) {
  // const [db, setDb] = React.useState({});
  // React.useEffect(() => {
  // });

  return (
    <ThemeProvider theme={externalDb.theme}>
      <QuizScreen
        externalQuestions={externalDb.questions}
        externalBg={externalDb.bg}
      />
    </ThemeProvider>
    // <pre style={{ color: 'black' }}>
    //   {JSON.stringify(externalDb.theme, null, 4)}
    // </pre>
  );
}

export async function getServerSideProps(context) {
  const [projectName, githubUser] = context.query.id.split('___');

  try {
    const externalDb = await fetch(`https://${projectName}.${githubUser}.vercel.app/api/db`)
      .then((respostaDoServer) => {
        if (respostaDoServer.ok) {
          return respostaDoServer.json();
        }
        throw new Error('Falha em pegar os dados');
      })
      .then((respostaConvertidaEmObjeto) => respostaConvertidaEmObjeto);
      // .catch((e) => {
      //   console.error(e);
      // });
    // console.log('externalDb', externalDb);
    // console.log('Infos que o next traz pra nós:', context.query.id);
    return {
      props: {
        externalDb,
      },
    };
  } catch (err) {
    throw new Error(err);
  }
}

QuizDaGaleraPage.propTypes = {
  externalDb: PropTypes.shape().isRequired,
};
