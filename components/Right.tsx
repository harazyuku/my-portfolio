import React from 'react'
import { FaGithub, FaXTwitter } from "react-icons/fa6";
import { FaGlobe } from "react-icons/fa";

function Right() {
  return (
    <div className="flex w-full max-w-md flex-col items-start gap-6">
      {/* PROFILE */}
      <div className=" w-full border border-white/20 bg-black/60 p-6 transition duration-300 hover:-translate-y-1">
        <h2 className=" mb-5 border-b border-white/20 pb-3 text-4xl font-semibold">
          PROFILE
        </h2>

        <div className="space-y-3 text-gray-200">
          <p><span className="text-white/60">Name :</span> 池原 優斗</p>
          <p><span className="text-white/60">Education :</span> 日本大学</p>
          <p><span className="text-white/60">Main Skills :</span> Next.js / Laravel</p>
          <p><span className="text-white/60">Base :</span> Japan/Tokyo</p>
        </div>
      </div>

      {/* BIOGRAPHY */}
      <div
        className=" w-full border border-white/20 bg-black/60 p-6 transition duration-300 hover:-translate-y-1">
        <h2
          className=" mb-5 border-b border-white/20 pb-3 text-4xl font-semibold">
          BIOGRAPHY
        </h2>


        <p className=" leading-9 text-gray-200">
          ・学生時代にゲーム制作やゲーム改造に触れたことをきっかけに、プログラミングに興味を持つ。
        </p>
        <p className=" leading-9 text-gray-200">
          ・大学卒業後はWebエンジニアとして働きながら、Reactを中心にNext.jsやTypeScriptなどのフロントエンド技術を学習。Laravelを用いたバックエンド開発や個人開発にも取り組んでいます。
        </p>
        <p className=" leading-9 text-gray-200">
          ・趣味はギターや音楽制作、イラスト、動画編集などの創作活動。
        </p>

      </div>

      {/* WORKS */}
      <div
        className=" w-full border border-white/20 bg-black/60 p-6 transition duration-300 hover:-translate-y-1">
        <h2
          className=" mb-5 border-b border-white/20 pb-3 text-4xl font-semibold">
          FEATURED PROJECT
        </h2>

        <div className="space-y-4">
<a
  href="https://hara-brog-1.onrender.com/"
  target="_blank"
  rel="noopener noreferrer"
  className="
    flex
    items-center
    gap-3
    border
    border-white/10
    p-4
    transition
    hover:border-white/40
    hover:bg-white/5
  "
>
  <FaGlobe className="text-lg" />
  <p className="text-base font-medium">はらブログ</p>
</a>


        </div>
      </div>

      {/* FOLLOW */}
      <div className=" w-full border border-white/20 bg-black/60 p-6 transition duration-300 hover:-translate-y-1">
        <h2 className=" mb-5 border-b border-white/20 pb-3 text-4xl font-semibold">
          FOLLOW ME
        </h2>

        <div className="flex gap-6 text-lg">

          <div className='px-6'>

            <a href="https://github.com/harazyuku" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition flex" >
              <FaGithub size={28} />
              <p className='px-2'>Github</p>
            </a>


          </div>
          <div className='pl-1'>

            <a href="https://x.com/9ny7u57uhh82683?s=11" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition flex" >
              <FaXTwitter size={28} />
              <p className='px-2'>X (Twitter)</p>
            </a>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Right
