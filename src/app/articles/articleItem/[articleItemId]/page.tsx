"use client";
import { articleList } from "@/app/model/articleModel";
import { useRouter } from "next/navigation";
// 配置 Git 命令
const configGit = [
  { title: "# 进入你的项目文件", code: "cd path/to/your/react-project" },
  { title: "# 初始化 Git", code: "git init" },
  { title: "# 添加所有文件到暂存区", code: "git add ." },
  {
    title: "# 提交更改",
    code: "git commit -m 'Initial commit: My React blog'",
  },
  {
    title: "# 连接到 GitHub 仓库（替换成你的仓库地址）",
    code: "git remote add origin https://github.com/你的用户名/my-react-blog.git",
  },
  { title: "# 推送到 GitHub", code: "git push -u origin main" },
];
export default function ArticleItem({
  params,
}: {
  params: { articleItemId: string };
}) {
  const router = useRouter();
  // 获取文章 id
  const articleId = parseInt(params.articleItemId);
  // 获取文章 - 根据 id 查找标题\日期\内容
  const article = articleList.find((item) => item.id === articleId);
  return (
    <main className="flex w-full justify-center /*bg-amber-100">
      <div className="w-full max-w-2xl mt-16 ">
        {/* 返回文章列表按钮 */}
        <button
          type="button"
          aria-label="返回文章列表"
          className="group mb-8 flex h-10 w-10
        items-center justify-center rounded-full bg-white shadow-md ring-1 shadow-zinc-800/5
        ring-zinc-900/5 transition lg:absolute lg:-left-5 lg:-mt-2 lg:mb-0 /*xl:top-0
        xl:left-28 xl:mt-0 "
        >
          <a className="relative z-10" href="/articles">
            <svg
              viewBox="0 0 16 16"
              fill="none"
              aria-hidden="true"
              className="relative z-10 h-4 w-4 stroke-zinc-500
          transition group-hover:stroke-zinc-700"
            >
              <path
                d="M7.25 11.25 3.75 8m0 0 3.5-3.25M3.75 8h8.5"
                stroke-width="1.5"
                stroke-linejoin="round"
              ></path>
            </svg>
          </a>
        </button>

        {/* 文章内容 */}
        <article>
          {/* 文章标题 */}
          <header className="flex flex-col">
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl leading-tight">
              {article?.title}
            </h1>
            <time
              dateTime="2025-10-03"
              className="order-first flex items-center text-base text-zinc-400"
            >
              <span className="h-4 w-0.5 rounded-full bg-zinc-200"></span>
              <span className="ml-3 text-zinc-400">{article?.date}</span>
            </time>
          </header>

          {/* 文章内容,根据不同 id 显示不同内容 */}
          {articleId === 1 && (
            <>
              <div className="mt-10 space-y-4">
                <h2 className="text-xl font-bold tracking-tight text-zinc-800">
                  第 1 步：把 React 代码推送到 GitHub
                </h2>
                <h3 className="text-20 font-bold tracking-tight text-zinc-700">
                  1.1 准备工作
                </h3>
                {/* 1.1 第一个要求 */}
                <p>
                  <span className="rounded-full font-extrabold text-zinc-700 ml-3 mr-2">
                    ·
                  </span>
                  <span className="text-base font-medium">
                    确保已安装 Git：
                    <a
                      className="text-blue-500 hover:text-blue-800 hover:border-b hover:border-b-blue-800"
                      href="https://git-scm.com/downloads"
                      // 实现新窗口打开
                      target="_blank"
                    >
                      https://git-scm.com/downloads
                    </a>
                  </span>
                </p>
                {/* 1.1 第二个要求 */}
                <p>
                  <span className="rounded-full font-extrabold text-zinc-700 ml-3 mr-2">
                    ·
                  </span>
                  <span className="text-base font-medium">
                    注册 GitHub 账号：
                    <a
                      className="text-blue-500 hover:text-blue-800 hover:border-b hover:border-b-blue-800"
                      href="https://github.com/"
                      // 实现新窗口打开
                      target="_blank"
                    >
                      https://github.com/
                    </a>
                  </span>
                </p>
                <h3 className="text-20 font-bold tracking-tight text-zinc-700 ">
                  1.2 在 GitHub 创建新仓库
                </h3>
                <p className="ml-3">
                  1. 登录 GitHub，点击右上角“+” {"->"} "New repository"
                </p>
                <p className="ml-3">2. 填写仓库信息：</p>
                <p>
                  <span className=" rounded-full font-extrabold text-zinc-700 ml-6 mr-2">
                    ·
                  </span>
                  <span className="font-bold">Repository name：</span>
                  my-react-blog（给你的项目起个名字）
                </p>
                <p>
                  <span className=" rounded-full font-extrabold text-zinc-700 ml-6 mr-2">
                    ·
                  </span>
                  <span className="font-bold">Description：</span>
                  My personal blog built with React（可选）
                </p>
                <p>
                  <span className=" rounded-full font-extrabold text-zinc-700 ml-6 mr-2">
                    ·
                  </span>
                  <span className="font-bold">选择 Public</span>（这样可以使用
                  Vercel 免费服务）
                </p>
                <p>
                  <span className=" rounded-full font-extrabold text-zinc-700 ml-6 mr-2">
                    ·
                  </span>
                  <span className="font-bold">Add a README file </span>
                  （建议勾选）
                </p>
                <p className="ml-3">3. 点击 "Create repository"</p>
                <h3 className="text-16 font-bold tracking-tight text-zinc-700">
                  1.3 配置本地 Git 并推送代码
                </h3>
                <p className="flex items-center /*bg-amber-100 space-x-2">
                  <span className="text-2xl rounded-full font-extrabold text-zinc-700">
                    ·{" "}
                  </span>
                  <span className="text-base font-medium">
                    打开终端/命令行，进入 React 项目目录：
                  </span>
                </p>
                <pre className="language-c bg-zinc-950 rounded-xl px-6 py-6">
                  <code className="flex flex-col text-white space-y-3">
                    {/* code · 1 */}
                    <span className="flex flex-col">
                      <span className="text-gray-400 italic">
                        {configGit[0].title}
                      </span>
                      <span className="text-orange-400">
                        cd{" "}
                        <span className="text-white">
                          path/to/your/react-project
                        </span>
                      </span>
                    </span>
                    {/* code · 2 */}
                    <span className="flex flex-col">
                      <span className="text-gray-400 italic">
                        {configGit[1].title}
                      </span>
                      <span className="text-white">{configGit[1].code}</span>
                    </span>
                    {/* code · 3 */}
                    <span className="flex flex-col">
                      <span className="text-gray-400 italic">
                        {configGit[2].title}
                      </span>
                      <span className="text-white">{configGit[2].code}</span>
                    </span>
                    {/* code · 4 */}
                    <span className="flex flex-col">
                      <span className="text-gray-400 italic">
                        {configGit[3].title}
                      </span>
                      <span className="text-white">
                        git commit -m{" "}
                        <span className="text-green-400">
                          "Initial commit: My React blog"
                        </span>
                      </span>
                    </span>
                    {/* code · 5 */}
                    <span className="flex flex-col">
                      <span className="text-gray-400 italic">
                        {configGit[4].title}
                      </span>
                      <span className="text-white">{configGit[4].code}</span>
                    </span>
                    {/* code · 6 */}
                    <span className="flex flex-col">
                      <span className="text-gray-400 italic">
                        {configGit[5].title}
                      </span>
                      <span className="text-white">{configGit[5].code}</span>
                    </span>
                  </code>
                </pre>
                <h2 className="text-xl font-bold tracking-tight text-zinc-800">
                  第 2 步：用 Vercel 导入并部署
                </h2>

                <h3 className="text-20 font-bold tracking-tight text-zinc-700">
                  2.1 注册和登录 Vercel
                </h3>
                <p className="ml-3">
                  1. 访问{" "}
                  <a
                    className="text-blue-500 hover:text-blue-800 hover:border-b hover:border-b-blue-800"
                    href="https://vercel.com"
                    // 实现新窗口打开
                    target="_blank"
                  >
                    vercel.com
                  </a>
                </p>
                <p className="ml-3">
                  2. 点击 "Sign Up"，选择 "Continue with GitHub"
                </p>
                <p className="ml-3">3. 授权 Vercel 访问你的 GitHub 账号</p>
                <h3 className="text-20 font-bold tracking-tight text-zinc-700">
                  2.2 部署项目
                </h3>
                <p className="ml-3">
                  1. 在 Vercel 控制台点击 "Add New..." {" -> "} "Project"
                </p>
                <p className="ml-3">
                  2. 你会看到你的 GitHub 仓库列表，找到 my-react-blog 点击
                  "Import"
                </p>
                <p className="ml-3">3. 配置项目设置</p>
                <p>
                  <span className=" rounded-full font-extrabold text-zinc-700 ml-6 mr-2">
                    ·
                  </span>
                  <span className="font-bold">Project Name：</span>
                  my-react-blog（自动填充）
                </p>
                <p>
                  <span className=" rounded-full font-extrabold text-zinc-700 ml-6 mr-2">
                    ·
                  </span>
                  <span className="font-bold">Framework Preset：</span>
                  Vercel 通常会自动检测为 Create React App
                </p>
                <p>
                  <span className=" rounded-full font-extrabold text-zinc-700 ml-6 mr-2">
                    ·
                  </span>
                  <span className="font-bold">Build Command：</span>
                  npm run build（默认）
                </p>
                <p>
                  <span className=" rounded-full font-extrabold text-zinc-700 ml-6 mr-2">
                    ·
                  </span>
                  <span className="font-bold">Output Directory：</span>
                  build（默认）
                </p>
                <p>
                  <span className=" rounded-full font-extrabold text-zinc-700 ml-6 mr-2">
                    ·
                  </span>
                  <span className="font-bold">其他设置保持默认</span>
                </p>
                <h3 className="text-20 font-bold tracking-tight text-zinc-700">
                  2.3 等待部署完成
                </h3>
                <p>
                  <span className=" rounded-full font-extrabold text-zinc-700 mr-2">
                    ·
                  </span>
                  Vercel 会自动开始构建过程，你可以在屏幕上看到实时日志
                </p>
                <p>
                  <span className=" rounded-full font-extrabold text-zinc-700 mr-2">
                    ·
                  </span>
                  通常 1-2 分钟就能完成部署
                </p>
                <p>
                  <span className=" rounded-full font-extrabold text-zinc-700 mr-2">
                    ·
                  </span>
                  看到 "
                  <span className=" font-bold">
                    Congratulations! Your project is live.
                  </span>
                  " 表示成功
                </p>
                <h2 className="text-xl font-bold tracking-tight text-zinc-800">
                  第 3 步：获得临时域名测试
                </h2>
                <div className="space-y-4">
                  <p>部署完成后，Vercel 会显示你的项目信息：</p>
                  <p>
                    <span className=" rounded-full font-extrabold text-zinc-700 mr-2">
                      ·
                    </span>
                    <span className=" font-bold">Domains: </span>
                    my-react-blog.vercel.app （这就是你的临时域名）
                  </p>
                  <p>
                    <span className=" rounded-full font-extrabold text-zinc-700 mr-2">
                      ·
                    </span>
                    <span className=" font-bold">Status: </span>
                    Production Deployment Ready
                  </p>
                </div>

                <h2 className="text-xl font-bold tracking-tight text-zinc-800">
                  第 4 步：购买自己喜欢的域名
                </h2>
                <p className="font-bold">推荐域名注册商：</p>
                <p>
                  <span className=" rounded-full font-extrabold text-zinc-700 mr-2">
                    ·
                  </span>
                  <span className=" font-bold">Namecheap </span>
                  （国际，价格透明）
                </p>
                <p>
                  <span className=" rounded-full font-extrabold text-zinc-700 mr-2">
                    ·
                  </span>
                  <span className=" font-bold">GoDaddy</span>
                  （国际，最大注册商）
                </p>
                <p>
                  <span className=" rounded-full font-extrabold text-zinc-700 mr-2">
                    ·
                  </span>
                  <span className=" font-bold">阿里云/腾讯云 </span>
                  （国内，中文界面）
                </p>
                <p className="font-bold">购买步骤（以腾讯云为例）： </p>
                <p className="ml-3">
                  1. 访问{" "}
                  <a
                    className="text-blue-500 hover:text-blue-800 hover:border-b hover:border-b-blue-800"
                    href="https://cloud.tencent.com/product/domain?Is=sdk-topnav"
                    // 实现新窗口打开
                    target="_blank"
                  >
                    https://cloud.tencent.com/product/domain?Is=sdk-topnav
                  </a>
                </p>
                <p className="ml-3">
                  2. 在搜索框输入你想要的域名，如 my-awesome-blog.com
                </p>
                <p className="ml-3">
                  3. 查看可用选项，选择你喜欢的域名加入购物车
                </p>
                <p className="ml-3">4. 完成注册和支付流程</p>
                <p className="ml-3">5. 在控制台找到你购买的域名</p>
                <span></span>

                <h2 className="text-xl font-bold tracking-tight text-zinc-800">
                  第 5 步：在 Vercel 中绑定自定义域名
                </h2>
                <h3 className="text-20 font-bold tracking-tight text-zinc-700">
                  5.1 在 Vercel 添加域名
                </h3>
                <p className="ml-3">
                  1. 回到 Vercel 控制台，点击你的项目 my-react-blog
                </p>
                <p className="ml-3">2. 点击顶部的 "Domains"</p>
                <p className="ml-3">
                  3. 在输入框中输入你购买的域名，如 www.my-awsome-blog.com
                </p>
                <p className="ml-3">4. 点击 "Add"，在"DNS Records找到记录"</p>
                <h3 className="text-20 font-bold tracking-tight text-zinc-700">
                  5.2 配置 DNS 记录
                </h3>
                <p className="ml-3">
                  1. 在控制台找到我的域名，选择在你需要的域名右侧菜单栏点击解析
                </p>
                <p className="ml-3">2. 添加 Vercel中的 DNS Records记录</p>
                <p className="ml-3">3. 保存更改</p>
                <p></p>
                <h3 className="text-20 font-bold tracking-tight text-zinc-700">
                  5.3 等待 DNS 生效
                </h3>
                <p className="ml-3">
                  <span className="rounded-full font-extrabold text-zinc-700 mr-2">
                    ·
                  </span>
                  <span>记录添加后很快就能生效</span>
                </p>
                <p className="ml-3">
                  <span className="rounded-full font-extrabold text-zinc-700 mr-2">
                    ·
                  </span>
                  <span>Vercel 会自动检测并显示状态</span>
                </p>
                <p className="ml-3">
                  <span className="rounded-full font-extrabold text-zinc-700 mr-2">
                    ·
                  </span>
                  <span>当状态变为 "Vaild" 时，表示配置成功</span>
                </p>
                <h3 className="text-20 font-bold tracking-tight text-zinc-700">
                  5.4 测试自定义域名
                </h3>
                <p>在浏览器访问你的新域名：</p>
                <p className="ml-3">
                  <span className="rounded-full font-extrabold text-zinc-700 mr-2">
                    ·
                  </span>
                  <span>www.my-awsome-blog.com 应该显示你的 React 网站</span>
                </p>
                <p className="ml-3">
                  <span className="rounded-full font-extrabold text-zinc-700 mr-2">
                    ·
                  </span>
                  <span>
                    Vercel 会自动提供{" "}
                    <span className="font-bold">免费的 SSL 证书</span>，域名会是{" "}
                    <span className="text-gray-400">https://</span> 开头
                  </span>
                </p>
              </div>
              {/* <div className="mt-10 w-full bg-zinc-100 shadow-lg rounded-xl px-6 py-4 text-sm font-medium hover:shadow-zinc-400">
            <a href="" className="w-16 h-full bg-amber-100 py-4">
              搭建时遇到问题？不妨查看这篇文章
            </a>
          </div> */}
              <div className="mt-32 flex w-full justify-center">
                <span className="text-4xl font-bold">
                  恭喜你！完成个人网站的搭建
                </span>
              </div>
            </>
          )}

          {articleId === 2 && <></>}

          {articleId === 3 && <></>}
        </article>
      </div>
    </main>
  );
}
