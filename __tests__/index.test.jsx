// __tests__/index.test.jsx

/**
 * @jest-environment jsdom
 */

 import React from 'react'
 import { render, screen } from '@testing-library/react'
 import Index from '../pages/index'
 import getRTFContent from '../helpers/getRTFContent'
 
 describe('Landing Page', () => {
   it('renders the about section in the landing page', () => {
     render(<Index />)
 
     expect(screen.getByText('About UX', {exact: false})).toBeInTheDocument()
   })

//    it('renders the projects section in the landing page', () => {
//     render(<Index />)

//     const heading = screen.getByTestId(
//       'projects'
//     )

//     expect(heading).toBeInTheDocument()
//   })

//   it('renders the hero image in the landing page', () => {
//     render(<Index />)

//     const heading = screen.getByAltText(
//       'projects'
//     )

//     expect(heading).toBeInTheDocument()
//   })
 })