'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { RiFileList2Fill, RiGithubFill, RiLinkedinBoxFill } from 'react-icons/ri';
import tw, { styled, theme } from 'twin.macro';

import type { ProfileResult } from '../../../sanity/lib';
import { animations, iconMap } from '../../styles/constants';
import { Button } from '../Button';
import { Layout } from '../Layout';
import { PortraitComponent } from '../Portrait';
import { Banner, RichText } from '../Typography';

import { ContactForm } from './MainView.ContactForm';

const BioSection = styled.section(() => [
  tw`py-28 px-4 mx-auto flex flex-col`,
  tw`sm:px-12 md:px-24`,
  tw`bg-gradient-to-b from-fg to-transparent`,
]);

const BioContent = styled(motion.div).attrs({ ...animations.parallax() })(() => [
  tw`mx-auto flex flex-col gap-12`,
  tw`lg:max-w-screen-md`,
]);

const ButtonGroup = styled(motion.div).attrs({ ...animations.parallax() })(() => [
  tw`w-fit flex gap-0.5 ml-auto`,
]);

const BioButton = styled(Button).attrs({
  as: 'a',
  target: '_blank',
  rel: 'noopener noreferrer',
})({});

const CompetenciesSection = styled(motion.section).attrs({ ...animations.parallax() })(
  () => [tw`pb-28 px-4 sm:px-12 md:px-24`]
);

const CompetenciesContent = styled.div(() => [tw`lg:max-w-screen-md mx-auto`]);

const CompetenciesGrid = styled.div(() => [tw`grid grid-cols-8 sm:grid-cols-12 gap-12`]);

export function MainView({ data: { profile } }: { data: { profile: ProfileResult } }) {
  return (
    <Layout socials={profile.socials}>
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
          <h1>Competencies</h1>
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
          <h1>Say Hi</h1>
          <ContactForm profileImg={profile.photoURL} />
        </CompetenciesContent>
      </CompetenciesSection>
      <section
        css={tw`pb-4 px-4 mx-auto sm:px-12 md:px-24 bg-gradient-to-b from-transparent to-fg`}
      >
        <Banner>More soon...</Banner>
        <BioContent css={tw`mt-32`}>
          <ButtonGroup>
            <BioButton href={profile.resumeURL}>
              <RiFileList2Fill size='1.5rem' />
            </BioButton>
            {profile.socials.map(s => (
              <BioButton key={s._key} href={s.link}>
                {iconMap[s.entity]({ size: '1.5rem' })}
              </BioButton>
            ))}
          </ButtonGroup>
        </BioContent>
      </section>
    </Layout>
  );
}
