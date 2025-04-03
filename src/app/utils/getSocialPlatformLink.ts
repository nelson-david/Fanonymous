type SocialPlatform =
    | "whatsapp"
    | "facebook"
    | "twitter"
    | "instagram"
    | "snapchat"
    | "linkedin"
    | "telegram"
    | "reddit";

const getShareUrl = (url: string, platform: SocialPlatform) => {
    const encodedUrl = encodeURIComponent(url);

    const shareUrls: Record<SocialPlatform, string> = {
        whatsapp: `https://wa.me/?text=${encodedUrl}`,
        facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
        twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}`,
        instagram: `https://www.instagram.com/?url=${encodedUrl}`, // Limited functionality
        snapchat: `https://www.snapchat.com/scan?attachmentUrl=${encodedUrl}`,
        linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
        telegram: `https://t.me/share/url?url=${encodedUrl}`,
        reddit: `https://www.reddit.com/submit?url=${encodedUrl}`,
    };

    return shareUrls[platform];
};

export { getShareUrl };
