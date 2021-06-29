import 'jetbrains-mono';

import Error from 'next/error';
import { useRouter } from 'next/router';
import { BeatLoader } from 'react-spinners';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import { usePaste } from 'src/lib/hooks/usePaste';

import styles from './paste.module.css';

const Paste = () => {
  const router = useRouter();
  const { id } = router.query;

  let { data } = usePaste(id);
  if (data?.statusCode === 404) {
    return <Error statusCode={404} />;
  }

  if (!data) {
    return <BeatLoader />;
  }

  return (
    <SyntaxHighlighter
      showLineNumbers={true}
      wrapLongLines={true}
      className={styles.pre}
      style={atomOneDark}
    >
      {data.content}
    </SyntaxHighlighter>
  );
};

export default Paste;
