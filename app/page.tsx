"use client";

import Header from "@/components/Header";
import Left from "@/components/Left";
import Right from "@/components/Right";
import SkillChart from "@/components/SkillChart";
import WorkCard from "@/components/WorkCard";
import Contact from "@/components/Contact";
import CatBackground from "@/components/CatBackground";
import { motion, Variants } from "framer-motion";

const fadeInVariant: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};


export default function Page() {
  return (
    <main className="relative min-h-screen bg-black text-white">
      {/* 背景 3Dモデル */}
      <div className="fixed inset-0 z-0">
        <CatBackground />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* コンテンツ */}
      <div className="relative z-10 flex min-h-screen flex-col">
        <Header />

        {/* ヒーローセクション */}
        <section 
          id="home" 
          className="flex-1"
        >
          <div className="mx-auto flex w-full max-w-7xl flex-col px-6 py-20 lg:flex-row lg:items-center lg:justify-between lg:px-10">
            {/* メインヒーローエリア */}
            <div className="flex flex-1 items-center py-10 lg:py-0">
              <Left />
            </div>

            {/* プロフィール・詳細エリア */}
            <div id="main" className="flex flex-1 justify-center lg:justify-end py-10 lg:py-0">
              <Right />
            </div>
          </div>
        </section>

        {/* スキルチャートセクション */}
        <motion.section 
          id="skill" 
          className="bg-black/60 px-6 py-20 lg:px-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3, margin: "-100px" }}
          variants={fadeInVariant}
        >
          <div className="mx-auto max-w-7xl">
            <h2 className="mb-12 inline-block border-b border-white/20 pb-4 text-4xl font-semibold tracking-widest">
              SKILLS
            </h2>
            <div className="rounded-xl border border-white/10 bg-black/20 p-6">
              <SkillChart />
            </div> 
          </div>
        </motion.section>

        {/* 実績セクション */}
        <motion.section 
          id="history" 
          className="mx-auto max-w-7xl px-6 py-20 lg:px-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeInVariant}
        >
          <h2 className="mb-12 inline-block border-b border-white/20 pb-4 text-4xl font-semibold tracking-widest">
            WORKS
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 ">
            <WorkCard
            period="2025.10 - Present"
              title="Web Engineer"
              tech="Next.js / Laravel / AWS"
              description="現在、Next.js/Laravelを中心に、ECサイト開発に従事。既存システムの改修・保守を担当し、チーム開発や実務での開発プロセスを経験。"
            />
            <WorkCard
            period="2025.04 - 2025.09"
              title="Personal Development"
              tech="Laravel / React / Inertia.js"
              description="LaravelとReactを組み合わせたWebアプリケーションを個人開発。認証機能やCRUD機能の実装を通じて、フロントエンドとバックエンドを連携した開発を経験。"
            />
            <WorkCard
            period="2024.06 - 2025.03"
              title="Modern Web Development"
              tech="HTML / CSS / JavaScript / PHP"
              description="Web開発の基礎を学習。個人開発を通じてCRUD機能や認証機能の実装、Git/GitHubを活用した開発フローを習得。"
            />
          </div>
        </motion.section>

        {/* コンタクトセクション */}
        <motion.section
          id="contact"
          className="
                flex
                items-center
                justify-center
                px-6
                py-20
            "
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3, margin: "-100px" }}
          variants={fadeInVariant}
        >
          <Contact />
        </motion.section>

        {/* フッター的な余白 */}
        <footer className="py-10 text-center text-sm text-white-500">
          © 2026 IKehara Portfolio
        </footer>
      </div>
    </main>
  );
}
