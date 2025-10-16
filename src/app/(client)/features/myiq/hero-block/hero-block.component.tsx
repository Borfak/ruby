'use client'

import Image from 'next/image'
import { FC } from 'react'

import { Button } from '@/shared/ui/button'
import { ContainerComponent as Container } from '@/shared/ui/container'
import { Section } from '@/shared/ui/section'

// interface
interface IProps {}

// component
const HeroSectionComponent: FC<Readonly<IProps>> = () => {
  // return
  return (
    <Section background='gradient' className='pt-20 pb-32'>
      <Container variant='section'>
        <div className='grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12'>
          <div className='order-1 flex items-center justify-center lg:order-2'>
            <Image
              src='/images/graph.svg'
              alt='IQ Improvement Graph'
              width={400}
              height={300}
              className='h-full w-full max-w-sm object-contain p-4 lg:max-w-none lg:p-8'
            />
          </div>

          <div className='order-2 flex flex-col lg:order-1'>
            <p className='inline-block bg-gradient-to-r from-[#2C3345] to-[#424D6A] bg-clip-text text-3xl font-bold text-transparent md:text-4xl lg:text-5xl'>
              Want to Know Your
              <span className='inline-block bg-gradient-to-r from-[#27415F] via-[#007AFF] to-[#007AFF] bg-clip-text pr-2 text-transparent'>
                Real IQ Score?
              </span>
            </p>
            <p className='mb-6 text-base text-gray-600 md:mb-8 md:text-lg'>
              Take our IQ test and unlock your path <br className='hidden sm:block' /> to self-discovery and development
            </p>
            <div className='mb-8 flex flex-col gap-4 sm:flex-row lg:mb-12'>
              <Button size='md' variant='primary' className='rounded-full'>
                Start IQ Test Now →
              </Button>
              <Button size='md' variant='outline' className='rounded-full'>
                How It Works
              </Button>
            </div>

            <div className='flex flex-col gap-4 sm:flex-row sm:items-center'>
              <div className='flex -space-x-4 sm:-space-x-6'>
                {['avatar1.avif', 'avatar2.avif', 'avatar3.avif', 'avatar4.avif'].map((avatar, i) => (
                  <Image
                    key={i}
                    src={`/images/${avatar}`}
                    alt={`User ${i + 1}`}
                    width={48}
                    height={48}
                    className='h-10 w-10 rounded-full border-2 border-white object-cover sm:h-12 sm:w-12 sm:border-4'
                  />
                ))}
              </div>
              <div className='flex flex-col gap-1'>
                <div className='flex flex-col gap-2 sm:flex-row sm:items-center'>
                  <p className='text-sm font-medium text-gray-700 sm:text-base'>Excellent user reviews</p>
                  <div className='flex'>
                    {[1, 2, 3, 4, 5].map((i) => (
                      <span key={i} className='text-base text-yellow-500 sm:text-lg'>
                        ★
                      </span>
                    ))}
                  </div>
                </div>
                <p className='text-sm text-gray-700 sm:text-base'>
                  <span className='font-semibold'>12024</span> IQ tests taken today!
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}

export default HeroSectionComponent
