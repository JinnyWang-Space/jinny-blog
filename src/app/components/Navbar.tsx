"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "我", path: "/mine" },
  { label: "文章", path: "/articles" },
  { label: "工具", path: "/use" },
  { label: "日志", path: "/version" },
];

// 定义Avatar组件，调整为导航栏高度（h-10 = 40px）
function Avatar() {
  return (
    <div>
      <Link href={"/"}>
        <img
          className="w-10 aspect-square rounded-full border-2 border-zinc-300"
          src="../../../avatar.jpg"
          alt="Avatar"
        />
      </Link>
    </div>
  );
}

// 顶部导航栏
export function NavbarTop() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  return (
    <div className="flex w-full max-w-5xl /*bg-amber-200">
      <div className="relative w-full h-10 mt-6 mb-16 ">
        <div className="flex gap-4 ">
          {!isHomePage && (
            // <div>
            <Avatar />
            // </div>
          )}
          <div className="flex flex-1"></div>
          <div className="flex flex-1 justify-end md:justify-center">
            <nav>
              <ul className="flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg ring-1 ring-zinc-100">
                {navItems.map((item) => {
                  // 检查当前路径是否匹配导航项的路径
                  const isActive = pathname === item.path;

                  return (
                    <Link
                      key={item.label}
                      className={`relative block px-3 py-2 hover:text-teal-500 ${
                        isActive ? "text-teal-500 border-b-teal-500" : ""
                      }`}
                      href={item.path}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </ul>
            </nav>
          </div>
          <div className="flex justify-end md:flex-1">{/* 按钮位置 */}</div>
        </div>
      </div>
    </div>
  );
}

// 底部导航栏
export function Footer() {
  const pathname = usePathname();

  return (
    <footer className="w-full max-w-7xl px-8">
      <div className="mt-32">
        <div className="flex w-full border-t border-zinc-200 pt-10 pb-16 justify-center">
          <div className="w-full max-w-5xl">
            <nav>
              <div className="flex flex-col justify-between gap-6 md:flex-row">
                <div className="flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm font-medium text-zinc-800">
                  {navItems.map((item) => {
                    // 检查当前路径是否匹配导航项的路径
                    const isActive = pathname === item.path;

                    return (
                      <Link
                        key={item.label}
                        className={`hover:text-teal-500 ${
                          isActive ? "text-teal-500" : ""
                        }`}
                        href={item.path}
                      >
                        {item.label}
                      </Link>
                    );
                  })}
                </div>

                <p className="text-sm text-zinc-400">© Jinny。版权所有</p>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
