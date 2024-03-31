export const formatNum = (num: number) =>
  new Intl.NumberFormat("jA-JP").format(+num);

export const formatPhone = (num: string | number): string => {
  return String(num)
    .replace(/\D/g, "")
    .replace(/(\d{3})(\d{2})(\d{3})(\d{2})(\d{2})/, "+$1 ($2) $3 $4-$5");
};

export const fromFormatPhone = (phone: string) =>
  phone?.split(/[+ ()-]/).join("");

export const formatDate = (dateString: string): string =>
  new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  });

export const navigate = (path: string): void => {
  window.location.href = path;
};
