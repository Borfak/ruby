import { FC } from 'react'

import { Section } from '@/app/(client)/shared/ui'
import { ContainerComponent } from '@/app/(client)/shared/ui/container'
import { ResultCardComponent } from '@/app/(client)/shared/ui/result-card'

import { RESULTS } from './results-block.constants'

// interface
interface IProps {}

// component
const ResultsBlockComponent: FC<Readonly<IProps>> = () => {
  // return
  return (
    <Section background='white'>
      <ContainerComponent variant='section'>
        <h3 className='text-dark-custom text-center text-lg font-semibold md:text-4xl'>Latest results</h3>

        <div className='grid w-full grid-cols-1 gap-3 pt-6 lg:grid-cols-2 lg:gap-x-4'>
          {RESULTS.map((card, index) => {
            if (index >= 4) {
              return (
                <ResultCardComponent
                  key={index}
                  flag={card.flag}
                  name={card.name}
                  iq={card.iq}
                  className={`hidden lg:flex ${[2, 3, 6, 7].includes(index) ? 'lg:bg-[#F6FBFF]' : 'lg:bg-white'}`}
                />
              )
            }

            const mobileBg = index % 2 === 1 ? 'max-lg:bg-[#F6FBFF]' : 'max-lg:bg-white'
            const desktopBg = [2, 3, 6, 7].includes(index) ? 'lg:bg-[#F6FBFF]' : 'lg:bg-white'

            return (
              <ResultCardComponent
                key={index}
                flag={card.flag}
                name={card.name}
                iq={card.iq}
                className={`${mobileBg} ${desktopBg}`}
              />
            )
          })}
        </div>
      </ContainerComponent>
    </Section>
  )
}

export default ResultsBlockComponent
