import { articleList } from "@/app/model/articleModel";
import { contactInfo } from "@/app/model/contactModel";
// 头像框
function Avatar() {
  return (
    <div className="w-full max-w-5xl /*bg-green-200">
      <a href="">
        <img
          className="w-16 aspect-square rounded-full"
          src="././avatar.jpg"
        ></img>
      </a>
    </div>
  );
}

// 标题 + 简介
function Title() {
  return (
    <div className="flex w-full max-w-5xl /*bg-red-300">
      <div className="mt-8">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl leading-tight">
            {/* 鸿蒙开发者、观澜问卷创始人和业余前端开发者。 */}
            欢迎来到Jinny的空间
          </h1>
          <p className="mt-6 font-semibold text-zinc-600">
            {/* 我是Jinny，一位居住在天津的鸿蒙开发者。我是观澜问卷APP的创始人，开发技术，使普通人能够满足对于问卷使用的需求。 */}
            使用 Next.js + React + Tailwind CSS + TypeScript 构建的个人空间
          </p>

          <div className="mt-6 flex gap-6">
            {/* 联系方式 */}
            {contactInfo.map((item) => {
              return (
                <a key={item.id} href={item.href} target="_blank">
                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    className="w-6 h-6 fill-zinc-500 transition hover:fill-teal-500"
                  >
                    <path d={item.path}></path>
                  </svg>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

// 主内容区
function MainView() {
  return (
    <div className="flex w-5xl /*bg-amber-300">
      <div className="mt-24 md:mt-28  /*bg-amber-300">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2 /*bg-green-200">
          {/* 文章列表 */}
          <div className="w-full flex flex-col gap-16 /*bg-red-200">
            {articleList.map((item) => {
              if (item.id < 4) {
                return (
                  // 文章卡片
                  <article
                    key={item.id}
                    className="group relative flex flex-col items-start /*bg-zinc-600"
                  >
                    {/* 文章发布时间 */}
                    <time
                      className="relative z-10 mb-3 flex items-center text-sm text-zinc-400"
                      dateTime="2025-10-05"
                    >
                      <span className="h-4 w-0.5 rounded-full bg-zinc-200 mr-3.5"></span>
                      <span>{item.date}</span>
                    </time>
                    {/* 文章标题 */}
                    <h2 className="text-base font-semibold tracking-tight text-zinc-800">
                      <div
                        className="absolute -inset-x-4 -inset-y-6 z-0 
                scale-95 opacity-0 transition group-hover:scale-100
                 group-hover:opacity-100 group-hover:bg-zinc-100 sm:rounded-2xl"
                      ></div>
                      <a href={`/articles/articleItem/${item.id}`}>
                        <span className="absolute -inset-x-4 -inset-y-6 z-20"></span>
                        <span className="relative z-10">{item.title}</span>
                      </a>
                    </h2>
                    {/* 文章简介 */}
                    <p className="relative z-10 mt-2 text-sm text-zinc-600">
                      {item.content}
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
                  </article>
                );
              }
            })}
          </div>
          {/* 订阅 */}
          <div className="space-y-10 lg:pl-16 xl:pl-24 /*bg-green-500">
            <form className="rounded-2xl border border-zinc-200 p-6">
              <h2 className="flex text-sm font-semibold text-zinc-900 items-center">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                  className="h-6 w-6 flex-none"
                >
                  <path
                    d="M2.75 7.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
                    className="fill-zinc-100 stroke-zinc-400"
                  ></path>
                  <path
                    d="m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6"
                    className="stroke-zinc-400"
                  ></path>
                </svg>
                <span className="ml-3">保持最新状态</span>
              </h2>
              <p className="mt-2 text-sm text-zinc-600">
                当我发布新内容时收到通知，并随时取消订阅。
              </p>
              <div className="mt-6 flex items-center">
                <span className="flex min-w-0 flex-auto p-px">
                  <input
                    // placeholder="Email address"
                    placeholder="邮件地址"
                    required
                    className="w-full appearance-none rounded-[calc(var(--radius-md)-1px)]
                          bg-white px-3 py-[calc(--spacing(2)-1px)] shadow-sm text-shadow-zinc-800/5 outline
                          outline-zinc-900/10 placeholder:text-zinc-400 focus:ring-4 focus:ring-teal-500/10
                          focus:outline-teal-500 sm:text-sm"
                    type="email"
                  ></input>
                </span>
                <button
                  className="inline-flex items-center gap-2 justify-center rounded-md py-2 px-3 text-sm outline-offset-2 
                        transition active:transition-none bg-zinc-800 font-semibold text-zinc-100
                        hover:bg-zinc-700 active:bg-zinc-800 active:text-zinc-100/70 ml-4"
                  type="submit"
                >
                  <a href="/subscribe">加入</a>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

// 主页
function Home() {
  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto flex max-w-7xl px-4 /*pb-16 /*py-16 sm:px-6 lg:px-8">
        <main className="flex w-full flex-col items-start /*space-y-8">
          <Avatar />
          <Title />
          <MainView />
        </main>
      </div>
    </div>
  );
}

export default Home;
