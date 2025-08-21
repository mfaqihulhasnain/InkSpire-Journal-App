import Link from "next/link";
import { Suspense } from "react";
import Loading from "./loading";

export default function EntryLayout({ children }) {
  return (
    <div className="px-4 py-8">
      <div className="mb-8">
        <Link
          href="/dashboard"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-orange-100 text-orange-700 font-medium text-sm shadow-sm hover:bg-orange-200 hover:text-orange-900 transition-all duration-200 pb-2"
        >
          ← Back to Dashboard
        </Link>
      </div>
      <Suspense
        fallback={
          <>
            <Loading />
          </>
        }
      >
        {children}
      </Suspense>
    </div>
  );
}
