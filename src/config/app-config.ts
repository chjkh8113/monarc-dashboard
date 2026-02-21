import packageJson from "../../package.json";

const currentYear = new Date().getFullYear();

export const APP_CONFIG = {
  name: "MONARC",
  version: packageJson.version,
  copyright: `© ${currentYear} MONARC. Empowered by Cloudinative`,
  meta: {
    title: "MONARC - Infrastructure Monitoring Dashboard",
    description:
      "MONARC is a modern infrastructure monitoring dashboard for tracking servers, services, network topology, and application performance in real-time.",
  },
};
