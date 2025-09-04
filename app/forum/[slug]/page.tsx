import ChatForum from "@/components/ChatForum";

export default async function page({ params }: { params: { slug: string } }) {
  const slug = (await params).slug;
  return <ChatForum />;
}
