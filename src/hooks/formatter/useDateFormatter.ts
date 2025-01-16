const useFormatDate = (date: string) => {
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
  });

  return formattedDate;
};

export default useFormatDate;
