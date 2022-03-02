type IconButtonProps = {
  text: string;
  children: any;
};

export function IconButton({ children, text }: IconButtonProps) {
  return (
    <button
      type="button"
      className="text-center uppercase border bg-grey-light hover:bg-grey font-bold py-2 px-4 inline-flex items-center"
    >
      {children}
      <span className="text-black dark:text-white">{text}</span>
    </button>
  );
}
