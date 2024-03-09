import React from "react";
import MainLayout from "../../components/MainLayout";
import BreadCrumbs from "../../components/BreadCrumbs";
import { images } from "../../constants";
import { Link } from "react-router-dom";
import SuggestedPosts from "./container/SuggestedPosts";

const breadCrumbsData = [
  { name: "Acasa", link: "/" },
  { name: "Trail", link: "/trail" },
  { name: "Trail title", link: "/trail/1" },
];

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
  return (
    <MainLayout>
      <section className="container mx-auto max-w-5xl flex flex-col px-5 py-5 lg:flex-row lg:gap-x-5 lg:items-start">
        <article className="flex-1">
          <BreadCrumbs data={breadCrumbsData} />
          <img
            className="rounded-xl w-full"
            src={images.Post1}
            alt="postImage"
          />
          <Link
            to="/trail?category=selectedCategory"
            className="text-primary text-sm font-roboto inline-block mt-4 md:text-base"
          >
            ENDURO
          </Link>
          <h1 className="text-xl font-medium font-roboto mt-4 text-dark-hard md:text-[1.625rem]">
            Lorem ipsum dolor sit amet.
          </h1>
          <div className="mt-4 text-dark-soft">
            <p className="leading-7">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat
              at rerum totam saepe omnis magni fuga nemo quos recusandae sequi
              quasi, accusamus iusto autem dignissimos minus, nisi itaque fugit
              obcaecati explicabo consequatur ipsum officia error. Quod
              adipisci, ipsum doloremque fugit non nobis quis enim commodi
              alias, minima accusantium repellendus nesciunt quia dignissimos
              rerum iure nam natus debitis ratione recusandae aliquam?
            </p>
          </div>
        </article>
        <SuggestedPosts
          header="Ultimele trasee"
          posts={postsData}
          tags={tagsData}
          className="mt-8 lg:mt-0 lg:max-w-xs"
        />
      </section>
    </MainLayout>
  );
};

export default ArticleDetailPage;
