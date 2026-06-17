"use client";

import { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const data = [
  { skill: "HTML/CSS", level: 50 },
  { skill: "JS/TS", level: 40 },
  { skill: "React/Next.js", level: 45 },
  { skill: "Laravel", level: 40 },
  { skill: "PHP", level: 45 },
  { skill: "API設計", level: 20 },
  { skill: "JSON/REST", level: 30 },
  { skill: "MySQL", level: 35 },
  { skill: "Node.js", level: 20 },
  { skill: "Git", level: 50 },
  { skill: "Docker", level: 35 },
  { skill: "AWS/Vercel", level: 10 },
  { skill: "Linux/CLI", level: 35 },
];

// Rechartsの型定義エラーを避けるため、必要なプロパティを定義
interface CustomTooltipProps {
  active?: boolean;
  payload?: any[];
  label?: string;
}

const CustomTooltip = ({
  active,
  payload,
  label,
}: CustomTooltipProps) => {
  if (active && payload && payload.length) {
    const value = payload[0].value;
    return (
      <div className="rounded-lg border border-white/20 bg-black/80 p-4 shadow-xl backdrop-blur-md">
        <p className="mb-1 text-sm font-bold tracking-wider text-gray-400">{label}</p>
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-[#4f46e5]" />
          <p className="text-xl font-semibold text-white">
            {value}
            <span className="ml-1 text-xs text-gray-500">%</span>
          </p>
        </div>
      </div>
    );
  }
  return null;
};

export default function SkillChart() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return <div style={{ height: 400 }} />;

  return (
    <div style={{ width: "100%", height: 400 }}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart 
          data={data} 
          margin={{ top: 20, right: 30, left: 0, bottom: 60 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#333" vertical={false} />
          <XAxis 
            dataKey="skill" 
            stroke="#9ca3af" 
            fontSize={12}
            tickLine={false}
            axisLine={false}
            angle={-45}
            textAnchor="end"
            interval={0}
          />
          <YAxis 
            domain={[0, 100]} 
            stroke="#9ca3af" 
            fontSize={12}
            tickLine={false}
            axisLine={false}
            tickFormatter={(value) => `${value}%`}
          />
          <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(255,255,255,0.05)' }} />
          <Bar 
            dataKey="level" 
            fill="#4f46e5" 
            radius={[6, 6, 0, 0]}
            barSize={60}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
