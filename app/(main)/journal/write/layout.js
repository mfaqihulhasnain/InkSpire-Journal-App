import React, { Suspense } from "react";
import Link from "next/link";
import { BarLoader } from "react-spinners";

const WriteLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-100">
      <div className="container mx-auto px-4 py-10">
        {/* Top Navigation */}
        <div className="mb-6">
          <Link
            href="/dashboard"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-orange-100 text-orange-700 font-medium text-sm shadow-sm hover:bg-orange-200 hover:text-orange-900 transition-all duration-200 pb-2"
          >
            ← Back to Dashboard
          </Link>
        </div>

        {/* Main Content Area */}
        <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 border border-orange-100">
          <Suspense
            fallback={
              <div className="flex justify-center items-center py-10">
                <BarLoader color="orange" width={"80%"} />
              </div>
            }
          >
            {children}
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default WriteLayout;
