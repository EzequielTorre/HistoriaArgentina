'use client';

export default function ShareButtons({ title, slug }: { title: string; slug: string }) {
  const url = typeof window !== 'undefined' ? `${window.location.origin}/posts/${slug}` : '';
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const shareLinks = [
    {
      name: 'Twitter',
      icon: 'bi-twitter-x',
      url: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`,
      color: 'btn-dark'
    },
    {
      name: 'Facebook',
      icon: 'bi-facebook',
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      color: 'btn-primary'
    },
    {
      name: 'WhatsApp',
      icon: 'bi-whatsapp',
      url: `https://wa.me/?text=${encodedTitle}%20${encodedUrl}`,
      color: 'btn-success'
    },
    {
      name: 'LinkedIn',
      icon: 'bi-linkedin',
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
      color: 'btn-info'
    }
  ];

  return (
    <div className="d-flex gap-2 flex-wrap">
      <span className="fw-bold align-self-center me-2 text-muted">Compartir:</span>
      {shareLinks.map((link) => (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`btn btn-sm ${link.color} text-white d-flex align-items-center gap-2`}
          aria-label={`Compartir en ${link.name}`}
        >
          <i className={`bi ${link.icon}`}></i>
          <span className="d-none d-md-inline">{link.name}</span>
        </a>
      ))}
    </div>
  );
}
