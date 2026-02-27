

import { allHadithBooks } from "@/lib/data";
import { notFound } from "next/navigation";
import HadithViewer from "@/components/viewers/HadithViewer";


export async function generateStaticParams() {
  return Object.keys(allHadithBooks).map((slug) => ({
    slug: slug,
  }));
}


export default async function HadithPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  
  const { slug } = await params;

  
  const courseData = allHadithBooks[slug];

  
  if (!courseData) {
    return notFound();
  }

  
  
  let sharhTitle = "الشرح والتعليق";
  if (slug === "arbaeen") {
    sharhTitle = "شرح الشيخ ابن عثيمين";
  }

  
  return (
    <HadithViewer
      data={courseData}
      storageKey={`hadith_progress_${slug}`} 
      sharhLabel={sharhTitle}
    />
  );
}
