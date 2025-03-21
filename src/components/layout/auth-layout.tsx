import Head from "next/head";
import React from "react";

type Props = {
  title: string;
  children: React.ReactNode;
};

export default function AuthLayout({ title, children }: Props) {
  return (
    <section className="pt-24">
      <Head>
        <title>{title}</title>
      </Head>
      <div className="container mx-auto">
        <div className="max-w-xs mx-auto">
          <h1 className="text-2xl mb-10 text-center font-semibold">{title}</h1>
          {children}
        </div>
      </div>
    </section>
  );
}
