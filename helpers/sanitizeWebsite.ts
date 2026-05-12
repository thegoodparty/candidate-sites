import sanitizeHtml from 'sanitize-html'
import { Website } from '@/app/[vanityPath]/types/website.type'

const sanitizeOptions: sanitizeHtml.IOptions = {
  allowedTags: sanitizeHtml.defaults.allowedTags.concat(['img']),
  allowedAttributes: {
    ...sanitizeHtml.defaults.allowedAttributes,
    img: ['src', 'alt', 'width', 'height'],
  },
  allowedSchemes: ['http', 'https', 'mailto'],
  allowProtocolRelative: false,
}

export function sanitizeWebsite(website: Website): Website {
  const bio = website.content?.about?.bio
  if (!bio) return website

  return {
    ...website,
    content: {
      ...website.content,
      about: {
        ...website.content.about,
        bio: sanitizeHtml(bio, sanitizeOptions),
      },
    },
  }
}
