import { articleList } from "@/app/model/articleModel";
export default function ArticlesView() {
  return (
    <div className="w-full max-w-5xl mt-16 /*bg-red-400">
      <header className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl leading-tight">
          {/* 利用 Vercel 打造个人网站 */}
          撰写有关鸿蒙开发、前端开发的文章。
          {/* 撰写有关软件设计、公司建设和航空航天业的文章。 */}
        </h1>
        <p className="mt-6 text-base text-zinc-600">
          所有文章按照时间顺序展示。
        </p>
      </header>
      <div className="mt-16 sm:mt-20">
        <div className="md:border-l md:border-zinc-300 md:pl-6 md:dark:border-zinc-700/40 ">
          <div className="flex max-w-3xl flex-col space-y-16">
            {/* 文章列表 */}
            {articleList.map((item) => {
              return (
                <article
                  key={item.id}
                  className="md:grid md:grid-cols-4 md:items-baseline"
                >
                  <div className="md:col-span-3 group relative flex flex-col items-start">
                    {/* 文章标题 */}
                    <h2 className="text-base font-semibold tracking-tight text-zinc-800">
                      <div
                        className="absolute -inset-x-4 -inset-y-6 z-0
                  scale-95 bg-zinc-100 opacity-0 transition group-hover:scale-100
                  group-hover:opacity-100 sm:-inset-x-6 sm:rounded-2xl"
                      ></div>
                      <a href={`/articles/articleItem/${item.id}`}>
                        <span
                          className="absolute -inset-x-4 -inset-y-6 
                    z-20 "
                        ></span>
                        <span className="relative z-10">
                          {/* 利用 Vercel 打造个人网站 */}
                          {item.title}
                        </span>
                      </a>
                    </h2>
                    {/* 文章简介 */}
                    <p className="relative z-10 mt-2 text-sm text-zinc-600">
                      {item.content}
                      {/* 大多数公司都试图在视觉设计方面保持领先地位，但对于
                  Planetaria，我们需要创建一个品牌，在 100
                  年后人类已经遍布整个太阳系时，它仍然能激励我们。 */}
                    </p>
                    {/* 阅读文章 */}
                    <div className="relative z-10 mt-4 flex items-center text-sm font-medium text-teal-500">
                      <span>阅读文章</span>
                      <svg
                        viewBox="0 0 16 16"
                        fill="none"
                        aria-hidden="true"
                        className="ml-1 h-4 w-4 stroke-current"
                      >
                        <path
                          d="M6.75 4.75 9.25 8l-2.5 2.25"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </div>
                  </div>

                  <time
                    className="mt-1 max-md:hidden relative z-10 order-first mb-3 flex items-center text-sm text-zinc-400"
                    dateTime="2025-10-05"
                  >
                    {/* 10月 5，2025 */}
                    {item.date}
                  </time>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
