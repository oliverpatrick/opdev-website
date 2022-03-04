type IconButtonProps = {
  text?: string;
  children: any;
  className: string;
};

export function IconButton({ children, text, className }: IconButtonProps) {
  return (
    <button type="button" className={className}>
      {children}
      <span className="text-slate-50">{text}</span>
    </button>
  );
}
