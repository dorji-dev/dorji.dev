const SiteFooter = () => {
  return (
    <div>
      <p className="text-[12px]">
        Built with{" "}
        <a href="https://nextjs.org/" className="text-foreground/60">
          NextJS
        </a>{" "}
        and{" "}
        <a href="https://ui.shadcn.com/" className="text-foreground/60">
          shadcn
        </a>.
      </p>
    </div>
  );
};

export default SiteFooter;
