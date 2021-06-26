import { useEffect, useState } from 'react';
import useSWR from 'swr';

export const usePaste = (id: string | string[]) =>
  useSWR(id ? `/api/paste/${id}` : null);
