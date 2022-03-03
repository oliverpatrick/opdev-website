type IconButtonProps = {
  text?: string;
  children: any;
  className: string;
};

export function IconButton({ children, text, className }: IconButtonProps) {
  return (
    <button type="button" className={className}>
      {children}
      <span className="text-black dark:text-white">{text}</span>
    </button>
  );
}
