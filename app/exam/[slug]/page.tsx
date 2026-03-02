import { allExams, allHadithBooks } from "@/lib/data";
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

  const parts = slug.match(/^(.+?)-(h\d+)$/);
  let hadithSections;
  let bookSlug;
  let currentHadithId;
  const examSlugs: Record<string, string> = {};

  if (parts) {
    bookSlug = parts[1];
    currentHadithId = parts[2];
    const bookData = allHadithBooks[bookSlug];

    if (bookData) {
      hadithSections = bookData.content;

      for (const section of bookData.content) {
        const eSlug = `${bookSlug}-${section.id}`;
        if (allExams[eSlug]) {
          examSlugs[section.id] = eSlug;
        }
      }
    }
  }

  return (
    <ExamViewer
      data={examData}
      hadithSections={hadithSections}
      bookSlug={bookSlug}
      currentHadithId={currentHadithId}
      examSlugs={examSlugs}
    />
  );
}
