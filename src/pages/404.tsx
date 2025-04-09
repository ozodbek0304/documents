import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center">
      <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-gray-700 mb-6">
        Sahifa topilmadi
      </h2>
      <p className="text-gray-500 mb-8 max-w-md">
        Kechirasiz, siz qidirayotgan sahifani topa olmadik.
      </p>
      <Link
        href="/"
        className="px-4 py-2 rounded-md bg-gray-900 text-white hover:bg-gray-800 transition-colors duration-200"
      >
        Asosiyga qaytish
      </Link>
    </div>
  );
}
