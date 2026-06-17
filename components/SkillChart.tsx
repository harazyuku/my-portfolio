"use client";

import { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  TooltipProps,
  CartesianGrid,
} from "recharts";

const data = [
  { skill: "HTML/CSS", level: 70 },
  { skill: "JS/TS", level: 75 },
  { skill: "React/Next.js", level: 65 },
  { skill: "Laravel", level: 50 },
  { skill: "PHP", level: 65 },
  { skill: "API設計", level: 20 },
  { skill: "JSON/REST", level: 60 },
  { skill: "MySQL", level: 55 },
  { skill: "Node.js", level: 60 },
  { skill: "Git", level: 70 },
  { skill: "Docker", level: 40 },
  { skill: "AWS/Vercel", level: 20 },
  { skill: "Linux/CLI", level: 45 },
];

const CustomTooltip = ({
  active,
  payload,
  label,
}: TooltipProps<number, string>) => {
  if (active && payload && payload.length) {
    return (
      <div className="rounded-lg border border-white/20 bg-black/80 p-4 shadow-xl backdrop-blur-md">
        <p className="mb-1 text-sm font-bold tracking-wider text-gray-400">{label}</p>
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-[#4f46e5]" />
          <p className="text-xl font-semibold text-white">
            {payload[0].value}
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
