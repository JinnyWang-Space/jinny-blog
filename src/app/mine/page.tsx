import { contactInfo } from "@/app/model/contactModel";
export default function MineView() {
  return (
    <div className="w-full max-w-5xl mt-16">
      <div className="mx-auto max-w-2xl lg:max-w-5xl">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-12">
          {/* 头像 */}
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <img
                alt=""
                loading="lazy"
                width="2000"
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
                // sizes="(min-width:1024px) 32rem, 20rem"
                src="././avatar.jpg"
              ></img>
            </div>
          </div>
          {/* 个人介绍 */}
          <div className="lg:order-first lg:row-span-2">
            {/* 个人介绍标题 */}
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 leading-14 sm:text-5xl">
              我是 JinnyWang。我希望能提升自我价值的同时为他人创造价值。
            </h1>
            {/* 个人介绍内容 */}
            <div className="mt-6 space-y-7 text-base text-zinc-600 ">
              <p className="text-indent-12">
                {"2023 年 11 月开始接触鸿蒙开发，"}
              </p>
            </div>
          </div>
          {/* 联系方式 */}
          <div className="lg:pl-20">
            <ul role="list">
              {/* 联系方式 */}
              {contactInfo.map((item) => {
                return (
                  item.id < 6 && (
                    <li
                      key={item.id}
                      className={`${item.id > 0 ? "mt-4" : ""} flex`}
                    >
                      <a
                        className="group flex items-center text-sm font-medium text-zinc-800 transition hover:text-teal-500"
                        href={item.href}
                        target="_blank"
                      >
                        <svg
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                          className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500"
                        >
                          <path d={item.path}></path>
                        </svg>
                        <span className="ml-4">
                          {item.letText}{" "}
                          <span className="font-semibold">{item.label}</span>{" "}
                          {item.rightText}
                        </span>
                      </a>
                    </li>
                  )
                );
              })}
              {/* 邮箱 */}
              <li className="mt-8 border-t border-t-zinc-200 pt-8 flex">
                <a
                  className="group flex items-center text-sm font-medium text-zinc-800 transition hover:text-teal-500"
                  href="#"
                >
                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
                    ></path>
                  </svg>
                  <span className="ml-4">jinnywang@petalmail.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
