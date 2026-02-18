import { allCourses } from "@/lib/data";
import CourseViewer from "@/components/viewers/CourseViewer"; // تأكدنا من المسار من صورتك
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return Object.keys(allCourses).map((slug) => ({
    slug: slug,
  }));
}

// 1. جعل الدالة async
// 2. تغيير نوع البيانات ليكون Promise
export default async function CoursePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  // 3. يجب استخدام await قبل قراءة البيانات
  const { slug } = await params;

  const courseData = allCourses[slug];

  if (!courseData) {
    return notFound();
  }

  return <CourseViewer info={courseData.info} content={courseData.content} />;
}
