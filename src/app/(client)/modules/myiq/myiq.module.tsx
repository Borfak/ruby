import { FC } from 'react'

import { AvailableTestsBlockComponent } from '@/features/myiq/available-tests-block'
import { BenefitsBlockComponent } from '@/features/myiq/benefits-block'
import { BoostAbilitiesBlockComponent } from '@/features/myiq/boost-abilities-block'
import { CommunityBlockComponent } from '@/features/myiq/community-block'
import { FAQBlockComponent } from '@/features/myiq/faq-block'
import { HeroBlockComponent } from '@/features/myiq/hero-block'
import { HowItWorksBlockComponent } from '@/features/myiq/how-it-works-block'
import { PricingBlockComponent } from '@/features/myiq/pricing-block'
import { ResultsBlockComponent } from '@/features/myiq/results-block'
import { MyIqHeaderComponent } from '@/widgets/myiq-header'

// interface
interface IProps {}

// component
const MyIqModule: FC<Readonly<IProps>> = () => {
  // return
  return (
    <>
      <MyIqHeaderComponent />
      <HeroBlockComponent />
      <HowItWorksBlockComponent />
      <AvailableTestsBlockComponent />
      <BoostAbilitiesBlockComponent />
      <BenefitsBlockComponent />
      <CommunityBlockComponent />
      <PricingBlockComponent />
      <FAQBlockComponent />
      <ResultsBlockComponent />
    </>
  )
}

export default MyIqModule
