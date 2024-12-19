const cleanUrl = (url: string) => {
    return url.replace(/\/+/g, '/');
};

// Custom URL builder as Astro does not support this stuff out the box
export const buildUrl = (url: string, ignoreTrailingSlash = false) => {
    // Should a trailingSlash be added to urls?
    const trailingSlash = true;

    let newUrl = url;

    if (trailingSlash && !ignoreTrailingSlash) {
        if (url.endsWith('/')) return newUrl;
        return cleanUrl(`${newUrl}/`);
    }

    return cleanUrl(newUrl);
};
