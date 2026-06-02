import React from 'react';
import { links } from './data/links';

export default function App() {
  return (
    <main className="min-h-screen flex flex-col items-center pb-20 font-body text-gray-700">
      {/* プロフィール */}
      <img
        src={`${import.meta.env.BASE_URL}avatar.jpg`}
        alt="Satomi Konishi Avatar"
        className="w-32 h-32 rounded-full border-4 border-white shadow-lg mt-8"
      />
      <h1 className="text-2xl md:text-3xl font-bold mt-6 text-gray-800">
        札幌ヨガ講師｜Satomi Konishi
      </h1>
      <p className="mt-3 text-base opacity-80 text-center leading-relaxed">
        呼吸と思考を整える習慣を届けています。<br />
        ヨガ・書く瞑想・香りを通して、<br />
        「ちゃんとしなきゃ」で疲れてしまう女性へ。
      </p>
      <a
        href="https://substack.com/@satomikonishi"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 mb-8 text-sm font-medium text-emerald-700 underline underline-offset-2"
      >
        Substack登録はこちら
      </a>

      {/* リンクカード */}
      <section className="w-full flex flex-col items-center gap-6 px-4">
        {links.map(({ id, label, desc, href, bg }) => (
          <a
            key={id}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`${bg} max-w-md w-full py-8 rounded-3xl shadow-md text-center transition hover:scale-105`}
          >
            <h2 className="text-lg md:text-xl font-bold whitespace-nowrap">{label}</h2>
            <p className="mt-2 whitespace-pre-line">{desc}</p>
          </a>
        ))}
      </section>
    </main>
  );
}
