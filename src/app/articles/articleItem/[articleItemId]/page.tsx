"use client";
import { articleList } from "@/app/model/articleModel";
import { useRouter } from "next/navigation";
import { use } from "react";
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
  params: Promise<{ articleItemId: string }>;
}) {
  const router = useRouter();
  // 获取文章 id，使用 use 函数等待 Promise 解析
  const articleId = parseInt(use(params).articleItemId);
  // 获取文章 - 根据 id 查找标题\日期\内容
  const article = articleList.find((item) => item.id === articleId);
  return (
    <main className="flex w-full justify-center /*bg-amber-100">
      <div className="w-full max-w-2xl mt-16 /*bg-red-300">
        {/* 返回文章列表按钮 */}
        <button
          type="button"
          aria-label="返回文章列表"
          className="group mb-8 flex h-10 w-10
        items-center justify-center rounded-full bg-white shadow-md ring-1 shadow-zinc-800/5
        ring-zinc-900/5 transition lg:absolute lg:-left-5 lg:-mt-2 lg:mb-0 xl:top-46
        xl:left-56 xl:mt-0 "
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
                strokeWidth="1.5"
                strokeLinejoin="round"
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
                {/* 第 1 步：把 React 代码推送到 GitHub */}
                <h2 className="text-xl font-bold tracking-tight text-zinc-800">
                  第 1 步：把 React 代码推送到 GitHub
                </h2>
                {/* 1.1 准备工作*/}
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
                  1. 登录 GitHub, 点击右上角"+" {"->"} "New repository"
                </p>
                <p className="ml-3">2. 填写仓库信息：</p>
                <p>
                  <span className=" rounded-full font-extrabold text-zinc-700 ml-6 mr-2">
                    ·
                  </span>
                  <span className="font-bold">Repository name: </span>
                  my-react-blog (给你的项目起个名字)
                </p>
                <p>
                  <span className=" rounded-full font-extrabold text-zinc-700 ml-6 mr-2">
                    ·
                  </span>
                  <span className="font-bold">Description: </span>
                  My personal blog built with React (可选)
                </p>
                <p>
                  <span className=" rounded-full font-extrabold text-zinc-700 ml-6 mr-2">
                    ·
                  </span>
                  <span className="font-bold">选择 Public</span>(这样可以使用
                  Vercel 免费服务)
                </p>
                <p>
                  <span className=" rounded-full font-extrabold text-zinc-700 ml-6 mr-2">
                    ·
                  </span>
                  <span className="font-bold">Add a README file </span>
                  (建议勾选)
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
                    打开终端/命令行，进入 React 项目目录:
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
                  <span className="font-bold">Project Name: </span>
                  my-react-blog (自动填充)
                </p>
                <p>
                  <span className=" rounded-full font-extrabold text-zinc-700 ml-6 mr-2">
                    ·
                  </span>
                  <span className="font-bold">Framework Preset: </span>
                  Vercel 通常会自动检测为 Create React App
                </p>
                <p>
                  <span className=" rounded-full font-extrabold text-zinc-700 ml-6 mr-2">
                    ·
                  </span>
                  <span className="font-bold">Build Command: </span>
                  npm run build (默认)
                </p>
                <p>
                  <span className=" rounded-full font-extrabold text-zinc-700 ml-6 mr-2">
                    ·
                  </span>
                  <span className="font-bold">Output Directory: </span>
                  build (默认)
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
                  <p>部署完成后, Vercel 会显示你的项目信息: </p>
                  <p>
                    <span className=" rounded-full font-extrabold text-zinc-700 mr-2">
                      ·
                    </span>
                    <span className=" font-bold">Domains: </span>
                    my-react-blog.vercel.app (这就是你的临时域名)
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
                  (国际，价格透明)
                </p>
                <p>
                  <span className=" rounded-full font-extrabold text-zinc-700 mr-2">
                    ·
                  </span>
                  <span className=" font-bold">GoDaddy</span>
                  (国际，最大注册商)
                </p>
                <p>
                  <span className=" rounded-full font-extrabold text-zinc-700 mr-2">
                    ·
                  </span>
                  <span className=" font-bold">阿里云/腾讯云 </span>
                  (国内，中文界面)
                </p>
                <p className="font-bold">购买步骤 (以腾讯云为例): </p>
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
                <p className="text-4xl font-bold">
                  🎉 恭喜你！完成个人网站的搭建
                </p>
              </div>
            </>
          )}

          {articleId === 2 && (
            <>
              <div className="mt-10 space-y-4">
                <h2 className="text-xl font-bold tracking-tight text-zinc-800">
                  第 1 步：环境准备
                </h2>
                <h3 className="text-20 font-bold tracking-tight text-zinc-700">
                  1.1 安装 Git
                </h3>
                <p>
                  <span className="text-base font-medium">Windows 系统：</span>
                </p>
                <p className="ml-3">
                  <span className="rounded-full font-extrabold text-zinc-700 mr-2">
                    ·
                  </span>
                  <span>
                    访问{" "}
                    <a
                      className="text-blue-500 hover:text-blue-800 hover:border-b hover:border-b-blue-800"
                      href="https://git-scm.com/downloads/win"
                      // 实现新窗口打开
                      target="_blank"
                    >
                      Git 官网
                    </a>
                    ，下载安装包
                  </span>
                </p>
                <p className="ml-3">
                  <span className="rounded-full font-extrabold text-zinc-700 mr-2">
                    ·
                  </span>
                  <span>安装时保持默认选项即可</span>
                </p>
                <p className="ml-3">
                  <span className="rounded-full font-extrabold text-zinc-700 mr-2">
                    ·
                  </span>
                  <span>安装完成后，在开始菜单中找到 "Git Bash"</span>
                </p>
                <h3 className="text-20 font-bold tracking-tight text-zinc-700">
                  1.2 注册 Github 账号
                </h3>
                <p className="ml-3">
                  <span className="rounded-full font-extrabold text-zinc-700 mr-2">
                    ·
                  </span>
                  <span>
                    访问{" "}
                    <a
                      className="text-blue-500 hover:text-blue-800 hover:border-b hover:border-b-blue-800"
                      href="https://git-scm.com/downloads/win"
                      // 实现新窗口打开
                      target="_blank"
                    >
                      GitHub 官网
                    </a>
                  </span>
                </p>
                <p className="ml-3">
                  <span className="rounded-full font-extrabold text-zinc-700 mr-2">
                    ·
                  </span>
                  <span>点击 "Sign up" 注册账号</span>
                </p>
                <p className="ml-3">
                  <span className="rounded-full font-extrabold text-zinc-700 mr-2">
                    ·
                  </span>
                  <span>验证邮箱完成注册</span>
                </p>
                <h2 className="text-xl font-bold tracking-tight text-zinc-800">
                  第 2 步：本地 Git 配置
                </h2>
                <h3 className="text-20 font-bold tracking-tight text-zinc-700">
                  2.1 配置用户信息
                </h3>
                <p className="flex items-center /*bg-amber-100 space-x-2">
                  <span className="text-2xl rounded-full font-extrabold text-zinc-700">
                    ·{" "}
                  </span>
                  <span className="text-base font-medium">
                    打开终端（Git Bash）/命令行，执行以下命令:
                  </span>
                </p>
                <pre className="language-c bg-zinc-950 rounded-xl px-6 py-6">
                  <code className="flex flex-col text-white space-y-3">
                    {/* code · 1 */}
                    <span className="flex flex-col">
                      <span className="text-gray-400 italic"># 设置用户名</span>
                      <span className="text-blue-400">
                        git <span className="text-white">config </span>
                        --global <span className="text-white">user.name </span>
                        <span className="text-green-400">"你的用户名"</span>
                      </span>
                    </span>
                    {/* code · 2 */}
                    <span className="flex flex-col">
                      <span className="text-gray-400 italic"># 设置邮箱</span>
                      <span className="text-blue-400">
                        git <span className="text-white">config </span>
                        --global <span className="text-white">user.email </span>
                        <span className="text-green-400">
                          "你的邮箱@example.com"
                        </span>
                      </span>
                    </span>
                    {/* code · 3 */}
                    <span className="flex flex-col">
                      <span className="text-gray-400 italic"># 检查配置</span>
                      <span className="text-blue-400">
                        git <span className="text-white">config </span>
                        --list
                      </span>
                    </span>
                  </code>
                </pre>
                <h2 className="text-xl font-bold tracking-tight text-zinc-800">
                  第 3 步：创建 Gitub 仓库
                </h2>
                <h3 className="text-20 font-bold tracking-tight text-zinc-700">
                  3.1 在 Github 上创建新仓库
                </h3>
                <p className="ml-3">
                  <span className="rounded-full font-extrabold text-zinc-700 mr-2">
                    ·
                  </span>
                  <span>登录 Github ，点击右上角 "+" </span>
                </p>
                <p className="ml-3">
                  <span className="rounded-full font-extrabold text-zinc-700 mr-2">
                    ·
                  </span>
                  <span>选择 "New repository" 创建新仓库</span>
                </p>
                <p className="ml-3">
                  <span className="rounded-full font-extrabold text-zinc-700 mr-2">
                    ·
                  </span>
                  <span>填写仓库名称和描述，例如 "my-nextjs-project"</span>
                </p>
                <p className="ml-3">
                  <span className="rounded-full font-extrabold text-zinc-700 mr-2">
                    ·
                  </span>
                  <span>选择 "Public" 或 "Private" 仓库</span>
                </p>
                <p className="ml-3">
                  <span className="rounded-full font-extrabold text-zinc-700 mr-2">
                    ·
                  </span>
                  <span>
                    <span className="font-bold">不要 </span>勾选 "Add a README
                    file" 选项 （后续推送到远程仓库时，因本地没有 README
                    文件，会导致推送失败）
                  </span>
                </p>
                <h2 className="text-xl font-bold tracking-tight text-zinc-800">
                  第 4 步：初始化本地项目
                </h2>
                <h3 className="text-20 font-bold tracking-tight text-zinc-700">
                  4.1 进入项目目录
                </h3>
                <pre className="language-c bg-zinc-950 rounded-xl px-6 py-6">
                  <code className="flex flex-col text-white space-y-3">
                    {/* code · 1 */}
                    <span className="flex flex-col">
                      <span className="text-gray-400 italic">
                        # 切换到你的项目文件夹
                      </span>
                      <span className="text-blue-400">
                        cd{" "}
                        <span className="text-white">
                          /path/to/your/project
                        </span>
                      </span>
                    </span>
                  </code>
                </pre>
                <h3 className="text-20 font-bold tracking-tight text-zinc-700">
                  4.2 初始化 Git 仓库
                </h3>
                <pre className="language-c bg-zinc-950 rounded-xl px-6 py-6">
                  <code className="flex flex-col text-white space-y-3">
                    {/* code · 1 */}
                    <span className="flex flex-col">
                      <span className="text-gray-400 italic"># 初始化 Git</span>
                      <span className="text-blue-400">
                        git <span className="text-white">init</span>
                      </span>
                    </span>
                    {/* code · 2 */}
                    <span className="flex flex-col">
                      <span className="text-gray-400 italic">
                        # 查看当前状态
                      </span>
                      <span className="text-blue-400">
                        git <span className="text-white">status</span>
                      </span>
                    </span>
                  </code>
                </pre>
                <h2 className="text-xl font-bold tracking-tight text-zinc-800">
                  第 5 步：添加和提交代码
                </h2>
                <h3 className="text-20 font-bold tracking-tight text-zinc-700">
                  5.1 添加所有文件到暂存区
                </h3>
                <pre className="language-c bg-zinc-950 rounded-xl px-6 py-6">
                  <code className="flex flex-col text-white space-y-3">
                    {/* code · 1 */}
                    <span className="flex flex-col">
                      <span className="text-gray-400 italic">
                        # 添加所有文件
                      </span>
                      <span className="text-blue-400">git add .</span>
                    </span>
                    {/* code · 2 */}
                    <span className="flex flex-col">
                      <span className="text-gray-400 italic">
                        # 或添加特定文件
                      </span>
                      <span className="text-blue-400">
                        git add{" "}
                        <span className="text-white">filename1 filename2</span>
                      </span>
                    </span>
                    {/* code · 3 */}
                    <span className="flex flex-col">
                      <span className="text-gray-400 italic"># 检查状态</span>
                      <span className="text-blue-400">
                        git <span className="text-white">status</span>
                      </span>
                    </span>
                  </code>
                </pre>
                <h3 className="text-20 font-bold tracking-tight text-zinc-700">
                  5.2 提交代码到本地仓库
                </h3>
                <pre className="language-c bg-zinc-950 rounded-xl px-6 py-6">
                  <code className="flex flex-col text-white space-y-3">
                    {/* code · 1 */}
                    <span className="flex flex-col">
                      <span className="text-gray-400 italic">
                        # 提交到本地仓库
                      </span>
                      <span className="text-blue-400">
                        git <span className="text-white">commit </span>
                        -m{" "}
                        <span className="text-white">
                          "初始提交：项目基础框架"
                        </span>
                      </span>
                    </span>
                    {/* code · 2 */}
                    <span className="flex flex-col">
                      <span className="text-gray-400 italic">
                        # 查看提交历史
                      </span>
                      <span className="text-blue-400">
                        git <span className="text-white">log</span>
                      </span>
                    </span>
                  </code>
                </pre>
                <h2 className="text-xl font-bold tracking-tight text-zinc-800">
                  第 6 步：连接远程仓库并推送
                </h2>
                <h3 className="text-20 font-bold tracking-tight text-zinc-700">
                  6.1 添加远程仓库地址
                </h3>
                <pre className="language-c bg-zinc-950 rounded-xl px-6 py-6">
                  <code className="flex flex-col text-white space-y-3">
                    {/* code · 1 */}
                    <span className="flex flex-col">
                      <span className="text-gray-400 italic">
                        # 添加远程仓库（将 URL 替换为你的仓库地址）
                      </span>
                      <span className="text-blue-400">
                        git <span className="text-white">remote </span>
                        add{" "}
                        <span className="text-white">
                          origin https://github.com/你的用户名/仓库名.git
                        </span>
                      </span>
                    </span>
                    {/* code · 2 */}
                    <span className="flex flex-col">
                      <span className="text-gray-400 italic">
                        # 验证远程仓库
                      </span>
                      <span className="text-blue-400">
                        git <span className="text-white">remote </span>-v
                      </span>
                    </span>
                  </code>
                </pre>
                <h3 className="text-20 font-bold tracking-tight text-zinc-700">
                  6.2 首次推送代码
                </h3>
                <pre className="language-c bg-zinc-950 rounded-xl px-6 py-6">
                  <code className="flex flex-col text-white space-y-3">
                    {/* code · 1 */}
                    <span className="flex flex-col">
                      <span className="text-gray-400 italic">
                        # 推送代码到 GitHub
                      </span>
                      <span className="text-blue-400">
                        git <span className="text-white">push </span>
                        -u <span className="text-white">origin main</span>
                      </span>
                    </span>
                    {/* code · 2 */}
                    <span className="flex flex-col">
                      <span className="text-gray-400 italic">
                        # 如果默认分支是 master，使用
                      </span>
                      <span className="text-blue-400">
                        git <span className="text-white">push </span>
                        -u <span className="text-white">origin master</span>
                      </span>
                    </span>
                  </code>
                </pre>
              </div>
              <div className="mt-32 flex w-full justify-center">
                <p className="text-4xl font-bold">
                  🎉 恭喜你！完成代码上传至 GitHub 仓库
                </p>
              </div>
            </>
          )}

          {articleId === 3 && (
            <>
              <div className="mt-10 space-y-8">
                {/* 问题1：分支问题 */}
                <div className="space-y-4">
                  <h2 className="text-xl font-bold tracking-tight text-zinc-800">
                    ⚠️ 问题1：分支问题
                  </h2>
                  <p className="text-base font-medium">
                    <span className="text-base font-bold">概述：</span>
                    git push 失败，提示 master 与 main 不匹配
                  </p>
                  <p className="text-base font-semibold">错误信息：</p>
                  <pre className="language-c bg-zinc-800 rounded-xl px-6 py-6">
                    <code className="flex flex-col text-white space-y-3">
                      {/* code · 1 */}
                      <span className="flex flex-col">
                        <span className="text-red-400 italic">
                          error: filed to push some refs to '你的远程仓库地址'
                        </span>
                      </span>
                    </code>
                  </pre>
                  <p className="text-base font-semibold">解决方案：</p>
                  <p className="">
                    GitHub 现在默认使用 main 作为主分支名，但你的本地可能还是
                    master。
                  </p>
                  <pre className="language-c bg-zinc-950 rounded-xl px-6 py-6">
                    <code className="flex flex-col text-white space-y-3">
                      {/* code · 1 */}
                      <span className="flex flex-col">
                        <span className="text-gray-400 italic">
                          # 重命名本地分支
                        </span>
                        <span className="text-blue-400">
                          git <span className="text-white">branch </span>
                          -M <span className="text-white">main </span>
                        </span>
                      </span>
                      {/* code · 2 */}
                      <span className="flex flex-col">
                        <span className="text-gray-400 italic">
                          # 然后再次推送
                        </span>
                        <span className="text-blue-400">
                          git <span className="text-white">push </span>
                          -u <span className="text-white">origin main </span>
                        </span>
                      </span>
                    </code>
                  </pre>
                  <p className="">或者，如果 GitHub 仓库是 master：</p>
                  <pre className="language-c bg-zinc-950 rounded-xl px-6 py-6">
                    <code className="flex flex-col text-white space-y-3">
                      {/* code · 1 */}
                      <span className="flex flex-col">
                        <span className="text-blue-400">
                          git <span className="text-white">push </span>
                          -u <span className="text-white">origin master </span>
                        </span>
                      </span>
                    </code>
                  </pre>
                </div>
                {/* 问题2：行尾符问题 */}
                <div className="space-y-4">
                  <h2 className="text-xl font-bold tracking-tight text-zinc-800">
                    ⚠️ 问题2：行尾符问题
                  </h2>
                  <p className="text-base font-medium">
                    <span className="text-base font-bold ">概述：</span>
                    这个警告是因为不同操作系统使用不同的行结束符，Git
                    检测到你的文件中使用的是 LF，但在 Windows 上默认会转换为
                    CRLF。
                  </p>
                  <p className="text-base font-semibold">警告信息：</p>
                  <pre className="language-c bg-zinc-800 rounded-xl px-6 py-6">
                    <code className="flex flex-col text-white space-y-3">
                      {/* code · 1 */}
                      <span className="flex flex-col">
                        <span className="text-gray-400 italic">
                          warning：LF will be rrplaced by CRLF
                        </span>
                      </span>
                    </code>
                  </pre>
                  <p className="text-base font-bold ">这会影响我的代码吗？</p>
                  <p className="text-base font-medium">
                    <span className="text-base font-bold">通常不会！</span>
                    这只是一个格式转换警告，不会影响代码功能。但如果你在跨平台协作（比如你和同事用不同操作系统），可能会在代码对比时看到不必要的差异。
                  </p>
                  <p className="text-base font-semibold">解决方案：</p>
                  <p className="ml-3">
                    <span className="rounded-full font-extrabold text-zinc-700 mr-2">
                      ·
                    </span>
                    如果你只是在 Windows
                    上开发，可以保持默认设置，忽略这个警告。
                  </p>
                  <p className="ml-3">
                    <span className="rounded-full font-extrabold text-zinc-700 mr-2">
                      ·
                    </span>
                    如果你需要在 Windows、Mac、Linux 之间协作，或者使用 Docker
                    等环境：
                  </p>
                  <pre className="language-c bg-zinc-800 rounded-xl px-6 py-6">
                    <code className="flex flex-col text-white space-y-3">
                      {/* code · 1 */}
                      <span className="flex flex-col">
                        <span className="text-gray-400 italic">
                          # 禁用自动转换
                        </span>
                        <span className="text-blue-400 italic">
                          git
                          <span className="text-white">
                            {" "}
                            config core.autocrlf{" "}
                          </span>
                          <span className="text-orange-400 italic">false</span>
                        </span>
                      </span>
                      {/* code · 2 */}
                      <span className="flex flex-col">
                        <span className="text-gray-400 italic">
                          # 然后重新添加文件
                        </span>
                        <span className="text-blue-400 italic">
                          git
                          <span className="text-white"> reset</span>
                        </span>
                        <span className="text-blue-400 italic">git add .</span>
                      </span>
                    </code>
                  </pre>
                  <p className="ml-3">
                    <span className="rounded-full font-extrabold text-zinc-700 mr-2">
                      ·
                    </span>
                    告诉 Git 不要警告行尾符问题
                  </p>
                  <pre className="language-c bg-zinc-800 rounded-xl px-6 py-6">
                    <code className="flex flex-col text-white space-y-3">
                      {/* code · 1 */}
                      <span className="flex flex-col">
                        <span className="text-gray-400 italic">
                          # 禁用警告但不改变行为
                        </span>
                        <span className="text-blue-400 italic">
                          git
                          <span className="text-white">
                            {" "}
                            config core.safecrlf{" "}
                          </span>
                          <span className="text-orange-400 italic">false</span>
                        </span>
                      </span>
                    </code>
                  </pre>
                </div>

                {/*问题3：配置用户信息问题*/}
                <div className="space-y-4">
                  <h2 className="text-xl font-bold tracking-tight text-zinc-800">
                    ⚠️ 问题3：配置用户信息问题
                  </h2>
                  <p className="text-base font-medium">
                    <span className="text-base font-bold ">概述：</span>
                    Git
                    要求每次提交都必须记录作者信息（姓名和邮箱），这是版本控制的基本要求。错误信息的意思是："作者身份未知"。
                    这个问题是因为 Git
                    需要知道是谁提交的代码，但你还没有配置用户信息。
                  </p>
                  <p className="text-base font-semibold">警告信息：</p>
                  <pre className="language-c bg-zinc-800 rounded-xl px-6 py-6">
                    <code className="flex flex-col text-white space-y-3">
                      {/* code · 1 */}
                      <span className="flex flex-col">
                        <span className="text-gray-400 italic">
                          Author identity unknown
                        </span>
                      </span>
                    </code>
                  </pre>
                  <p className="text-base font-semibold">解决方案：</p>
                  <p className="">配置全局的 Git 用户信息</p>
                  <pre className="language-c bg-zinc-950 rounded-xl px-6 py-6">
                    <code className="flex flex-col text-white space-y-3">
                      {/* code · 1 */}
                      <span className="flex flex-col">
                        <span className="text-gray-400 italic">
                          # 配置用户名（使用你的 GitHub 用户名）
                        </span>
                        <span className="text-blue-400">
                          git <span className="text-white">config </span>
                          --global{" "}
                          <span className="text-white">user.name </span>
                          <span className="text-green-400">
                            "GitHub用户名"{" "}
                          </span>
                        </span>
                      </span>
                      {/* code · 2 */}
                      <span className="flex flex-col">
                        <span className="text-gray-400 italic">
                          # 配置邮箱（使用你的 GitHub 注册邮箱）
                        </span>
                        <span className="text-blue-400">
                          git <span className="text-white">config </span>
                          --global{" "}
                          <span className="text-white">user.email </span>
                          <span className="text-green-400">
                            "GitHub注册邮箱"{" "}
                          </span>
                        </span>
                      </span>
                      {/* code · 3 */}
                      <span className="flex flex-col">
                        <span className="text-gray-400 italic"># 验证配置</span>
                        <span className="text-blue-400">
                          git <span className="text-white">config </span>
                          --global --list
                        </span>
                      </span>
                    </code>
                  </pre>
                  <p className="">或者，配置当前项目的 Git 用户信息</p>
                  <pre className="language-c bg-zinc-950 rounded-xl px-6 py-6">
                    <code className="flex flex-col text-white space-y-3">
                      {/* code · 1 */}
                      <span className="flex flex-col">
                        <span className="text-gray-400 italic">
                          # 进入项目目录
                        </span>
                        <span className="text-green-400">
                          cd{" "}
                          <span className="text-white">
                            path/to/your/project{" "}
                          </span>
                        </span>
                      </span>
                      {/* code · 2 */}
                      <span className="flex flex-col">
                        <span className="text-gray-400 italic">
                          # 配置项目用户信息（去掉 --global）
                        </span>
                        <span className="text-blue-400">
                          git{" "}
                          <span className="text-white">config user.name </span>
                          <span className="text-green-400">"GitHub用户名"</span>
                        </span>
                        <span className="text-blue-400">
                          git{" "}
                          <span className="text-white">config user.email </span>
                          <span className="text-green-400">
                            "GitHub注册邮箱"
                          </span>
                        </span>
                      </span>
                      {/* code · 3 */}
                      <span className="flex flex-col">
                        <span className="text-gray-400 italic"># 验证配置</span>
                        <span className="text-blue-400">
                          git <span className="text-white">config </span>--list
                        </span>
                      </span>
                    </code>
                  </pre>
                </div>

                {/*问题4：远程仓库未更改*/}
                {/* <div className="space-y-4">
                  <h2 className="text-xl font-bold tracking-tight text-zinc-800">
                    ⚠️ 问题4：远程仓库未更改
                  </h2>
                </div> */}
              </div>
              <div className="mt-32 flex w-full justify-center">
                <p className="text-4xl font-bold">
                  🎉 希望能帮你解决在 Git 中的问题
                </p>
              </div>
            </>
          )}

          {articleId === 4 && <></>}
        </article>
      </div>
    </main>
  );
}
