export const FormatSalaryRange = (min: number, max: number): string => {
  return `${min.toLocaleString()} - ${max.toLocaleString()}`;
};