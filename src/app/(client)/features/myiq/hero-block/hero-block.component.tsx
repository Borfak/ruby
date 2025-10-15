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
        <div className='grid grid-cols-1 items-center gap-12 lg:grid-cols-2'>
          <div className='flex flex-col'>
            <p className='inline-block bg-gradient-to-r from-[#2C3345] to-[#424D6A] bg-clip-text text-5xl font-bold text-transparent'>
              Want to Know Your
              <span className='inline-block bg-gradient-to-r from-[#27415F] via-[#007AFF] to-[#007AFF] bg-clip-text pr-2 text-transparent'>
                Real IQ Score?
              </span>
            </p>
            <p className='mb-8 text-base text-gray-600 md:text-lg'>
              Take our IQ test and unlock your path <br /> to self-discovery and development
            </p>
            <div className='mb-12 flex flex-col gap-4 sm:flex-row'>
              <Button size='md' variant='primary' className='rounded-full'>
                Start IQ Test Now →
              </Button>
              <Button size='md' variant='outline' className='rounded-full'>
                How It Works
              </Button>
            </div>

            <div className='flex items-center gap-4'>
              <div className='flex -space-x-6'>
                {['avatar1.avif', 'avatar2.avif', 'avatar3.avif', 'avatar4.avif'].map((avatar, i) => (
                  <Image
                    key={i}
                    src={`/images/${avatar}`}
                    alt={`User ${i + 1}`}
                    width={48}
                    height={48}
                    className='h-12 w-12 rounded-full border-4 border-white object-cover'
                  />
                ))}
              </div>
              <div className='flex flex-col gap-1'>
                <div className='flex items-center gap-2'>
                  <p className='text-md font-medium text-gray-700'>Excellent user reviews</p>
                  <div className='flex'>
                    {[1, 2, 3, 4, 5].map((i) => (
                      <span key={i} className='text-lg text-yellow-500'>
                        ★
                      </span>
                    ))}
                  </div>
                </div>
                <p className='text-md text-gray-700'>
                  <span className='font-semibold'>12024</span> IQ tests taken today!
                </p>
              </div>
            </div>
          </div>

          <div className='flex items-center justify-center'>
            <Image
              src='/images/graph.svg'
              alt='IQ Improvement Graph'
              width={400}
              height={300}
              className='h-full w-full object-contain p-8'
            />
          </div>
        </div>
      </Container>
    </Section>
  )
}

export default HeroSectionComponent
