import Image from 'next/image'

import { Container } from '@/components/Container'
import { SectionHeading } from '@/components/SectionHeading'
import discordImage from '@/images/resources/discord.svg'
import figmaImage from '@/images/resources/figma.svg'
import videoPlayerImage from '@/images/resources/video-player.svg'

const resources = [
  {
    title: 'NestJS Ninja on Medium',
    description:
      'Explore in-depth articles and tutorials on NestJS, covering topics like authentication, OpenAI integration, and more.',
    link: 'https://medium.com/nestjs-ninja',
    image: function MediumImage() {
      return (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          <Image src={discordImage} alt="Medium Logo" unoptimized />
        </div>
      );
    },
  },
  {
    title: 'NestJS Ninja Squad on daily.dev',
    description:
      'Join the NestJS Ninja community on daily.dev to stay updated with the latest news, discussions, and resources.',
    link: 'https://app.daily.dev/squads/nestjsninja',
    image: function DailyDevImage() {
      return (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          <Image src={figmaImage} alt="daily.dev Logo" unoptimized />
        </div>
      );
    },
  },
  {
    title: 'Henrique Weiand on DEV Community',
    description:
      'Read articles and insights on NestJS and other technologies by Henrique Weiand on DEV Community.',
    link: 'https://dev.to/henriqueweiand',
    image: function DevToImage() {
      return (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          <Image src={videoPlayerImage} alt="DEV Community Logo" unoptimized />
        </div>
      );
    },
  },
];

export function Resources() {
  return (
    <section
      id="resources"
      aria-labelledby="resources-title"
      className="scroll-mt-14 py-16 sm:scroll-mt-32 sm:py-20 lg:py-32"
    >
      <Container>
        <SectionHeading number="1" id="resources-title">
          Resources
        </SectionHeading>
        <p className="mt-8 font-display text-4xl font-bold tracking-tight text-slate-900">
          Tools and resources to enhance your NestJS development journey.
        </p>
        <p className="mt-4 text-lg tracking-tight text-slate-700">
          Explore articles, join communities, and access tutorials to deepen your understanding and application of NestJS.
        </p>
      </Container>
      <Container size="lg" className="mt-16 flex">
        <ol
          role="list"
          className="-mx-3 grid grid-cols-1 gap-y-10 lg:grid-cols-3 lg:text-center xl:-mx-12 xl:divide-x xl:divide-slate-400/20"
        >
          {resources.map((resource) => (
            <a key={resource.title} href={resource.link} target="_blank" rel="noopener noreferrer">
            <li
              
              className="grid auto-rows-min grid-cols-1 items-center gap-8 px-3 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-1 xl:px-12"
            >
              {/* <div className="relative h-48 overflow-hidden rounded-2xl shadow-lg sm:h-60 lg:h-40">
                <resource.image />
              </div> */}
              <div>
                <h3 className="text-base font-medium tracking-tight text-slate-900">
                    {resource.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600">
                  {resource.description}
                </p>
              </div>
            </li>
                  </a>
          ))}
        </ol>
      </Container>
    </section>
  );
}