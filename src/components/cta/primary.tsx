import { Button } from '@mantine/core'
import { CtaProps } from './types'
import { useRouter } from 'next/navigation'

const PrimaryCta = ({
  disabled = false,
  type = 'button',
  label,
  link,
}: CtaProps) => {
  const router = useRouter()
  return (
    <Button
      disabled={disabled}
      type={type}
      classNames={{ root: 'cta__root cta__primary', label: 'cta__label' }}
      size="xl"
      onClick={link ? () => router.push(link) : null}
    >
      {label}
    </Button>
  )
}

export default PrimaryCta
