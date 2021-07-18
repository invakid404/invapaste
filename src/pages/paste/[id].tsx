import 'jetbrains-mono';

import { PasteContent } from '@lib/components';
import { usePaste } from '@lib/hooks';
import copy from 'copy-to-clipboard';
import Error from 'next/error';
import { useRouter } from 'next/router';
import { SyntheticEvent } from 'react';
import { BeatLoader } from 'react-spinners';
import { atomOneDark } from 'react-syntax-highlighter/dist/cjs/styles/hljs';

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
    <PasteContent
      showLineNumbers={true}
      wrapLongLines={true}
      style={atomOneDark}
      onCopy={(event: SyntheticEvent) => {
        event.preventDefault();
        event.nativeEvent.stopImmediatePropagation();

        copy(data.content);
      }}
    >
      {data.content}
    </PasteContent>
  );
};

export default Paste;
