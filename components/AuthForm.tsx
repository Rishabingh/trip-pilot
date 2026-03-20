"use client";
import { CiMail } from "react-icons/ci";
import { CiLock } from "react-icons/ci";
import { useActionState } from "react";
import SubmitButton from "./SubmitButton";

type State = {
  error?: string;
  success?: boolean;
};

interface formProps {
  type: "login" | "register";
  action: (prevState: State | null, formData: FormData) => Promise<State>;
}

const AuthForm = ({ type, action }: formProps) => {
  const [state, formAction] = useActionState(action, null);

  return (
    <form
      className="bg-neutral-50 rounded-xl shadow-md p-4 flex flex-col gap-10 max-w-sm mx-auto text-sm"
      action={formAction}
    >
      {/* Email */}
      <div className="flex flex-col gap-3">
        <label htmlFor="email" className="font-semibold">
          Email
        </label>

        <div className="relative">
          <input
            name="email"
            id="email"
            type="email"
            required
            placeholder="you@example.com"
            className="bg-neutral-200 text-sm rounded-md w-full pl-10 pr-3 py-2"
          />

          <CiMail
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
            size={18}
          />
        </div>
      </div>

      {/* Password */}
      <div className="flex flex-col gap-3">
        <label htmlFor="password" className="font-semibold">
          Password
        </label>

        <div className="relative">
          <input
            name="password"
            type="password"
            id="password"
            placeholder="••••••••••••"
            minLength={8}
            required
            className="bg-neutral-200 text-sm rounded-md w-full pl-10 pr-3 py-2"
          />

          <CiLock
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
            size={18}
          />
        </div>
      </div>

      <SubmitButton type={type} />
      {state?.error && (
        <p className="text-red-500 flex justify-center">{state.error}</p>
      )}
    </form>
  );
};

export default AuthForm;
