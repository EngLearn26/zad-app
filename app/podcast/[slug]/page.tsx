import { allPodcasts } from "@/lib/data";
import { notFound } from "next/navigation";
import CourseViewer from "@/components/viewers/CourseViewer";

export async function generateStaticParams() {
  return Object.keys(allPodcasts).map((slug) => ({
    slug: slug,
  }));
}

export default async function PodcastPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const podcastData = allPodcasts[slug];

  if (!podcastData) {
    return notFound();
  }

  return (
    <CourseViewer
      info={podcastData.info}
      content={podcastData.content}
      variant="podcast"
    />
  );
}
