// App's External Imports
import { MetadataRoute } from "next";

const sitemap = (): MetadataRoute.Sitemap => {
  return [
    {
      priority: 1.0,
      lastModified: new Date(),
      changeFrequency: "weekly",
      url: String(process.env.NEXT_PUBLIC_BASE_URL),
    },
  ];
};

export default sitemap;
