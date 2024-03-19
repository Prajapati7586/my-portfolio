import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";

import {
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
  TwitterIcon,
} from "@/components/icons";
import {
  GITHUB_ACCOUNT_LINK,
  LINKEDIN_ACCOUNT_LINK,
  TWITTER_ACCOUNT_LINK,
} from "@/constants/app.const";
import { Container } from "@/components/Container";

import portraitImage from "@/images/portrait.jpg";

interface SocialLinkProps {
  className?: string;
  href: string;
  children: React.ReactNode;
  icon: (props: React.SVGProps<SVGSVGElement>) => React.ReactElement;
}

function SocialLink({
  className,
  href,
  children,
  icon: Icon,
}: SocialLinkProps) {
  return (
    <li className={clsx(className, "flex")}>
      <Link
        href={href}
        target="_blank"
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  );
}

export default function AboutPage(): React.ReactElement {
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
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            I’m Deepak Prajapati, a software engineer and tech enthusiast.
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              Hello! I&apos;m Deepak Prajapati, a software engineer with a
              strong interest in AI, ML, and blockchain technology.I completed
              my B.Tech from NIT Jaipur, and since then, I&apos;ve been on an
              exciting path of exploration and learning.
            </p>
            <p>
              In my professional journey, I&apos;ve had the opportunity to work
              with Kubeflow pipelines, which has sharpened my skills and fueled
              my passion for building and deploying machine learning workflows
              with efficiency and precision. Currently, I&apos;m also working on
              RAG pipelines, further enhancing my expertise in this domain.
            </p>
            <p>
              I find great joy in solving complex problems and discovering
              innovative ways in which technology can make a difference. I
              firmly believe that AI, ML, and blockchain are not just buzzwords
              but transformative forces that have the potential to revolutionize
              industries and improve lives..
            </p>
            <p>
              Beyond my tech endeavors, I have a keen interest in finance and
              world affairs. I believe that staying informed about global issues
              and understanding their implications is crucial in our
              interconnected world.
            </p>
            <p>
              I&apos;m keen to collaborate with startups and tech enthusiasts. Let&apos;s
              connect and make a difference through technology!
            </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink href={TWITTER_ACCOUNT_LINK} icon={TwitterIcon}>
              Follow on Twitter
            </SocialLink>
            <SocialLink
              href={GITHUB_ACCOUNT_LINK}
              icon={GitHubIcon}
              className="mt-4"
            >
              Follow on GitHub
            </SocialLink>
            <SocialLink
              href={LINKEDIN_ACCOUNT_LINK}
              icon={LinkedInIcon}
              className="mt-4"
            >
              Follow on LinkedIn
            </SocialLink>
            <SocialLink
              href="mailto:deepak.prajapati7586@gmail.com"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              deepak.prajapati7586@gmail.com
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  );
}
