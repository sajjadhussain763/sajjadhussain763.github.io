export interface Event {
  id: string;
  color: string;
  category: string;
  title: string;
  description: string;
  actionLink: string;
  actionText: string;
}

export function getActiveEvents(): Event[] {
  return [
    {
      id: "1",
      color: "var(--accent-primary, #007bff)",
      category: "Professional Training",
      title: "Advanced Web Development Bootcamp",
      description: "A comprehensive 12-week bootcamp covering React, Next.js, and modern CSS architecture.",
      actionLink: "/training/web-dev",
      actionText: "Enroll Now"
    },
    {
      id: "2",
      color: "var(--accent-secondary, #28a745)",
      category: "Executive Program",
      title: "Leadership in Tech",
      description: "A specialized seminar for senior developers transitioning into engineering management.",
      actionLink: "/training/leadership",
      actionText: "Learn More"
    }
  ];
}
