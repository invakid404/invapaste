import { useEffect, useState } from 'react';

export const usePaste = (id: string | string[]) => {
  const [content, setContent] = useState<string>();

  useEffect(() => {
    if (!id) {
      return;
    }

    fetch(`/api/paste/${id.toString()}`)
      .then((response) => response.json())
      .then(({ content }) => setContent(content));
  }, [id]);

  return content;
};
