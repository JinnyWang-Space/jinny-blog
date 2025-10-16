export default function VersionView() {
  return (
    <div className="w-full max-w-5xl mt-16">
      <header className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl leading-tight">
          关于网站的更新日志。
        </h1>
        <p className="mt-6 text-base text-zinc-600 leading-7">
          网站的更新时间，更新内容，问题修复都会在这里。
        </p>
      </header>
      <div className="mt-16 sm:mt-20">
        <div className="space-y-20">
          <section className="md:border-l md:border-zinc-300 md:pl-6 md:dark:border-zinc-700/40">
            <div className="grid max-w-3xl grid-cols-1 items-baseline gap-y-8 md:grid-cols-4">
              <h2 className="text-sm font-sm text-zinc-400">
                v - 1.0.0，10月 8，2025
              </h2>
              <div className="col-span-3">
                <ul role="list" className="space-y-16">
                  <li className="group relative flex flex-col items-start">
                    <h3 className="text-base font-semibold tracking-tight text-zinc-800">
                      完成网站的基本搭建
                    </h3>
                    <p className="mt-2 text-sm text-zinc-600"></p>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
      <div className="w-full h-40"></div>
    </div>
  );
}
