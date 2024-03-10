import Link, { LinkProps } from "next/link";
import clsx from "clsx";
import { ChevronRightIcon } from "./icons";

interface CardProps extends React.HTMLAttributes<HTMLElement> {
  as?: React.ElementType;
}

export function Card({
  as: Component = "div",
  className,
  children,
  ...props
}: CardProps) {
  return (
    <Component
      className={clsx(className, "group relative flex flex-col items-start")}
      {...props}
    >
      {children}
    </Component>
  );
}

interface CardLinkProps extends LinkProps {
  children: React.ReactNode;
}

export const CardLink: React.FC<CardLinkProps> = ({ children, ...props }) => {
  return (
    <>
      <div className="absolute -inset-y-6 -inset-x-4 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl" />
      <Link {...props}>
        <span className="absolute -inset-y-6 -inset-x-4 z-20 sm:-inset-x-6 sm:rounded-2xl" />
        <span className="relative z-10">{children}</span>
      </Link>
    </>
  );
};

interface CardTitleProps extends React.HTMLAttributes<HTMLElement> {
  as?: React.ElementType;
  href?: string;
}

export const CardTitle: React.FC<CardTitleProps> = ({
  as: Component = "h2",
  href,
  children,
  ...props
}) => {
  return (
    <Component
      className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100"
      {...props}
    >
      {href ? <CardLink href={href}>{children}</CardLink> : children}
    </Component>
  );
};

interface CardDescriptionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
}

export const CardDescription: React.FC<CardDescriptionProps> = ({
  children,
  ...props
}) => {
  return (
    <p
      className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400"
      {...props}
    >
      {children}
    </p>
  );
};

interface CardCtaProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
}

export const CardCta: React.FC<CardCtaProps> = ({ children, ...props }) => {
  return (
    <div
      aria-hidden="true"
      className="relative z-10 mt-4 flex items-center text-sm font-medium text-teal-500"
      {...props}
    >
      {children}
      <ChevronRightIcon className="ml-1 h-4 w-4 stroke-current" />
    </div>
  );
};

interface CardTimeSlotProps extends React.HTMLAttributes<HTMLElement> {
  as?: React.ElementType;
  decorate?: boolean;
  children: React.ReactNode;
}

export const CardTimeSlot: React.FC<CardTimeSlotProps> = ({
  as: Component = "p",
  decorate = false,
  className,
  children,
  ...props
}) => {
  return (
    <Component
      className={clsx(
        className,
        "relative z-10 order-first mb-3 flex items-center text-sm text-zinc-400 dark:text-zinc-500",
        decorate && "pl-3.5"
      )}
      {...props}
    >
      {decorate && (
        <span
          className="absolute inset-y-0 left-0 flex items-center"
          aria-hidden="true"
        >
          <span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500" />
        </span>
      )}
      {children}
    </Component>
  );
};
