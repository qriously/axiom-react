import React, { Component } from 'react';
import {
  CheckBox,
  CheckBoxGroup,
  Grid,
  GridCell,
  RadioButton,
  RadioButtonGroup,
  TextArea,
  TextInput,
  TextInputButton,
  TextInputIcon,
  InlineValidation,
  TooltipContent,
  TooltipContext,
} from '@brandwatch/axiom-components';
import {
  DocumentationApi,
  DocumentationContent,
  DocumentationShowCase,
} from '@brandwatch/axiom-documentation-viewer';

const getTextInputIconTooltip = () => (
  <TooltipContext color="carbon"><TooltipContent>Some tooltip</TooltipContent></TooltipContext>
);

export default class Documentation extends Component {
  render() {
    return (
      <DocumentationContent>
        <Grid>
          <GridCell>
            <DocumentationShowCase centered>
              <TextInput
                  label="A label"
                  onChange={ (setValue, getValue, event) => setValue('TextInput', 'value', event.target.value) }
                  placeholder="Write in me"
                  size="medium"/>
              <TextInput
                  inlineLabel
                  label="An inline label"
                  onChange={ (setValue, getValue, event) => setValue('TextInput', 'value', event.target.value) }
                  placeholder="Write in me"
                  size="medium"/>
              <TextInput
                  inlineLabel
                  label="An inline label"
                  onChange={ (setValue, getValue, event) => setValue('TextInput', 'value', event.target.value) }
                  placeholder="Write in me"
                  size="medium"><TextInputIcon align="left" name="magnify-glass" tooltip={ getTextInputIconTooltip() } /></TextInput>
              <TextInput
                  inlineLabel
                  label="Lorem Ipsum"
                  onChange={ (setValue, getValue, event) => setValue('TextInput', 'value', event.target.value) }
                  onClear={ (setValue) => setValue('TextInput', 'value', '') }
                  placeholder="Write in me"
                  size="medium"
                  usageHint="This is a usage hint" />
            </DocumentationShowCase>
          </GridCell>

          <GridCell>
            <DocumentationShowCase centered>
              <TextInput
                  onChange={ (setValue, getValue, event) => setValue('TextInput', 'value', event.target.value) }
                  placeholder="Write in me"
                  size="medium">
                <TextInputIcon align="left" name="magnify-glass" tooltip={ getTextInputIconTooltip() } />
                <TextInputButton>Button</TextInputButton>
              </TextInput>
            </DocumentationShowCase>
          </GridCell>
        </Grid>

        <Grid>
          <GridCell>
            <DocumentationShowCase centered>
              <TextInput
                  label="Lorem Ipsum"
                  onChange={ (setValue, getValue, event) => setValue('TextInput', 'value', event.target.value) }
                  onClear={ (setValue) => setValue('TextInput', 'value', '') }
                  placeholder="Write in me"
                  size="medium"
                  usageHint="This is a usage hint" />
            </DocumentationShowCase>
          </GridCell>
          <GridCell>
            <DocumentationShowCase centered>
              <InlineValidation message="There seems to be something wrong with your input">
                <TextInput
                    invalid
                    onChange={ (setValue, getValue, event) => setValue('TextInput', 'value', event.target.value) }
                    placeholder="Write in me"
                    size="medium" />
              </InlineValidation>
            </DocumentationShowCase>
          </GridCell>
        </Grid>

        <DocumentationApi components={ [
          require('!!axiom-documentation-loader!@brandwatch/axiom-components/src/Form/TextInput'),
          require('!!axiom-documentation-loader!@brandwatch/axiom-components/src/Form/TextInputButton'),
          require('!!axiom-documentation-loader!@brandwatch/axiom-components/src/Form/TextInputIcon'),
        ] } />

        <DocumentationShowCase>
          <TextArea
              label="Lorem ipsum"
              placeholder="Write in me"
              usageHint="This is a usage hint" />
          <TextArea
              label="Lorem ipsum"
              placeholder="Write in me"
              usageHint="This is a usage hint" />
        </DocumentationShowCase>

        <DocumentationApi components={ [
          require('!!axiom-documentation-loader!@brandwatch/axiom-components/src/Form/TextArea'),
        ] } />

        <Grid>
          <GridCell>
            <DocumentationShowCase>
              <CheckBoxGroup>
                <CheckBox name="lorem" title="Lorem ipsum dolor sit amet">Lorem ipsum</CheckBox>
                <CheckBox name="lorem" title="Lorem ipsum dolor sit amet">Lorem ipsum</CheckBox>
                <CheckBox name="lorem" title="Lorem ipsum dolor sit amet">Lorem ipsum</CheckBox>
              </CheckBoxGroup>
            </DocumentationShowCase>
          </GridCell>

          <GridCell>
            <DocumentationShowCase>
              <RadioButtonGroup>
                <RadioButton name="lorem" title="Lorem ipsum dolor sit amet">Lorem ipsum</RadioButton>
                <RadioButton name="lorem" title="Lorem ipsum dolor sit amet">Lorem ipsum</RadioButton>
                <RadioButton name="lorem" title="Lorem ipsum dolor sit amet">Lorem ipsum</RadioButton>
              </RadioButtonGroup>
            </DocumentationShowCase>
          </GridCell>
        </Grid>


        <DocumentationApi components={ [
          require('!!axiom-documentation-loader!@brandwatch/axiom-components/src/Form/CheckBox'),
          require('!!axiom-documentation-loader!@brandwatch/axiom-components/src/Form/CheckBoxGroup'),
          require('!!axiom-documentation-loader!@brandwatch/axiom-components/src/Form/RadioButton'),
          require('!!axiom-documentation-loader!@brandwatch/axiom-components/src/Form/RadioButtonGroup'),
        ] } />
      </DocumentationContent>
    );
  }
}
