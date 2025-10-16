export default function UseView() {
  return (
    <div className="w-full max-w-5xl mt-16">
      <header className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl leading-tight">
          我使用的软件、我喜欢的工具以及我推荐的其他东西。
        </h1>
        <p className="mt-6 text-base text-zinc-600 leading-7">
          工欲善其事，必先利其器。我认为趁手好用的工具对于开发会很有帮助，以下是我经常使用的一些开发工具以及知识的获取途径的一些工具。
        </p>
      </header>
      <div className="mt-16 sm:mt-20">
        <div className="space-y-20">
          <section className="md:border-l md:border-zinc-300 md:pl-6 md:dark:border-zinc-700/40">
            <div className="grid max-w-3xl grid-cols-1 items-baseline gap-y-8 md:grid-cols-4">
              <h2 className="text-sm font-semibold text-zinc-800">工作站</h2>
              <div className="col-span-3">
                <ul role="list" className="space-y-16">
                  <li className="group relative flex flex-col items-start">
                    <h3 className="text-base font-semibold tracking-tight text-zinc-800">
                      MateBook X Pro，i7-1165G7，16GB RAM（2021年）
                    </h3>
                    <p className="mt-2 text-sm text-zinc-600"></p>
                  </li>
                  <li className="group relative flex flex-col items-start">
                    <h3 className="text-base font-semibold tracking-tight text-zinc-800">
                      Mate60，12GB RAM（2023年）
                    </h3>
                    <p className="mt-2 text-sm text-zinc-600"></p>
                  </li>
                  <li className="group relative flex flex-col items-start">
                    <h3 className="text-base font-semibold tracking-tight text-zinc-800">
                      MatePad Pro 13.2英寸，12GB RAM（2024年）
                    </h3>
                    <p className="mt-2 text-sm text-zinc-600"></p>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section className="md:border-l md:border-zinc-300 md:pl-6 md:dark:border-zinc-700/40">
            <div className="grid max-w-3xl grid-cols-1 items-baseline gap-y-8 md:grid-cols-4">
              <h2 className="text-sm font-semibold text-zinc-800">开发工具</h2>
              <div className="col-span-3">
                <ul role="list" className="space-y-16">
                  <li className="group relative flex flex-col items-start">
                    <h3 className="text-base font-semibold tracking-tight text-zinc-800">
                      DevEco Studio
                    </h3>
                    <p className="mt-2 text-sm text-zinc-600"></p>
                  </li>
                  <li className="group relative flex flex-col items-start">
                    <h3 className="text-base font-semibold tracking-tight text-zinc-800">
                      Visual Studio Code
                    </h3>
                    <p className="mt-2 text-sm text-zinc-600"></p>
                  </li>
                  <li className="group relative flex flex-col items-start">
                    <h3 className="text-base font-semibold tracking-tight text-zinc-800">
                      Git
                    </h3>
                    <p className="mt-2 text-sm text-zinc-600"></p>
                  </li>
                  <li className="group relative flex flex-col items-start">
                    <h3 className="text-base font-semibold tracking-tight text-zinc-800">
                      GitHub
                    </h3>
                    <p className="mt-2 text-sm text-zinc-600"></p>
                  </li>
                  <li className="group relative flex flex-col items-start">
                    <h3 className="text-base font-semibold tracking-tight text-zinc-800">
                      Vercel
                    </h3>
                    <p className="mt-2 text-sm text-zinc-600"></p>
                  </li>
                  <li className="group relative flex flex-col items-start">
                    <h3 className="text-base font-semibold tracking-tight text-zinc-800">
                      Pycharm 2025.2.1.1
                    </h3>
                    <p className="mt-2 text-sm text-zinc-600"></p>
                  </li>

                  <li className="group relative flex flex-col items-start">
                    <h3 className="text-base font-semibold tracking-tight text-zinc-800">
                      Typora
                    </h3>
                    <p className="mt-2 text-sm text-zinc-600"></p>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section className="md:border-l md:border-zinc-300 md:pl-6 md:dark:border-zinc-700/40">
            <div className="grid max-w-3xl grid-cols-1 items-baseline gap-y-8 md:grid-cols-4">
              <h2 className="text-sm font-semibold text-zinc-800">生产力</h2>
              <div className="col-span-3">
                <ul role="list" className="space-y-16">
                  <li className="group relative flex flex-col items-start">
                    <h3 className="text-base font-semibold tracking-tight text-zinc-800">
                      华为开发者联盟
                    </h3>
                    <p className="mt-2 text-sm text-zinc-600"></p>
                  </li>
                  <li className="group relative flex flex-col items-start">
                    <h3 className="text-base font-semibold tracking-tight text-zinc-800">
                      DeepSeek
                    </h3>
                    <p className="mt-2 text-sm text-zinc-600"></p>
                  </li>
                  <li className="group relative flex flex-col items-start">
                    <h3 className="text-base font-semibold tracking-tight text-zinc-800">
                      哔哩哔哩
                    </h3>
                    <p className="mt-2 text-sm text-zinc-600"></p>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
