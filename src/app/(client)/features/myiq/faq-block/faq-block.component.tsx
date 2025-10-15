'use client'

import { FC } from 'react'

import { Accordion, AccordionItem } from '@heroui/react'

import { QUESTIONS } from './faq-block.constants'

// interface
interface IProps {}

// component
const FAQBlockComponent: FC<Readonly<IProps>> = () => {
  // return
  return (
    <section className='flex w-full justify-center gap-6 bg-[#F6FBFF] px-4'>
      <div className='flex max-w-7xl flex-1 flex-col items-start justify-between gap-8 px-4 py-6 md:flex-row md:py-8'>
        <p className='text-large text-dark-custom text-left font-semibold md:text-4xl'>Frequently Asked Questions</p>

        <Accordion selectionMode='multiple'>
          {QUESTIONS.map((item, index) => (
            <AccordionItem
              key={index}
              title={<span className='text-md cursor-pointer text-black md:text-lg'>{item.question}</span>}
            >
              <span className='text-medium text-black transition-transform'>{item.answer}</span>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}

export default FAQBlockComponent
