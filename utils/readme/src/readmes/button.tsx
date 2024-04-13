import React from 'react';

import { DocProps, Docs, DocsExample } from '@rmwc/doc-utils';
import examples from '../generated-examples/button.json';
import propsSrc from '../generated-props/button.json';

import { Button } from '@rmwc/button';
import { CircularProgress } from '@rmwc/circular-progress';
import { TouchTargetWrapper } from '@rmwc/touch-target';

export default function Readme() {
  return (
    <Docs
      title="Buttons"
      lead="Buttons communicate the action that will occur when the user touches them."
      module="@rmwc/button"
      styles={[
        '@material/button/dist/mdc.button.css',
        '@rmwc/icon/icon.css',
        '@rmwc/ripple/ripple.css',
        '@material/ripple/dist/mdc.ripple.css'
      ]}
      docsLink="https://material.io/develop/web/components/buttons/"
      examples={examples}
    >
      <DocsExample label="Default">
        <Button label="Button" />
      </DocsExample>
      <DocsExample label="Icons">
        <>
          <Button label="Icon" icon="favorite" />
          <Button label="Trailing" trailingIcon="keyboard_arrow_right" />
          <Button label="Loading" icon={<CircularProgress />} />
        </>
      </DocsExample>
      <DocsExample label="Variants">
        <>
          <Button label="Raised" raised />
          <Button label="Unelevated" unelevated />
          <Button label="Outlined" outlined />
          <Button label="Dense" dense />
          <Button label="No Ripple" ripple={false} />
        </>
      </DocsExample>
      <DocsExample label="Danger">
        <>
          <Button label="Danger" danger raised />
          <Button label="Danger" danger outlined />
          <Button label="Danger" danger />
        </>
      </DocsExample>
      <DocsExample label="Theming">
        <>
          <Button
            label="With Theme"
            raised
            theme={['secondaryBg', 'onSecondary']}
          />
          {/**
            This example uses "accent" to control the color of the Ripple.
            See the documentation on Ripples.
          */}
          <Button label="With Theme" theme="secondary" />
        </>
      </DocsExample>
      <DocsExample label="Children">
        <Button>
          {/** Alternatively pass content as children */}
          As Children
        </Button>
      </DocsExample>

      <DocsExample label="Touch Target Wrapper">
        <>
          {/** Wrapping a button in TouchTargetWrapper will automatically set its `touch` prop to true. */}
          <TouchTargetWrapper>
            <Button>Touch Accessible</Button>
          </TouchTargetWrapper>
        </>
      </DocsExample>

      <DocProps
        src={propsSrc}
        components={[{ displayName: 'Button', component: Button }]}
      />
    </Docs>
  );
}

export const galleryExample = <Button raised label="Raised" />;
