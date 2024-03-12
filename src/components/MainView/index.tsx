'use client';

import { motion } from 'framer-motion';
import { RiFileList2Fill, RiGithubFill, RiLinkedinBoxFill } from 'react-icons/ri';
import tw, { styled } from 'twin.macro';

import type { ProfileResult } from '../../../sanity/lib';
import { animations, iconMap } from '../../styles/constants';
import { Button } from '../Button';
import { Layout } from '../Layout';
import { PortraitComponent } from '../Portrait';
import { Banner, RichText } from '../Typography';

const BioSection = styled.section(() => [
  tw`py-28 px-4 mx-auto flex flex-col`,
  tw`sm:px-12 md:px-24`,
  tw`bg-gradient-to-b from-white/20 to-transparent`,
]);

const BioContent = styled(motion.div).attrs({ ...animations.parallax() })(() => [
  tw`mx-auto flex flex-col gap-12`,
  tw`lg:max-w-screen-md`,
]);

const ButtonGroup = styled(motion.div).attrs({ ...animations.parallax() })(() => [
  tw`flex gap-0.5 ml-auto`,
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
      <Banner>More soon...</Banner>
    </Layout>
  );
}
