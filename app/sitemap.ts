import type { MetadataRoute } from "next";

const BASE_URL = "https://dockbridge.co.uk";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/services",
    "/services/energy",
    "/services/water",
    "/services/business-advisory",
    "/about",
    "/insights",
    "/contact",
    "/privacy",
  ];

  return routes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/services" ? 0.9 : 0.7,
  }));
}
