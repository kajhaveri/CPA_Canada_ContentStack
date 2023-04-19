import React from 'react';
import parse from "html-react-parser";

type ShopifyCollectionsProps = {
  collections:{
    type:string,
    data:[{
      "__typename":string
      "id":string
      "handle":string
      "description":string
      "descriptionHtml":string
      "updatedAt":string
      "title":string
      image:{
        "id":string
        "src":string
        "altText":string
      }
      type:{
        "name":string
        "kind":string
      }
    }]
  },
  display_collection_image:boolean,
}
export default function ShopifyCollections({ collections, display_collection_image }: ShopifyCollectionsProps) {

  return (
    <div className='community-section'>
    <div className='home-featured-blogs'>
      {collections?.data.map((collection) => (
          <div className='featured-blog' key={collection.id}>
            { display_collection_image && collection.image && collection.image.src &&
                <img
                    src={collection.image.src}
                    alt={collection.image.altText}
                    className='blog-post-img'
                />
            }
            <div className='featured-content'>
              {collection.title && <h3 >{collection.title}</h3>}

              <div>
                {collection.description && parse(collection.description.slice(0, 300))}
              </div>

              {collection.handle  && (
                  <a href={'https://cpac-demo.myshopify.com/collections/' + collection.handle} className='blogpost-readmore'>
                    {'Read More -->'}
                  </a>
              )}
            </div>
          </div>
      ))}
    </div>
  </div>
  );
}
