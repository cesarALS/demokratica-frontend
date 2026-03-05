interface DateTimeProps {
  date?: string;
  className?: string;
}

export default function DateTime({ date, className }: DateTimeProps) {
  // Si no se recibe una fecha, se toma la fecha actual
  if (!date) {
    date = new Date().toISOString();
  }

  const parsedDate = new Date(date);
  const formattedDate = new Intl.DateTimeFormat("es-CO", {
    dateStyle: "short",
    timeStyle: "short",
    hour12: true,
  }).format(parsedDate);

  return <span className={className}>{formattedDate}</span>;
}
