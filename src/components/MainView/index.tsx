import { motion } from 'framer-motion';
import Image from 'next/image';
import tw, { styled } from 'twin.macro';

import type { ProfileResult } from '../../../sanity/lib';
import { animations } from '../../styles/constants';
import { Layout } from '../Layout';
import { PortraitComponent } from '../Portrait';
import { Heading, RichText } from '../Typography';

import { ContactForm } from './MainView.ContactForm';

const BioSection = styled.section(() => [
  tw`pb-28 px-4 mx-auto flex flex-col`,
  tw`sm:px-12 md:(px-24 py-28)`,
  tw`bg-gradient-to-b from-fg to-transparent`,
]);

const BioContent = styled(motion.div).attrs({ ...animations.parallax() })(() => [
  tw`mx-auto flex flex-col gap-12`,
  tw`lg:max-w-screen-md`,
]);

const CompetenciesSection = styled(motion.section).attrs({ ...animations.parallax() })(
  () => [tw`pb-28 px-4 sm:px-12 md:px-24`]
);

const CompetenciesContent = styled.div(() => [tw`lg:max-w-screen-md mx-auto`]);

const CompetenciesGrid = styled.div(() => [tw`grid grid-cols-8 sm:grid-cols-12 gap-12`]);

export function MainView({ data: { profile } }: { data: { profile: ProfileResult } }) {
  return (
    <Layout socials={profile.socials} resume={profile.resumeURL}>
      <PortraitComponent />
      <BioSection>
        <BioContent>
          <article>
            <RichText value={profile.bio} />
          </article>
        </BioContent>
      </BioSection>
      <CompetenciesSection>
        <CompetenciesContent>
          <Heading>Competencies</Heading>
          <CompetenciesGrid>
            {profile.competencies.map(c => (
              <div key={c._key} css={tw`col-span-4 lg:col-span-3`}>
                <h5>{c.technology}</h5>
                <div css={tw`w-full h-4 rounded-full`}>
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${(c.rating / 5) * 100}%` }}
                    css={tw`bg-gradient-to-br from-primary-500 to-primary-300 h-full rounded-full shadow-md`}
                  />
                </div>
              </div>
            ))}
          </CompetenciesGrid>
        </CompetenciesContent>
      </CompetenciesSection>
      <CompetenciesSection>
        <CompetenciesContent>
          <Heading>Say Hi</Heading>
          <ContactForm />
        </CompetenciesContent>
      </CompetenciesSection>
      <CompetenciesSection css={tw`relative bg-gradient-to-b from-transparent to-fg`}>
        <Image
          priority
          width={0}
          height={0}
          sizes='100vw'
          src={profile.photoURL}
          alt='yoni david'
          css={tw`max-w-md w-full h-auto mx-auto rounded-md relative`}
        />
      </CompetenciesSection>
    </Layout>
  );
}
