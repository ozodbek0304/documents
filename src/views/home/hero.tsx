import ParamInput from "@/components/param/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
  const categories = [
    { name: "Ta'lim", icon: "📚", color: "from-blue-500 to-indigo-600" },
    { name: "Biznes", icon: "💼", color: "from-emerald-500 to-teal-600" },
    { name: "Tibbiyot", icon: "🏥", color: "from-rose-500 to-pink-600" },
    { name: "Huquq", icon: "⚖️", color: "from-amber-500 to-yellow-600" },
    { name: "Adabiyot", icon: "📖", color: "from-purple-500 to-violet-600" },
    { name: "Ilmiy ishlar", icon: "🔬", color: "from-cyan-500 to-sky-600" },
  ];

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 to-blue-900 py-16 text-white">
      {/* Background decorative elements */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-blue-500 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-purple-500 blur-3xl"></div>
        <div className="absolute left-1/2 top-1/3 h-80 w-80 -translate-x-1/2 rounded-full bg-cyan-500 blur-3xl"></div>
      </div>

      {/* Document floating animation */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float opacity-10"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${15 + Math.random() * 15}s`,
            }}
          >
            <svg
              width="80"
              height="100"
              viewBox="0 0 80 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M70 100H10C4.5 100 0 95.5 0 90V10C0 4.5 4.5 0 10 0H50L80 30V90C80 95.5 75.5 100 70 100Z"
                fill="white"
              />
              <path d="M50 0V30H80L50 0Z" fill="#e0e0e0" />
              <rect x="15" y="40" width="50" height="4" rx="2" fill="#e0e0e0" />
              <rect x="15" y="50" width="50" height="4" rx="2" fill="#e0e0e0" />
              <rect x="15" y="60" width="30" height="4" rx="2" fill="#e0e0e0" />
            </svg>
          </div>
        ))}
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="mx-auto mb-12 max-w-4xl text-center">
          <h1 className="mb-6 text-5xl font-bold leading-tight ">
            Kerakli hujjatlarni {" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              oson toping {" "}
            </span>{" "}
            va{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-300 bg-clip-text text-transparent">
              xarid qiling!
            </span>
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-blue-100 md:text-xl">
            Sizga kerakli hujjatlarni tez va oson toping va sotib oling. Sifatli
            va ishonchli ma’lumotlarga ega bo‘ling! 📄💳
          </p>

          {/* Search bar */}
          <div className="relative mx-auto mb-12 max-w-2xl">
            <div className="relative flex items-center  rounded-full bg-white/10 backdrop-blur-md">
              <ParamInput
                fullWidth
                type="text"
                placeholder="Qidirish..."
                className="w-full rounded-full border-0  bg-transparent px-6 py-4 text-white placeholder-blue-200 outline-none ring-0 focus:border focus:border-blue-400"
              />
              <Button className="absolute right-0 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 p-3 text-white shadow-lg transition-transform hover:scale-105">
                <Search size={20} />
              </Button>
            </div>
          </div>
          <div className="mb-12">
            <button className="group relative inline-flex cursor-pointer items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-4 font-medium text-white shadow-lg transition-all duration-300 hover:shadow-blue-500/30">
              <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="relative"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="17 8 12 3 7 8" />
                <line x1="12" y1="3" x2="12" y2="15" />
              </svg>
              <span className="relative">Hujjat yuklash</span>
            </button>
          </div>
        </div>

        {/* Categories */}
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-8 text-center text-2xl font-bold">Kategoriyalar</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
            {categories.map((category) => (
              <Link
                href={`/category/${category.name.toLowerCase()}`}
                key={category.name}
                className="group flex flex-col items-center rounded-xl bg-white/10 p-6 text-center backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:bg-white/20 hover:shadow-lg hover:shadow-blue-500/20"
              >
                <div
                  className={`mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br ${category.color} p-4 shadow-lg transition-transform duration-300 group-hover:scale-110`}
                >
                  <span className="text-3xl">{category.icon}</span>
                </div>
                <span className="mb-2 text-lg font-bold">{category.name}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* Popular formats */}
        <div className="mx-auto mt-16 max-w-4xl">
          <h2 className="mb-6 text-center text-2xl font-bold">
            Mashhur formatlar
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { format: ".pdf", color: "bg-red-500", icon: "📄" },
              { format: ".doc", color: "bg-blue-500", icon: "📝" },
              { format: ".ppt", color: "bg-orange-500", icon: "🎯" },
              { format: ".xls", color: "bg-green-500", icon: "📊" },
              { format: ".txt", color: "bg-gray-500", icon: "📋" },
            ].map((item) => (
              <Link
                href={`/format/${item.format.replace(".", "")}`}
                key={item.format}
                className="group relative flex items-center gap-2 overflow-hidden rounded-full bg-white/10 px-6 py-3 font-medium backdrop-blur-md transition-all duration-300 hover:bg-white/20"
              >
                <span
                  className={`absolute left-0 top-0 h-full w-1 ${item.color}`}
                ></span>
                <span>{item.icon}</span>
                <span>{item.format}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
