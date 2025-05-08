import localFont from "next/font/local";

export const mailSansRoman = localFont({
  src: [
    {
      path: "../../public/fonts/mail-sans-roman/MailSansRoman-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/mail-sans-roman/MailSansRoman-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/mail-sans-roman/MailSansRoman-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/mail-sans-roman/MailSansRoman-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/mail-sans-roman/MailSansRoman-DemiBold.ttf",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-mail-sans",
  display: "swap",
});
