import { Metadata } from 'next'

import Contact from '@/components/Contact'
import AppBreadcrumb from '@/components/ui/AppBreadcrumb'

export const metadata: Metadata = {
  title: 'Contact Page | Free Next.js Template for Startup and SaaS',
  description: 'This is Contact Page for Startup Nextjs Template',
  // other metadata
}

const ContactPage = () => {
  return (
    <>
      <AppBreadcrumb
        pageName="Contact Page"
        description="You can contact us by filling the following form or through social media."
      />

      <Contact />
    </>
  )
}

export default ContactPage
