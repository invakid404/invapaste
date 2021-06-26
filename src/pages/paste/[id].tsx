import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { usePaste } from 'src/lib/hooks/usePaste';

const Paste = () => {
  const router = useRouter();
  const { id } = router.query;

  const content = usePaste(id);

  return <p>{content}</p>;
};

export default Paste;
