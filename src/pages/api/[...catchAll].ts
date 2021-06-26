import { Backend } from '@backend';
import { NextApiRequest, NextApiResponse } from 'next';

const handle = (req: NextApiRequest, res: NextApiResponse) =>
  new Promise(async (resolve) => {
    const listener = await Backend.getListener();

    listener(req, res);

    res.on('finish', resolve);
  });

export default handle;
