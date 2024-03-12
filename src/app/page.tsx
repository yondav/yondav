import type { SanityDocument } from 'next-sanity';
import React from 'react';

import { PROFILE_QUERY, type ProfileResult } from '../../sanity/lib/queries';
import { loadQuery } from '../../sanity/lib/store';
import MainPage from '../pages/MainPage';

async function App() {
  const initial = await loadQuery<SanityDocument<ProfileResult>[]>(PROFILE_QUERY);

  return <MainPage data={{ profile: initial.data[0] }} />;
}

export default App;
