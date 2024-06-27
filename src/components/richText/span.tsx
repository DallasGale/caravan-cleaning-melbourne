import { SpanProps } from './type'

const Span = ({ span }: SpanProps) => {
  if (span.marks.includes('strong')) {
    return <strong className="weight-bold">{span.text}</strong>
  }
  return <>{span.text}</>
}

export default Span
