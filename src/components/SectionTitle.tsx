interface SectionTitleProps {
  title: string;
}

const SectionTitle = ({ title }: SectionTitleProps) => {
  return (
    <h1 className="absolute left-0 top-0 md:top-12 lg:top-0 -z-10 text-8xl font-bold text-[#2c2c308d] text-center md:text-[200px] lg:text-[248px]">
      {title}
    </h1>
  );
};

export default SectionTitle;
