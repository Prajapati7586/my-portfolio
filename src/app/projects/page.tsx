import Image from "next/image";

import { Card, CardDescription, CardLink } from "@/components/Card";
import e2elogo from "@/images/logos/e2elogo.jpeg";
import mnitmeteorlogo from "@/images/logos/mnitmeteor.svg";
import SimpleLayout from "@/components/SimpleLayout";
import { LinkIcon } from "@/components/icons";

const projects = [
  {
    name: "mnitmeteor",
    description:
      "A multi-featured website where NIT Jaipur students can buy/sell things, discuss their projects, and find their lost items by sharing item detail in the lost&Found section.",
    link: { href: "https://mnitmeteor.com", label: "mnitmeteor" },
    logo: mnitmeteorlogo,
  },
];

export default function Projects() {
  return (
    <>
      <SimpleLayout
        title="Things I’ve made while learning and   as a software engineer."
        intro="I've worked on numerous small and large projects over the years, but these are the ones that have stuck with me."
      >
        <ul
          role="list"
          className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <Card as="li" key={project.name}>
              <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                <Image
                  src={project.logo}
                  alt=""
                  className="h-8 w-8"
                  unoptimized
                />
              </div>
              <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                <CardLink href={project.link.href}>{project.name}</CardLink>
              </h2>
              <CardDescription>{project.description}</CardDescription>
              <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
                <LinkIcon className="h-6 w-6 flex-none" />
                <span className="ml-2">{project.link.label}</span>
              </p>
            </Card>
          ))}
        </ul>
      </SimpleLayout>
    </>
  );
}
