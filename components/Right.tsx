"use client";

import React, { useState } from 'react'
import { FaGithub, FaXTwitter, FaGlobe, FaUser, FaBook, FaBriefcase, FaShareNodes, FaArrowLeft } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";

function Right() {
  const [activeTab, setActiveTab] = useState<string | null>(null);

  const menuItems = [
    { id: 'profile', title: 'PROFILE', icon: <FaUser />, color: 'from-blue-500/20' },
    { id: 'bio', title: 'BIOGRAPHY', icon: <FaBook />, color: 'from-purple-500/20' },
    { id: 'works', title: 'WORKS', icon: <FaBriefcase />, color: 'from-emerald-500/20' },
    { id: 'follow', title: 'FOLLOW', icon: <FaShareNodes />, color: 'from-orange-500/20' },
  ];

  const renderMobileContent = () => {
    switch (activeTab) {
      case 'profile':
        return (
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-4 text-gray-200">
            <h3 className="text-2xl font-bold border-b border-white/20 pb-2 mb-4">PROFILE</h3>
            <p><span className="text-white/60 text-sm block">Name</span> 池原 優斗</p>
            <p><span className="text-white/60 text-sm block">Education</span> 日本大学</p>
            <p><span className="text-white/60 text-sm block">Main Skills</span> Next.js / Laravel</p>
            <p><span className="text-white/60 text-sm block">Base</span> Japan/Tokyo</p>
          </motion.div>
        );
      case 'bio':
        return (
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-4 text-gray-200 leading-relaxed">
            <h3 className="text-2xl font-bold border-b border-white/20 pb-2 mb-4">BIOGRAPHY</h3>
            <p className="text-sm">・学生時代にゲーム制作やゲーム改造に触れたことをきっかけに、プログラミングに興味を持つ。</p>
            <p className="text-sm">・大学卒業後はWebエンジニアとして働きながら、Reactを中心にNext.jsやTypeScriptなどのフロントエンド技術を学習。Next.jsやLaravelを用いた個人開発にも取り組んでいます。</p>
            <p className="text-sm">・趣味はギターや音楽制作、イラスト、動画編集などの創作活動。</p>
          </motion.div>
        );
      case 'works':
        return (
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-4">
            <h3 className="text-2xl font-bold border-b border-white/20 pb-2 mb-4">PROJECTS</h3>
            <a href="https://hara-brog-1.onrender.com/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 border border-white/10 p-4 transition hover:border-white/40 hover:bg-white/5">
              <FaGlobe className="text-lg" />
              <div>
                <p className="text-base font-medium">はらブログ</p>
                <p className="text-xs text-white/50">Next.js & App Router</p>
              </div>
            </a>
          </motion.div>
        );
      case 'follow':
        return (
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-4">
            <h3 className="text-2xl font-bold border-b border-white/20 pb-2 mb-4">FOLLOW ME</h3>
            <div className="grid grid-cols-1 gap-3">
              <a href="https://github.com/harazyuku" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-3 border border-white/10 hover:bg-white/5 transition">
                <FaGithub size={24} /> <span>Github</span>
              </a>
              <a href="https://x.com/9ny7u57uhh82683?s=11" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-3 border border-white/10 hover:bg-white/5 transition">
                <FaXTwitter size={24} /> <span>X (Twitter)</span>
              </a>
            </div>
          </motion.div>
        );
      default: return null;
    }
  }

  return (
    <div className="w-full max-w-md">
      {/* --- スマホ表示 (lg未満) --- */}
      <div className="lg:hidden">
        <AnimatePresence mode="wait" initial={false}>
          {!activeTab ? (
            <motion.div 
              key="grid" 
              animate={{ opacity: 1, scale: 1 }} 
              exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }} 
              transition={{ duration: 0.3 }}
              className="grid grid-cols-2 gap-4"
            >
              {menuItems.map((item) => (
                <button key={item.id} onClick={() => setActiveTab(item.id)} className={`flex flex-col items-center justify-center aspect-square border border-white/20 bg-black/60 p-6 transition-all bg-gradient-to-br ${item.color} to-transparent group`}>
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{item.icon}</div>
                  <span className="font-bold tracking-widest text-xs">{item.title}</span>
                </button>
              ))}
            </motion.div>
          ) : (
            <motion.div 
              key="content" 
              initial={{ opacity: 0, x: -20 }} 
              animate={{ opacity: 1, x: 0 }} 
              exit={{ opacity: 0, x: 20 }} 
              className="w-full border border-white/20 bg-black/60 p-6 relative min-h-[400px] flex flex-col"
            >
              <button onClick={() => setActiveTab(null)} className="self-end mb-4 text-white/50 hover:text-white transition flex items-center gap-2 text-xs tracking-widest">
                <FaArrowLeft /> BACK
              </button>
              <div className="flex-1">{renderMobileContent()}</div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>


      {/* --- PC表示 (lg以上) --- */}
      <div className="hidden lg:flex flex-col gap-6">
        {/* PROFILE */}
        <div className="w-full border border-white/20 bg-black/60 p-6 transition duration-300 hover:-translate-y-1">
          <h2 className="mb-5 border-b border-white/20 pb-3 text-4xl font-semibold">PROFILE</h2>
          <div className="space-y-3 text-gray-200">
            <p><span className="text-white/60">Name :</span> 池原 優斗</p>
            <p><span className="text-white/60">Education :</span> 日本大学</p>
            <p><span className="text-white/60">Main Skills :</span> Next.js / Laravel</p>
            <p><span className="text-white/60">Base :</span> Japan/Tokyo</p>
          </div>
        </div>

        {/* BIOGRAPHY */}
        <div className="w-full border border-white/20 bg-black/60 p-6 transition duration-300 hover:-translate-y-1">
          <h2 className="mb-5 border-b border-white/20 pb-3 text-4xl font-semibold">BIOGRAPHY</h2>
          <div className="space-y-4 leading-9 text-gray-200">
            <p>・学生時代にゲーム制作やゲーム改造に触れたことをきっかけに、プログラミングに興味を持つ。</p>
            <p>・大学卒業後はWebエンジニアとして働きながら、Reactを中心にNext.jsやTypeScriptなどのフロントエンド技術を学習。Next.jsやLaravelを用いた個人開発にも取り組んでいます。</p>
            <p>・趣味はギターや音楽制作、イラスト、動画編集などの創作活動。</p>
          </div>
        </div>

        {/* WORKS */}
        <div className="w-full border border-white/20 bg-black/60 p-6 transition duration-300 hover:-translate-y-1">
          <h2 className="mb-5 border-b border-white/20 pb-3 text-4xl font-semibold">PROJECT</h2>
          <div className="space-y-4">
            <a href="https://hara-brog-1.onrender.com/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 border border-white/10 p-4 transition hover:border-white/40 hover:bg-white/5">
              <FaGlobe className="text-lg" />
              <p className="text-base font-medium">はらブログ</p>
            </a>
          </div>
        </div>

        {/* FOLLOW */}
        <div className="w-full border border-white/20 bg-black/60 p-6 transition duration-300 hover:-translate-y-1">
          <h2 className="mb-5 border-b border-white/20 pb-3 text-4xl font-semibold">FOLLOW</h2>
          <div className="flex gap-6">
            <a href="https://github.com/harazyuku" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition flex items-center gap-2">
              <FaGithub size={28} /> <span>Github</span>
            </a>
            <a href="https://x.com/9ny7u57uhh82683?s=11" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition flex items-center gap-2">
              <FaXTwitter size={28} /> <span>X (Twitter)</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Right
