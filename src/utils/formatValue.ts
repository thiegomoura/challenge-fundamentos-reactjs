export const formatValue = (value: number): string =>
  Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
    value,
  );

export const formatData = (date: string): Date => {
  return new Date(date);
}
