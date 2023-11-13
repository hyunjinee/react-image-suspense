import { Link as ReactRouterDomLink, useLocation } from 'react-router-dom'

type Props = {
  to: string
  title: string
}

export const Link = ({ to, title }: Props) => {
  const location = useLocation()
  const isCurrent = location.pathname === to

  return (
    <ReactRouterDomLink
      className={
        'text-lg transition-all hover:drop-shadow-lg ' +
        (isCurrent ? 'font-bold' : 'text-gray-500')
      }
      to={to}
    >
      {title}
    </ReactRouterDomLink>
  )
}
