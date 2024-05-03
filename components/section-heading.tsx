interface SectionHeading {
  children: React.ReactNode;
}

function SectionHeading({ children }: SectionHeading) {
  return (
    <h2 className="text-3xl font-medium capitalize mb-8 text-center">
      {children}
    </h2>
  );
}

export default SectionHeading;
