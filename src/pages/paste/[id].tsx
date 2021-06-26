import { useRouter } from 'next/router';
import { usePaste } from 'src/lib/hooks/usePaste';
import Error from 'next/error';
import { BeatLoader } from 'react-spinners';

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
