import sanitizeHtml from 'sanitize-html'
import { Element } from 'react-scroll'
import { WEBSITE_SECTIONS } from '../constants/websiteNavigation.const'

export default function AboutSection({
  activeTheme,
  content,
}: {
  activeTheme: any
  content: any
}) {
  const sanitizedBio = sanitizeHtml(content?.about?.bio || '', {
    allowedTags: sanitizeHtml.defaults.allowedTags.concat(['img']),
    allowedAttributes: {
      ...sanitizeHtml.defaults.allowedAttributes,
      img: ['src', 'alt', 'width', 'height'],
    },
    allowedSchemes: ['http', 'https', 'mailto'],
  })

  return (
    <section
      className={`mx-auto max-w-6xl py-32 px-8 ${activeTheme.bg} scroll-mt-16`}
    >
      <Element name={WEBSITE_SECTIONS.ABOUT}>
        <h2 className="font-semibold text-2xl mb-4">My Bio</h2>
        <p className="mb-16" dangerouslySetInnerHTML={{ __html: sanitizedBio }} />

        <h2 className="font-semibold text-2xl mb-4">My Key Issues</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {content?.about?.issues?.map(
            (issue: { title: string; description: string }, index: number) => (
              <div
                key={index}
                className={`px-6 py-4 rounded-lg ${activeTheme.secondary}`}
              >
                <h3 className="font-semibold text-lg">{issue.title}</h3>
                <p className="text-sm mt-1">{issue.description}</p>
              </div>
            ),
          )}          
        </div>
      </Element>
    </section>
  )
}
