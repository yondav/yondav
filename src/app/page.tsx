import type { SanityDocument } from 'next-sanity';
import React from 'react';

import { PROFILE_QUERY, type ProfileResult } from '../../sanity/lib/queries';
import { loadQuery } from '../../sanity/lib/store';
// import MainPage from '../pages/MainPage';
import { MainView } from '../components';

async function App() {
  const initial = await loadQuery<SanityDocument<ProfileResult>[]>(PROFILE_QUERY);

  const { 0: profile } = initial.data;
  // return <MainPage data={{ profile: initial.data[0] }} />;
  return <MainView data={{ profile }} />;
}

export default App;
