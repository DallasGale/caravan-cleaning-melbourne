import * as React from 'react'
import { motion } from 'framer-motion'
import { MenuItem } from '../menuItem'
import { NavigationContent } from '~/lib/sanity.queries'

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
}

interface MobileNavProps extends NavigationContent {
  onClick: () => void
}

export const MobileNav = ({ navItems, phone, onClick }: MobileNavProps) => {
  console.log('phone', phone, phone.replace(/\s+/g, ''))
  return (
    <motion.ul
      variants={variants}
      className="mobile-nav__ul"
      suppressHydrationWarning={true}
    >
      {navItems.map(({ name, link }) => (
        <MenuItem key={name} name={name} link={link} onClick={onClick} />
      ))}
      <li className="nav__list-item enquire">
        <MenuItem name="Enquire Now" link="/#enquire" onClick={onClick} />
      </li>
      <MenuItem
        name={phone}
        link={`tel:${phone.replace(/\s+/g, '')}`}
        onClick={onClick}
      />
    </motion.ul>
  )
}
