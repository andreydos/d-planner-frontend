'use client'

import { Button } from '@/components/ui/buttons/Button'
import { DASHBOARD_PAGES } from '@/config/pages-url.config'
import { useRouter } from 'next/navigation'

export default function HomePage() {
	const { push } = useRouter()
	
  return (
	  <div className='flex min-h-screen'>
		  <div
			  className='w-1/4 m-auto shadow bg-sidebar rounded-xl p-layout justify-center align-items-center flex flex-col'
		  >
			  <p className={'mb-3 text-center'}>The home page content will be available soon.</p>
			  <Button type={'button'} onClick={() => {
					push(DASHBOARD_PAGES.HOME)
			  }}>Login</Button>
		  </div>
    </div>
  );
}
