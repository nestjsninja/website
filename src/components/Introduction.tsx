import Link from 'next/link'

import { CheckIcon } from '@/components/CheckIcon'
import { Container } from '@/components/Container'

export function Introduction() {
  return (
    <section
      id="introduction"
      aria-label="Introduction"
      className="pt-20 pb-16 sm:pb-20 md:pt-36 lg:py-32"
    >
      <Container className="text-lg tracking-tight text-slate-700">
        <p className="font-display text-4xl font-bold tracking-tight text-slate-900">
          NestJS Ninja: Your Gateway to Mastering NestJS
        </p>
        <p className="mt-4">
          NestJS Ninja is a blog dedicated to exploring the NestJS framework—a progressive Node.js framework for building efficient, scalable server-side applications.
        </p>
        <p className="mt-4">
          The blog delves into various aspects of NestJS development, offering tutorials and insights on topics such as implementing authentication with NestJS and PostgreSQL, integrating OpenAI to create smart questions, and more.
        </p>
        <p className="mt-4">
          The content is designed to help developers deepen their understanding of NestJS and apply best practices in their projects.
        </p>
        <ul role="list" className="mt-8 space-y-3">
          {[
            'Implementing authentication with NestJS and PostgreSQL',
            'Integrating OpenAI to create smart questions',
            'Applying unit tests on NestJS with Jest and GitHub Actions',
            'Handling database transactions with TypeORM in NestJS',
            'Building scalable server-side applications with NestJS',
          ].map((feature) => (
            <li key={feature} className="flex">
              <CheckIcon className="h-8 w-8 flex-none fill-blue-500" />
              <span className="ml-4">{feature}</span>
            </li>
          ))}
        </ul>
        <p className="mt-8">
          By engaging with the content on NestJS Ninja, you'll gain the confidence and knowledge needed to create robust and efficient applications using NestJS.
        </p>
        <p className="mt-10">
          <Link
            href="https://medium.com/nestjs-ninja"
            className="text-base font-medium text-blue-600 hover:text-blue-800"
          >
            Explore our latest articles and tutorials{' '}
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </p>
      </Container>
    </section>
  )
}
