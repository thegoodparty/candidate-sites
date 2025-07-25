import { notFound } from 'next/navigation'
import { fetchHelper } from '@/helpers/fetchHelper'
import WebsitePage from './components/WebsitePage'
import { Website } from './types/website.type'
import { getCandidateMetaData } from '../shared/utils/candidateMetaData'

interface PageProps {
  params: Promise<{ vanityPath: string }>
}

async function getWebsite({
  vanityPath,
}: {
  vanityPath: string
}): Promise<Website | null> {
  return await fetchHelper<Website>(`websites/${vanityPath}/view`)
}

export const revalidate = 3600
export const dynamic = 'force-dynamic'

export async function generateMetadata({ params }: PageProps) {
  const website = await getWebsite(await params)

  if (!website) {
    notFound()
  }

  return getCandidateMetaData(website)
}

export default async function CandidateWebsitePage({ params }: PageProps) {
  const website = await getWebsite(await params)

  if (!website) {
    notFound()
  }

  return (
    <>
      {/* 
      <WebsiteViewTracker vanityPath={website.vanityPath} />
     */}
      <WebsitePage website={website} />
    </>
  )
}
