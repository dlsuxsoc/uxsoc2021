// __tests__/index.test.jsx

/**
 * @jest-environment jsdom
 */

 import React from 'react'
 import { render, screen } from '@testing-library/react'
 import Index from '../pages/index'
 
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

 // content of articles is seen in the articles page
 describe('Get articles positive', () => {

    it('renders article 1\'s content in the articles page.', () => {
        const article = {
            content: { json: { noteType: 'document', data: {}, content: [
                { nodeType: 'paragraph', content: [ {
                    "nodeType": "text",
                    "value": "bla bla bla",
                  } ], data: {} }
              ] } },
            authors: null,
            title: "Article 1",
            slug: "article-1",
        };
        const article_content = getRTFContent(article);
        
        expect(article_content).toEqual("bla bla bla");
     })

     it('renders article 2\'s content in the articles page.', () => {
        const article = {
            content: { json: { noteType: 'document', data: {}, content: [
                { nodeType: 'paragraph', content: [ {
                    "nodeType": "text",
                    "value": "bla bla bla",
                  } ], data: {} }
              ] } },
            authors: null,
            title: "Article 2",
            slug: "article-2",
            imagesCollection: { items: [ [Object], [Object] ] }
        };
        const article_content = getRTFContent(article, 0, 5);
        
        expect(article_content).toEqual("bla b");
     })

     it('renders article 3\'s content in the articles page.', () => {
        const article = {
            content: { json: { noteType: 'document', data: {}, content: [
                { nodeType: 'paragraph', content: [ {
                    "nodeType": "text",
                    "value": "bla bla bla",
                  } ], data: {} }
              ] } },
            authors: null,
            title: "Article 3",
            slug: "article-3",
            imagesCollection: { items: [ [Object], [Object] ] }
        };
        const article_content = getRTFContent(article, 1, 5);
        
        expect(article_content).toEqual("la bl");
     })
})