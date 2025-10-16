import Image from 'next/image'
import { FC } from 'react'

import { Card } from '@/shared/ui/card'
import { ContainerComponent as Container } from '@/shared/ui/container'
import { Section } from '@/shared/ui/section'

import { BENEFITS } from './benefits-block.constants'

// interface
interface IProps {}

// component
const BenefitsComponent: FC<Readonly<IProps>> = () => {
  // return
  return (
    <Section background='default'>
      <Container variant='section'>
        <h4 className='mb-8 text-center text-3xl font-semibold'>What Will You Get</h4>
        <div className='flex gap-4 overflow-x-auto pb-4'>
          {BENEFITS.map((benefit, index) => (
            <Card key={index} className='flex min-w-[200px] items-center p-6'>
              <div className='flex flex-row gap-3'>
                <div className='flex-shrink-0'>
                  <Image src='/icons/check.svg' alt='Check' width={24} height={24} className='h-6 w-6' />
                </div>
                <p className='text-sm leading-snug text-gray-700'> {benefit.description} </p>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  )
}

export default BenefitsComponent
