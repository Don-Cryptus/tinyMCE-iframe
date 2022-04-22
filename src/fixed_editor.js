/* Import TinyMCE */
import tinymce from 'tinymce-iframe-fix';

/* Default icons are required for TinyMCE 5.3 or above */
import 'tinymce-iframe-fix/icons/default';

/* A theme is also required */
import 'tinymce-iframe-fix/themes/silver';

/* A model is also required */
import 'tinymce-iframe-fix/models/dom';

/* Import the skin */
import 'tinymce-iframe-fix/skins/ui/oxide/skin.css';

/* Import content css */
import contentUiCss from 'tinymce-iframe-fix/skins/ui/oxide/content.css';
import contentCss from 'tinymce-iframe-fix/skins/content/default/content.css';

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
