import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import SingleComponent from '../../documentation/SingleComponent';
import Checkbox from '../Checkbox';

const checkboxEvents = {
  className: 'some-class',
  onChange: action('onChange'),
};

storiesOf('Checkbox', module)
  .addDecorator(story => (
    <SingleComponent pageWidth="wide">{story()}</SingleComponent>
  ))
  .addWithInfo(
    'enabled checked',
    `
      Checkboxes are used when there is a list of options and the user may select multiple options, including all or none.
      The example below shows how the Checkbox component can be used as an uncontrolled component that is initially checked
      by setting the defaultChecked property to true. To use the component in a controlled way, you should set the
      checked property instead.
    `,
    () => (
      <fieldset className="wfp--fieldset">
        <legend className="wfp--label">Checkbox heading</legend>
        <Checkbox
          defaultChecked
          {...checkboxEvents}
          id="checkbox-label-1"
          labelText="Checkbox label 1"
        />
        <Checkbox
          defaultChecked
          {...checkboxEvents}
          id="checkbox-label-2"
          labelText="Checkbox label 2"
        />
      </fieldset>
    )
  )
  .addWithInfo(
    'enabled unchecked',
    `
      Checkboxes are used when there is a list of options and the user may select multiple options, including all or none.
      The example below shows how the Checkbox component can be used as an uncontrolled component that is initially
      unchecked. To use the component in a controlled way, you should set the checked property instead.
    `,
    () => (
      <fieldset className="wfp--fieldset">
        <legend className="wfp--label">Checkbox heading</legend>
        <Checkbox
          {...checkboxEvents}
          id="checkbox-label-1"
          labelText="Checkbox label 1"
        />
        <Checkbox
          {...checkboxEvents}
          id="checkbox-label-2"
          labelText="Checkbox label 2"
        />
      </fieldset>
    )
  )
  .addWithInfo(
    'enabled indeterminate',
    `
      Checkboxes are used when there is a list of options and the user may select multiple options, including all or none.
      The example below shows how the Checkbox component can be used as a controlled component that is initially
      indeterminate.
    `,
    () => (
      <fieldset className="wfp--fieldset">
        <legend className="wfp--label">Checkbox heading</legend>
        <Checkbox
          {...checkboxEvents}
          id="checkbox-label-1"
          labelText="Checkbox label 1"
          indeterminate
        />
        <Checkbox
          {...checkboxEvents}
          id="checkbox-label-2"
          labelText="Checkbox label 2"
          indeterminate
        />
      </fieldset>
    )
  )
  .addWithInfo(
    'disabled',
    `
      Checkboxes are used when there is a list of options and the user may select multiple options, including all or none.
      The example below shows a disabled Checkbox component.
    `,
    () => (
      <fieldset disabled className="wfp--fieldset">
        <legend className="wfp--label">Checkbox heading</legend>
        <Checkbox
          {...checkboxEvents}
          id="checkbox-label-1"
          labelText="Checkbox label 1"
        />
        <Checkbox
          {...checkboxEvents}
          id="checkbox-label-2"
          labelText="Checkbox label 2"
        />
      </fieldset>
    )
  )
  .addWithInfo(
    'no label',
    `
      Checkboxes are used when there is a list of options and the user may select multiple options, including all or none.
      The example below shows a Checkbox component with a hidden label. Use this property to hide the label visually but still preserve accessibility.
    `,
    () => (
      <fieldset className="wfp--fieldset">
        <legend className="wfp--label">Checkbox heading</legend>
        <Checkbox
          {...checkboxEvents}
          id="checkbox-label-2"
          labelText="Checkbox label hidden"
          hideLabel={true}
          wrapperClassName="wrapper-class"
        />
      </fieldset>
    )
  );
