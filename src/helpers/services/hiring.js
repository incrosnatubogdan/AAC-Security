import closeProtectionCta from "@/assets/img/services/close_protection/cta.jpg";

export const hiringServices = [
  {
    icon: "stadium",
    title: "Physical Security",
    description:
      "Deploying security guards to patrol premises and monitor for unauthorized access or suspicious activity",
  },
  {
    icon: "work",
    title: "Security Assessment and Planning",
    description:
      "Developing customized security plans and strategies tailored to the specific needs and objectives of the organization",
  },
  {
    icon: "groups3",
    title: "Event Security",
    description:
      "Managing access control, crowd control, and emergency response procedures during corporate gatherings",
  },
  {
    icon: "important_devices",
    title: "Executive Protection",
    description:
      "Providing close protection services for corporate executives, key personnel, and visiting dignitaries",
  },
];

const email = import.meta.env.VITE_HIRING_EMAIL;

export const hiringServicesCta = {
  icon: closeProtectionCta,
  title: "Email us your CV",
  description: "Send your CV to us and we'll respond as soon as possbile",
  action: {
    route: `mailto:${email}`,
    label: `Email us at ${email}`,
  },
};
