import Image from 'next/image'
import { FC } from 'react'

import { Button } from '@/shared/ui/button'
import { ContainerComponent as Container } from '@/shared/ui/container'
import { Section } from '@/shared/ui/section'

import { COMMUNITY_ICONS } from './community-block.constants'

// interface
interface IProps {}

// component
const CommunityBlockComponent: FC<Readonly<IProps>> = () => {
  // return
  return (
    <Section background='default'>
      <Container variant='section'>
        <div className='flex max-w-7xl flex-1 flex-col items-center justify-between gap-8 px-4 py-6 md:flex-row md:py-8'>
          <div className='flex flex-1 flex-col items-start gap-1'>
            <h3 className='text-large text-dark-custom text-center font-semibold md:text-4xl'>Community</h3>

            <p className='hidden text-lg text-gray-600 lg:inline-block'>
              Follow us on social media for daily quizzes, challenges and brain teasers to keep your mind sharp
            </p>

            <p className='text-sm lg:hidden'>Follow us on social media</p>
          </div>

          <div className='flex w-full flex-1 justify-end gap-3 md:w-auto'>
            {COMMUNITY_ICONS.map((item, index) => (
              <Button
                variant='outlineSecondary'
                key={index}
                className='border-primary shadow-default/50 w-full border-1 bg-white shadow-lg outline-transparent md:w-auto'
              >
                <Image src={item.icon} alt='Questions icon' height={30} width={30} className='flex-1 rounded-xs p-1' />
              </Button>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  )
}

export default CommunityBlockComponent
