import { Check } from 'lucide-react'
import { FC } from 'react'

import { Divider } from '@heroui/divider'

import { Button } from '@/shared/ui/button'
import { Card } from '@/shared/ui/card'
import { ContainerComponent as Container } from '@/shared/ui/container'
import { Section } from '@/shared/ui/section'

import { PLANS } from './pricing-block.constants'

// interface
interface IProps {}

// component
const PricingBlockComponent: FC<Readonly<IProps>> = () => {
  // return
  return (
    <Section background='white'>
      <Container variant='section'>
        <h3 className='mb-4 text-center text-4xl font-semibold'>Explore our plans</h3>
        <p className='mx-auto mb-12 max-w-2xl text-center text-gray-600'>
          Discover our flexible offers and choose the one that best suits your learning and personal development
          journey.
        </p>

        <div className='mx-auto grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-2'>
          {PLANS.map((plan, index) => (
            <Card key={index} className='shadow-lg'>
              <h2 className='mb-2 text-xl font-semibold'>{plan.title}</h2>
              <Divider className='my-4 bg-black' />

              <div className='mb-6'>
                <span className='text-4xl font-bold'>₴{plan.price}</span>
                <span className='text-gray-400'>{plan.period}</span>
              </div>

              <ul className='mb-6 space-y-3'>
                {plan.features.map((feature, idx) => (
                  <li key={idx} className='flex items-start gap-2'>
                    <Check className='mt-1 h-6 w-6 text-blue-500' />
                    <span className='text-gray-700'>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button variant='primary' className='w-full'>
                Get started
              </Button>
            </Card>
          ))}
        </div>

        <p className='text-md mt-8 text-center text-gray-600'>
          *Visit our <span className='cursor-pointer text-gray-600 underline'>pricing page</span> to find out more
          details.
        </p>
      </Container>
    </Section>
  )
}

export default PricingBlockComponent
