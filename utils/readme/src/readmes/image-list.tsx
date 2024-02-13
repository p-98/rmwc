import React from 'react';

import {
  DocProps,
  Docs,
  DocsExample,
  DocsP,
  DocsSubtitle
} from '@rmwc/doc-utils';
import examples from '../generated-examples/image-list.json';
import propsSrc from '../generated-props/image-list.json';

import {
  ImageList,
  ImageListImage,
  ImageListImageAspectContainer,
  ImageListItem,
  ImageListLabel,
  ImageListSupporting
} from '@rmwc/image-list';

export default function Readme() {
  return (
    <Docs
      title="Image Lists"
      lead="MDC Image List provides a RTL-aware Material Design image list component, representing an evolution of the Material Design Grid List spec. An Image List consists of several items, each containing an image and optionally supporting content (i.e. a text label)."
      module="@rmwc/image-list"
      styles={['@material/image-list/dist/mdc.image-list.css']}
      docsLink="https://material.io/develop/web/components/image-lists/"
      examples={examples}
    >
      <DocsSubtitle>Standard Layout</DocsSubtitle>
      <DocsP>
        Image Lists will give you basic layout, but you will have to use inline
        styling or CSS to achieve things like spacing, aspect ratio, and column
        count. Check out the inline styles below as examples.
      </DocsP>
      <DocsExample label="Default">
        <ImageList>
          {[
            { src: 'images/photos/3x2-1.jpg', alt: 'image of building' },
            { src: 'images/photos/2x3-1.jpg', alt: 'image of wall' },
            { src: 'images/photos/3x2-4.jpg', alt: 'image of building' },
            { src: 'images/photos/3x2-5.jpg', alt: 'image of dog' },
            { src: 'images/photos/3x2-6.jpg', alt: 'image of roses' },
            { src: 'images/photos/2x3-2.jpg', alt: 'image of landscape' },
            { src: 'images/photos/3x2-8.jpg', alt: 'image of cafe' },
            { src: 'images/photos/3x2-11.jpg', alt: 'image of city' },
            { src: 'images/photos/2x3-5.jpg', alt: 'image of swing' },
            { src: 'images/photos/3x2-13.jpg', alt: 'image of oranges' },
            { src: 'images/photos/3x2-14.jpg', alt: 'image of dog' },
            { src: 'images/photos/2x3-6.jpg', alt: 'image of road' },
            { src: 'images/photos/3x2-15.jpg', alt: 'image of bus' },
            { src: 'images/photos/3x2-16.jpg', alt: 'image of cafe' },
            { src: 'images/photos/2x3-7.jpg', alt: 'image of basketball' }
          ].map((img) => (
            <ImageListItem
              key={img.src}
              style={{ margin: '2px', width: 'calc(100% / 5 - 4.2px)' }}
            >
              <ImageListImageAspectContainer
                style={{ paddingBottom: 'calc(100% / 1.5)' }}
              >
                <ImageListImage src={img.src} alt={img.alt} />
              </ImageListImageAspectContainer>
              <ImageListSupporting>
                <ImageListLabel>Text label</ImageListLabel>
              </ImageListSupporting>
            </ImageListItem>
          ))}
        </ImageList>
      </DocsExample>

      <DocsSubtitle>Masonry Layout</DocsSubtitle>
      <DocsExample>
        <ImageList
          masonry
          withTextProtection
          style={{
            columnCount: 5,
            columnGap: '16px',
            maxWidth: '1000px'
          }}
        >
          {[
            { src: 'images/photos/3x2-1.jpg', alt: 'image of building' },
            { src: 'images/photos/2x3-1.jpg', alt: 'image of wall' },
            { src: 'images/photos/3x2-4.jpg', alt: 'image of building' },
            { src: 'images/photos/3x2-5.jpg', alt: 'image of dog' },
            { src: 'images/photos/2x3-5.jpg', alt: 'image of swing' },
            { src: 'images/photos/3x2-6.jpg', alt: 'image of roses' },
            { src: 'images/photos/2x3-2.jpg', alt: 'image of landscape' },
            { src: 'images/photos/3x2-8.jpg', alt: 'image of cafe' },
            { src: 'images/photos/3x2-11.jpg', alt: 'image of city' },
            { src: 'images/photos/3x2-13.jpg', alt: 'image of oranges' },
            { src: 'images/photos/3x2-14.jpg', alt: 'image of dog' },
            { src: 'images/photos/2x3-6.jpg', alt: 'image of road' },
            { src: 'images/photos/3x2-15.jpg', alt: 'image of bus' },
            { src: 'images/photos/2x3-7.jpg', alt: 'image of basketball' },
            { src: 'images/photos/3x2-16.jpg', alt: 'image of cafe' }
          ].map((img) => (
            <ImageListItem key={img.src} style={{ marginBottom: '16px' }}>
              <ImageListImage src={img.src} alt={img.alt} />
              <ImageListSupporting>
                <ImageListLabel>Text label</ImageListLabel>
              </ImageListSupporting>
            </ImageListItem>
          ))}
        </ImageList>
      </DocsExample>

      <DocProps
        src={propsSrc}
        components={[
          { displayName: 'ImageList', component: ImageList },
          { displayName: 'ImageListItem', component: ImageListItem },
          {
            displayName: 'ImageListImageAspectContainer',
            component: ImageListImageAspectContainer
          },
          { displayName: 'ImageListImage', component: ImageListImage },
          {
            displayName: 'ImageListSupporting',
            component: ImageListSupporting
          },
          { displayName: 'ImageListLabel', component: ImageListLabel }
        ]}
      />
    </Docs>
  );
}

export const galleryExample = (
  <ImageList
    masonry
    withTextProtection
    style={{
      transform: 'scale(0.5)',
      columnCount: 3,
      columnGap: '16px',
      maxWidth: '1000px'
    }}
  >
    {[
      'images/photos/3x2-1.jpg',
      'images/photos/2x3-1.jpg',
      'images/photos/3x2-4.jpg',
      'images/photos/3x2-5.jpg',
      'images/photos/2x3-5.jpg',
      'images/photos/3x2-6.jpg',
      'images/photos/2x3-2.jpg',
      'images/photos/3x2-8.jpg',
      'images/photos/3x2-11.jpg',
      'images/photos/3x2-13.jpg',
      'images/photos/3x2-14.jpg'
    ].map((src) => (
      <ImageListItem key={src} style={{ marginBottom: '16px' }}>
        <ImageListImage src={src} />
      </ImageListItem>
    ))}
  </ImageList>
);
