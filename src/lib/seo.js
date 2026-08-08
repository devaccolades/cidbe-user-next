export function buildSeo(responseOrData, path = '/', options = {}) {
  // responseOrData may be: { data: [{...}] } or { ...meta... } or an array
  let obj = {};
  if (!responseOrData) obj = {};
  else if (Array.isArray(responseOrData)) obj = responseOrData[0] || {};
  else if (responseOrData.data && Array.isArray(responseOrData.data)) obj = responseOrData.data[0] || {};
  else if (responseOrData.data && typeof responseOrData.data === 'object') obj = responseOrData.data;
  else obj = responseOrData;

  const title = obj?.meta_title || obj?.title || options.fallbackTitle || '';
  const description = obj?.meta_description || obj?.description || options.fallbackDescription || '';
  const keywords = obj?.meta_keywords || options.fallbackKeywords || '';
  const canonical = options.canonical || `https://cidbi.com${path}`;

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default buildSeo;
