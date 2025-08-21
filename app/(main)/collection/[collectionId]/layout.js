import React from "react";
import Link from "next/link";
import { Suspense } from "react";
import { BarLoader } from "react-spinners";

const WriteLayout = ({ children }) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div>
      <Link
            href="/dashboard"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-orange-100 text-orange-700 font-medium text-sm shadow-sm hover:bg-orange-200 hover:text-orange-900 transition-all duration-200"
          >
            ← Back to Dashboard
          </Link>
      </div>
      <Suspense fallback={<BarLoader color="orange" width={"100%"} />}>
        {children}
      </Suspense>
    </div>
  );
};

export default WriteLayout;
