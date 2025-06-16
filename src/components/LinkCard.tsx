export type LinkItem = {
  id: string;
  label: string;
  desc: string;
  href: string;
  bg: string; // tailwind class name
};

export const LinkCard = ({ label, desc, href, bg }: LinkItem) => (
  <a
    href={href}
    className={`w-80 max-w-full ${bg} rounded-3xl px-6 py-4 mb-4 shadow hover:opacity-90 transition`}
  >
    <h2 className="text-xl font-bold mb-1">{label}</h2>
    <p className="text-sm text-gray-700 whitespace-pre-line">{desc}</p>
  </a>
);
