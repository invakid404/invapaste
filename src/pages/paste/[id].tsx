import 'jetbrains-mono';

import Error from 'next/error';
import { useRouter } from 'next/router';
import Highlight from 'react-highlight.js';
import { BeatLoader } from 'react-spinners';
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

  return <Highlight className={styles.pre}>{data.content}</Highlight>;
};

export default Paste;
