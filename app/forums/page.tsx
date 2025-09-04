import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Forums = () => {
  const topics = [
    {
      text: "Python",
      img: "/python.png",
      desc: "Lets discuss about Python",
      slug: "python-discuss",
    },
    {
      text: "JavaScript",
      img: "/js.png",
      desc: "Discuss everything about JavaScript",
      slug: "js-discuss",
    },
    {
      text: "React",
      img: "/react.png",
      desc: "Talk about the React library and its ecosystem",
      slug: "react-discuss",
    },
    {
      text: "CSS",
      img: "/css.png",
      desc: "Style your websites with CSS and frameworks",
      slug: "css-discuss",
    },
    {
      text: "HTML",
      img: "/html.png",
      desc: "The building blocks of the web",
      slug: "html-discuss",
    },
  ];
  return (
    <>
      <div className="container mx-auto my-28 ">
        <h1 className="text-5xl font-semibold text-center flex gap-2 justify-center mb-10">
          Discussion Forums
        </h1>
        <div className="flex flex-wrap justify-center">
          {topics.map((topics) => {
            return (
              <div
                key={topics.img}
                className="shadow-lg bg-slate-200 w-1/4 m-4 flex justyfy-center flex-col items-center py-10 rounded-xl gap-4"
              >
                <Image
                  src={topics.img}
                  width={34}
                  height={34}
                  alt={topics.text}
                  className=""
                />
                <h2 className="text-2xl">{topics.text}</h2>
                <p>{topics.desc}</p>
                <Link href={`/forum/${topics.slug}`}>
                  <Button>Disuss now </Button>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Forums;
