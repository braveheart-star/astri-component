import { Layout } from "@/components/Layout";
import Link from "next/link";

export default function Home() {
  return (
    <Layout>
      <div className="m-auto h-96">
        <h1 className="text-3xl font-bold text-center text-gray-500 ">
          Atri Labs Test Project
        </h1>
        <div className="flex flex-col mt-8 space-y-4 ">
          <div className="flex space-x-4 ">
            <i className="text-blue-900 fill-current ri-node-tree"></i>
            <Link href="/tree" className="text-blue-700 underline ">
              Tree Component
            </Link>
          </div>
          <div className="flex space-x-4 ">
            <i className="text-blue-900 fill-current ri-timer-line"></i>
            <Link href="/timeline" className="text-blue-700 underline ">
              Timeline Component
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
