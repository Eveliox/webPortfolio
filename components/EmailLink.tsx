"use client";

import { useEffect, useState, type ReactNode } from "react";
import { emailParts } from "@/lib/data";

function useEmail() {
  const [email, setEmail] = useState<string | null>(null);
  useEffect(() => {
    setEmail(`${emailParts.user}@${emailParts.domain}`);
  }, []);
  return email;
}

const obfuscated = `${emailParts.user} [at] ${emailParts.domain.replace(".", " [dot] ")}`;

export function EmailLink({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  const email = useEmail();
  if (!email) {
    return (
      <span className={className} aria-hidden="true">
        {children}
      </span>
    );
  }
  return (
    <a href={`mailto:${email}`} className={className}>
      {children}
    </a>
  );
}

export function EmailAddress({ className }: { className?: string }) {
  const email = useEmail();
  return <span className={className}>{email ?? obfuscated}</span>;
}
