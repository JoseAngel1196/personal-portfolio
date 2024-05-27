import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import { GitHubIcon, LinkedInIcon } from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.png'

function SocialLink({
  className,
  href,
  children,
  icon: Icon,
}: {
  className?: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  children: React.ReactNode
}) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export const metadata: Metadata = {
  title: 'About',
  description:
    'I’m Spencer Sharp. I live in New York City, where I design the future.',
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            I'm Jose Hidalgo. I live in New York City and I help companies build
            scalable and resilient systems.
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              Like any other software engineer's story, I’m not someone who
              found their love for coding during high school or built my first
              app when I was a kid. My journey to software began when I was
              working as a technical support engineer back in 2017 (fun fact: my
              first job in Engineering). I was still in my sixth semester at{' '}
              <a href="https://unapec.edu.do/" target="_blank">
                univeristy
              </a>{' '}
              and six months from graduation.
            </p>
            <p>
              During my first experience in the IT world, I met a senior
              engineer who was working in the same company but in the
              development team. He introduced me to the world of software, and I
              instantly fell in love. In the following days, I invested my free
              time in building side projects. These were very beginner projects
              like CRUD apps, how to connect to a DB, etc. They were probably
              not the best projects, but helped me a lot to get a general idea
              of how to build software. I spent almost a month building projects
              until I found a job posting from this{' '}
              <a
                href="https://www.linkedin.com/company/contraloriard/"
                target="_blank"
              >
                public institution
              </a>{' '}
              looking for a software engineer. TL;DR: I applied and got the job,
              yay! 😃 And that’s how I landed my first software engineering job.
            </p>
            <p>
              Two and a half years passed, and it got to a point where I wanted
              to find more challenging projects. I had always dreamed of working
              at a company in the USA. While trying to enter the US market, I
              found a part-time role at an agency in Miami. They had
              partnerships with multiple small companies across the country and
              were helping them build internal apps for their clients. I had the
              opportunity to talk with customers, discuss their problems, and
              then go back to the team to design solutions.
            </p>
            <p>
              In March 2020, I met Pinwheel, and it changed my life. I joined as
              one of the first engineers and learned what it takes to build a
              company from the ground up. I helped build most of the services that powers the company today. 
              Before Pinwheel, I had some experience in the software world, but Pinwheel really
              matured me. During my time at Pinwheel, I’ve met awesome engineers
              who have taught me how to build scalable systems and how to grow
              in my career as a software engineer.
            </p>
            <p>
              I hope that by reading this, you got an idea of a little bit about
              me. If you want to hear more about me or want to work with me,
              don’t hesitate to reach out.
            </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink
              href="https://github.com/JoseAngel1196"
              icon={GitHubIcon}
              className="mt-4"
            >
              Follow on GitHub
            </SocialLink>
            <SocialLink
              href="https://www.linkedin.com/in/jose-hidalgo-rosa"
              icon={LinkedInIcon}
              className="mt-4"
            >
              Follow on LinkedIn
            </SocialLink>
            <SocialLink
              href="mailto:joseangel1196@hotmail.com"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              joseangel1196@hotmail.com
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}
