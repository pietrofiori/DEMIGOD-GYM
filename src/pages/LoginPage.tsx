import logoApp from "@/assets/logoApp.png";

import CardLogin from "@/components/login/CardLogin"


export default function LoginPage() {

  return (
    <div className=" flex align-middle content-center justify-center items-center">
      <div className="flex justify-end align-middle-700 py-60 px-12">
      {/* <LanguageToggle /> */}
        <CardLogin/>
      </div>
      <div className=" w-full h-[100vh] bg-card flex justify-center align-middle py-40 px-12">
        <img src={logoApp} alt="Logo"  className="rounded-xl"/>
      </div>
    </div>
  );
}
