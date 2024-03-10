import Head from "next/head";

import {
  Card,
  CardCta,
  CardDescription,
  CardTimeSlot,
  CardTitle,
} from "@/components/Card";
import { SimpleLayout } from "@/components/SimpleLayout";
import { formatDate } from "@/utils/formatDate";
import { getAllArticles } from "@/utils/getAllArticles";

interface BlogProps {
  blog: any;
}

 function BlogCard({ blog }: BlogProps) {
  return (
    <article className="md:grid md:grid-cols-4 md:items-baseline">
      <Card className="md:col-span-3">
        <CardTitle href={`/articles/${blog.slug}`}>{blog.title}</CardTitle>
        <CardTimeSlot className="md:hidden" decorate>
          {formatDate(blog.date)}
        </CardTimeSlot>
        <CardDescription>{blog.description}</CardDescription>
        <CardCta>Read blog</CardCta>
      </Card>
      <CardTimeSlot className="mt-1 hidden md:block">
        {formatDate(blog.date)}
      </CardTimeSlot>
    </article>
  );
}

export default function Blogs() {
  return (
    <>
      <Head>
        <title>Blogs - Deepak Prajapati</title>
        <meta
          name="description"
          content="All of my long-form thoughts on programming, leadership, product design, and more, collected in chronological order."
        />
      </Head>
      <SimpleLayout
        title="Writing on software design, company building, and the aerospace industry."
        intro="All of my long-form thoughts on programming, leadership, product design, and more, collected in chronological order."
      >
        <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
          <div className="flex max-w-3xl flex-col space-y-16">
            {/* {articles.map((article) => (
              <BlogCard key={article.slug} blog={article} />
            ))} */}
          </div>
        </div>
      </SimpleLayout>
    </>
  );
}

// export async function getStaticProps() {
//   return {
//     props: {
//       articles: (await getAllArticles()).map(({ component, ...meta }) => meta),
//     },
//   };
// }
