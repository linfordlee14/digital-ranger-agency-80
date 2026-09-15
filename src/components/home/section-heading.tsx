import { Body, Eyebrow, Heading } from "@/components/ui/typography";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  align?: "center" | "left";
  description?: string;
  eyebrow: string;
  id?: string;
  title: string;
}

export function SectionHeading({ align = "left", description, eyebrow, id, title }: SectionHeadingProps) {
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center")}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <Heading as="h2" className="mt-3" id={id}>
        {title}
      </Heading>
      {description ? <Body className="mt-4">{description}</Body> : null}
    </div>
  );
}
