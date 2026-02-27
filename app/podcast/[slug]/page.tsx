

import { allPodcasts } from "@/lib/data";
import { notFound } from "next/navigation";
import PodcastViewer from "@/components/viewers/PodcastViewer";


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

  
  return <PodcastViewer data={podcastData} />;
}
