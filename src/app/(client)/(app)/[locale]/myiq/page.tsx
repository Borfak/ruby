import { FC } from 'react'

import { MyIqModule } from '@/modules/myiq'

// interface
interface IProps {}

const MyIqPage: FC<Readonly<IProps>> = () => {
  // return
  return <MyIqModule />
}

export default MyIqPage