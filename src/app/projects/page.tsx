import Image from "next/image";

import { Card, CardDescription, CardLink } from "@/components/Card";
import e2elogo from "@/images/logos/e2elogo.jpeg";
import SimpleLayout from "@/components/SimpleLayout";
import { LinkIcon } from "@/components/icons";

const projects = [
  {
    name: "Planetaria",
    description:
      "Creating technology to empower civilians to explore space on their own terms.",
    link: { href: "http://planetaria.tech", label: "planetaria.tech" },
    logo: e2elogo,
  },
  {
    name: "Animaginary",
    description:
      "High performance web animation library, hand-written in optimized WASM.",
    link: { href: "#", label: "github.com" },
    logo: e2elogo,
  },
  {
    name: "HelioStream",
    description:
      "Real-time video streaming library, optimized for interstellar transmission.",
    link: { href: "#", label: "github.com" },
    logo: e2elogo,
  },
  {
    name: "cosmOS",
    description:
      "The operating system that powers our Planetaria space shuttles.",
    link: { href: "#", label: "github.com" },
    logo: e2elogo,
  },
  {
    name: "OpenShuttle",
    description:
      "The schematics for the first rocket I designed that successfully made it to orbit.",
    link: { href: "#", label: "github.com" },
    logo: e2elogo,
  },
];

export default function Projects() {
  return (
    <>
      <SimpleLayout
        title="Things I’ve made trying to put my dent in the universe."
        intro="I’ve worked on tons of little projects over the years but these are the ones that I’m most proud of. Many of them are open-source, so if you see something that piques your interest, check out the code and contribute if you have ideas for how it can be improved."
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
