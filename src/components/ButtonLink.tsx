import { twMerge } from "tailwind-merge";
import { Link } from "react-router-dom";
import { HiChevronRight } from "react-icons/hi";

type Variant = "primary" | "secondary" | "tertiary" | "chevron";

interface ButtonLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  to: string;
  variant?: Variant;
  className?: string;
  external?: boolean; // opens in new tab
  onMobileClick?: () => void;
}

const baseStyles =
  "inline-block px-5 py-2.5 rounded-md font-medium transition-colors duration-300";

const variantStyles: Record<Variant, string> = {
  primary: "bg-orange-500 text-white hover:bg-orange-600 hover:shadow-lg",
  secondary: "bg-gray-100 text-gray-800 hover:bg-gray-200 hover:shadow-lg",
  tertiary:
    "border border-gray-300 text-gray-700 hover:bg-gray-100 hover:shadow-lg",
  chevron:
    "px-0 py-0 flex items-center justify-center text-orange-500 hover:text-orange-600 hover:shadow-lg hover:border-transparent focus:outline-none border-none",
};

export const ButtonLink: React.FC<ButtonLinkProps> = ({
  to,
  variant = "primary",
  className,
  external = false,
  onMobileClick,
  children,
  ...props
}) => {
  const classes = twMerge(baseStyles, variantStyles[variant], className);

  const handleClick = () => {
    if (onMobileClick) {
      onMobileClick();
    }
  };

  const content = (
    <>
      <span>{children}</span>
      {variant === "chevron" && (
        <HiChevronRight className="w-4 h-4" aria-hidden="true" />
      )}
    </>
  );

  if (external) {
    return (
      <a
        href={to}
        className={classes}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        {...props}
      >
        {content}
      </a>
    );
  }

  return (
    <Link to={to} className={classes} onClick={handleClick} {...props}>
      {content}
    </Link>
  );
};
