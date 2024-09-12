import type { ImageStrapi } from '@/types'
import { apiImgs } from '@/envs'

const imagesApi = import.meta.env.PUBLIC_STRAPI_IMAGES || apiImgs

export const getStrapiImage = (url: string) => `${imagesApi}${url}`
export const getInfoFromImg = (img: ImageStrapi) => {
  
  const url = img.data ? imagesApi + img.data.attributes.url : ''
  const alt = img.data ? img.data.attributes.alternativeText : 'Imagen'
  
  return { url, alt }
}
