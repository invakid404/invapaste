import Error from 'next/error';
import { useRouter } from 'next/router';
import { BeatLoader } from 'react-spinners';
import { usePaste } from 'src/lib/hooks/usePaste';

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

  return <p>{data.content}</p>;
};

export default Paste;
