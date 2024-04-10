/**
 * Some description. And some more details. @itemImplements:req-cucumber-files
 * Additional details. @itemHasParent:"sw-sync-with-jira" @itemAffects:sw-cucumber-parser
 *
 * @itemId:TS1
 * @itemFulfills:"req-managing-items, req-cucumber-files"
 *
 * @param captures The captures to extract named captures from.
 * @param name The name of the named capture to extract.
 */
function getNamedCapture(captures: any[], name: string) {
    for (const capture of captures) {
        if (capture.name === name) {
            return capture.node.text;
        }
    }
    return undefined;
}

/**
 * Some description. And some more details. @itemImplements:req-cucumber-files
 * Additional details. @itemHasParent:"ABC-456, sw-cucumber-parser" @itemAffects:req-cucumber-files
 *
 * @itemFulfills:"req-cucumber-files"
 * @itemId:TS2
 *
 * @param captures The captures to extract named captures from.
 * @param name The name of the named capture to extract.
 */
function getNamedFormats(captures: any[], name: string) {
    for (const capture of captures) {
        if (capture.name === name) {
            return capture.node.text;
        }
    }
    return undefined;
}
