---
title: Format syntax
---

| Template                                   | Description                                                                                                                                                                                                                                                                         |
| ------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `{{DATE}}`                                 | Outputs the current date in `YYYY-MM-DD` format. You could write `{{DATE+3}}` to offset the date with 3 days. You can use `+-3` to offset with `-3` days.                                                                                                                                                                                                                                    |
| `{{DATE:<DATEFORMAT>}}`                    | Replace `<DATEFORMAT>` with a [Moment.js date format](https://momentjs.com/docs/#/displaying/format/). You could write `{{DATE<DATEFORMAT>+3}}` to offset the date with 3 days.                                                                                                                                                                              |
| `{{VDATE:<variable name>, <date format>}}` | You'll get prompted to enter a date and it'll be parsed to the given date format. You could write 'today' or 'in two weeks' and it'll give you the date for that. Works like variables, so you can use the date in multiple places. **REQUIRES THE NATURAL LANGUAGE DATES PLUGIN!** |
| `{{VALUE}}` or `{{NAME}}`                  | Interchangeable. Represents the value given in an input prompt. If text is selected in the current editor, it will be used as the value.                                                                                                                                             |
| `{{VALUE:<variable name>`                  | You can now use variable names in values. They'll get saved and inserted just like values, but the difference is that you can have as many of them as you want. Use comma separation to get a suggester rather than a prompt.                                                       |
| `{{LINKCURRENT}}`                          | A link to the file from which the template is activated from. `[[link]]` format.                                                                                                                                                                                                    |
| `{{MACRO:<MACRONAME>}}`                    | Execute a macro and get the write the return value here.                                                                                                                                                                                                                            |
| `{{TEMPLATE:<TEMPLATEPATH>}}`              | Include templates in your `format`. Supports Templater syntax.                                                                                                                                                                                                                                                                                    |
| `{{MVALUE}}`                               | Math modal for writing LaTeX. Use CTRL + Enter to submit. |                                                                                                                                                                                                                                                                         