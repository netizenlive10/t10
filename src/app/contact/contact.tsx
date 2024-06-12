import { Metadata } from 'next'

import Contact from '@/components/Contact'
import AppBreadcrumb from '@/components/ui/AppBreadcrumb'

export const metadata: Metadata = {
  title:
    'Contact Page | लोकनेते विलासराव देशमुख क्रिकेट चॅम्पियनशीप ग्रामीण टी 10 जिल्‍हास्‍तरीय क्रिकेट स्‍पर्धा.',
  description: 'This is Contact Page',
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
