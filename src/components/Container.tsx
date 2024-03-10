import clsx from "clsx";

interface OuterContainerProps {
  className?: string;
  children: React.ReactNode;
}
export function OuterContainer({
  className = "",
  children,
}: OuterContainerProps): React.ReactElement {
  return (
    <div className={clsx("sm:px-8", className)}>
      <div className="mx-auto max-w-7xl lg:px-8">{children}</div>
    </div>
  );
}

interface InnerContainerProps {
  className?: string;
  children: React.ReactNode;
}
export function InnerContainer({
  className = "",
  children,
}: InnerContainerProps): React.ReactElement {
  return (
    <div className={clsx("relative px-4 sm:px-8 lg:px-12", className)}>
      <div className="mx-auto max-w-2xl lg:max-w-5xl">{children}</div>
    </div>
  );
}

interface ContainerProps {
  className?: string;
  children: React.ReactNode;
}
export function Container({
  className = "",
  children,
}: ContainerProps): React.ReactElement {
  return (
    <div className={clsx("sm:px-8", className)}>
      <div className="mx-auto max-w-7xl lg:px-8">
        <div className={clsx("relative px-4 sm:px-8 lg:px-12")}>
          <div className="mx-auto max-w-2xl lg:max-w-5xl">{children}</div>
        </div>
      </div>
    </div>
  );
}
