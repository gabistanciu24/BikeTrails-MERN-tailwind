import React from "react";
import MainLayout from "../../components/MainLayout";
import BreadCrumbs from "../../components/BreadCrumbs";

const breadCrumbsData = [
  { name: "Acasa", link: "/" },
  { name: "Trail", link: "/trail" },
  { name: "Trail title", link: "/trail/1" },
];

const ArticleDetailPage = () => {
  return (
    <MainLayout>
      <section className="container mx-auto max-w-5xl flex flex-col px-5 py-5">
        <article className="flex-1">
          <BreadCrumbs data={breadCrumbsData} />
        </article>
      </section>
    </MainLayout>
  );
};

export default ArticleDetailPage;
