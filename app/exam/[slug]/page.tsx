import { allExams } from "@/lib/data";
import { notFound } from "next/navigation";
import ExamViewer from "@/components/viewers/ExamViewer";

export async function generateStaticParams() {
  return Object.keys(allExams).map((slug) => ({
    slug: slug,
  }));
}

export default async function ExamPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const examData = allExams[slug];

  if (!examData) {
    return notFound();
  }

  return <ExamViewer data={examData} />;
}
