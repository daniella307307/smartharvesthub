function resolveYouTubeId(videoId) {
  if (!videoId) return ''
  if (typeof videoId !== 'string') return ''
  const trimmed = videoId.trim()
  if (trimmed.includes('youtube.com/') || trimmed.includes('youtu.be/')) {
    const url = new URL(trimmed.includes('http') ? trimmed : `https://${trimmed}`)
    if (url.hostname.includes('youtu.be')) {
      return url.pathname.slice(1) + url.search
    }
    if (url.searchParams.has('v')) {
      return `${url.searchParams.get('v')}${url.search}`
    }
    const path = url.pathname.split('/').pop()
    return path + url.search
  }
  return trimmed
}

export default function YouTubeEmbed({ videoId, title, frameImage, className = '' }) {
  const resolvedId = resolveYouTubeId(videoId)

  return (
    <div className={`overflow-hidden rounded-[1.5rem] border border-[#D9E8D9]/60 bg-[#000] ${className}`}>
      {resolvedId ? (
        <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
          {frameImage && (
            <img
              src={frameImage}
              alt={title || 'Video frame'}
              className="absolute inset-0 h-full w-full object-cover"
            />
          )}
          <iframe
            className="absolute inset-0 h-full w-full"
            src={`https://www.youtube.com/embed/${resolvedId}`}
            title={title || 'YouTube video player'}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      ) : (
        <div className="flex aspect-video items-center justify-center p-8 text-center text-sm uppercase tracking-[0.25em] text-[#E0E8E0]">
          YouTube video placeholder
        </div>
      )}
    </div>
  )
}
