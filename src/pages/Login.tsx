import { useAuth } from "../hooks/useAuth";
import { useState } from "react";
import { useRoleRedirect } from "../hooks/useRoleRedirect";

const Login = () => {
  const { login, loading } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  useRoleRedirect();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsSubmitting(true);

    try {
      await login(email, password);
    } catch (error) {
      setError(error instanceof Error ? error.message : "Login failed");
      setIsSubmitting(false);
    }
  };

  if (loading) {
    return (
      <main className="flex flex-1 h-screen items-center justify-center bg-gray-50">
        <div className="flex flex-col items-center gap-4">
          <div className="relative">
            <div className="w-16 h-16 border-4 border-monday-lime-green-char/30 border-t-monday-lime-green-char rounded-full animate-spin"></div>
          </div>
          <p className="font-semibold text-lg text-gray-700 animate-pulse">Redirecting to dashboard...</p>
        </div>
      </main>
    );
  }

  return (
    <main className="flex flex-1 h-screen items-center">
      <div className="flex flex-col h-screen overflow-hidden rounded-tr-[32px] pl-[30px] pt-[46px] w-[685px] shrink-0 blue-gradient">
        <p className="font-semibold text-lg text-monday-lime-green-char">— Manage Stock and Merchants</p>
        <p className="font-extrabold text-[42px] uppercase text-white mt-4 mb-[30px]">
          Optimized Inventory,
          <br />
          Effortless Workflow 🎯{" "}
        </p>
        <div className="flex flex-1 overflow-hidden rounded-tl-[20px]">
          <img src="/assets/images/backgrounds/bg-image-1.png" className="size-full object-cover object-left-top" alt="image" />
        </div>
      </div>
      <div className="flex flex-1 items-center justify-center">
        <form onSubmit={handleLogin} className="flex flex-col w-[435px] shrink-0 rounded-3xl gap-10 p-6 bg-white">
          <img src="/assets/images/logos/logo.svg" className="w-[203px] mx-auto" alt="logo" />
          <div className="flex flex-col gap-[30px]">
            <div className="flex flex-col gap-3 text-center">
              <p className="font-semibold text-2xl">Hey🙌🏻, Welcome Back!</p>
              <p className="font-medium text-monday-gray">Login to your account to continue!</p>
            </div>
            <div className="flex flex-col gap-4 w-full">
              <label className="group relative">
                <div className="flex items-center pr-4 absolute transform -translate-y-1/2 top-1/2 left-6 border-r-[1.5px] border-monday-border ">
                  <img src="/assets/images/icons/sms-grey.svg" className="flex size-6 shrink-0" alt="icon" />
                </div>
                <p className="placeholder font-medium text-monday-gray text-sm absolute -translate-y-1/2 left-[81px] top-[25px] group-has-[:placeholder-shown]:top-[36px] group-focus-within:top-[25px] transition-300">Your email address</p>
                <input
                  required
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  value={email}
                  disabled={isSubmitting}
                  className="appearance-none w-full h-[72px] font-semibold text-lg rounded-3xl border-[1.5px] border-monday-border pl-20 pr-6 pb-[14.5px] pt-[34.5px] placeholder-shown:pt-[14.5px] focus:border-monday-black transition-300 disabled:opacity-60 disabled:cursor-not-allowed"
                  placeholder="email address"
                />
              </label>
              <label className="group relative">
                <div className="flex items-center pr-4 absolute transform -translate-y-1/2 top-1/2 left-6 border-r-[1.5px] border-monday-border ">
                  <img src="/assets/images/icons/lock-grey.svg" className="flex size-6 shrink-0" alt="icon" />
                </div>
                <p className="placeholder font-medium text-monday-gray text-sm absolute -translate-y-1/2 left-[81px] top-[25px] group-has-[:placeholder-shown]:top-[36px] group-focus-within:top-[25px] transition-300">Your password</p>
                <input
                  id="passwordInput"
                  type={showPassword ? "text" : "password"}
                  required
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  disabled={isSubmitting}
                  className="appearance-none w-full h-[72px] font-semibold text-lg rounded-3xl border-[1.5px] border-monday-border pl-20 pr-16 pb-[14.5px] pt-[34.5px] placeholder-shown:pt-[14.5px] focus:border-monday-black transition-300 tracking-[0.3em] disabled:opacity-60 disabled:cursor-not-allowed"
                  placeholder=""
                />
                <button
                  id="togglePassword"
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  disabled={isSubmitting}
                  className="absolute transform -translate-y-1/2 top-1/2 right-6 disabled:opacity-50 transition-all duration-200 hover:scale-110 active:scale-95"
                >
                  <img src={showPassword ? "/assets/images/icons/eye-slash-grey.svg" : "/assets/images/icons/eye-grey.svg"} className="flex size-6 shrink-0" alt="toggle password visibility" />
                </button>
              </label>
              <p className="font-medium text-sm text-monday-gray">
                Forget Password?{" "}
                <a href="#" className="font-semibold text-monday-blue hover:underline">
                  Reset Password
                </a>
              </p>
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn btn-primary w-full font-bold transition-all duration-200 active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed disabled:active:scale-100 flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  <span>Signing In...</span>
                </>
              ) : (
                "Sign In"
              )}
            </button>
            {error && (
              <div className="bg-red-50 border border-red-200 rounded-2xl p-4 flex items-start gap-3 animate-[shake_0.3s_ease-in-out]">
                <svg className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                    clipRule="evenodd"
                  />
                </svg>
                <p className="text-red-700 font-medium text-sm">{error}</p>
              </div>
            )}
          </div>
        </form>
      </div>
    </main>
  );
};

export default Login;
