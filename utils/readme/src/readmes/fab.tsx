import React from 'react';

import { DocProps, Docs, DocsExample } from '@rmwc/doc-utils';
import examples from '../generated-examples/fab.json';
import propsSrc from '../generated-props/fab.json';

import { Fab } from '@rmwc/fab';

export default function Readme() {
  return (
    <Docs
      title="Fabs"
      lead="A floating action button (FAB) represents the primary action of a screen."
      module="@rmwc/fab"
      styles={[
        '@material/fab/dist/mdc.fab.css',
        '@rmwc/icon/icon.css',
        '@material/ripple/dist/mdc.ripple.css',
        '@rmwc/ripple/ripple.css'
      ]}
      docsLink="https://material.io/develop/web/components/buttons/floating-action-buttons/"
      examples={examples}
    >
      <DocsExample label="Default">
        <Fab icon="favorite" />
      </DocsExample>
      <DocsExample label="Mini">
        <Fab icon="favorite" mini />
      </DocsExample>
      <DocsExample label="Extended">
        <>
          <Fab icon="add" label="Create" />
          <Fab trailingIcon="add" label="Create" />
          <Fab label="Label only" />
        </>
      </DocsExample>
      <DocsExample label="Theming">
        <>
          <Fab icon="favorite_outline" theme={['primaryBg', 'onPrimary']} />
          <Fab
            icon="delete"
            style={{ backgroundColor: 'var(--mdc-theme-error)' }}
            theme={['onError']}
          />
        </>
      </DocsExample>

      <DocProps
        src={propsSrc}
        components={[{ displayName: 'Fab', component: Fab }]}
      />
    </Docs>
  );
}

export const galleryExample = <Fab icon="add" />;
