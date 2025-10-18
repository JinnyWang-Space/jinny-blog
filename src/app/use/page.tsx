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
              <h2 className="text-sm font-semibold text-zinc-800">🖥️ 工作站</h2>
              <div className="col-span-3">
                <ul role="list" className="space-y-16">
                  <li className="group relative flex flex-col items-start">
                    <h3 className="text-base font-semibold tracking-tight text-zinc-800">
                      MateBook X Pro，i7-1165G7，16GB RAM（2021年）
                    </h3>
                    <p className="relative z-10 mt-2 text-sm text-zinc-600 leading-8">
                      MateBook X Pro
                      的设计就像一个精美的艺术品，重量很轻，尺寸适中，屏幕显示好，这也是吸引我的原因之一。它的性能说实话确实不是顶级的，但我理解为什么，同时它能够满足我的开发需求，
                      我已经使用快 5 年了。
                    </p>
                  </li>
                  <li className="group relative flex flex-col items-start">
                    <h3 className="text-base font-semibold tracking-tight text-zinc-800">
                      Mate60，12GB RAM（2023年）
                    </h3>
                    <p className="relative z-10 mt-2 text-sm text-zinc-600 leading-8">
                      Mate 60 作为我的主力机，同时也是我的开发机，通过 USB-C
                      连接到我的 MateBook X Pro 上，将我在 DevEco Studio
                      中的项目运行到 Mate 60 上，我已经使用快 2 年了。
                    </p>
                  </li>
                  <li className="group relative flex flex-col items-start">
                    <h3 className="text-base font-semibold tracking-tight text-zinc-800">
                      MatePad Pro 13.2英寸，12GB RAM（2024年）
                    </h3>
                    <p className="relative z-10 mt-2 text-sm text-zinc-600 leading-8">
                      MatePad Pro
                      13.2英寸的屏幕显示与我之前使用的电子类产品不太一样，他的显示更像是在纸上。我通常在平板上做笔记，同时也是我的开发机，
                      通过通过 USB-C 连接到我的 MateBook X Pro 上，将我在 DevEco
                      Studio 中的项目运行到 MatePad Pro 13.2英寸上。
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section className="md:border-l md:border-zinc-300 md:pl-6 md:dark:border-zinc-700/40">
            <div className="grid max-w-3xl grid-cols-1 items-baseline gap-y-8 md:grid-cols-4">
              <h2 className="text-sm font-semibold text-zinc-800">
                ⚙️ 开发工具
              </h2>
              <div className="col-span-3">
                <ul role="list" className="space-y-16">
                  <li className="group relative flex flex-col items-start">
                    <h3 className="text-base font-semibold tracking-tight text-zinc-800">
                      DevEco Studio
                    </h3>
                    <p className="relative z-10 mt-2 text-sm text-zinc-600 leading-8">
                      DevEco Studio
                      是华为旗下用于开发鸿蒙应用及元服务的集成开发环境（IDE），我用它进行我的项目开发。
                    </p>
                  </li>
                  <li className="group relative flex flex-col items-start">
                    <h3 className="text-base font-semibold tracking-tight text-zinc-800">
                      Trae
                    </h3>
                    <p className="relative z-10 mt-2 text-sm text-zinc-600 leading-8">
                      Trae 是字节旗下的 AI
                      编辑工具，我现在用它进行我的网站编写，使用的是 Next.js
                      框架 + React + Tailwind CSS + Typescript 进行构建。
                    </p>
                  </li>
                  <li className="group relative flex flex-col items-start">
                    <h3 className="text-base font-semibold tracking-tight text-zinc-800">
                      Pycharm 2025.2.1.1
                    </h3>
                    <p className="relative z-10 mt-2 text-sm text-zinc-600 leading-8">
                      Pycharm 2025.2.1.1 是我常用的 Python
                      开发工具，我用它进行我的业余开发，不过现在并没有太长用了。
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section className="md:border-l md:border-zinc-300 md:pl-6 md:dark:border-zinc-700/40">
            <div className="grid max-w-3xl grid-cols-1 items-baseline gap-y-8 md:grid-cols-4">
              <h2 className="text-sm font-semibold text-zinc-800">🚀 生产力</h2>
              <div className="col-span-3">
                <ul role="list" className="space-y-16">
                  <li className="group relative flex flex-col items-start">
                    <h3 className="text-base font-semibold tracking-tight text-zinc-800">
                      Git
                    </h3>
                    <p className="relative z-10 mt-2 text-sm text-zinc-600 leading-8">
                      Git
                      是我常用的版本控制工具，我用它进行我的项目开发，同时也用它进行我的网站编写。
                    </p>
                  </li>
                  <li className="group relative flex flex-col items-start">
                    <h3 className="text-base font-semibold tracking-tight text-zinc-800">
                      GitHub
                    </h3>
                    <p className="relative z-10 mt-2 text-sm text-zinc-600 leading-8">
                      GitHub
                      是我常用的代码托管平台，我用它进行我的项目开发，目前只建了一个仓库，用于存放我的网站代码。
                    </p>
                  </li>
                  <li className="group relative flex flex-col items-start">
                    <h3 className="text-base font-semibold tracking-tight text-zinc-800">
                      Vercel
                    </h3>
                    <p className="relative z-10 mt-2 text-sm text-zinc-600 leading-8">
                      Vercel
                      是我常用的网站托管平台，我用它进行我的网站部署，目前只部署了一个网站，用于存放我的网站代码。
                    </p>
                  </li>
                  <li className="group relative flex flex-col items-start">
                    <h3 className="text-base font-semibold tracking-tight text-zinc-800">
                      Typora
                    </h3>
                    <p className="relative z-10 mt-2 text-sm text-zinc-600 leading-8">
                      Typora 是我常用的 Markdown
                      编辑器，将我的一些开发经验记录在 Typora
                      中，方便我后续查看，不过现在更多的把经验写在我的网站上，这也是我创建这个网站的初衷。
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section className="md:border-l md:border-zinc-300 md:pl-6 md:dark:border-zinc-700/40">
            <div className="grid max-w-3xl grid-cols-1 items-baseline gap-y-8 md:grid-cols-4">
              <h2 className="text-sm font-semibold text-zinc-800">
                📚 知识获取
              </h2>
              <div className="col-span-3">
                <ul role="list" className="space-y-16">
                  <li className="group relative flex flex-col items-start">
                    <h3 className="text-base font-semibold tracking-tight text-zinc-800">
                      华为开发者联盟
                    </h3>
                    <p className="relative z-10 mt-2 text-sm text-zinc-600 leading-8">
                      华为开发者联盟
                      是我常用的知识获取平台，我用它进行我的知识获取，同时也用它进行我的项目开发。
                    </p>
                  </li>
                  <li className="group relative flex flex-col items-start">
                    <h3 className="text-base font-semibold tracking-tight text-zinc-800">
                      DeepSeek
                    </h3>
                    <p className="relative z-10 mt-2 text-sm text-zinc-600 leading-8">
                      DeepSeek 是我常用的 AI
                      助手，我用它进行我的知识获取，同时也用它进行我的项目开发。
                    </p>
                  </li>
                  <li className="group relative flex flex-col items-start">
                    <h3 className="text-base font-semibold tracking-tight text-zinc-800">
                      哔哩哔哩
                    </h3>
                    <p className="relative z-10 mt-2 text-sm text-zinc-600 leading-8">
                      哔哩哔哩
                      是我常用的视频平台，我用它进行我的知识获取以及娱乐，学习数二、英二、408等，同时也用它进行我的项目开发。
                    </p>
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
