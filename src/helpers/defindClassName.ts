export function dayName({date,today}:any) {
      if (date < today) return `day past`;
      if (date.toDateString() === today.toDateString()) return `day today`;
      return `day future`;
} 
