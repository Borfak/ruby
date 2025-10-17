import Image from 'next/image'
import { FC } from 'react'

import { ContainerComponent as Container } from '@/shared/ui/container'
import { Section } from '@/shared/ui/section'

import { STEPS } from './how-it-works-block.constants'

// interface
interface IProps {}

// component
const HowItWorksBlockComponent: FC<Readonly<IProps>> = () => {
  // return
  return (
    <Section background='white' className='-mt-16'>
      <Container variant='section'>
        <h3 className='mb-8 text-center text-4xl font-semibold'>How it Works</h3>

        <div className='grid grid-cols-1 gap-8 md:grid-cols-3'>
          {STEPS.map((step, index) => (
            <div key={index} className='rounded-xl border-1 border-blue-100 bg-white p-6 text-left'>
              <div className='mb-4 flex justify-start'>
                <Image src={step.icon} alt={step.title} width={48} height={48} className='h-12 w-12' />
              </div>
              <h4 className='mb-2 text-xl font-semibold'>{step.title}</h4>
              <p className='text-sm text-gray-600'>{step.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  )
}

export default HowItWorksBlockComponent
