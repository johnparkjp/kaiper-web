type ButtonProps = {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  onClick?: () => void;
  className?: string;
};

const variants = {
  primary:
    'bg-accent-blue text-kaiper-black hover:bg-accent-blue/90',
  secondary:
    'bg-kaiper-white text-kaiper-black hover:bg-cool-gray-10',
  outline:
    'border border-cool-gray-40 text-kaiper-white hover:border-accent-blue hover:text-accent-blue',
};

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
};

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  className = '',
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center font-semibold rounded-full transition-all duration-200 focus-visible:outline-2 focus-visible:outline-accent-blue focus-visible:outline-offset-2 hover:scale-[1.02] active:scale-[0.98] ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
