import { Button } from '@mantine/core'
import { CtaProps } from './types'
import { useRouter } from 'next/navigation'

const SecondaryCta = ({ label, link }: CtaProps) => {
  const router = useRouter()
  return (
    <Button
      classNames={{ root: 'cta__root cta__secondary', label: 'cta__label' }}
      size="xl"
      onClick={() => router.push(link)}
    >
      {label}
    </Button>
  )
}

export default SecondaryCta
