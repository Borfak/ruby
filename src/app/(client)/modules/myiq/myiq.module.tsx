import { FC } from 'react'

import { AvailableTestsComponent } from '@/app/(client)/features/myiq/available-tests-block'
import { BenefitsComponent } from '@/app/(client)/features/myiq/benefits-block'
import { BoostAbilitiesComponent } from '@/app/(client)/features/myiq/boost-abilities-block'
import { CommunityComponent } from '@/app/(client)/features/myiq/community-block'
import { FAQBlockComponent } from '@/app/(client)/features/myiq/faq-block'
import { HeroSectionComponent } from '@/app/(client)/features/myiq/hero-block'
import { HowItWorksComponent } from '@/app/(client)/features/myiq/how-it-works-block'
import { PricingComponent } from '@/app/(client)/features/myiq/pricing-block'

// interface
interface IProps {}

// component
const MyIqModule: FC<Readonly<IProps>> = () => {
  return (
    <div className='min-h-screen'>
      <HeroSectionComponent />
      <HowItWorksComponent />
      <AvailableTestsComponent />
      <BoostAbilitiesComponent />
      <BenefitsComponent />
      <CommunityComponent />
      <PricingComponent />
      <FAQBlockComponent />
    </div>
  )
}

export default MyIqModule
