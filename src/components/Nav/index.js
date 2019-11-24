import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import { useScreenQuery } from 'hooks'
import DesktopNav from './Desktop'
import MobileNav from './Mobile'

export { NavLink } from './styles'

export default function Nav(props) {
  const { nav } = useStaticQuery(graphql`
    {
      nav: allNavYaml {
        nav: nodes {
          title
          url
        }
      }
    }
  `)
  return useScreenQuery(`maxPhablet`) ? (
    <MobileNav {...nav} {...props} />
  ) : (
    <DesktopNav {...nav} {...props} />
  )
}
