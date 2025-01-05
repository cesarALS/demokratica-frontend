import FullLogo from "@/components/0.atoms/2.FullLogo";
import TitleLogo from "@/components/0.atoms/1.TitleLogo";
import IconLogo from "@/components/0.atoms/0.IconLogo";
// Página de Loguearse

export default function Login() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-SecBlue">
      <FullLogo baseFill="#000000" />
      <TitleLogo classNameGeneral="w-64" baseFill="#000000" />
      <IconLogo classNameGeneral="w-32" bgFill="#000000" />
      <h1>Y mi logo?</h1>
    </div>
  );
}
