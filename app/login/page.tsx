import React from "react";
import AuthForm from "../../components/AuthForm";
import { LuPlane } from "react-icons/lu";
import Link from "next/link";
import { loginAction } from "@/lib/actions";
const page = () => {
  return (
    <div className="md:py-22 py-10">
      <div className="flex flex-col items-center gap-3">
        <div className="flex items-center gap-2">
          <div className="bg-linear-to-r from-blue-600 to-purple-600 text-neutral-100 text-2xl p-1 rounded-lg">
            <LuPlane />
          </div>
          <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-bold text-lg">
            TripPilot
          </span>
        </div>

        <div className="text-3xl font-bold">Welcome Back</div>
        <div className="text-neutral-500 pb-5">Sign in to your account to continue</div>
      </div>
      <AuthForm type="login" action={loginAction} />

      <div className="flex justify-center gap-1.5 py-3">
        Don&apos;t have an account? <Link className="text-blue-500" href={'/register'}>Sign up for free</Link>
      </div>
    </div>
  );
};

export default page;
