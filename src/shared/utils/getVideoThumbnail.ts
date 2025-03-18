export const getVideoThumbnail = (videoId: string | null) =>
  `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

export function getYouTubeVideoID(url: string) {
    if(!url) return "";
    const regex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/]+\/.*|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/;
    const match = url.match(regex);
    return match ? match[1] : null;
}
