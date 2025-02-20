"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";

export default function AppQueryProvider({ children }: { children: React.ReactNode }) {
  // Asegura que el QueryClient persista durante toda la ejecución del cliente
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  );
}
