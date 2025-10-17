import { FC } from 'react'

import { Card } from '@/shared/ui/card'
import { ContainerComponent as Container } from '@/shared/ui/container'
import { Section } from '@/shared/ui/section'

import { BOOST_ABILITIES } from './boost-abilities-block.constants'

// interface
interface IProps {}

// component
const BoostAbilitiesBlockComponent: FC<Readonly<IProps>> = () => {
  // return
  return (
    <Section background='white'>
      <Container variant='section'>
        <h3 className='text-center text-4xl font-semibold'>Boost Your Abilities</h3>

        <p className='mb-4 text-center text-gray-600'>Unlock your potential with our comprehensive training package</p>

        <div className='grid grid-cols-1 gap-6 md:grid-cols-3'>
          {BOOST_ABILITIES.map((ability, index) => (
            <Card key={index}>
              <div className='mb-3 flex items-center gap-3'>
                <div className='flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-white p-1'>
                  <div className='flex h-full w-full items-center justify-center rounded-full bg-white text-2xl font-bold text-blue-600'>
                    {ability.number}
                  </div>
                </div>

                <h4 className='text-xl font-semibold'>{ability.title}</h4>
              </div>

              <ul className='space-y-2'>
                {ability.features.map((feature, idx) => (
                  <li key={idx} className='flex items-start gap-2'>
                    <span className='text-2xl text-blue-500'>✓</span>
                    <span className='text-gray-700'>{feature}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  )
}

export default BoostAbilitiesBlockComponent
