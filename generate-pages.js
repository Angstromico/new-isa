import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const backApi = 'https://staging.qantamedia.com/isa/api/graphql'

const getPages = async () => {
  try {
    const responsePages = await fetch(backApi, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        query: `
        query {
  pages {
    data {
      id 
      attributes {
        titulo
        slug
        descripcion
        imagen {
          data {
            attributes {
              url
              alternativeText
            }
          }
        }
        contenido {
          __typename
          ... on ComponentComponentesImagenPrincipal {
            mobile {
              data {
                attributes {
                  url 
                  alternativeText
                }
              }
            }
            desk {
              data {
                attributes {
                  url 
                  alternativeText
                }
              }
            }
          }
        }
      }
    }
  }
}
      `,
      }),
    })

    const { data } = await responsePages.json()
    const pagesInfo = data.pages.data

    return pagesInfo
  } catch (error) {
    console.error(error)
    return null
  }
}

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const generatePages = async () => {
  const pages = await getPages()

  if (pages) {
    const namesPages = pages.map((page) => {
      const { slug } = page.attributes
      if (slug === '/') return 'index'
      return slug.substring(1)
    })

    // Create the 'pages' directory if it doesn't exist
    const pagesDir = path.join(__dirname, 'src', 'pages')
    if (!fs.existsSync(pagesDir)) {
      fs.mkdirSync(pagesDir, { recursive: true })
    }

    namesPages.forEach((pageName) => {
      const filePath = path.join(pagesDir, `${pageName}.astro`)
      const fileContent = `---
import Page from "c/Page.astro"
---

<Page />
`

      fs.writeFileSync(filePath, fileContent)
      console.log(`Created ${filePath}`)
    })
  }
}

generatePages()
