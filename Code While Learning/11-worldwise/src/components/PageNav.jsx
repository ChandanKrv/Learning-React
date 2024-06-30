import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './PageNav.module.css';

export default function PageNav() {
  return (
      <nav className={styles.nav}>
          <ul>
              <li>
                  <NavLink to={"/"}>Home</NavLink>
                  <NavLink to={"/pricing"}>Pricing</NavLink>
                  <NavLink to={"/product"}>Product</NavLink>
              </li>
          </ul>
    </nav>
  )
}
