import { File, Field, ComponentRendering, FileField } from '@sitecore-jss/sitecore-jss-nextjs';
import StyleguideSpecimen from 'components/Styleguide-Specimen';

interface StyleguideFieldUsageFileProps {
  fields: {
    heading: Field<string>;
    description: Field<string>;
    file: FileField;
  };
  rendering: ComponentRendering;
}

/**
 * Demonstrates usage of a File content field within JSS.
 * File types are stored within Sitecore's Media Library data, and can be edited.
 */
const StyleguideFieldUsageFile: React.FC<StyleguideFieldUsageFileProps> = (props) => (
  <StyleguideSpecimen {...props} e2eId="styleguide-fieldusage-file">
    {/* Renders a file link */}
    <File field={props.fields.file} />
    <br />

    {/* Renders a file link with a custom body and opening in a new tab */}
    <File field={props.fields.file} target="_blank">
      Custom link body
    </File>
  </StyleguideSpecimen>
);

export default StyleguideFieldUsageFile;
