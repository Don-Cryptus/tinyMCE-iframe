/* Import TinyMCE */
import tinymce from 'tinymce';

/* Default icons are required for TinyMCE 5.3 or above */
import 'tinymce/icons/default';

/* A theme is also required */
import 'tinymce/themes/silver';

/* A model is also required */
import 'tinymce/models/dom';

/* Import the skin */
import 'tinymce/skins/ui/oxide/skin.css';

/* Import content css */
import contentUiCss from 'tinymce/skins/ui/oxide/content.css';
import contentCss from 'tinymce/skins/content/default/content.css';

/* Initialize TinyMCE */
export function render() {
  tinymce.init({
    selector: 'textarea',
    // WEBPACK
    skin: false,
    content_css: false,
    content_style: contentUiCss.toString() + '\n' + contentCss.toString(),
  });
}
