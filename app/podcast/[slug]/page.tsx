// app/podcast/[slug]/page.tsx

import { allPodcasts } from "@/lib/data";
import { notFound } from "next/navigation";
import PodcastViewer from "@/components/viewers/PodcastViewer";

// إنشاء المسارات الثابتة وقت البناء (SSG)
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
  // 1. انتظار البارامترات (Next.js 15)
  const { slug } = await params;

  // 2. البحث عن البيانات في سجل البودكاست
  const podcastData = allPodcasts[slug];

  // 3. إذا لم يوجد، اعرض 404
  if (!podcastData) {
    return notFound();
  }

  // 4. عرض المكون
  return <PodcastViewer data={podcastData} />;
}
