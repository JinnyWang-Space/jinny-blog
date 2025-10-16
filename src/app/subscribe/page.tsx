export default function subscribe() {
  return (
    <div className="w-full h-full max-w-5xl mt-16">
      <header className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl leading-tight">
          感谢您的订阅。
        </h1>
        <p className="mt-6 text-base text-zinc-600 leading-7">
          每当我发布新的博客文章、发布新项目或有任何我认为您想听到的有趣内容要分享时，我都会向您发送电子邮件。您可以随时取消订阅。
        </p>
      </header>
      <div className="w-full h-65"></div>
    </div>
  );
}
