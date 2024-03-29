import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";

import { Button } from "@/components/Button";
import {
  Card,
  CardCta,
  CardDescription,
  CardTimeSlot,
  CardTitle,
} from "@/components/Card";

import logoPlanetaria from "@/images/logos/e2elogo.jpeg";
import {
  BriefcaseIcon,
  GitHubIcon,
  LinkedInIcon,
  TwitterIcon,
} from "@/components/icons";
import { Container } from "@/components/Container";
import { formatDate } from "@/utils/formatDate";
import {
  GITHUB_ACCOUNT_LINK,
  LINKEDIN_ACCOUNT_LINK,
  TWITTER_ACCOUNT_LINK,
} from "@/constants/app.const";

function Article({ article }) {
  return (
    <Card as="article">
      <CardTitle href={`/articles/${article.slug}`}>{article.title}</CardTitle>
      <CardTimeSlot as="time" decorate>
        {formatDate(article.date)}
      </CardTimeSlot>
      <CardDescription>{article.description}</CardDescription>
      <CardCta>Read article</CardCta>
    </Card>
  );
}

function SocialLink({ href, icon: Icon, ...props }) {
  return (
    <Link href={href} className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  );
}

let resume = [
  {
    company: "E2E Networks",
    title: "Software Engineer",
    logo: logoPlanetaria,
    start: "Jan 2023",
    end: "Present",
  },
];

function Resume(): React.ReactElement {
  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <BriefcaseIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Work</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {resume.map((role, roleIndex) => (
          <li key={roleIndex} className="flex gap-4">
            <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <Image src={role.logo} alt="" className="h-7 w-7" unoptimized />
            </div>
            <dl className="flex flex-auto flex-wrap gap-x-2">
              <dt className="sr-only">Company</dt>
              <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                {role.company}
              </dd>
              <dt className="sr-only">Role</dt>
              <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                {role.title}
              </dd>
              <dt className="sr-only">Date</dt>
              <dd
                className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
                aria-label={`${role.start} until ${role.end}`}
              >
                <time dateTime={role.start}>{role.start}</time>{" "}
                <span aria-hidden="true">—</span>{" "}
                <time dateTime={role.end}>{role.end}</time>
              </dd>
            </dl>
          </li>
        ))}
      </ol>
    </div>
  );
}

const rotations = [
  "rotate-2",
  "-rotate-2",
  "rotate-2",
  "rotate-2",
  "-rotate-2",
];

function Photos(): React.ReactElement {
  return (
    <div className="mt-16 sm:mt-20">
      <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        {[image1, image2, image3, image4, image5].map((image, imageIndex) => (
          <div
            key={image.src}
            className={clsx(
              "relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl",
              rotations[imageIndex % rotations.length]
            )}
          >
            <Image
              src={image}
              alt=""
              sizes="(min-width: 640px) 18rem, 11rem"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Home(): React.ReactElement {
  return (
    <>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            Software engineer, blockchain developer.
          </h1>
          <p className="mt-6 text-base text-zinc-600 text-justify dark:text-zinc-400">
            I&apos;m Deepak, a software engineer with a passion for blockchain
            development, crafting innovative solutions that blend cutting-edge
            technology with user-centric design. My work aims to push the
            boundaries of what&apos;s possible in both software and blockchain
            realms.
          </p>
          <div className="mt-6 flex gap-6">
            <SocialLink
              href={TWITTER_ACCOUNT_LINK}
              aria-label="Follow on Twitter"
              icon={TwitterIcon}
            />
            <SocialLink
              href={GITHUB_ACCOUNT_LINK}
              aria-label="Follow on GitHub"
              icon={GitHubIcon}
            />
            <SocialLink
              href={LINKEDIN_ACCOUNT_LINK}
              aria-label="Follow on LinkedIn"
              icon={LinkedInIcon}
            />
          </div>
        </div>
      </Container>
      {/* <Photos /> */}
      <Container className="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-16">
            {/* {articles.map((article) => (
              <Article key={article.slug} article={article} />
            ))} */}
          </div>
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            <Resume />
          </div>
        </div>
      </Container>
    </>
  );
}
