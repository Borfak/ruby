import { Clock, HelpCircle } from 'lucide-react'
import Image from 'next/image'
import { FC } from 'react'

import { Button } from '@/shared/ui/button'
import { Card } from '@/shared/ui/card'
import { ContainerComponent as Container } from '@/shared/ui/container'
import { Section } from '@/shared/ui/section'

import { TESTS } from './avaliable-tests-block.constants'

// interface
interface IProps {}

// component
const AvailableTestsComponent: FC<Readonly<IProps>> = () => {
  // return
  return (
    <Section background='default'>
      <Container variant='section'>
        <h3 className='text-center text-4xl font-semibold'> Available Tests </h3>
        <p className='mx-auto mb-5 max-w-3xl text-center text-lg text-gray-600'>
          Each test reveals a new part of you. Start with intelligence, with more tests coming soon
        </p>
        <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4'>
          {TESTS.map((test, index) => (
            <Card key={index} padding={false} className='flex flex-col items-start p-4 text-left'>
              <div className='mb-3 flex justify-start'>
                <Image src={test.icon} alt={test.title} width={40} height={40} className='h-10 w-10' />
              </div>
              <h4 className='mb-3 text-base font-semibold'> {test.title} </h4>
              <div className='mb-4 flex items-center gap-4 text-xs text-gray-600'>
                <div className='flex items-center gap-1'>
                  <Clock className='h-3 w-3' />
                  <span> {test.duration} </span>
                </div>
                <div className='flex items-center gap-1'>
                  <HelpCircle className='h-3 w-3' />
                  <span> {test.questions} </span>
                </div>
              </div>
              <Button
                variant={test.disabled ? 'disabled' : 'primary'}
                disabled={test.disabled}
                className='w-full text-sm'
              >
                {test.buttonText}
              </Button>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  )
}

export default AvailableTestsComponent
