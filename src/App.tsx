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
      <p className="mt-3 text-lg opacity-80">
        心と体の美しさを、毎日の小さな習慣から
      </p>
      <p className="mt-1 text-lg opacity-80">
        7年の指導歴×AIツールでヨガインストラクターの裏方をお手伝い。
      </p>
      <p className="mt-1 mb-8 font-medium">—Let’s create the life you love— 👇</p>

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
            <p className="mt-2">{desc}</p>
          </a>
        ))}
      </section>
    </main>
  );
}
