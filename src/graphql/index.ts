import type { ImageStrapi } from '@/types';
import { api } from '@/envs';

interface IconText {
  icon: ImageStrapi;
  text: string;
}

type TypesContent =
  | 'ComponentComponentesImagenPrincipal'
  | 'ComponentComponentesSeccionBms'
  | 'ComponentComponentesCuadros';

interface PageContent {
  __typename: TypesContent;
  mobile: ImageStrapi;
  desk: ImageStrapi;
  btnTexto: string;
  link: string;
  titulo: string;
  barra: ImageStrapi;
  barraMobil: ImageStrapi;
  texto: string;
  cuadro1: ImageStrapi;
  cuadro2: ImageStrapi;
  cuadro3: ImageStrapi;
}

export interface Pages {
  attributes: {
    titulo: string;
    slug: string;
    descripcion?: string;
    imagen?: ImageStrapi;
    contenido?: PageContent[];
  };
}

export interface FooterInfo {
  line: ImageStrapi;
  footerInfo1: IconText;
  footerInfo2: IconText;
  links: { texto: string; link: string }[];
}

export interface ServiceInfo {
  title: string;
  firstText: string;
  mainImage: ImageStrapi;
  carouselImages: ImageStrapi[];
  secondText: string;
}

const getHeader = async () => {
  try {
    const responseHeader = await fetch(api, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        query: `
        query {
          header {
            data {
              attributes {
                logo {
                  data {
                    attributes {
                      url 
                      alternativeText
                    }
                  }
                }
                logoMobil {
                  data {
                    attributes {
                      url 
                      alternativeText
                    }
                  }
                }
                botonHamburguesa {
                  data {
                    attributes {
                      url 
                      alternativeText
                    }
                  }
                }
                xBtn {
                  data {
                    attributes {
                      url 
                      alternativeText
                    }
                  }
                }
                links {
                  texto
                  link
                }
                linksSociales {
                  link 
                  icono {
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
      `,
      }),
    });

    const { data } = await responseHeader.json();
    const headerInfo = data.header.data.attributes;

    return headerInfo;
  } catch (error) {
    return null;
  }
};

const getFooter = async () => {
  try {
    const responseFooter = await fetch(api, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        query: `
        query {
          footer {
            data {
              attributes {
                line {
                  data {
                    attributes {
                      url
                      alternativeText
                    }
                  }
                }
                footerInfo1 {
                  icon {
                    data {
                      attributes {
                        url 
                        alternativeText
                      }
                    }
                  }
                  text
                }
                footerInfo2 {
                  icon {
                    data {
                      attributes {
                        url 
                        alternativeText
                      }
                    }
                  }
                  text
                }
                links {
                  texto
                  link
                }
              }
            }
          }
        }
      `,
      }),
    });

    const { data } = await responseFooter.json();
    const footerInfo: FooterInfo = data.footer.data.attributes;

    return footerInfo;
  } catch (error) {
    console.error(error);
    return null;
  }
};

const getPages = async (slug: String) => {
  try {
    const responsePages = await fetch(api, {
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
            images_modal {
              data {
                attributes {
                  url
                  alternativeText
                }
              }
            }
            images_modal_mobile {
              data {
                attributes {
                  url
                  alternativeText
                }
              }
            }
            btnTexto
            link
          }
          ... on ComponentComponentesSeccionBms {
            titulo
            barra {
              data {
                attributes {
                  url
                  alternativeText
                }
              }
            }
            texto
            barraMobil {
              data {
                attributes {
                  url
                  alternativeText
                }
              }
            }
          }
           ... on ComponentComponentesSectionRows {
            image {
              data {
                attributes {
                  url
                  alternativeText
                }
              }
            }
            title1
            title2
            title3
            text1
            text2
            text3
          }
          ... on ComponentComponentesMainCards {
            title
            info
            icon {
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
    });

    const { data } = await responsePages.json();
    const pages = data.pages.data;
    
    const pageInfo = pages.find(page => {
      if(slug === undefined) return page.attributes.slug === '/';
      return page.attributes.slug === slug;
     });

    return pageInfo;
  } catch (error) {
    console.error(error);
    return null;
  }
};

const getPagesAll = async () => {
  try {
    const responsePages = await fetch(api, {
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
        mapSection
        Nosotros
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
            btnTexto
            link
          }
          ... on ComponentComponentesSeccionBms {
            titulo
            barra {
              data {
                attributes {
                  url 
                  alternativeText
                }
              }
            }
            texto
            barraMobil {
              data {
                attributes {
                  url 
                  alternativeText
                }
              }
            }
          }
          ... on ComponentComponentesValuesCards {
            Title
            Description
            Image {
              data {
                attributes {
                  url
                  alternativeText
                }
              }
            }
            Image_Orientation
          }
          ... on ComponentComponentesJobCard {
            Title
            Image {
              data {
                attributes {
                  url
                  alternativeText
                }
              }
            }
            Icon {
              data {
                attributes {
                  url
                  alternativeText
                }
              }
            }
            Description
            email_name
          }
        }
        slider {
          title
          text
          btnText
          carousel_images {
            data {
              attributes {
                url
                alternativeText
              }
            }
          }
        }
        Circles_Nosotros {
          title
          text
          btnText
          carousel_images {
            data {
              attributes {
                url
                alternativeText
              }
            }
          }
        }
        BackgroundImage_Main_Services {
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
  servicesInfos {
    data {
      attributes {
        Title
        FirstText
        MainImage {
          data {
            attributes {
              url
              alternativeText
            }
          }
        }
        CarruselImage {
          data {
            attributes {
              url
              alternativeText
            }
          }
        }
        SecondText
      }
    }
  }
}
      `,
      }),
    });

    const { data } = await responsePages.json();
    const pages = data.pages.data;
    const servicesInfo = data.servicesInfos.data.map((service) => service.attributes);

    const params = pages.map((page) => {
      if (page.attributes.slug === '/') {
        page.attributes.slug = 'home';
      }

      return {
        params: {
          slug: page.attributes.slug,
        },
        props: {
          pageInfo: page,
          servicesInfo: servicesInfo,
        },
      };
    });
    return params;
  } catch (error) {
    console.error(error);
    return null;
  }
};

const getServiceInfo = async () => {
  try {
    const responseServiceInfo = await fetch(api, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        query: `
        query {
          servicesInfos {
            data {
              attributes {
                Title
                FirstText
                MainImage {
                  data {
                    attributes {
                      url
                      alternativeText
                    }
                  }
                }
                CarruselImage {
                  data {
                    attributes {
                      url
                      alternativeText
                    }
                  }
                }
                SecondText
              }
            }
          }
        }
      `,
      }),
    });

    const { data } = await responseServiceInfo.json();
    const servicesInfo = data.servicesInfos.data.map((service) => service.attributes);

    return servicesInfo;
  } catch (error) {
    console.error(error);
    return null;
  }
};


export { getHeader, getFooter, getPages, getPagesAll, getServiceInfo };

