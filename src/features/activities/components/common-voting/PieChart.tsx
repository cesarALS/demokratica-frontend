"use client";

import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

interface VotePieChartProps {
  data: { name: string; votes: number; color?: string }[];
}

export default function PieChartResults({ data }: VotePieChartProps) {
  return (
    <div className="flex flex-col items-center justify-center">
      <ResponsiveContainer width="100%" height={250}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius="60%"
            fill="#8884d8"
            dataKey="votes"
            label={({ percent }) => `(${(percent * 100).toFixed(0)}%)`}
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={
                  entry.color || `hsl(${(index * 360) / data.length}, 70%, 50%)`
                } // Default auto-color
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
