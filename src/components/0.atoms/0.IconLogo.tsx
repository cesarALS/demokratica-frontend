"use client";

interface IconLogoProps {
  classNameGeneral?: string;
  bgFill?: string;
  personitasFill?: string;
  temploFill?: string;
}

export default function IconLogo({
  classNameGeneral = "w-64",
  bgFill = "#ffffff",
  personitasFill = "#1988ff",
  temploFill = "#b1b2b5",
}: IconLogoProps) {
  return (
    <div>
      <svg
        viewBox="0 0 512 512"
        version="1.1"
        id="svg8"
        xmlns="http://www.w3.org/2000/svg"
        className={classNameGeneral}
      >
        <defs id="defs12" />
        <circle
          cx="256"
          cy="256"
          fill={bgFill}
          fillOpacity="0.999"
          fill-rule="evenodd"
          id="Background"
          r="245.33701"
        />
        <path
          fill={personitasFill}
          d="M256 25.373a25.297 25.297 0 0 0-25.297 25.297A25.297 25.297 0 0 0 256 75.969a25.297 25.297 0 0 0 25.297-25.3A25.297 25.297 0 0 0 256 25.374zm-38.984 31.76a201.015 202.723 0 0 0-84.82 39.71l35.21 35.212A152.439 152.439 0 0 1 256 103.56a152.439 152.439 0 0 1 88.635 28.45l35.156-35.157a201.015 202.723 0 0 0-84.809-39.71A40.008 40.008 0 0 1 256 90.68a40.008 40.008 0 0 1-38.984-33.547ZM97.15 132.508a201.015 202.723 0 0 0-38.367 84.351A40.008 40.008 0 0 1 90.68 256a40.008 40.008 0 0 1-31.899 39.142 201.015 202.723 0 0 0 38.37 84.353l34.904-34.904A152.439 152.439 0 0 1 103.56 256a152.439 152.439 0 0 1 28.492-88.59zm317.69.008-34.85 34.85A152.439 152.439 0 0 1 408.44 256a152.439 152.439 0 0 1-28.45 88.637l34.848 34.847a201.015 202.723 0 0 0 38.447-84.75A40.008 40.008 0 0 1 421.32 256a40.008 40.008 0 0 1 31.965-38.734 201.015 202.723 0 0 0-38.445-84.75zM50.67 230.703A25.297 25.297 0 0 0 25.373 256a25.297 25.297 0 0 0 25.297 25.297A25.297 25.297 0 0 0 75.969 256a25.297 25.297 0 0 0-25.3-25.297zm410.658 0A25.297 25.297 0 0 0 436.031 256a25.297 25.297 0 0 0 25.3 25.297A25.297 25.297 0 0 0 486.626 256a25.297 25.297 0 0 0-25.299-25.297zm-293.92 149.242-35.209 35.21a201.015 202.723 0 0 0 84.817 39.706A40.008 40.008 0 0 1 256 421.321a40.008 40.008 0 0 1 38.982 33.537 201.015 202.723 0 0 0 84.807-39.711l-35.154-35.155A152.439 152.439 0 0 1 256 408.44a152.439 152.439 0 0 1-88.592-28.495zM256 436.031a25.297 25.297 0 0 0-25.297 25.3A25.297 25.297 0 0 0 256 486.626a25.297 25.297 0 0 0 25.297-25.299A25.297 25.297 0 0 0 256 436.031z"
          id="Personitas"
        />
        <path
          fill={temploFill}
          d="M256.664 151.307a9.888 9.888 0 0 0-2.644.178 9.888 9.888 0 0 0-3.643 1.555l-36.941 25.549-25.694 17.767a2.134 2.134 0 0 0 1.215 3.89h9.39v87.337h-11.53v27.392h-12.995v27.393h164.356v-27.393h-12.992v-27.392h-11.534v-87.336h9.393a2.134 2.134 0 0 0 1.213-3.89l-36.942-25.55-25.691-17.767a9.888 9.888 0 0 0-4.96-1.733zm-43.967 48.94H232v87.336h-19.303zm33.653 0h19.302v87.336H246.35zm33.652 0h19.303v87.336h-19.303z"
          id="Templo"
        />
      </svg>
    </div>
  );
}
