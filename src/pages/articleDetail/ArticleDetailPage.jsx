import React, { useState } from "react";
import MainLayout from "../../components/MainLayout";
import BreadCrumbs from "../../components/BreadCrumbs";
import Bold from "@tiptap/extension-bold";
import Document from "@tiptap/extension-document";
import Paragraph from "@tiptap/extension-paragraph";
import Text from "@tiptap/extension-text";
import Italic from "@tiptap/extension-italic";
import { images, stables } from "../../constants";
import { Link, useParams } from "react-router-dom";
import SuggestedPosts from "./container/SuggestedPosts";
import CommentsContainer from "../../components/comments/CommentsContainer";
import SocialShareButtons from "../../components/SocialShareButtons";
import { useQuery } from "@tanstack/react-query";
import { getSinglePost } from "../../services/index/posts";
import { generateHTML } from "@tiptap/react";
import parse from "html-react-parser";
import ArticleDetailSkeleton from "./components/ArticleDetailSkeleton";
import ErrorMessage from "../../components/ErrorMessage";
import { useSelector } from "react-redux";

const postsData = [
  {
    _id: "1",
    image: images.Post1,
    title: "Lorem ipsum dolor sit amet.",
    createdAt: "2023-01-28T15:35:53.607+0000",
  },
  {
    _id: "2",
    image: images.Post1,
    title: "Lorem ipsum dolor sit amet.",
    createdAt: "2023-01-28T15:35:53.607+0000",
  },
  {
    _id: "3",
    image: images.Post1,
    title: "Lorem ipsum dolor sit amet.",
    createdAt: "2023-01-28T15:35:53.607+0000",
  },
  {
    _id: "4",
    image: images.Post1,
    title: "Lorem ipsum dolor sit amet.",
    createdAt: "2023-01-28T15:35:53.607+0000",
  },
];

const tagsData = ["Enduro", "Singletrack", "Cross-country", "Downhill"];

const ArticleDetailPage = () => {
  const { slug } = useParams();
  const userState = useSelector((state) => state.user);
  const [breadCrumbsData, setbreadCrumbsData] = useState([]);
  const [body, setBody] = useState(null);

  const { data, isLoading, isError } = useQuery({
    queryFn: () => getSinglePost({ slug }),
    queryKey: ["trail", slug],
    onSuccess: (data) => {
      setbreadCrumbsData([
        { name: "Acasa", link: "/" },
        { name: "Trail", link: "/trail" },
        { name: "Titlu traseu", link: `/trail/${data.slug}` },
      ]);
      setBody(
        parse(
          generateHTML(data?.body, [Bold, Italic, Text, Paragraph, Document])
        )
      );
    },
  });

  return (
    <MainLayout>
      {isLoading ? (
        <ArticleDetailSkeleton />
      ) : isError ? (
        <ErrorMessage message="Couldn't fetch the post detail." />
      ) : (
        <section className="container mx-auto max-w-5xl flex flex-col px-5 py-5 lg:flex-row lg:gap-x-5 lg:items-start">
          <article className="flex-1">
            <BreadCrumbs data={breadCrumbsData} />
            <img
              className="rounded-xl w-full"
              src={
                data?.photo
                  ? stables.UPLOAD_FOLDER_BASE_URL + data?.photo
                  : images.Post1
              }
              alt={data?.title}
            />
            <div className="mt-4 flex gap-2">
              {" "}
              {data?.categories.map((category) => (
                <Link
                  to={`/trail?category=${category.name}`}
                  className="text-primary text-sm font-roboto inline-block md:text-base"
                >
                  {category.name}
                </Link>
              ))}
            </div>
            <h1 className="text-xl font-medium font-roboto mt-4 text-dark-hard md:text-[1.625rem]">
              {data?.title}
            </h1>
            <div className="mt-4 prose prose-sm sm:prose-base">{body}</div>
            <CommentsContainer
              comments={data?.comments}
              className="mt-10"
              logginedUserId={userState?.userInfo?._id}
            />
          </article>
          <div>
            <SuggestedPosts
              header="Ultimele trasee"
              posts={postsData}
              tags={tagsData}
              className="mt-8 lg:mt-0 lg:max-w-xs"
            />
            <div className="mt-7">
              <h2 className="font-roboto font-medium text-dark-hark mb-4 md:text-xl">
                Distribuie pe:
              </h2>
              <SocialShareButtons
                url={encodeURI(
                  `https://www.linkedin.com/in/gabriel-stanciu-b66482268/`
                )}
                title={encodeURIComponent("Stanciu Gabriel LinkedIn")}
              />
            </div>
          </div>
        </section>
      )}
    </MainLayout>
  );
};

export default ArticleDetailPage;
